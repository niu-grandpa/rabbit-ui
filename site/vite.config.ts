import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 让每个插件都打包成独立的文件
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      },
      plugins: [
        viteCompression({
          verbose: true, // 是否在控制台中输出压缩结果
          disable: false,
          threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
          algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
          ext: '.gz',
          deleteOriginFile: true // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      pages: path.resolve(__dirname, 'src/pages')
    }
  },
  plugins: [vue()]
})
