import SftpClient from "ssh2-sftp-client";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// SFTP 客户端配置
const config = {
  host: "10.130.33.131",
  port: 22,
  username: "qihao",
  password: "qh9189",
};

const sftp = new SftpClient();
const localPath = path.join(__dirname, "dist");
const remotePath = "/www/wwwroot/uipreview";

// 需要保留的文件列表
const preserveFiles = [".htaccess", "robots.txt", "sitemap.xml"];

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

async function syncDirectory() {
  try {
    // 获取本地文件列表
    const localFiles = getLocalFiles(localPath);

    // 上传文件
    for (const file of localFiles) {
      const localFilePath = path.join(localPath, file);
      const remoteFilePath = path.join(remotePath, file).replace(/\\/g, "/");

      // 确保远程目录存在
      const remoteDir = path.dirname(remoteFilePath);
      await sftp.mkdir(remoteDir, true);

      // 上传文件
      await sftp.put(localFilePath, remoteFilePath);
      console.log(`上传文件: ${remoteFilePath}`);
    }
  } catch (err) {
    console.error("同步出错:", err);
    throw err;
  }
}

async function deploy() {
  try {
    console.log("开始部署...");
    await sftp.connect(config);
    await syncDirectory();
    console.log("部署完成！");
  } catch (err) {
    console.error("部署失败:", err);
    process.exit(1);
  } finally {
    sftp.end();
  }
}

deploy();
