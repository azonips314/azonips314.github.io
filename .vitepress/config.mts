import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  lang: 'zh',
  title: "Azonips' Blog",
  description: "分享关于计算机和其他学科的知识",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '编程语言',
        items: [
          { text: 'C/C++', link: '/languages/cpp/' },
          { text: 'JS&TS', link: '/languages/js' },
          { text: 'Go', link: '/languages/go' },
          { text: 'Racket', link: '/languages/racket' },
        ]
      },
      {
        text: '框架',
        items: [
          {text: 'Vue', link: '/frameworks/vue'},
          {text: 'React', link: '/frameworks/react'},
          {text: 'express.js', link: '/frameworks/express'},
        ]
      },
      {
        text: '操作系统',
        items: [
          {text: 'Linux', link: '/os/linux'},
          {text: '线程', link: 'os/thread'},
          {text: '内存', link: 'os/memory'},
        ]
      },
      {
        text: '数据库',
        items: [
          {text: 'PostgreSQL', link: '/db/pgsql'},
          {text: 'Redis', link: '/db/redis'},
          {text: 'MongoDB', link: '/db/mongodb'}
        ]
      },
      {
        text: '算法',
        link: '/algorithm'
      },
      {
        text: '其他',
        link: '/others'
      }
    ],

    sidebar: {
      '/os/linux': [
        {
          text: 'Linux',
          items: [
            {text: 'shell', link: '/os/linux/shell'},
          ]
        }
      ]  
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z3278304322' },
      {
        icon:{
          svg: '<img src="/mail.svg" width=20 height=20 />'
        },
        link: 'mailto:huawen314@163.com'
      }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
