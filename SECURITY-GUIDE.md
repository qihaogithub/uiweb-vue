# 安全指南

## 概述

本文档提供了项目安全最佳实践，特别是关于敏感信息管理和 Git 安全的指导。

## 🚨 紧急安全修复

### GitHub 推送保护错误

如果遇到以下错误：
```
remote: - GITHUB PUSH PROTECTION
remote: - Push cannot contain secrets
```

**立即执行以下步骤：**

1. **移除敏感信息**：
   - 检查 `.env` 文件，确保不包含真实密钥
   - 检查所有配置文件中的注释
   - 使用占位符替换真实值

2. **重新提交**：
   ```bash
   git add .
   git commit -m "security: remove sensitive information"
   git push origin main
   ```

3. **撤销已泄露的密钥**：
   - 立即在阿里云控制台撤销泄露的 AccessKey
   - 生成新的 AccessKey
   - 在部署平台（如 Netlify）更新环境变量

## 🔐 敏感信息管理

### 环境变量最佳实践

1. **本地开发**：
   - 使用 `.env.local` 文件存储真实密钥
   - `.env` 文件只包含示例值
   - 确保 `.env.local` 在 `.gitignore` 中

2. **生产环境**：
   - 在部署平台设置环境变量
   - 不要在代码中硬编码密钥
   - 定期轮换密钥

### 文件结构

```
.env                 # 示例配置，可以提交
.env.local          # 真实密钥，不提交
.env.example        # 配置模板
```

### .gitignore 配置

确保以下文件被忽略：
```gitignore
.env.local
.env.*.local
*.key
*.pem
config/secrets.json
```

## 🛡️ Git 安全

### 提交前检查

1. **使用 Git hooks**：
   ```bash
   # 安装 pre-commit hook
   npm install --save-dev @commitlint/cli @commitlint/config-conventional
   ```

2. **手动检查**：
   ```bash
   # 检查即将提交的文件
   git diff --cached
   
   # 搜索可能的密钥
   git diff --cached | grep -i "key\|secret\|password\|token"
   ```

### 历史清理

如果已经提交了敏感信息：

1. **重置到安全提交**：
   ```bash
   git reset --hard origin/main
   ```

2. **重新应用安全修改**：
   ```bash
   # 重新添加必要的文件和修改
   git add .
   git commit -m "feat: add OSS integration with secure configuration"
   git push origin main
   ```

⚠️ **注意**：这会丢失本地未推送的提交，需要重新应用修改。

## 🔍 安全扫描

### 本地扫描工具

1. **安装 git-secrets**：
   ```bash
   brew install git-secrets
   git secrets --register-aws
   git secrets --install
   ```

2. **扫描现有代码**：
   ```bash
   git secrets --scan
   ```

### GitHub 安全功能

1. **启用 Secret Scanning**
2. **启用 Push Protection**
3. **配置 Dependabot**
4. **启用 Code Scanning**

## 📋 安全检查清单

### 开发阶段
- [ ] `.env.local` 文件在 `.gitignore` 中
- [ ] 配置文件不包含真实密钥
- [ ] 使用环境变量而非硬编码
- [ ] 定期更新依赖包

### 部署阶段
- [ ] 在部署平台设置环境变量
- [ ] 启用 HTTPS
- [ ] 配置适当的 CORS 策略
- [ ] 设置安全头（CSP、HSTS 等）

### 维护阶段
- [ ] 定期轮换密钥
- [ ] 监控安全警报
- [ ] 审查访问日志
- [ ] 更新安全补丁

## 🚨 应急响应

### 密钥泄露处理流程

1. **立即响应**（5分钟内）：
   - 撤销泄露的密钥
   - 生成新密钥
   - 通知团队成员

2. **短期措施**（1小时内）：
   - 更新所有使用该密钥的服务
   - 检查访问日志
   - 评估潜在影响

3. **长期措施**（24小时内）：
   - 完善安全流程
   - 加强监控
   - 团队安全培训

## 📞 联系方式

如发现安全问题，请立即联系：
- 项目负责人
- 安全团队
- 或创建私有 Issue

## 📚 相关资源

- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)
- [阿里云 AccessKey 管理](https://help.aliyun.com/document_detail/53045.html)
- [OWASP 安全指南](https://owasp.org/www-project-top-ten/)
- [Git 安全最佳实践](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)