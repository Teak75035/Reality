import { defineConfig } from 'vitepress'
import * as pagefind from 'vitepress-plugin-pagefind'
import { defineTeekConfig } from "vitepress-theme-teek/config";

const teekConfig = defineTeekConfig({
  teekHome: false,
  toComment: {
    enabled: false,
  },
  post: {
    postStyle: "list", // 文章列表风格
    excerptPosition: "top", // 文章摘要位置
    showMore: true, // 是否显示更多按钮
    moreLabel: "阅读全文 >", // 更多按钮文字
    emptyLabel: "暂无文章", // 文章列表为空时的标签
    coverImgMode: "default", // 文章封面图模式
    showCapture: true, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
    splitSeparator: true, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
    transition: true, // 是否开启过渡动画
    transitionName: "tk-slide-fade", // 自定义过渡动画名称
    listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
    cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
    defaultCoverImg: [], // 默认封面图地址，如果不设置封面图则使用默认封面图地址
  },
  sidebarTrigger: false,
    themeEnhance: {
    layoutSwitch: {
      defaultMode: "bothWidthAdjustable",
      disabled: true,
    },
    themeColor: {
      disabled: true,
    },
    spotlight: {
      disabled: false,
    },
    social: [
    {
      icon: "mdi:github",
      name: "GitHub",
      link: "https://github.com/Teak75035",
    },
  ]
  },

});

export default defineConfig({
  extends: teekConfig,
  title: 'REALITY LAB',
  description: '椎名绫宫的在线知识库',
  base: '',
  vite: {
    plugins: [
      pagefind.default?.() ?? pagefind.pagefind?.()
    ],
    ssr: {
      noExternal: ['framer-motion', 'motion-dom']
    }
  },
  config: (md) => {
    const taskLists = require('markdown-it-task-lists')
    md.use(taskLists, { enabled: true, label: true })
  },
  themeConfig: {
    nav: [
      {
        text: "<i class='iconfont icon-guide'></i>杂谈",
        link: "/01.闲言碎语的杂谈/01.为什么会有人是自来熟啊？.md",
      },
      {
        text: "<i class='iconfont icon-guide'></i>残翼",
        link: "/02.残翼/01.不算序章的序章.md",
      },
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
