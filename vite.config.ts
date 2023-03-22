import type { UserConfigExport, Plugin } from 'vite'

const NavLinkPatch = (): Plugin => ({
  name: 'override-target-blank',
  enforce: 'pre',
  transform: (code, id) => {
    if (id.endsWith('VPLink.vue')) {
      return code.replace('_blank', '_self')
    }
  }
})

export default (): UserConfigExport => {
  return {
    plugins: [
      // vue(),
      NavLinkPatch()
      // vueJsx(),
      // babel({
      //   plugins: [
      //     [
      //       '@babel/plugin-transform-react-jsx',
      //       {
      //         runtime: 'automatic',
      //         importSource: '@antv/f2'
      //       }
      //     ]
      //   ]
      // })
    ],
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
