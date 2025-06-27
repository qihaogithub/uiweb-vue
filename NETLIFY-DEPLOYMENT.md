# Netlify 部署指南

本文档详细说明如何在 Netlify 平台上部署此 Vue.js 项目，包括 OSS 图片上传功能的配置。

## 📋 部署概览

### 构建配置
- **构建命令**: `npm run build-with-oss`
- **发布目录**: `dist`
- **Node.js 版本**: 18
- **包管理器**: npm

### 特殊功能
- ✅ 自动上传图片到阿里云 OSS
- ✅ 单页应用路由支持
- ✅ Content Security Policy 配置
- ✅ SVGA 动画支持

## 🚀 快速部署

### 1. 连接 Git 仓库

1. 登录 [Netlify](https://netlify.com)
2. 点击 "New site from Git"
3. 选择你的 Git 提供商（GitHub/GitLab/Bitbucket）
4. 选择此项目仓库

### 2. 配置构建设置

在 Netlify 部署配置页面设置：

```
Build command: npm run build-with-oss
Publish directory: dist
Node version: 18
```

### 3. 设置环境变量

在 Netlify 后台 **Site settings > Environment variables** 中添加：

#### 必需的 OSS 环境变量

| 变量名 | 示例值 | 说明 |
|--------|--------|------|
| `OSS_ACCESS_KEY_ID` | `LTAI5t...` | 阿里云 OSS Access Key ID |
| `OSS_ACCESS_KEY_SECRET` | `abc123...` | 阿里云 OSS Access Key Secret |
| `OSS_REGION` | `oss-cn-chengdu` | OSS 区域（可选，默认成都） |
| `OSS_BUCKET` | `uiweb` | OSS 存储桶名称（可选，默认 uiweb） |

#### 可选的构建环境变量

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `NODE_VERSION` | `18` | Node.js 版本 |
| `NPM_FLAGS` | `--no-audit --no-fund` | npm 安装标志 |
| `ENABLE_OSS` | `true` | 强制启用 OSS（开发环境） |

### 4. 部署

点击 "Deploy site" 开始部署。首次部署可能需要 3-5 分钟。

## 🔧 详细配置

### Netlify 配置文件

项目根目录的 `netlify.toml` 文件包含了完整的部署配置：

```toml
[build]
  command = "npm run build-with-oss"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--no-audit --no-fund"
  VITE_UNSAFE_EVAL = "true"

# 单页应用路由重写
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# 安全头配置
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
```

### OSS 配置获取

#### 1. 创建阿里云 OSS 存储桶

1. 登录 [阿里云控制台](https://oss.console.aliyun.com/)
2. 创建存储桶（Bucket）
3. 设置读写权限为 "公共读"
4. 记录存储桶名称和区域

#### 2. 获取 Access Key

1. 访问 [RAM 控制台](https://ram.console.aliyun.com/)
2. 创建用户并授予 OSS 权限
3. 生成 Access Key ID 和 Secret
4. **重要**: 妥善保管密钥，不要泄露

### 环境变量设置步骤

1. 在 Netlify 后台进入你的站点
2. 点击 **Site settings**
3. 在左侧菜单选择 **Environment variables**
4. 点击 **Add a variable**
5. 输入变量名和值
6. 点击 **Create variable**
7. 重复以上步骤添加所有必需变量

## 🔄 部署流程

### 自动部署

配置完成后，每次推送到主分支都会自动触发部署：

1. **代码推送** → Git 仓库
2. **Webhook 触发** → Netlify 开始构建
3. **依赖安装** → `npm install`
4. **项目构建** → `npm run build-with-oss`
5. **图片上传** → 自动上传到 OSS
6. **站点发布** → 部署到 CDN

### 构建日志

在 Netlify 后台可以查看详细的构建日志：
- 依赖安装过程
- Vite 构建输出
- OSS 上传进度
- 部署状态

## 🛠️ 构建优化

### 缓存策略

```toml
# 在 netlify.toml 中添加缓存头
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 构建性能

- **Node.js 版本**: 使用 Node 18 获得最佳性能
- **依赖缓存**: Netlify 自动缓存 `node_modules`
- **并行构建**: OSS 上传使用并行处理
- **增量构建**: 只有代码变更时才重新构建

## 🐛 故障排除

### 常见问题

#### 1. OSS 上传失败

**症状**: 构建成功但图片未上传到 OSS

**解决方案**:
- 检查环境变量是否正确设置
- 验证 OSS Access Key 权限
- 查看构建日志中的错误信息

```bash
# 本地测试 OSS 连接
npm run upload-oss
```

#### 2. 构建超时

**症状**: 构建过程中超时失败

**解决方案**:
- 检查依赖包大小
- 优化图片文件大小
- 联系 Netlify 支持增加构建时间限制

#### 3. 路由 404 错误

**症状**: 直接访问子路由返回 404

**解决方案**:
- 确认 `netlify.toml` 中的重定向规则
- 检查 Vue Router 配置

#### 4. CSP 错误

**症状**: 控制台显示 Content Security Policy 错误

**解决方案**:
- 检查 `netlify.toml` 中的 CSP 配置
- 根据需要调整安全策略

### 调试方法

#### 1. 本地模拟构建

```bash
# 设置环境变量
export OSS_ACCESS_KEY_ID="your_key"
export OSS_ACCESS_KEY_SECRET="your_secret"
export OSS_REGION="oss-cn-chengdu"
export OSS_BUCKET="uiweb"

# 运行构建
npm run build-with-oss
```

#### 2. 查看构建日志

1. 在 Netlify 后台进入站点
2. 点击 **Deploys** 标签
3. 选择失败的部署
4. 查看详细日志

#### 3. 测试 OSS 连接

```bash
# 单独测试 OSS 上传
node scripts/upload-to-oss.js
```

## 📱 手动部署

如果需要手动部署，可以使用以下命令：

```bash
# 1. 安装 Netlify CLI
npm install -g netlify-cli

# 2. 登录 Netlify
netlify login

# 3. 构建项目
npm run build-with-oss

# 4. 部署到 Netlify
netlify deploy --prod --dir=dist
```

## 🔗 相关链接

- [Netlify 官方文档](https://docs.netlify.com/)
- [阿里云 OSS 文档](https://help.aliyun.com/product/31815.html)
- [Vue.js 部署指南](https://vuejs.org/guide/best-practices/production-deployment.html)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)

## 📞 技术支持

如遇到部署问题，请：

1. 查看本文档的故障排除部分
2. 检查 Netlify 构建日志
3. 参考项目的 `SECURITY-GUIDE.md`
4. 联系项目维护者

---

**注意**: 请确保不要将 OSS 密钥提交到代码仓库中。所有敏感信息都应该通过环境变量配置。