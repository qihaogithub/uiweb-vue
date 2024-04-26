<template>
  <div class="page">
    <div class="main">
    <div class="pop"><img :src="imageUrl" alt="图片1" /></div>
    </div>
  </div>
</template>
  
<script>
  export default {
    props: {
      imageUrl: 'src/assets/img/启动图标.png'
    }
  }
</script>

<style scoped>
.page {
  background-image:url(/src/assets/img/通用广告弹窗/广场页pad.png);
  background-size: cover;
}
.main {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}
.pop {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.pop img{
    width: 26.171875rem;
}

</style>

