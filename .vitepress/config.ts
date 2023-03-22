import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'

const config = defineConfig({
  title: 'Smart',
  lang: 'zh-CN',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href:
          'https://www.helloimg.com/images/2022/10/04/ZUXPTT.jpg' ||
          'https://cdn.jsdelivr.net/gh/gzlibiao/cdn-delivr@0.0.1/img/wechat.bmp'
      }
    ]
  ],
  outDir: './public',
  description,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    logo: 'https://www.helloimg.com/images/2022/10/04/ZUXPTT.jpg',
    nav,
    sidebar,
    algolia: {
      appId: '16NA1JC9XO',
      apiKey: '839bf3f7b585e2af3d7bbf10e870f7c5',
      indexName: 'DB',
      placeholder: '请输入搜索内容',
      buttonText: '搜索'
    },
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outlineTitle: '导航栏',
    footer: {
      message: `😋用心去做高质量的专业前端内容网站`
    }
  }
})
export default config
