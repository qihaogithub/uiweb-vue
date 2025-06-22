<template>
  <top />
  <div class="neirong">
    <subjectsPad style="width: 89.3333333333333%" />
    <div style="width: 89.3333333333333%">
      <bigBanner style="height: 15em" />
    </div>
    <div style="width: 100%">
      <minibanner style="padding: 0 2.65em; height: 7.1195375em" />
    </div>
    <img
      style="width: 89.3333333333333%; margin: 1em 0 5em 0"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%86%85%E5%AE%B9/pad%E5%86%85%E5%AE%B9%E5%8D%A0%E4%BD%8D.png"
    />
  </div>
  <img
    class="tabBar"
    src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%BA%95%E9%83%A8/%E5%BA%95%E9%83%A8%E6%A0%87%E7%AD%BE%E6%A0%8F_pad.png"
  />
</template>

<script setup>
import bigBanner from "@/components/square/bigbanner/bigbanner-pad.vue";
import top from "@/components/square/top/top-pad.vue";
import subjectsPad from "@/components/square/subjects/subjects-pad.vue";
import minibanner from "@/components/square/minibanner/minibanner.vue";
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
