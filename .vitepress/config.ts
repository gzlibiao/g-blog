import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { algolia } from './configs/algolia'

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
    nav,
    sidebar,
    algolia,
    logo: 'https://www.helloimg.com/images/2022/10/04/ZUXPTT.jpg',
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
