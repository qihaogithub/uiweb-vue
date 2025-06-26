<template>
  <top />
  <div class="neirong">
    <subjects />
    <div style="width: 335px">
      <bigBanner style="height: 192px" />
    </div>
    <div
      style="width: 100%; padding-left: 16px; height: 91px; margin-top: 16px"
    >
      <minibanner />
    </div>
    <img
      style="width: 89.3333333333333%; margin: 1em 0 5em 0"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%86%85%E5%AE%B9/%E5%86%85%E5%AE%B9.png"
    />
  </div>
  <img
    class="tabBar"
    src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%BA%95%E9%83%A8/%E5%BA%95%E9%83%A8%E6%A0%87%E7%AD%BE%E6%A0%8F.png"
  />
</template>

<script setup>
import bigBanner from "@/pages/square/bigbanner/bigbanner-phone.vue";
import top from "@/pages/square/top/top.vue";
import subjects from "@/pages/square/subjects/subjects.vue";
import minibanner from "@/pages/square/minibanner/minibanner.vue";
</script>

<style scoped>
* {
  background-color: #fff;
  overflow-x: hidden;
}

.neirong {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: 1;
}
.tabBar {
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 2;
}
</style>
