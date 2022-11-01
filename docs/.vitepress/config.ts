import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'

const config = defineConfig({
  title: 'Smart',
  head: [
    ['link', { rel: 'icon', href: 'https://www.helloimg.com/images/2022/10/04/ZUXPTT.jpg' }]
  ],
  description,
  themeConfig: {
    logo: 'https://www.helloimg.com/images/2022/10/04/ZUXPTT.jpg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/gzlibiao'
      }
    ],
    nav,
    sidebar,
    // editLink: {
    //   pattern: 'https://github.com/gzlibiao'
    // }
  }
})
export default config
