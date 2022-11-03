import type { UserConfigExport, Plugin } from 'vite'

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
    // build: {
    //   //浏览器兼容性  "esnext"|"modules"
    //   target: "modules",
    //   //指定输出路径
    //   outDir: "dist",
    //   //生成静态资源的存放路径
    //   assetsDir: "assets",
    //   //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    //   assetsInlineLimit: 4096,
    //   //启用/禁用 CSS 代码拆分
    //   cssCodeSplit: true,
    //   //构建后是否生成 source map 文件
    //   sourcemap: false,
    // },
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
