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
  },
  config: (md) => {
    const taskLists = require('markdown-it-task-lists')
    md.use(taskLists, { enabled: true, label: true })
  },
  themeConfig: {
    sidebar: [
      { text: '总览', link: '/home' },
      { text: '杂谈人生', items: [
        { text: '为什么会有人是自来熟啊？', link: '/teakTalk/isOutgoingYourNature' }
      ]},
      { text: '文学创作', items: [
        { text: '残翼', items: [
          {text: '序章', link: '/brokenWings/chapter0.md'}
        ]}
      ]},
      { text: '经验分享', items: [
        
      ]}
    ]
  }
})
