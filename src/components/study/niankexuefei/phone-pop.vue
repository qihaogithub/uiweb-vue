<script setup>
import { useRouter } from "vue-router";
import { reactive, onMounted } from "vue";

const props = defineProps({});

const data = reactive({});

const router = useRouter();
</script>

<template>
  <div class="page">
    <div class="flex-col">
      <div class="section">
        <img
          class="image"
          src="@/assets/img/学习页/年课续费/resource_img.png"
        />
        <div class="relative section_2"></div>
      </div>
      <img class="image_2" src="@/assets/img/学习页/年课续费/button.png" />
      <img class="image_3" src="@/assets/img/学习页/年课续费/tabbar.png" />
    </div>
  </div>
</template>

<style scoped lang="css">
.page {
  padding-top: 338px;
  background-image: url("@/assets/img/学习页/年课续费/bg.png");
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.section {
  padding-top: 20px;
  background-color: #eaf8ff;
  border-radius: 24px 24px 0 0px;
  overflow: hidden;
  height: 345.5px;
}
.image {
  margin-left: 21px;
  margin-right: 18px;
  width: 335px;
  height: 306px;
}
.section_2 {
  margin-top: -40px;
  background-image: linear-gradient(0deg, #ffffff 0%, #ffffff00 100%);
  height: 60px;
}
.image_2 {
  width: 100%;
}
.image_3 {
  width: 100%;
}
</style>
