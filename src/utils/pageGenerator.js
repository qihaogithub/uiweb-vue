/**
 * 页面生成工具
 * 用于快速生成新页面的配置和组件文件
 */

import fs from 'fs'
import path from 'path'

/**
 * 生成页面配置
 * @param {Object} pageConfig - 页面配置对象
 * @param {string} pageConfig.id - 页面ID
 * @param {string} pageConfig.title - 页面标题
 * @param {string} pageConfig.path - 页面路径
 * @param {string} pageConfig.image - 页面图片
 * @param {string} pageConfig.category - 页面分类
 * @param {Object} pageConfig.components - 组件配置
 * @param {Array} pageConfig.resources - 资源配置
 */
export function generatePageConfig(pageConfig) {
  const configPath = path.resolve('src/config/pages.json')
  
  try {
    // 读取现有配置
    const existingConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'))
    
    // 检查是否已存在相同ID的页面
    const existingPage = existingConfig.pages.find(page => page.id === pageConfig.id)
    if (existingPage) {
      throw new Error(`页面ID "${pageConfig.id}" 已存在`)
    }
    
    // 添加新页面配置
    existingConfig.pages.push(pageConfig)
    
    // 写回配置文件
    fs.writeFileSync(configPath, JSON.stringify(existingConfig, null, 2), 'utf8')
    
    console.log(`✅ 页面配置已添加: ${pageConfig.title}`)
    return true
  } catch (error) {
    console.error('❌ 生成页面配置失败:', error.message)
    return false
  }
}

/**
 * 生成组件模板文件
 * @param {string} componentPath - 组件路径
 * @param {string} componentType - 组件类型 (phone/pad)
 * @param {string} pageTitle - 页面标题
 */
export function generateComponentTemplate(componentPath, componentType, pageTitle) {
  const fullPath = path.resolve(`src/components/${componentPath}.vue`)
  const dir = path.dirname(fullPath)
  
  // 确保目录存在
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  
  // 生成组件模板
  const template = `<template>
  <div class="${componentType}-container">
    <div class="content">
      <!-- ${pageTitle} - ${componentType === 'phone' ? '手机端' : '平板端'} -->
      <h1>{{ title }}</h1>
      <p>这是 ${pageTitle} 的${componentType === 'phone' ? '手机端' : '平板端'}组件</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import emitter from '@/utils/emitter'

// 响应式数据
const title = ref('${pageTitle}')

/**
 * 组件挂载时的初始化
 */
onMounted(() => {
  // 监听资源更新事件
  emitter.on('updateImage1', handleImageUpdate)
})

/**
 * 处理图片更新
 * @param {string} imageUrl - 图片URL
 */
const handleImageUpdate = (imageUrl) => {
  console.log('图片更新:', imageUrl)
  // 在这里处理图片更新逻辑
}
</script>

<style scoped>
.${componentType}-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.content {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

p {
  color: #666;
  line-height: 1.6;
}
</style>`
  
  try {
    fs.writeFileSync(fullPath, template, 'utf8')
    console.log(`✅ 组件模板已生成: ${componentPath}.vue`)
    return true
  } catch (error) {
    console.error(`❌ 生成组件模板失败: ${error.message}`)
    return false
  }
}

/**
 * 快速创建新页面
 * @param {Object} options - 创建选项
 * @param {string} options.id - 页面ID
 * @param {string} options.title - 页面标题
 * @param {string} options.category - 页面分类
 * @param {string} options.image - 页面图片URL
 * @param {Array} options.resources - 资源配置
 */
export function createNewPage(options) {
  const { id, title, category = 'main', image, resources = [] } = options
  
  // 生成路径
  const path = `/${id}`
  const componentBasePath = `${category}/${id}`
  
  // 页面配置
  const pageConfig = {
    id,
    title,
    path,
    image: image || `https://via.placeholder.com/300x200?text=${encodeURIComponent(title)}`,
    category,
    components: {
      phone: `${componentBasePath}/${id}-phone`,
      pad: `${componentBasePath}/${id}-pad`
    },
    resources
  }
  
  // 生成配置
  const configSuccess = generatePageConfig(pageConfig)
  if (!configSuccess) {
    return false
  }
  
  // 生成组件模板
  const phoneSuccess = generateComponentTemplate(
    pageConfig.components.phone,
    'phone',
    title
  )
  
  const padSuccess = generateComponentTemplate(
    pageConfig.components.pad,
    'pad',
    title
  )
  
  if (phoneSuccess && padSuccess) {
    console.log(`🎉 页面 "${title}" 创建成功!`)
    console.log(`📁 组件路径: src/components/${componentBasePath}/`)
    console.log(`🔗 访问路径: ${path}`)
    return true
  }
  
  return false
}

/**
 * 常用资源配置模板
 */
export const resourceTemplates = {
  // 图片上传
  imageUpload: (id, name, width, height, helpLink) => ({
    id,
    name,
    type: 'upload',
    widthExact: width,
    heightExact: height,
    helpLink
  }),
  
  // 图片卡片上传
  imageCardUpload: (id, name, minSize, helpLink) => ({
    id,
    name,
    type: 'upload-picture-card',
    minSize,
    helpLink
  }),
  
  // 颜色选择器
  colorPicker: (id, name, presetColors, eventName) => ({
    id,
    name,
    type: 'color',
    presetColors,
    eventName
  }),
  
  // 下拉选择
  select: (id, name, options, helpLink, eventName) => ({
    id,
    name,
    type: 'select',
    options,
    helpLink,
    eventName
  }),
  
  // 文本输入
  textInput: (id, name, placeholder, eventName) => ({
    id,
    name,
    type: 'input',
    placeholder,
    eventName
  })
}