<template>
    <div class="pop">
      <img :src="imageUrl" alt="图片1" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageUrl: 'src/assets/img/启动图标.png'
    }
  }
  </script>


<style scoped >

.pop {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.pop img{
    width: 20.9375rem;
    
}
</style>