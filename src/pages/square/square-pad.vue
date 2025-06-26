<template>
  <top />
  <div class="neirong">
    <subjectsPad style="padding: 0 40px" />
    <div style="width: 1052px">
      <bigBanner />
    </div>
    <div
      style="width: 100%; padding-left: 40px; height: 137px; margin-top: 20px"
    >
      <minibanner />
    </div>
    <img
      style="width: 1052px; margin: 1em 0 5em 0"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%86%85%E5%AE%B9/pad%E5%86%85%E5%AE%B9%E5%8D%A0%E4%BD%8D.png"
    />
  </div>
  <img
    class="tabBar"
    src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%BA%95%E9%83%A8/%E5%BA%95%E9%83%A8%E6%A0%87%E7%AD%BE%E6%A0%8F_pad.png"
  />
</template>

<script setup>
import bigBanner from "@/pages/square/bigbanner/bigbanner-pad.vue";
import top from "@/pages/square/top/top-pad.vue";
import subjectsPad from "@/pages/square/subjects/subjects-pad.vue";
import minibanner from "@/pages/square/minibanner/minibanner.vue";
</script>

<style scoped>
* {
  background-color: #fff;
  overflow-x: hidden;
}

.top {
  position: sticky;
  top: 0;
  z-index: 2;
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
