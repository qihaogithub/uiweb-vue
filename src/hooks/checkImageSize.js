// checkImageSize.js
import { Modal } from "@arco-design/web-vue";

export const checkImageSize = (
  file,
  widthExact,
  heightExact,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight
) => {
  console.log("函数接受到的file:", file);
  console.log("函数接受到的widthExact:", widthExact);
  console.log("函数接受到的heightExact:", heightExact);
  console.log("函数接受到的minWidth:", minWidth);
  console.log("函数接受到的maxWidth:", maxWidth);
  console.log("函数接受到的minHeight:", minHeight);
  console.log("函数接受到的maxHeight:", maxHeight);

  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    img.onload = () => {
      // 检查图片尺寸是否符合条件
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      let content = "";
      console.log(width, height);

      // 构建检查条件字符串
      const widthCondition = widthExact
        ? `宽度=${widthExact}`
        : minWidth || maxWidth
        ? `${minWidth || ""}≤宽度≤${maxWidth || ""}`
        : "宽度=不限";
      const heightCondition = heightExact
        ? `高度=${heightExact}`
        : minHeight || maxHeight
        ? `${minHeight || ""}≤高度≤${maxHeight || ""}`
        : "高度=不限";

      // 检查图片尺寸
      if (
        (widthExact && width !== widthExact) ||
        (minWidth && width < minWidth) ||
        (maxWidth && width > maxWidth) ||
        (heightExact && height !== heightExact) ||
        (minHeight && height < minHeight) ||
        (maxHeight && height > maxHeight)
      ) {
        content = `本图片尺寸为 ${width}x${height}，应该是${widthCondition} ，${heightCondition}`;
      }

      if (content) {
        console.log("图片尺寸有误:", content);
        Modal.confirm({
          title: "图片尺寸有误",
          content: content,
          okText: "继续上传",
          cancelText: "取消上传",
          onOk: () => resolve(true), // 用户选择继续上传
          onCancel: () => reject("取消上传"), // 用户选择取消上传
        });
      } else {
        resolve(true); // 尺寸校验通过，允许上传
        console.log("尺寸校验通过，允许上传");
      }
    };

    img.onerror = () => {
      Modal.error({
        title: "图片加载失败",
        content: "图片加载失败，请确保文件是有效的图片格式。",
      });
      reject(new Error("图片加载失败"));
    };

    reader.onload = (e) => {
      // 将读取到的 Data URL 赋值给图片的 src 属性
      console.log(img.src);
      img.src = e.target.result;
    };

    reader.onerror = (error) => {
      Modal.error({
        title: "文件读取失败",
        content: "文件读取失败，请确保文件是有效的图片格式。",
      });
      reject(error);
    };

    // 使用 FileReader 读取文件内容为 Data URL
    reader.readAsDataURL(file);
  });
};
