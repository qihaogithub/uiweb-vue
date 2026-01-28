import SftpClient from "ssh2-sftp-client";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
import https from "https";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// SFTP 客户端配置
const config = {
  host: "10.130.33.131",
  port: 22,
  username: "qihao",
  password: "0015",
};

const sftp = new SftpClient();
const localPath = path.join(__dirname, "dist");
const remotePath = "/opt/1panel/www/sites/ui-preview/index";

// 需要保留的文件列表
const preserveFiles = [".htaccess", "robots.txt", "sitemap.xml"];

// 阿里云 OSS 域名模式
const OSS_PATTERNS = [
  /https:\/\/uiweb\.oss-cn-chengdu\.aliyuncs\.com\/[^\s"'()]+/g,
  /https:\/\/[^\s"'()]*\.aliyuncs\.com\/[^\s"'()]+/g,
];

// 本地图片存储目录
const LOCAL_IMG_DIR = "assets/local-img";

// 下载文件
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`下载失败: ${url}, 状态码: ${response.statusCode}`));
          return;
        }
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
  });
}

// 从 URL 生成文件名
function getFileNameFromUrl(url) {
  try {
    const urlObj = new URL(url);
    const pathname = decodeURIComponent(urlObj.pathname);
    const basename = path.basename(pathname);
    // 生成 hash 避免文件名冲突
    const hash = crypto.createHash("md5").update(url).digest("hex").slice(0, 8);
    const ext = path.extname(basename) || ".png";
    const name = path.basename(basename, ext) || "image";
    // 清理文件名中的特殊字符
    const cleanName = name.replace(/[^\w\u4e00-\u9fa5-]/g, "_");
    return `${cleanName}_${hash}${ext}`;
  } catch {
    const hash = crypto.createHash("md5").update(url).digest("hex").slice(0, 8);
    return `image_${hash}.png`;
  }
}

// 扫描文件中的阿里云图片链接
function findOssImages(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const images = new Set();

  for (const pattern of OSS_PATTERNS) {
    const matches = content.match(pattern);
    if (matches) {
      matches.forEach((url) => images.add(url));
    }
  }

  return Array.from(images);
}

// 处理单个文件中的图片
async function processFile(filePath, imgDir) {
  const images = findOssImages(filePath);
  if (images.length === 0) return { processed: 0, mappings: {} };

  let content = fs.readFileSync(filePath, "utf-8");
  const mappings = {};

  for (const imageUrl of images) {
    const fileName = getFileNameFromUrl(imageUrl);
    const localPath = path.join(imgDir, fileName);
    const relativePath = `./${LOCAL_IMG_DIR}/${fileName}`;

    try {
      // 下载图片（如果不存在）
      if (!fs.existsSync(localPath)) {
        console.log(`  下载图片: ${imageUrl}`);
        await downloadFile(imageUrl, localPath);
      }

      // 替换文件中的链接
      const escapedUrl = imageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      content = content.replace(new RegExp(escapedUrl, "g"), relativePath);
      mappings[imageUrl] = relativePath;
      console.log(`  ✓ 替换: ${imageUrl} -> ${relativePath}`);
    } catch (err) {
      console.error(`  ✗ 下载失败: ${imageUrl}`, err.message);
    }
  }

  // 写回文件
  fs.writeFileSync(filePath, content);
  return { processed: images.length, mappings };
}

// 下载并替换所有阿里云图片
async function downloadAndReplaceImages() {
  console.log("\n=== 开始处理阿里云图片 ===");

  const imgDir = path.join(localPath, LOCAL_IMG_DIR);
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
  }

  // 获取所有需要处理的文件
  const filesToProcess = [];
  const assetFiles = fs.readdirSync(path.join(localPath, "assets"));

  for (const file of assetFiles) {
    const filePath = path.join(localPath, "assets", file);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && (file.endsWith(".js") || file.endsWith(".css"))) {
      filesToProcess.push(filePath);
    }
  }

  // 处理 index.html
  const indexPath = path.join(localPath, "index.html");
  if (fs.existsSync(indexPath)) {
    filesToProcess.push(indexPath);
  }

  let totalProcessed = 0;
  const allMappings = {};

  for (const filePath of filesToProcess) {
    console.log(`\n处理文件: ${path.basename(filePath)}`);
    const result = await processFile(filePath, imgDir);
    totalProcessed += result.processed;
    Object.assign(allMappings, result.mappings);
  }

  console.log(`\n=== 图片处理完成 ===`);
  console.log(`共处理 ${totalProcessed} 张图片`);
  console.log(`图片保存在: ${imgDir}`);

  return allMappings;
}

// 获取本地文件列表（包括子目录）
function getLocalFiles(dir, baseDir = dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);
    const relativePath = path.relative(baseDir, fullPath);

    if (stats.isDirectory()) {
      results = results.concat(getLocalFiles(fullPath, baseDir));
    } else {
      results.push(relativePath);
    }
  }

  return results;
}

// 带重试的上传函数
async function uploadFileWithRetry(
  localFilePath,
  remoteFilePath,
  maxRetries = 3,
) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await sftp.put(localFilePath, remoteFilePath);
      return true;
    } catch (err) {
      if (attempt === maxRetries) {
        throw err;
      }
      console.log(
        `  上传失败，${attempt}秒后重试 (${attempt}/${maxRetries})...`,
      );
      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
    }
  }
  return false;
}

async function syncDirectory() {
  try {
    // 获取本地文件列表
    const localFiles = getLocalFiles(localPath);
    const failedFiles = [];
    let successCount = 0;

    console.log(`共 ${localFiles.length} 个文件需要上传\n`);

    // 上传文件
    for (let i = 0; i < localFiles.length; i++) {
      const file = localFiles[i];
      const localFilePath = path.join(localPath, file);
      const remoteFilePath = path.join(remotePath, file).replace(/\\/g, "/");

      try {
        // 确保远程目录存在
        const remoteDir = path.dirname(remoteFilePath);
        await sftp.mkdir(remoteDir, true);

        // 上传文件（带重试）
        await uploadFileWithRetry(localFilePath, remoteFilePath);
        successCount++;
        process.stdout.write(`\r[${i + 1}/${localFiles.length}] ✓ ${file}`);
      } catch (err) {
        console.error(`\n✗ 上传失败: ${file}`);
        console.error(`  错误: ${err.message}`);
        failedFiles.push({ file, error: err.message });
      }
    }

    console.log(`\n\n上传完成: ${successCount}/${localFiles.length} 成功`);

    if (failedFiles.length > 0) {
      console.error(`\n${failedFiles.length} 个文件上传失败:`);
      failedFiles.forEach(({ file, error }) => {
        console.error(`  - ${file}: ${error}`);
      });

      // 检查是否是权限问题
      const permissionErrors = failedFiles.filter(
        (f) =>
          f.error.includes("Permission denied") || f.error.includes("EACCES"),
      );

      if (permissionErrors.length > 0) {
        console.error("\n⚠️ 检测到权限问题，请尝试以下解决方案:");
        console.error(
          "  1. 检查服务器目录权限: sudo chown -R qihao:qihao /opt/1panel/www/sites/ui-preview/",
        );
        console.error(
          "  2. 检查目录是否可写: sudo chmod -R 755 /opt/1panel/www/sites/ui-preview/",
        );
        console.error("  3. 或者使用 sudo 运行部署脚本");
      }

      throw new Error(`${failedFiles.length} 个文件上传失败`);
    }
  } catch (err) {
    console.error("\n同步出错:", err.message);
    throw err;
  }
}

// 测试服务器连接和权限
async function testServerConnection() {
  console.log("测试服务器连接...");

  try {
    await sftp.connect(config);
    console.log("✓ SFTP 连接成功");

    // 检查远程目录是否存在
    const remoteDirExists = await sftp.exists(remotePath);
    if (!remoteDirExists) {
      console.log(`远程目录不存在，尝试创建: ${remotePath}`);
      try {
        await sftp.mkdir(remotePath, true);
        console.log("✓ 远程目录创建成功");
      } catch (err) {
        console.error("✗ 无法创建远程目录:", err.message);
        console.error("\n请检查:");
        console.error("  1. 服务器路径是否正确");
        console.error("  2. 用户是否有权限创建目录");
        throw err;
      }
    } else {
      console.log(`✓ 远程目录存在: ${remotePath}`);
    }

    // 测试写入权限
    const testFile = path.join(remotePath, ".write_test");
    try {
      await sftp.put(Buffer.from("test"), testFile);
      await sftp.delete(testFile);
      console.log("✓ 写入权限测试通过");
    } catch (err) {
      console.error("✗ 写入权限测试失败:", err.message);
      console.error("\n⚠️ 检测到权限问题，请尝试以下解决方案:");
      console.error(
        "  1. 在服务器上执行: sudo chown -R qihao:qihao /opt/1panel/www/sites/ui-preview/",
      );
      console.error(
        "  2. 在服务器上执行: sudo chmod -R 755 /opt/1panel/www/sites/ui-preview/",
      );
      console.error("  3. 联系服务器管理员检查目录权限");
      throw err;
    }

    await sftp.end();
    console.log("✓ 服务器连接测试完成\n");
    return true;
  } catch (err) {
    await sftp.end();
    throw err;
  }
}

async function deploy() {
  try {
    console.log("开始部署...\n");

    // 0. 测试服务器连接
    await testServerConnection();

    // 1. 下载并替换阿里云图片
    await downloadAndReplaceImages();

    // 2. 连接 SFTP 并上传
    console.log("\n=== 开始上传文件 ===");
    await sftp.connect(config);
    await syncDirectory();

    console.log("\n✅ 部署完成！");
  } catch (err) {
    console.error("\n❌ 部署失败:", err.message);
    process.exit(1);
  } finally {
    sftp.end();
  }
}

deploy();
