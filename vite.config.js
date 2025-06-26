import { defineConfig } from "vite"; // 从vite导入defineConfig
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import { vitePluginForArco } from "@arco-plugins/vite-vue";

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
  build: {
    minify: "terser", // 使用terser进行压缩
    terserOptions: {
      compress: {
        // 忽略警告
        warnings: false,
        // 允许eval
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
      },
    },
    // 处理svga.min.js中的eval警告
    rollupOptions: {
      output: {
        manualChunks: {
          svga: ["svgaplayerweb"],
        },
      },
    },
  },
});
