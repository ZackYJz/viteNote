import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/viteNote/',
  title: "ZackYJ's DocSite",
  description: "技术文档,学习资料",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/' },
      { text: 'Notes', link: '/' },
    ],
    sidebar: [
      {
        text: '文档',
        collapsed: true,
        items: [
          { text: 'Langchain', link: '/docs/04-LangChain' }
        ]
      },
      {
        text: '笔记',
        collapsed: true,
        items: [
          { text: 'Langchain', link: '/docs/04-LangChain' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
