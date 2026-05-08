import { defineConfig } from 'vitepress'
import * as pagefind from 'vitepress-plugin-pagefind'

export default defineConfig({
  title: 'REALITY LAB',
  description: '椎名绫宫的在线知识库',
  base: '/Reality/',
  vite: {
    plugins: [
      pagefind.default?.() ?? pagefind.pagefind?.()
    ]
  }
})
