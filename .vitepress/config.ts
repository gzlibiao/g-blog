import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'

const config = defineConfig({
  title: 'Smart',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://www.Helloimg.com/images/2022/10/04/ZUXPTT.jpg'
      }
    ]
  ],
  cacheDir: '../../node_modules',
  description,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  outDir: '../public',

  // lastUpdated:true,
  themeConfig: {
    logo: 'https://www.Helloimg.com/images/2022/10/04/ZUXPTT.jpg',
    nav,
    sidebar

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