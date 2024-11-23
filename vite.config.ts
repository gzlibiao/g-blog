import type { UserConfigExport, Plugin } from 'vite'
import { SearchPlugin } from 'vitepress-plugin-search'
// import { defineConfig } from "vite";
import flexSearchIndexOptions from 'flexsearch'
//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: '搜索',
  placeholder: '情输入关键词'
}

const NavLinkPatch = (): Plugin => ({
  name: 'override-target-blank',
  enforce: 'pre'
})

export default (): UserConfigExport => {
  return {
    plugins: [NavLinkPatch(), SearchPlugin(options)],
    optimizeDeps: {
      exclude: ['vitepress']
    },
    server: {
      hmr: {
        overlay: false
      }
    },
    ssr: {
      format: 'cjs'
    },
    legacy: {
      buildSsrCjsExternalHeuristics: true
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    }
  }
}
