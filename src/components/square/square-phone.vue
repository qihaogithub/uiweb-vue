<template>
  <top />
  <div class="neirong">
    <subjects/>
    <div style="width: 89.3333333333333%">
      <bigBanner style="height: 12em" />
    </div>
    <div style="width: 100%">
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
import bigBanner from "@/components/square/bigbanner/bigbanner-phone.vue";
import top from "@/components/square/top/top.vue";
import subjects from "@/components/square/subjects/subjects.vue";
import minibanner from "@/components/square/minibanner/minibanner.vue";
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
