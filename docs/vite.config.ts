import type { UserConfigExport, Plugin } from 'vite'
import path from "path";
import glob from "glob";


// https://github.com/vuejs/vitepress/discussions/1015#discussioncomment-3177860
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
    root: path.join(__dirname, "src"),
    build: {
    outDir: path.join(__dirname, "dist"),
      rollupOptions: {
        input: glob.sync(path.resolve(__dirname, "src", "*.html")),
      },
    },
    plugins: [NavLinkPatch()],
    optimizeDeps: {
      exclude: ['vitepress']
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
