// useCheckImageSize.js
import { Modal } from "@arco-design/web-vue";

export const useCheckImageSize = (rawFile, minSize, maxSize) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target.result;
      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        let content = "";

        // 情况六：minSize 和 maxSize 都存在且相等
        if (
          minSize &&
          maxSize &&
          minSize.width === maxSize.width &&
          minSize.height === maxSize.height
        ) {
          if (width !== minSize.width || height !== minSize.height) {
            content = `本图片尺寸为 ${width}x${height}，应该是宽度=${minSize.width} ，高度=${minSize.height}`;
          }
          // 情况一：minSize 和 maxSize 都有，且 width 和 height 都不相同
        } else if (
          minSize &&
          maxSize &&
          minSize.width !== maxSize.width &&
          minSize.height !== maxSize.height
        ) {
          if (
            width < minSize.width ||
            width > maxSize.width ||
            height < minSize.height ||
            height > maxSize.height
          ) {
            content = `本图片尺寸为 ${width}x${height}，应该是${minSize.width}≤宽度≤${maxSize.width} ，${minSize.height}≤高度≤${maxSize.height}`;
          }
          // 情况二：minSize 和 maxSize 都有，但其中的 width 相同
        } else if (minSize && maxSize && minSize.width === maxSize.width) {
          if (
            width !== minSize.width ||
            height < minSize.height ||
            height > maxSize.height
          ) {
            content = `本图片尺寸为 ${width}x${height}，应该是宽度=${minSize.width} ，${minSize.height}≤高度≤${maxSize.height}`;
          }
          // 情况三：minSize 和 maxSize 都有，但其中的 height 相同
        } else if (minSize && maxSize && minSize.height === maxSize.height) {
          if (
            width < minSize.width ||
            width > maxSize.width ||
            height !== minSize.height
          ) {
            content = `本图片尺寸为 ${width}x${height}，应该是${minSize.width}≤宽度≤${maxSize.width} ，高度=${minSize.height}`;
          }
          // 情况五：只有 minSize 或者 maxSize
        } else if ((minSize && !maxSize) || (!minSize && maxSize)) {
          if (
            width !== (minSize || maxSize).width ||
            height !== (minSize || maxSize).height
          ) {
            content = `本图片尺寸为 ${width}x${height}，应该是宽度=${
              (minSize || maxSize).width
            } ，高度=${(minSize || maxSize).height}`;
          }
        }

        if (content) {
          Modal.confirm({
            title: "图片尺寸有误",
            content: content,
            okText: "继续上传",
            cancelText: "取消上传",
            onOk: () => resolve(true),
            onCancel: () => reject("cancel"),
          });
        } else {
          resolve(true); // 尺寸校验通过，允许上传
        }
      };
    };

    reader.onerror = (error) => {
      Modal.error({
        title: "图片读取失败",
        content: "无法读取图片文件，请检查文件是否有效",
      });
      reject(error);
    };

    reader.readAsDataURL(rawFile);
  });
};
