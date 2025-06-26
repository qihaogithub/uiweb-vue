<template>
  <div class="subject">
    <div class="km s1">
      <img
        src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E7%A7%91%E7%9B%AE%E5%9B%BE%E6%A0%87/%E9%98%85%E8%AF%BB.png"
      />
      <span>阅读</span>
    </div>
    <div class="km s2">
      <img
        src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E7%A7%91%E7%9B%AE%E5%9B%BE%E6%A0%87/%E7%9B%8A%E6%99%BA.png"
      />
      <span class="font_3 text_10 mt-3">益智</span>
    </div>
    <div class="km s3">
      <img
        src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E7%A7%91%E7%9B%AE%E5%9B%BE%E6%A0%87/%E7%BE%8E%E8%82%B2.png"
      />
      <span class="font_3 text_11 mt-3">美育</span>
    </div>
    <div class="km s4">
      <img
        src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E7%A7%91%E7%9B%AE%E5%9B%BE%E6%A0%87/%E5%86%99%E4%BD%9C.png"
      />
      <span class="font_3 text_12 mt-3">写作</span>
    </div>
    <div class="km s5">
      <img
        src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E7%A7%91%E7%9B%AE%E5%9B%BE%E6%A0%87/%E8%8B%B1%E8%AF%AD.png"
      />
      <span class="font_3 text_13 mt-3">英语</span>
    </div>
  </div>
</template>

<style scoped>
.subject {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.km {
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 15px 15px 30px 15px;
  background: #fff0f3;
  box-shadow: 0px -2.5px 5px 0px #ffe5eb inset;
}

.km img {
  width: 39.727px;
}

.km span {
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.s1 {
  background-color: #fff2ea;
  box-shadow: 0em -0.062em 0.125em #ffede0 inset;
}

.s2 {
  background: rgba(234, 249, 255, 1);
  box-shadow: 0em -0.083em 0.167em rgba(224, 246, 255, 1) inset;
}

.s3 {
  background: rgba(249, 245, 255, 1);
  box-shadow: 0em -0.083em 0.167em rgba(243, 235, 255, 1) inset;
}

.s4 {
  background: rgba(238, 252, 235, 1);
  box-shadow: 0em -0.083em 0.167em rgba(229, 250, 224, 1) inset;
}

.s5 {
  background: #fff0f3;
  box-shadow: 0em -0.083em 0.167em #ffe5eb inset;
}
</style>
