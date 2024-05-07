import { ref } from "vue";

export function useCheckImageSize(minWidth, minHeight) {
  const isSizeValid = ref(true);

  const checkImageSize = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        if (img.width >= minWidth && img.height >= minHeight) {
          isSizeValid.value = true;
          resolve();
        } else {
          isSizeValid.value = false;
          alert("图片尺寸不满足要求！");
          reject();
        }
      };
      img.onerror = () => {
        alert("图片加载失败！");
        reject();
      };
      img.src = url;
    });
  };

  return { isSizeValid, checkImageSize };
}
