import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'
// const { resolve } = require('path')
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => `ant-design-vue/es/${name}/style/css`,
        },
      ],
    }),
  ],
  alias: {
    '@': resolve(__dirname, './src'),
  },
  // build: {
  //   base: './',
  // },
  optimizeDeps: {
    include: ['moment/locale/zh-cn', 'vue-grid-layout'],
  },
})
