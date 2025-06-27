import OSS from 'ali-oss';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Vite 插件：构建后自动上传图片到阿里云 OSS
 * @param {Object} options 插件配置选项
 * @param {boolean} options.enabled 是否启用插件
 * @param {string} options.region OSS 区域
 * @param {string} options.bucket OSS 存储桶名称
 * @param {string} options.accessKeyId OSS Access Key ID
 * @param {string} options.accessKeySecret OSS Access Key Secret
 * @param {string} options.prefix OSS 文件前缀
 * @param {string[]} options.extensions 支持的文件扩展名
 */
export function vitePluginOSS(options = {}) {
  const {
    enabled = true,
    region = process.env.OSS_REGION || 'oss-cn-chengdu',
    bucket = process.env.OSS_BUCKET || 'uiweb',
    accessKeyId = process.env.OSS_ACCESS_KEY_ID,
    accessKeySecret = process.env.OSS_ACCESS_KEY_SECRET,
    prefix = 'uiweb',
    extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico']
  } = options;

  let client = null;
  let isOSSEnabled = false;

  return {
    name: 'vite-plugin-oss',
    
    configResolved(config) {
      // 检查是否启用 OSS 功能
      isOSSEnabled = enabled && accessKeyId && accessKeySecret;
      
      if (isOSSEnabled) {
        client = new OSS({
          region,
          accessKeyId,
          accessKeySecret,
          bucket
        });
        console.log('🌐 OSS 插件已启用');
      } else {
        console.log('⚠️  OSS 配置未完整，跳过图片上传');
        if (!accessKeyId || !accessKeySecret) {
          console.log('请设置环境变量: OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET');
        }
      }
    },

    async writeBundle(options, bundle) {
      if (!isOSSEnabled) {
        return;
      }

      const outDir = options.dir || 'dist';
      console.log('\n🚀 开始上传图片到阿里云 OSS...');
      
      try {
        // 获取所有图片文件
        const imageFiles = await getImageFiles(outDir, extensions);
        console.log(`📸 找到 ${imageFiles.length} 个图片文件`);

        if (imageFiles.length === 0) {
          console.log('✅ 没有图片需要上传');
          return;
        }

        // 上传图片并记录映射关系
        const imageMap = {};
        const uploadPromises = imageFiles.map(async (localPath) => {
          const relativePath = path.relative(outDir, localPath);
          const ossPath = `${prefix}/${relativePath.replace(/\\/g, '/')}`;
          
          try {
            const result = await client.put(ossPath, localPath);
            imageMap[localPath] = result.url;
            console.log(`✅ 上传成功: ${relativePath}`);
          } catch (error) {
            console.error(`❌ 上传失败: ${relativePath}`, error.message);
          }
        });

        await Promise.all(uploadPromises);

        // 更新文件中的图片路径
        console.log('\n🔄 更新文件中的图片路径...');
        await updateImagePaths(outDir, imageMap);

        console.log(`\n✅ OSS 上传完成！共上传 ${Object.keys(imageMap).length} 个图片`);
        console.log('🌐 图片已替换为 OSS 链接');

      } catch (error) {
        console.error('❌ OSS 上传过程中出现错误:', error.message);
      }
    }
  };
}

// 获取所有图片文件
async function getImageFiles(distPath, extensions) {
  const patterns = extensions.map(ext => 
    path.join(distPath, `**/*${ext}`).replace(/\\/g, '/')
  );
  
  const files = [];
  for (const pattern of patterns) {
    const matches = await glob(pattern, { nodir: true });
    files.push(...matches);
  }
  
  return files;
}

// 更新文件中的图片路径
async function updateImagePaths(distPath, imageMap) {
  const patterns = [
    path.join(distPath, '**/*.html').replace(/\\/g, '/'),
    path.join(distPath, '**/*.css').replace(/\\/g, '/'),
    path.join(distPath, '**/*.js').replace(/\\/g, '/')
  ];
  
  const filesToUpdate = [];
  for (const pattern of patterns) {
    const matches = await glob(pattern, { nodir: true });
    filesToUpdate.push(...matches);
  }

  filesToUpdate.forEach(filePath => {
    replaceImagePaths(filePath, imageMap, distPath);
  });
}

// 替换文件中的图片路径
function replaceImagePaths(filePath, imageMap, distPath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  for (const [localPath, ossUrl] of Object.entries(imageMap)) {
    const relativePath = path.relative(distPath, localPath).replace(/\\/g, '/');
    const absolutePath = '/' + relativePath;
    
    // 替换各种可能的路径格式
    const patterns = [
      new RegExp(escapeRegExp(relativePath), 'g'),
      new RegExp(escapeRegExp(absolutePath), 'g'),
      new RegExp(escapeRegExp('./' + relativePath), 'g')
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

export default vitePluginOSS;