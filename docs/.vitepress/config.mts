import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

// VitePress 原始配置（vitePressOptions）
const vitePressOptions = {
  base: '/viteNote/',
  title: "ZackYJ's DocSite",
  description: "技术文档,学习资料",
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/' },
      { text: 'Notes', link: '/' }
    ],
    sidebar: [], // placeholder，由 vitepress-sidebar 自动填充
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
}

// vitepress-sidebar 配置（vitePressSidebarOptions）
const vitePressSidebarOptions = {
  documentRootPath: 'docs', // ⚠️ 指向你的 Markdown 根目录（通常是 'docs' 或 '.'）
  collapsed: false,
  capitalizeFirst: true
}

// 最终导出自动集成 sidebar 的配置
export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions)
)