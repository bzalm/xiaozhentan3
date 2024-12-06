import { defineConfig } from 'vite'

export default defineConfig({
  base: './',  // 确保使用相对路径
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
}) 