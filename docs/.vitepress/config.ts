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
    nav,
    sidebar,
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
