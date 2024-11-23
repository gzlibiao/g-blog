import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { algolia } from './configs/algolia'
// import { algoliaPlugin } from 'vitepress-plugin-algolia'

export default defineConfig({
  // plugins: [algoliaPlugin(algolia)],
  // plugins: [
  //   algoliaPlugin({
  //     apiKey: 'YOUR_API_KEY',
  //     appId: 'YOUR_APP_ID',
  //     indexName: 'YOUR_INDEX_NAME'
  //   })
  // ],
  title: 'BigOld',
  lang: 'zh-CN',
  lastUpdated: false,
  description,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        id: 'font-awesome-css',
        href: 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css',
        type: 'text/css',
        media: 'all'
      }
    ],
    [
      'div',
      {
        id: 'music',
        key: '646868c966e23',
        api: 'https://player.qsdurl.cn'
      }
    ],
    [
      'script',
      {
        src: 'https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js'
      }
    ],
    [
      'script',
      {
        defer: 'true',
        id: 'xplayer',
        src: 'https://player.qsdurl.cn/Static/player9/js/player.js'
      }
    ]
  ],
  outDir: './public',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav,
    sidebar,
    algolia,
    logo: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo2',
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outlineTitle: '导航栏',
    footer: {
      message: `😋用心去产出高质量的代码`
    }
  }
})
