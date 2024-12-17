<script setup></script>

<template>
  <div class="page">
    <div class="flex-col">
      <div class="top">
        <img src="@\assets\img\学习页\年课续费\card\Calendar.png" />
        <img class="pos" src="@\assets\img\学习页\年课续费\card\top.png" />
      </div>
      <div class="task-card">
        <img class="ziyuan" src="@\assets\img\学习页\年课续费\card\img.png" />
        <img class="rukou" src="@\assets\img\学习页\年课续费\card\button.png" />
      </div>
    </div>
    <img class="tabbar" src="@\assets\img\学习页\年课续费\card\tabbar.png" />
  </div>
</template>

<style scoped>
.page {
  border-radius: 24px;
  height: 812px;
  overflow-y: auto;
  overflow-x: hidden;
}
.flex-col {
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 375px;
}
.top {
  display: flex;
  flex-direction: column;
  padding-top: 94px;
  overflow-x: hidden;
}

.pos {
  position: absolute;
  left: 0;
  right: -1px;
  top: 0;
}
.task-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  padding: 14px 0;
  background-color: #eaf8ff;
  border-radius: 24px;
  overflow: hidden;
}
.ziyuan {
  width: 307px;
  height: 280px;
}
.rukou {
  width: 145px;
  height: 24px;
}
.tabbar {
  width: 375px;
  position: absolute;
  bottom: 0;
}
</style>
