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
      { text: '总览', link: '/overview' },
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
    ],
        editLink: {
      pattern: 'https://t.me/lingxianww',
      text: '联系编辑该文章/文档'
    },

    lastUpdatedText: '最后更新',

    darkModeSwitchLabel: '主题',

    sidebarMenuLabel: '菜单',

    returnToTopLabel: '回到顶部',

    outlineTitle: '概览',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
