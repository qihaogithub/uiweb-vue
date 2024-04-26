<template>
<div class="page">
    <div class="canvas">
        <div class="phone">
        <phone :imageUrl="imageUrl" />
        </div>
        <div class="pad">
        <pad :imageUrl="imageUrl" />
        </div>
    </div>  
    <div class="menu">
        <menu/>
    </div>
</div>

</template>
  
<script>
import menu from './menu.vue';
import pad from './pop-up-pad.vue';
import phone from './pop-up-phone.vue';

export default {
  components: {
    menu,
    phone,
    pad,

  },
  data() {
    return {
      imageUrl: 'src/assets/img/通用广告弹窗/默认弹窗.png'
    };
  },
  methods: {
    updateImage(newImageUrl) {
      this.imageUrl = newImageUrl;
    }
  }
};
  </script>



  <style >
  .page {
    width: 100%;
    height: 100%;
    display: flex;
  }
.canvas {

    display: flex;
    justify-content: center;
    align-items: center;
    /* 弹性盒子沿主轴居中排列 */
    flex-wrap: wrap;
    /*弹性盒子挤压时可以换行 */
    gap: 2.5rem;
    width: 100%;
}

.menu {
    display: flex;
    width: 16rem;
    padding: 0 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-top: 0.0625rem solid #E0DFDF;
    border-left: 0.0625rem solid #E0DFDF;
    background-color: #fff;

}
.pad {
    width: 53.75rem;
    height: 50.75rem;
    margin: 1.875rem 0;
    background-color: #FFF;
    flex-direction: column;
    /* 修改主轴方向*/
    align-items: center;
    overflow-x: hidden;
    /* 隐藏水平滚动条并阻止水平滚动 */
    /* 允许内容在垂直方向上滚动 */
    /* overflow-y: auto; */
    border-radius: 1.25rem;
    box-shadow: 0rem 0.25rem 3.125rem 0rem rgba(0, 0, 0, 0.08);

}

.pad::-webkit-scrollbar {
    display: none;
    /* 隐藏滚动条 */
}

.phone {
    width: 23.4375rem;
    height: 50.75rem;
    margin-top: 1rem;
    margin: 1.875rem 0;
    background-color: #FFF;

    flex-direction: column;
    /* 修改主轴方向*/
    overflow-x: hidden;
    /* 隐藏水平滚动条并阻止水平滚动 */
    /* 允许内容在垂直方向上滚动 */
    /* overflow-y: auto;  */
    border-radius: 1.25rem;
    box-shadow: 0rem 0.25rem 3.125rem 0rem rgba(0, 0, 0, 0.08);
}

.phone::-webkit-scrollbar {
    display: none;
    /* 隐藏滚动条 */
}

  </style>