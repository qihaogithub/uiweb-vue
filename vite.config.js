import { defineConfig } from "vite"; // 从vite导入defineConfig
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import { vitePluginForArco } from "@arco-plugins/vite-vue";
import { vitePluginOSS } from "./scripts/vite-plugin-oss.js";

import { fileURLToPath } from "url"; // 从url模块导入fileURLToPath

export default defineConfig({
  plugins: [
    vue(),
    vitePluginForArco({
      style: "css",
    }),
    AutoImport({
      resolvers: [ArcoResolver()],
      dts: "src/auto-imports.d.ts",
      // 导入 Vue 3 的 Composition API
      imports: ["vue", "vue/macros"],
    }),
    Components({
      resolvers: [ArcoResolver({ sideEffect: true })],
    }),
    // OSS 插件：构建后自动上传图片到阿里云 OSS
    vitePluginOSS({
      enabled: process.env.NODE_ENV === 'production' || process.env.ENABLE_OSS === 'true',
      prefix: 'uiweb'
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
});
