<template>
  <div>
    <!-- 创建多个upload组件实例 -->
    <upload ref="uploads" />
    <!-- 子组件 -->
    <child-component :image="store.state.images[1]" />
    <another-child :image="store.state.images[2]" />
    <!-- 更多子组件 -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import upload from "./upload.vue";
import childComponent from "./ChildComponent1.vue";
import anotherChild from "./ChildComponent2.vue";

const uploads = ref(null);
</script>
