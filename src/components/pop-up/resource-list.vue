<template>
    <div class="menu">
      <div class="title"><span>资源列表</span></div>
      <div class="resources">
        <div class="list">
          <span>{{ title }}</span>
          <a-upload action="/">
          </a-upload>
        </div>


      </div>
    </div>
</template>

<script>
export default {

  props: {
    title: "大banner前景图", // 资源的标题，如 "大banner前景图"
    uploadHandler: Function // 处理文件上传的函数
  },

  methods: {
    uploadImage() {
      this.uploadHandler(); // 调用父组件传递的上传处理函数
    },

    handleFileChange(e) {
      const file = e.target.files[0];
      if (!file) return;

      // 处理文件上传 logic
      console.log('File selected:', file);
    },
    uploadImage() {
      // 上传图片的 logic
      console.log('Upload image clicked');
    },
  },
};
</script>

<style scoped>
.title {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    width: 100%;
    height: 3.75rem;
    border-bottom: 0.0625rem solid #F5F4F4;
}
.resources {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;

}

.list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1.25rem;
}



.button_line {
    display: flex;
    width: 5.8333rem;
    height: 2.6667rem;
    padding: 0rem 0.6667rem;
    justify-content: center;
    align-items: center;
    gap: 0.1667rem;
    align-self: stretch;
    border-radius: 0.5rem;
    border: 0.0833rem solid #E0DFDF;
    background: #FFF;
}
</style>