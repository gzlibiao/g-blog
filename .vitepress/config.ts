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
        href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@alpha',
        rel: 'stylesheet'
      }
    ],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@docsearch/js@alpha' }],
    [
      'link',
      {
        rel: 'icon',
        href:
          'https://www.helloimg.com/images/2022/10/04/ZUXPTT.jpg' ||
          'https://cdn.jsdelivr.net/gh/gzlibiao/cdn-delivr@0.0.1/img/wechat.bmp'
      }
    ],
    // 统计代码
    [
      'script',
      { src: 'https://hm.baidu.com/hm.js?3a995a34b126c8652c75166fa2690df9' }
    ],
    // 百度推送代码
    ['script', { src: '/doc-react-ant-admin/push.js' }]
  ],
  // cacheDir: '../../node_modules',
  outDir: './public',
  description,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  // lastUpdated:true,
  themeConfig: {
    logo: 'https://www.helloimg.com/images/2022/10/04/ZUXPTT.jpg',
    nav,
    sidebar,
    algolia: {
      appId: '16NA1JC9XO',
      apiKey: '839bf3f7b585e2af3d7bbf10e870f7c5',
      indexName: 'gsmart',
      placeholder: '请输入关键词',
      buttonText: '搜索'
    }
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // }
    //基于algolia实现搜索功能
    // algolia: {
    //     appId: '66VPYW9RAD',
    //     apiKey: '316b6bf1e3d4367683785ff3bf118382',
    //     indexName: 'llinp',
    //     debug: false
    // },
    // socialLinks: [
    //   {
    //     icon: 'github',
    //     link: 'https://github.com/gzlibiao'
    //   }
    // ],
    // editLink: {
    //   pattern: 'https://github.com/gzlibiao'
    // }
  }
})
export default config
