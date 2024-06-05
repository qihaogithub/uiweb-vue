<template>
  <div>
    <h1>上传文件夹并列出图片尺寸</h1>
    <div class="upload-container">
      <label for="fileInput" class="upload-label">上传图片/文件夹</label>
      <input
        type="file"
        id="fileInput"
        webkitdirectory
        multiple
        @change="handleFileChange"
      />
    </div>
    <div id="output">
      <div class="button-container">
        <button
          v-for="(files, size) in sortedSizeToFileMap"
          :key="size"
          :class="['size-button', { selected: selectedSize === size }]"
          @click="selectSize(size)"
        >
          {{ size }}<br />({{ files.length }})
        </button>
      </div>
    </div>
    <div id="images" class="image-grid">
      <img
        v-for="({ file, path }, index) in selectedFiles"
        :key="index"
        :src="getImageSrc(file)"
        @click="showModal(path)"
      />
    </div>
    <div id="myModal" class="modal" v-if="isModalVisible" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <p id="modalText">文件路径:<br />{{ modalFilePath }}</p>
        <p id="modalFileName">文件名:<br />{{ modalFileName }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const files = ref([]);
const sizeToFileMap = reactive(new Map());
const selectedSize = ref(null);
const isModalVisible = ref(false);
const modalFilePath = ref("");
const modalFileName = ref("");

const handleFileChange = async (event) => {
  const selectedFiles = event.target.files;
  sizeToFileMap.clear();
  for (const file of selectedFiles) {
    console.log(file.type); // 检查文件类型
    if (file.type.startsWith("image/")) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      await new Promise((resolve) => {
        img.onload = () => {
          console.log(`Image loaded: ${img.src}`); // 检查图片是否成功加载
          const size = `${img.width} x ${img.height}`;
          if (!sizeToFileMap.has(size)) {
            sizeToFileMap.set(size, []);
          }
          sizeToFileMap.get(size).push({ file, path: file.webkitRelativePath });
          URL.revokeObjectURL(img.src);
          resolve();
        };
      });
    }
  }
};

const sortedSizeToFileMap = computed(() => {
  const sortedSizes = Array.from(sizeToFileMap.keys()).sort((a, b) => {
    const [aWidth, aHeight] = a.split(" x ").map(Number);
    const [bWidth, bHeight] = b.split(" x ").map(Number);
    return aWidth * aHeight - bWidth * bHeight;
  });
  const sortedMap = new Map();
  for (const size of sortedSizes) {
    sortedMap.set(size, sizeToFileMap.get(size));
  }
  return sortedMap;
});

const selectSize = (size) => {
  selectedSize.value = size;
};

const selectedFiles = computed(() => {
  return sizeToFileMap.get(selectedSize.value) || [];
});

const getImageSrc = (file) => {
  return URL.createObjectURL(file);
};

const showModal = (path) => {
  modalFileName.value = path.substring(path.lastIndexOf("/") + 1);
  modalFilePath.value = path.substring(0, path.lastIndexOf("/"));
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
.upload-container {
  margin-bottom: 20px;
}
#fileInput {
  display: none;
}
.upload-label {
  display: inline-block;
  padding: 10px 20px;
  background-color: #5584ff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}
.upload-label:hover {
  background-color: #3c72ff;
}
#output,
#images {
  margin-top: 20px;
}
.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.size-button {
  padding: 10px 15px;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
  cursor: pointer;
  border-radius: 5px;
}
.size-button.selected {
  background-color: #5584ff;
  color: white;
}
.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
.image-grid img {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  cursor: pointer;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
