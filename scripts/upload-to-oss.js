#!/usr/bin/env node

const OSS = require('ali-oss');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const mime = require('mime-types');

// 从环境变量获取 OSS 配置
const ossConfig = {
  region: process.env.OSS_REGION || 'oss-cn-chengdu',
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  bucket: process.env.OSS_BUCKET || 'uiweb'
};

// 检查必需的环境变量
if (!ossConfig.accessKeyId || !ossConfig.accessKeySecret) {
  console.log('⚠️  OSS 配置未找到，跳过图片上传');
  console.log('如需启用 OSS 上传，请设置以下环境变量：');
  console.log('- OSS_ACCESS_KEY_ID');
  console.log('- OSS_ACCESS_KEY_SECRET');
  console.log('- OSS_REGION (可选，默认: oss-cn-chengdu)');
  console.log('- OSS_BUCKET (可选，默认: uiweb)');
  process.exit(0);
}

const client = new OSS(ossConfig);

// 支持的图片格式
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico'];

// 获取所有图片文件
function getImageFiles(distPath) {
  const pattern = path.join(distPath, '**/*.{jpg,jpeg,png,gif,webp,svg,ico}');
  return glob.sync(pattern, { nodir: true });
}

// 上传单个文件到 OSS
async function uploadFile(localPath, ossPath) {
  try {
    const result = await client.put(ossPath, localPath);
    console.log(`✅ 上传成功: ${ossPath}`);
    return result.url;
  } catch (error) {
    console.error(`❌ 上传失败: ${ossPath}`, error.message);
    throw error;
  }
}

// 替换 HTML/CSS/JS 文件中的图片路径
function replaceImagePaths(filePath, imageMap) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  // 替换相对路径和绝对路径
  for (const [localPath, ossUrl] of Object.entries(imageMap)) {
    const relativePath = path.relative(path.dirname(filePath), localPath);
    const absolutePath = '/' + path.relative(process.cwd(), localPath).replace(/\\/g, '/');
    
    // 替换各种可能的路径格式
    const patterns = [
      new RegExp(escapeRegExp(relativePath.replace(/\\/g, '/')), 'g'),
      new RegExp(escapeRegExp(absolutePath), 'g'),
      new RegExp(escapeRegExp('./' + relativePath.replace(/\\/g, '/')), 'g')
    ];

    patterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, ossUrl);
        hasChanges = true;
      }
    });
  }

  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    console.log(`🔄 更新文件: ${path.relative(process.cwd(), filePath)}`);
  }
}

// 转义正则表达式特殊字符
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 获取需要更新的文件
function getFilesToUpdate(distPath) {
  const patterns = [
    path.join(distPath, '**/*.html'),
    path.join(distPath, '**/*.css'),
    path.join(distPath, '**/*.js')
  ];
  
  return patterns.flatMap(pattern => glob.sync(pattern, { nodir: true }));
}

// 主函数
async function main() {
  const distPath = path.join(process.cwd(), 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.error('❌ dist 目录不存在，请先运行 npm run build');
    process.exit(1);
  }

  console.log('🚀 开始上传图片到阿里云 OSS...');
  console.log(`📁 扫描目录: ${distPath}`);
  console.log(`🌐 OSS 配置: ${ossConfig.region}/${ossConfig.bucket}`);

  try {
    // 获取所有图片文件
    const imageFiles = getImageFiles(distPath);
    console.log(`📸 找到 ${imageFiles.length} 个图片文件`);

    if (imageFiles.length === 0) {
      console.log('✅ 没有图片需要上传');
      return;
    }

    // 上传图片并记录映射关系
    const imageMap = {};
    const uploadPromises = imageFiles.map(async (localPath) => {
      const relativePath = path.relative(distPath, localPath);
      const ossPath = `uiweb/${relativePath.replace(/\\/g, '/')}`;
      
      try {
        const ossUrl = await uploadFile(localPath, ossPath);
        imageMap[localPath] = ossUrl;
      } catch (error) {
        console.error(`上传失败: ${relativePath}`);
      }
    });

    await Promise.all(uploadPromises);

    // 更新文件中的图片路径
    console.log('\n🔄 更新文件中的图片路径...');
    const filesToUpdate = getFilesToUpdate(distPath);
    
    filesToUpdate.forEach(filePath => {
      replaceImagePaths(filePath, imageMap);
    });

    console.log(`\n✅ 上传完成！共上传 ${Object.keys(imageMap).length} 个图片`);
    console.log('🌐 图片已替换为 OSS 链接');

  } catch (error) {
    console.error('❌ 上传过程中出现错误:', error.message);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  main().catch(error => {
    console.error('❌ 脚本执行失败:', error.message);
    process.exit(1);
  });
}

module.exports = { main };