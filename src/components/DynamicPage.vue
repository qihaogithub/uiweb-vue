<template>
  <div class="dynamic-page">
    <div class="canvas">
        <DeviceContainer device-type="phone">
          <component 
            :is="phoneComponent" 
            v-bind="componentProps" 
          />
        </DeviceContainer>
        <DeviceContainer device-type="pad">
          <component 
            :is="padComponent" 
            v-bind="componentProps" 
          />
        </DeviceContainer>
    </div>
    
    <div class="resource-list">
      <div class="menu">
        <div class="title"><span>资源列表</span></div>
        <div class="resources">
          <div 
            v-for="resource in pageConfig.resources" 
            :key="resource.id" 
            class="list"
            :class="{ 'flex-column': resource.type === 'upload-picture-card' }"
          >
            <div class="zyname">
              <span>{{ resource.name }}</span>
              <a 
                v-if="resource.helpLink" 
                :href="resource.helpLink" 
                target="_blank"
              >
                <Help theme="outline" size="12" fill="#666" />
              </a>
            </div>
            
            <!-- 资源渲染组件 -->
            <ResourceRenderer 
              :resource="resource"
              @resource-change="handleResourceChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'
import { Help } from '@icon-park/vue-next'
import ResourceRenderer from './ResourceRenderer.vue'
import DeviceContainer from '@/components/common/DeviceContainer.vue'
import { useRoute } from 'vue-router'
import pagesConfig from '@/config/pages.json'
import emitter from '@/utils/emitter'

const route = useRoute()

// 接收路由参数中的 pageId
const props = defineProps({
  pageId: {
    type: String,
    default: ''
  }
})

/**
 * 根据 pageId 或路由路径获取页面配置
 */
const pageConfig = computed(() => {
  // 优先使用 pageId 查找，如果没有则使用路由路径
  if (props.pageId) {
    return pagesConfig.pages.find(page => page.id === props.pageId) || {}
  }
  return pagesConfig.pages.find(page => page.path === route.path) || {}
})

/**
 * 创建组件映射表
 * 注意：由于Vite的静态分析限制，无法使用完全动态的导入路径
 * 当前采用硬编码方式确保组件能够正确加载
 * 新增组件时需要同时更新此映射表和pages.json配置
 * @returns {Object} 组件路径到导入函数的映射对象
 */
const createComponentMap = () => {
  // 硬编码的组件映射，确保Vite能够正确处理
  const componentMap = {
    'square/square-phone': () => import('@/components/square/square-phone.vue'),
    'square/square-pad': () => import('@/components/square/square-pad.vue'),
    'study/HomeActivityCard/ActivityCardPhone': () => import('@/components/study/HomeActivityCard/ActivityCardPhone.vue'),
    'study/HomeActivityCard/ActivityCardPad': () => import('@/components/study/HomeActivityCard/ActivityCardPad.vue'),
    'study/TaskCard/study-phone': () => import('@/components/study/TaskCard/study-phone.vue'),
    'study/TaskCard/study-pad': () => import('@/components/study/TaskCard/study-pad.vue'),
    'study/Kuoke/kuoke-phone': () => import('@/components/study/Kuoke/kuoke-phone.vue'),
    'study/Kuoke/kuoke-pad': () => import('@/components/study/Kuoke/kuoke-pad.vue'),
    //我的页
    'mine/mine-phone': () => import('@/components/mine/mine-phone.vue'),
    'mine/mine-pad': () => import('@/components/mine/mine-pad.vue'),
    // 底部广告弹窗
    'bottom-pop-up/phone-screen': () => import('@/components/bottom-pop-up/phone-screen.vue'),
    'bottom-pop-up/pad-screen': () => import('@/components/bottom-pop-up/pad-screen.vue'),
    // 通用弹窗
    'pop-up/pop-up-phone': () => import('@/components/pop-up/pop-up-phone.vue'),
    'pop-up/pop-up-pad': () => import('@/components/pop-up/pop-up-pad.vue'),
    // 年课续费组件 - 修正路径大小写和目录结构
    'study/niankexuefei/Box-phone1': () => import('@/components/study/niankexuefei/box-phone1.vue'),
    'study/niankexuefei/pad1': () => import('@/components/study/niankexuefei/pad1.vue'),
    'study/niankexuefei/box-phone2': () => import('@/components/study/niankexuefei/box-phone2.vue'),
    'study/niankexuefei/pad2': () => import('@/components/study/niankexuefei/pad2.vue')
  }
  
  return componentMap
}

// 缓存组件映射，避免重复生成
const componentMap = createComponentMap()

/**
 * 统一的异步组件创建函数
 * @param {string} componentPath - 组件路径
 * @returns {Object|null} 异步组件或null
 */
const createAsyncComponent = (componentPath) => {
  if (!componentPath) return null
  
  return defineAsyncComponent(() => {
    const importFn = componentMap[componentPath]
    if (!importFn) {
      console.warn(`Component not found in map: ${componentPath}`)
      return Promise.resolve({ template: '<div>组件未找到</div>' })
    }
    return importFn().catch(error => {
      console.error(`Failed to load component ${componentPath}:`, error)
      return { template: '<div>组件加载失败</div>' }
    })
  })
}

/**
 * 动态加载手机端组件
 */
const phoneComponent = computed(() => {
  return createAsyncComponent(pageConfig.value.components?.phone)
})

/**
 * 动态加载平板端组件
 */
const padComponent = computed(() => {
  return createAsyncComponent(pageConfig.value.components?.pad)
})

// 组件属性
const componentProps = ref({})

/**
 * 处理资源变化事件
 * @param {Object} data - 资源变化数据
 */
const handleResourceChange = (data) => {
  const { resourceId, value, eventName, type } = data
  
  // 更新组件属性
  if (eventName) {
    componentProps.value[eventName] = value
  }
  
  // 触发全局事件（保持与现有系统兼容）
  if (eventName) {
    // 优先使用配置的事件名称
    emitter.emit(eventName, value)
  } else if (resourceId) {
    // 兼容旧的图片上传事件命名
    const event = `updateImage${resourceId}`
    emitter.emit(event, value)
  }
}
</script>

<style scoped>
.dynamic-page {
  font-size: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.canvas {
  display: flex;
  flex: 1;
  gap: 1.875em;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #edeff3;
  padding: 1.875em;
}



.resource-list {
  width: 25rem;
  height: 100vh;
  background-color: #fff;
  border-left: 1px solid #f0f0f0;
  overflow-y: auto;
}

.menu {
  padding: 1.25rem;
}

.title {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 150%;
  width: 100%;
  height: 3.75rem;
  border-bottom: 0.0625rem solid #f5f4f4;
  margin-bottom: 1.25rem;
}

.resources {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;
}

.list.flex-column {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}

.zyname {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #333;
}
</style>