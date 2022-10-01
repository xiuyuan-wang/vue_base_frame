import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import requireTransform from "vite-plugin-require-transform";
import { svgBuilder } from "./src/icons/index";
import { viteMockServe } from "vite-plugin-mock";
import eslint from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueJsx(),
    // {
    //   name: 'originjs:commonjs',
    //   apply: 'serve',
    //   transform(code, id) {
    //       let result = code;
    //       // if (/\/axios\/lib\//.test(id)) {
    //       //   result = transformRequire(code, id);
    //       // }
    //       if (/\/axios\//.test(id)) {
    //         result = transformRequire(code, id);
    //       }
    //       if (/\/time-picker\/src\//.test(id) || /\/calendar\/src\//.test(id) || /\/date-picker\/src\//.test(id) || /\/table\/src\//.test(id)) {
    //         result = transformRequire(code, id);
    //       }
    //       return {
    //           code: result,
    //           map: null,
    //           warnings: null,
    //       };
    //   },
    // },
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    requireTransform({
      fileRegex: /.js$|.vue$/,
    }),
    svgBuilder("./src/icons/svg/"),
    viteMockServe({
      mockPath: "./mock", // 解析，路径可根据实际变动
      supportTs: true
      // localEnabled: true // 此处可以手动设置为true，也可以根据官方文档格式
    }),
    eslint({include: ['src/**/*.vue', 'src/**/*.js']})
  ],
  // optimizeDeps:{
  //   include: ['axios']
  // },
  server: {
    port: 9000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // envPrefix: “APP_”, // 配置环境变量开头  因为写环境变量和其它变量，必须要以VITE_开头
  optimizeDeps: {
    disabled: false,
    // include: ['axios']  //没有起作用 使用 transformRequire
  },
});
