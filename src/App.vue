<script setup>
import upload from "@/components/test/ceshi.vue";
import emitter from "@/utils/emitter";
import { ref } from "vue";

let uurl = ref(" ")
emitter.on('myurl',(value) => {
  // console.log(value.url)
  uurl.value = value.url;
  console.log(uurl)
})


</script>

<template>
  <upload />
  <upload />
  <upload />
  <img :src="uurl" alt="图片1" />
  <img :src="uurl" alt="图片2" />
  <img :src="uurl" alt="图片3" />
</template>
