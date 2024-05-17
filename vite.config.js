import { defineConfig } from "vite"; //返回Vite用户配置对象
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    // 自动导入插件
    AutoImport({
      resolvers: [ArcoResolver()],
      dts: "src/auto-imports.d.ts", // 自动生成声明文件
    }),
    // Vue 组件插件
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
  // Vite 配置
  resolve: {
    // 设置路径别名
    alias: {
      // 将 @ 指向 src 目录
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // 设置服务器监听的主机地址
    host: "127.0.0.1",
    // 设置服务器监听的端口号
    port: 3000,
  },
});
