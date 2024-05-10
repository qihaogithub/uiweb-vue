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

<style>
.subject {
  display: flex;
  align-items: center;
  gap: 0.6875rem;
  width: 100%;
}

.km {
  display: flex;
  padding: 0.125rem 0rem var(--, 0.25rem) 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  width: 3.6375rem;
  /* 设置每个.km元素的宽度为6.25rem */
  height: 3.25rem;
  border-radius: 0.75rem 0.75rem 1.5rem 0.75rem;
}

.km img {
  width: 2rem;
}

.km span {
  font-size: 0.75rem;
  width: 1.82rem;
  height: 1rem;
  border-radius: 0.38rem 0.38rem 0.75rem 0.38rem;
}

.s1 {
  padding: 0.13rem 0 0.34rem;
  background-color: #fff2ea;
  box-shadow: 0rem -0.062rem 0.125rem #ffede0 inset;
}

.s2 {
  padding: 0.13rem 0 0.34rem;
  background: rgba(234, 249, 255, 1);
  box-shadow: 0rem -0.083rem 0.167rem rgba(224, 246, 255, 1) inset;
}

.s3 {
  padding: 0.13rem 0 0.34rem;
  background: rgba(249, 245, 255, 1);
  box-shadow: 0rem -0.083rem 0.167rem rgba(243, 235, 255, 1) inset;
}

.s4 {
  padding: 0.13rem 0 0.34rem;
  background: rgba(238, 252, 235, 1);
  box-shadow: 0rem -0.083rem 0.167rem rgba(229, 250, 224, 1) inset;
}

.s5 {
  padding: 0.13rem 0 0.34rem;
  background: #fff0f3;
  box-shadow: 0rem -0.083rem 0.167rem #ffe5eb inset;
}
</style>
