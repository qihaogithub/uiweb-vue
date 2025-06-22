<template>
  <div class="resource-renderer">
    <!-- 图片上传组件 -->
    <upload 
      v-if="resource.type === 'upload'"
      :id="resource.id"
      :width-exact="resource.widthExact"
      :height-exact="resource.heightExact"
      :min-width="resource.minWidth"
      :max-width="resource.maxWidth"
      :min-height="resource.minHeight"
      :max-height="resource.maxHeight"
      @upload="handleUpload"
    />
    
    <!-- 图片卡片上传组件 -->
    <upload-picture-card 
      v-else-if="resource.type === 'upload-picture-card'"
      :id="resource.id"
      :min-size="resource.minSize"
      @upload="handleUpload"
    />
    
    <!-- 颜色选择器 -->
    <a-color-picker
      v-else-if="resource.type === 'color'"
      v-model="colorValue"
      show-text
      disabled-alpha
      size="mini"
      show-preset
      :preset-colors="resource.presetColors || defaultPresetColors"
      @change="handleColorChange"
    />
    
    <!-- 下拉选择 -->
    <a-select
      v-else-if="resource.type === 'select'"
      v-model="selectValue"
      :style="{ width: resource.width || '110px' }"
      size="mini"
      :placeholder="resource.placeholder || '选择'"
      :trigger-props="{ autoFitPopupMinWidth: true }"
      @change="handleSelectChange"
    >
      <a-option 
        v-for="option in resource.options" 
        :key="option.value" 
        :value="option.value"
      >
        {{ option.label }}
      </a-option>
    </a-select>
    
    <!-- 文本输入 -->
    <a-input
      v-else-if="resource.type === 'input'"
      v-model="inputValue"
      :placeholder="resource.placeholder"
      allow-clear
      @update:model-value="handleInputChange"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import upload from '@/components/general/upload/upload-simple.vue'
import uploadPictureCard from '@/components/general/upload/upload-picture-card.vue'

const props = defineProps({
  resource: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['resource-change'])

// 响应式数据
const colorValue = ref('#1890ff')
const selectValue = ref('')
const inputValue = ref('')

// 默认预设颜色
const defaultPresetColors = [
  '#1890ff', '#52c41a', '#faad14', '#f5222d', 
  '#722ed1', '#13c2c2', '#eb2f96', '#fa541c'
]

/**
 * 处理文件上传
 * @param {File} file - 上传的文件
 */
const handleUpload = (file) => {
  const url = URL.createObjectURL(file)
  emit('resource-change', {
    resourceId: props.resource.id,
    value: url,
    type: 'upload'
  })
}

/**
 * 处理颜色变化
 * @param {string} color - 选择的颜色值
 */
const handleColorChange = (color) => {
  emit('resource-change', {
    resourceId: props.resource.id,
    value: color,
    type: 'color',
    eventName: props.resource.eventName
  })
}

/**
 * 处理下拉选择变化
 * @param {string} value - 选择的值
 */
const handleSelectChange = (value) => {
  emit('resource-change', {
    resourceId: props.resource.id,
    value: value,
    type: 'select',
    eventName: props.resource.eventName
  })
}

/**
 * 处理输入框变化
 * @param {string} value - 输入的值
 */
const handleInputChange = (value) => {
  emit('resource-change', {
    resourceId: props.resource.id,
    value: value,
    type: 'input',
    eventName: props.resource.eventName
  })
}
</script>

<style scoped>
.resource-renderer {
  display: flex;
  align-items: center;
}
</style>