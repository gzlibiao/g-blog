// docs/.vitepress/config.mts
import { defineConfig } from "file:///D:/font-all/vite-press/my-blog/node_modules/.pnpm/registry.npmmirror.com+vitepress@1.5.0_sass@1.76.0_typescript@5.4.5/node_modules/vitepress/dist/node/index.js";
import { SponsorPlugin } from "file:///D:/font-all/vite-press/my-blog/node_modules/.pnpm/registry.npmmirror.com+vitepress-plugin-sponsor@0.1.4_vitepress@1.5.0/node_modules/vitepress-plugin-sponsor/dist/index.mjs";

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from "file:///D:/font-all/vite-press/my-blog/node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.5.2_@element-plus+icons-vue@2.3.1_element-plus@2.7.2__4vm5irfocyfm6qvmfmasosdybi/node_modules/@sugarat/theme/node.mjs";
var blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,
  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // mermaid: true,
  // 页脚
  footer: {
    version: false,
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    // copyright: 'MIT License | 韩飞羽'
    message: `\u{1F60B}\u7528\u5FC3\u53BB\u4EA7\u51FA\u9AD8\u8D28\u91CF\u7684\u4EE3\u7801`
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // }
  },
  // 主题色修改
  themeColor: "el-blue",
  // 文章默认作者
  author: "\u97E9 \u98DE \u7FBD",
  // 友链
  friend: [],
  oml2d: {
    // dockedPosition: 'right',
    // mobileDisplay: true,
    // models: [
    //   {
    //     position: [300, 0],
    //     mobilePosition: [0, 0],
    //     // scale: 0.05,
    //     // mobileScale: 0.02,
    //     stageStyle: {
    //       // height: 450
    //     },
    //     // mobileStageStyle: {
    //     //   height: 370,
    //     //   width: 400
    //     // },
    //     // path: 'https://model.oml2d.com/HK416-1-normal/model.json'
    //     path: 'https://model.oml2d.com/haruto/haruto.model.json'
    //     // path: 'https://oml2d-models.sugarat.top/mai/model.json'
    //   }
    // ]
  },
  // 公告
  popover: {
    duration: 3,
    mobileMinify: true,
    title: "\u516C\u544A",
    body: [
      { type: "text", content: "\u{1F447}\u{1F447}\u{1F447}\u626B\u6211" },
      {
        type: "image",
        style: "height:60px;width:60px;object-fit:cover",
        src: "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/weChat.jpg"
      }
    ]
  }
});

// docs/utils.ts
import path from "path";
import fs from "fs";
var __vite_injected_original_dirname = "D:\\font-all\\vite-press\\my-blog\\docs";
function getSidebar() {
  const dir = path.resolve(__vite_injected_original_dirname, "articles");
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const sidebar = dirents.reduce((pre, dirent) => {
    if (dirent.isDirectory()) {
      const items = fs.readdirSync(dir + "\\" + dirent.name, { withFileTypes: true }).map((o) => {
        const name = o.name.split(".").shift();
        return {
          text: name,
          link: `/articles/${dirent.name}/${name}`
        };
      });
      if (dirent.name === "\u5F00\u7BC7") {
        pre.unshift({
          text: dirent.name,
          items
        });
      } else {
        pre.push({
          text: dirent.name,
          items
        });
      }
    }
    return pre;
  }, []);
  return sidebar;
}

// docs/plugins.ts
function musicPlugin(options = {}) {
  return {
    name: "music-plugin",
    enforce: "post",
    async writeBundle() {
      const script = document.createElement("script");
      script.innerHTML = `
        document.addEventListener('DOMContentLoaded', (event) => {
          // \u4F60\u7684\u63D2\u4EF6\u903B\u8F91
          console.log('DOM fully loaded and parsed');
        });
      `;
      document.body.appendChild(script);
    }
  };
}
function walinePlugin(options = {}) {
  return {
    name: "waline-plugin",
    enforce: "post",
    async writeBundle() {
      const script = document.createElement("script");
      script.innerHTML = `
        document.addEventListener('DOMContentLoaded', (event) => {
          // \u4F60\u7684\u63D2\u4EF6\u903B\u8F91
          console.log('DOM fully loaded and parsed');
        });
      `;
      document.body.appendChild(script);
    }
  };
}

// docs/.vitepress/config.mts
var config_default = defineConfig(() => {
  const sidebar = getSidebar();
  return {
    outDir: "../dist",
    sitemap: {
      hostname: "https://hfyf.netlify.app"
    },
    metaChunk: true,
    srcExclude: ["CHANGELOG.md"],
    markdown: {
      image: {
        lazyLoading: true
      }
    },
    ignoreDeadLinks: true,
    vite: {
      plugins: [
        musicPlugin(),
        walinePlugin(),
        // 打赏插件
        SponsorPlugin({
          /**
           * 打赏模块样式
           */
          type: "simple",
          aliPayQR: "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/aliQR.jpg",
          weChatQR: "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/wxPayQR.jpg"
        })
      ]
    },
    // hmr: true,
    // 继承博客主题(@sugarat/theme)
    extends: blogTheme,
    // base,
    lang: "zh-cn",
    title: "\u98DE\u8BED",
    description: "\u97E9\u98DE\u7FBD\u7684\u4E2A\u4EBA\u535A\u5BA2",
    kwywords: "\u5168\u80FD\u9AD8\u624B,\u4E2A\u4EBA\u7F51\u7AD9",
    lastUpdted: true,
    // 详见：https://vitepress.dev/zh/reference/site-config#head
    head: [
      ["meta", { "http-equiv": "x-dns-prefetch-control", content: "on" }],
      [
        "link",
        { rel: "dns-prefetch", href: "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/" }
      ],
      [
        "link",
        { rel: "icon", href: "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo2" }
      ],
      // [
      //   'div',
      //   {
      //     id: 'music',
      //     key: '646868c966e23',
      //     api: 'https://player.qsdurl.cn'
      //   }
      // ],
      [
        "link",
        {
          rel: "preload",
          href: "http://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/bg1.webp",
          as: "image/css"
        }
      ]
    ],
    themeConfig: {
      // 展示 2,3 级标题在目录中
      outline: {
        level: [2, 3],
        label: "\u76EE\u5F55"
      },
      // 默认文案修改
      returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
      sidebarMenuLabel: "\u76F8\u5173\u6587\u7AE0",
      lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
      // 设置logo
      logo: "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo2",
      // editLink: {
      //   pattern:
      //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
      //   text: '去 GitHub 上编辑内容'
      // },
      sidebar,
      nav: [
        { text: "\u9996\u9875", link: "/" },
        { text: "\u6587\u7AE0", link: "/articles/\u5F00\u7BC7/hello" },
        { text: "\u4E2A\u6027", link: "/sop/individuality#individuality" },
        {
          text: "\u7B80\u4ECB",
          link: "https://hfyf.netlify.app/"
        },
        {
          text: "\u8BB0\u5F55",
          link: "https://gtols.netlify.app/#/markdown"
        },
        {
          text: "\u770B\u4E66",
          items: [
            {
              text: "git\u8FDB\u9636",
              link: "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/R09TUw==/eyJpZCI6IjY4ZTk2YzhiLTQzOGEtNGU5OS05NjE2LWEyZTlkOGJjYmEwYyIsIm5hbWUiOiJwcm9naXQyLnBkZiIsImRpciI6IuS5piJ9"
            },
            {
              text: "\u4F60\u6240\u4E0D\u77E5\u9053\u7684javascript\u4E0A",
              link: "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/R09TUw==/eyJpZCI6IjZlNmY5NzhlLTcyYmQtNGEzYi1iMzA4LWRkMmE0ZjkzNDJlNiIsIm5hbWUiOiLkvaDkuI3nn6XpgZPnmoRKYXZhU2NyaXB077yI5LiK5Y2377yJLnBkZiIsImRpciI6IuS5piJ9"
            },
            {
              text: "\u4F60\u6240\u4E0D\u77E5\u9053\u7684javascript\u4E2D",
              link: "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/R09TUw==/eyJpZCI6Ijk2YjI5Mzc2LWIzNmEtNDQ4OS1iOWM2LWU4NDk1MzI3MzkyMSIsIm5hbWUiOiLkvaDkuI3nn6XpgZPnmoRKYXZhU2NyaXB077yI5Lit5Y2377yJLnBkZiIsImRpciI6IuS5piJ9"
            },
            {
              text: "\u4F60\u6240\u4E0D\u77E5\u9053\u7684javascript\u4E0B",
              link: "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/R09TUw==/eyJpZCI6IjI2NjE2MjUzLWNiYzktNDUzMC1iNzVjLWQ3YTBjODBlZGNhMyIsIm5hbWUiOiLkvaDkuI3nn6XpgZPnmoRKYXZhU2NyaXB077yI5LiL5Y2377yJLnBkZiIsImRpciI6IuS5piJ9"
            }
          ]
        }
        // {
        //   text: '里程',
        //   link: 'https://gmilepost.netlify.app'
        // }
        // { text: '关于作者', link: 'https://sugarat.top/aboutme.html' }
      ],
      socialLinks: [{ icon: "github", link: "https://github.com/gzlibiao" }]
    }
  };
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiLCAiZG9jcy91dGlscy50cyIsICJkb2NzL3BsdWdpbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxmb250LWFsbFxcXFx2aXRlLXByZXNzXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxmb250LWFsbFxcXFx2aXRlLXByZXNzXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2ZvbnQtYWxsL3ZpdGUtcHJlc3MvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7IFNwb25zb3JQbHVnaW4gfSBmcm9tICd2aXRlcHJlc3MtcGx1Z2luLXNwb25zb3InXG5cbi8vIFx1NUJGQ1x1NTE2NVx1NEUzQlx1OTg5OFx1NzY4NFx1OTE0RFx1N0Y2RVxuaW1wb3J0IHsgYmxvZ1RoZW1lIH0gZnJvbSAnLi9ibG9nLXRoZW1lJ1xuaW1wb3J0IHsgZ2V0U2lkZWJhciB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgd2FsaW5lUGx1Z2luLCBtdXNpY1BsdWdpbiB9IGZyb20gJy4uL3BsdWdpbnMnXG4vLyBpbXBvcnQgJy4vc3RhdGljL2pxdWVyeS5taW4uanMnXG4vLyBpbXBvcnQgJy4vc3RhdGljL2ZvbnQtYXdlc29tZS5taW4uY3NzJ1xuLy8gXHU1OTgyXHU2NzlDXHU0RjdGXHU3NTI4IEdpdEh1Yi9HaXRlZSBQYWdlcyBcdTdCNDlcdTUxNkNcdTUxNzFcdTVFNzNcdTUzRjBcdTkwRThcdTdGNzJcbi8vIFx1OTAxQVx1NUUzOFx1OTcwMFx1ODk4MVx1NEZFRVx1NjUzOSBiYXNlIFx1OERFRlx1NUY4NFx1RkYwQ1x1OTAxQVx1NUUzOFx1NEUzQVx1MjAxQy9cdTRFRDNcdTVFOTNcdTU0MEQvXHUyMDFEXG4vLyBcdTU5ODJcdTY3OUNcdTk4NzlcdTc2RUVcdTU0MERcdTVERjJcdTdFQ0ZcdTRFM0EgbmFtZS5naXRodWIuaW8gXHU1N0RGXHU1NDBEXHVGRjBDXHU1MjE5XHU0RTBEXHU5NzAwXHU4OTgxXHU0RkVFXHU2NTM5XHVGRjAxXG4vLyBjb25zdCBiYXNlID0gcHJvY2Vzcy5lbnYuR0lUSFVCX0FDVElPTlMgPT09ICd0cnVlJ1xuLy8gICA/ICcvdml0ZXByZXNzLWJsb2ctc3VnYXItdGVtcGxhdGUvJ1xuLy8gICA6ICcvJ1xuXG4vLyBWaXRlcHJlc3MgXHU5RUQ4XHU4QkE0XHU5MTREXHU3RjZFXG4vLyBcdThCRTZcdTg5QzFcdTY1ODdcdTY4NjNcdUZGMUFodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyID0gZ2V0U2lkZWJhcigpXG5cbiAgcmV0dXJuIHtcbiAgICBvdXREaXI6ICcuLi9kaXN0JyxcbiAgICBzaXRlbWFwOiB7XG4gICAgICBob3N0bmFtZTogJ2h0dHBzOi8vaGZ5Zi5uZXRsaWZ5LmFwcCdcbiAgICB9LFxuICAgIG1ldGFDaHVuazogdHJ1ZSxcbiAgICBzcmNFeGNsdWRlOiBbJ0NIQU5HRUxPRy5tZCddLFxuICAgIG1hcmtkb3duOiB7XG4gICAgICBpbWFnZToge1xuICAgICAgICBsYXp5TG9hZGluZzogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgaWdub3JlRGVhZExpbmtzOiB0cnVlLFxuICAgIHZpdGU6IHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgbXVzaWNQbHVnaW4oKSxcbiAgICAgICAgd2FsaW5lUGx1Z2luKCksXG4gICAgICAgIC8vIFx1NjI1M1x1OEQ0Rlx1NjNEMlx1NEVGNlxuICAgICAgICBTcG9uc29yUGx1Z2luKHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBcdTYyNTNcdThENEZcdTZBMjFcdTU3NTdcdTY4MzdcdTVGMEZcbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0eXBlOiAnc2ltcGxlJyxcbiAgICAgICAgICBhbGlQYXlRUjogJ2h0dHBzOi8vamYtdGVtcC0xMzAxNDQ2MTg4LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL2FsaVFSLmpwZycsXG4gICAgICAgICAgd2VDaGF0UVI6ICdodHRwczovL2pmLXRlbXAtMTMwMTQ0NjE4OC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS93eFBheVFSLmpwZydcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9LFxuICAgIC8vIGhtcjogdHJ1ZSxcbiAgICAvLyBcdTdFRTdcdTYyN0ZcdTUzNUFcdTVCQTJcdTRFM0JcdTk4OTgoQHN1Z2FyYXQvdGhlbWUpXG4gICAgZXh0ZW5kczogYmxvZ1RoZW1lLFxuICAgIC8vIGJhc2UsXG4gICAgbGFuZzogJ3poLWNuJyxcbiAgICB0aXRsZTogJ1x1OThERVx1OEJFRCcsXG4gICAgZGVzY3JpcHRpb246ICdcdTk3RTlcdTk4REVcdTdGQkRcdTc2ODRcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTInLFxuICAgIGt3eXdvcmRzOiAnXHU1MTY4XHU4MEZEXHU5QUQ4XHU2MjRCLFx1NEUyQVx1NEVCQVx1N0Y1MVx1N0FEOScsXG4gICAgbGFzdFVwZHRlZDogdHJ1ZSxcbiAgICAvLyBcdThCRTZcdTg5QzFcdUZGMUFodHRwczovL3ZpdGVwcmVzcy5kZXYvemgvcmVmZXJlbmNlL3NpdGUtY29uZmlnI2hlYWRcbiAgICBoZWFkOiBbXG4gICAgICBbJ21ldGEnLCB7ICdodHRwLWVxdWl2JzogJ3gtZG5zLXByZWZldGNoLWNvbnRyb2wnLCBjb250ZW50OiAnb24nIH1dLFxuICAgICAgW1xuICAgICAgICAnbGluaycsXG4gICAgICAgIHsgcmVsOiAnZG5zLXByZWZldGNoJywgaHJlZjogJ2h0dHBzOi8vamYtdGVtcC0xMzAxNDQ2MTg4LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tLycgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ2xpbmsnLFxuICAgICAgICB7IHJlbDogJ2ljb24nLCBocmVmOiAnaHR0cHM6Ly9qZi10ZW1wLTEzMDE0NDYxODguY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vbG9nbzInIH1cbiAgICAgIF0sXG4gICAgICAvLyBbXG4gICAgICAvLyAgICdkaXYnLFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgaWQ6ICdtdXNpYycsXG4gICAgICAvLyAgICAga2V5OiAnNjQ2ODY4Yzk2NmUyMycsXG4gICAgICAvLyAgICAgYXBpOiAnaHR0cHM6Ly9wbGF5ZXIucXNkdXJsLmNuJ1xuICAgICAgLy8gICB9XG4gICAgICAvLyBdLFxuICAgICAgW1xuICAgICAgICAnbGluaycsXG4gICAgICAgIHtcbiAgICAgICAgICByZWw6ICdwcmVsb2FkJyxcbiAgICAgICAgICBocmVmOiAnaHR0cDovL2pmLXRlbXAtMTMwMTQ0NjE4OC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9iZzEud2VicCcsXG4gICAgICAgICAgYXM6ICdpbWFnZS9jc3MnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICBdLFxuICAgIHRoZW1lQ29uZmlnOiB7XG4gICAgICAvLyBcdTVDNTVcdTc5M0EgMiwzIFx1N0VBN1x1NjgwN1x1OTg5OFx1NTcyOFx1NzZFRVx1NUY1NVx1NEUyRFxuICAgICAgb3V0bGluZToge1xuICAgICAgICBsZXZlbDogWzIsIDNdLFxuICAgICAgICBsYWJlbDogJ1x1NzZFRVx1NUY1NSdcbiAgICAgIH0sXG4gICAgICAvLyBcdTlFRDhcdThCQTRcdTY1ODdcdTY4NDhcdTRGRUVcdTY1MzlcbiAgICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdTU2REVcdTUyMzBcdTk4NzZcdTkwRTgnLFxuICAgICAgc2lkZWJhck1lbnVMYWJlbDogJ1x1NzZGOFx1NTE3M1x1NjU4N1x1N0FFMCcsXG4gICAgICBsYXN0VXBkYXRlZFRleHQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcdTRFOEUnLFxuXG4gICAgICAvLyBcdThCQkVcdTdGNkVsb2dvXG4gICAgICBsb2dvOiAnaHR0cHM6Ly9qZi10ZW1wLTEzMDE0NDYxODguY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vbG9nbzInLFxuICAgICAgLy8gZWRpdExpbms6IHtcbiAgICAgIC8vICAgcGF0dGVybjpcbiAgICAgIC8vICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0FUUVEvc3VnYXItYmxvZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9ncHJlc3MvOnBhdGgnLFxuICAgICAgLy8gICB0ZXh0OiAnXHU1M0JCIEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTUxODVcdTVCQjknXG4gICAgICAvLyB9LFxuICAgICAgc2lkZWJhcixcbiAgICAgIG5hdjogW1xuICAgICAgICB7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2NTg3XHU3QUUwJywgbGluazogJy9hcnRpY2xlcy9cdTVGMDBcdTdCQzcvaGVsbG8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NEUyQVx1NjAyNycsIGxpbms6ICcvc29wL2luZGl2aWR1YWxpdHkjaW5kaXZpZHVhbGl0eScgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTdCODBcdTRFQ0InLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2hmeWYubmV0bGlmeS5hcHAvJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1OEJCMFx1NUY1NScsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ3RvbHMubmV0bGlmeS5hcHAvIy9tYXJrZG93bidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTc3MEJcdTRFNjYnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdnaXRcdThGREJcdTk2MzYnLFxuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9qZi10ZW1wLTEzMDE0NDYxODguY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vUjA5VFV3PT0vZXlKcFpDSTZJalk0WlRrMll6aGlMVFF6T0dFdE5HVTVPUzA1TmpFMkxXRXlaVGxrT0dKalltRXdZeUlzSW01aGJXVWlPaUp3Y205bmFYUXlMbkJrWmlJc0ltUnBjaUk2SXVTNXBpSjknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU0RjYwXHU2MjQwXHU0RTBEXHU3N0U1XHU5MDUzXHU3Njg0amF2YXNjcmlwdFx1NEUwQScsXG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2pmLXRlbXAtMTMwMTQ0NjE4OC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9SMDlUVXc9PS9leUpwWkNJNklqWmxObVk1TnpobExUY3lZbVF0TkdFellpMWlNekE0TFdSa01tRTBaamt6TkRKbE5pSXNJbTVoYldVaU9pTGt2YURrdUkzbm42WHBnWlBubW9SS1lYWmhVMk55YVhCMDc3eUk1TGlLNVkyMzc3eUpMbkJrWmlJc0ltUnBjaUk2SXVTNXBpSjknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU0RjYwXHU2MjQwXHU0RTBEXHU3N0U1XHU5MDUzXHU3Njg0amF2YXNjcmlwdFx1NEUyRCcsXG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2pmLXRlbXAtMTMwMTQ0NjE4OC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9SMDlUVXc9PS9leUpwWkNJNklqazJZakk1TXpjMkxXSXpObUV0TkRRNE9TMWlPV00yTFdVNE5EazFNekkzTXpreU1TSXNJbTVoYldVaU9pTGt2YURrdUkzbm42WHBnWlBubW9SS1lYWmhVMk55YVhCMDc3eUk1TGl0NVkyMzc3eUpMbkJrWmlJc0ltUnBjaUk2SXVTNXBpSjknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU0RjYwXHU2MjQwXHU0RTBEXHU3N0U1XHU5MDUzXHU3Njg0amF2YXNjcmlwdFx1NEUwQicsXG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2pmLXRlbXAtMTMwMTQ0NjE4OC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9SMDlUVXc9PS9leUpwWkNJNklqSTJOakUyTWpVekxXTmlZemt0TkRVek1DMWlOelZqTFdRM1lUQmpPREJsWkdOaE15SXNJbTVoYldVaU9pTGt2YURrdUkzbm42WHBnWlBubW9SS1lYWmhVMk55YVhCMDc3eUk1TGlMNVkyMzc3eUpMbkJrWmlJc0ltUnBjaUk2SXVTNXBpSjknXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICB0ZXh0OiAnXHU5MUNDXHU3QTBCJyxcbiAgICAgICAgLy8gICBsaW5rOiAnaHR0cHM6Ly9nbWlsZXBvc3QubmV0bGlmeS5hcHAnXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8geyB0ZXh0OiAnXHU1MTczXHU0RThFXHU0RjVDXHU4MDA1JywgbGluazogJ2h0dHBzOi8vc3VnYXJhdC50b3AvYWJvdXRtZS5odG1sJyB9XG4gICAgICBdLFxuICAgICAgc29jaWFsTGlua3M6IFt7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2d6bGliaWFvJyB9XVxuICAgIH1cbiAgfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcZm9udC1hbGxcXFxcdml0ZS1wcmVzc1xcXFxteS1ibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZm9udC1hbGxcXFxcdml0ZS1wcmVzc1xcXFxteS1ibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxibG9nLXRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9mb250LWFsbC92aXRlLXByZXNzL215LWJsb2cvZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHNcIjsvLyBcdTRFM0JcdTk4OThcdTcyRUNcdTY3MDlcdTkxNERcdTdGNkVcbmltcG9ydCB7IGdldFRoZW1lQ29uZmlnIH0gZnJvbSAnQHN1Z2FyYXQvdGhlbWUvbm9kZSdcblxuLy8gXHU1RjAwXHU1NDJGUlNTXHU2NTJGXHU2MzAxXHVGRjA4UlNTXHU5MTREXHU3RjZFXHVGRjA5XG4vLyBpbXBvcnQgdHlwZSB7IFRoZW1lIH0gZnJvbSAnQHN1Z2FyYXQvdGhlbWUnXG5cbi8vIGNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9zdWdhcmF0LnRvcCdcbi8vIGNvbnN0IFJTUzogVGhlbWUuUlNTT3B0aW9ucyA9IHtcbi8vICAgdGl0bGU6ICdcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxuLy8gICBiYXNlVXJsLFxuLy8gICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2Jyxcbi8vICAgZGVzY3JpcHRpb246ICdcdTRGNjBcdTc2ODRcdTYzMDdcdTVDMTYsXHU2MkU1XHU2NzA5XHU2NTM5XHU1M0Q4XHU0RTE2XHU3NTRDXHU3Njg0XHU1MjlCXHU5MUNGXHVGRjA4XHU1OTI3XHU1MjREXHU3QUVGXHU3NkY4XHU1MTczXHU2MjgwXHU2NzJGXHU1MjA2XHU0RUFCXHVGRjA5Jyxcbi8vICAgbGFuZ3VhZ2U6ICd6aC1jbicsXG4vLyAgIGltYWdlOiAnaHR0cHM6Ly9pbWcuY2RuLnN1Z2FyYXQudG9wL21kSW1nL01UWTNORGs1TlRFMk56QXpNQT09Njc0OTk1MTY3MDMwJyxcbi8vICAgZmF2aWNvbjogJ2h0dHBzOi8vc3VnYXJhdC50b3AvZmF2aWNvbi5pY28nXG4vLyB9XG5cbi8vIFx1NjI0MFx1NjcwOVx1OTE0RFx1N0Y2RVx1OTg3OVx1RkYwQ1x1OEJFNlx1ODlDMVx1NjU4N1x1Njg2MzogaHR0cHM6Ly90aGVtZS5zdWdhcmF0LnRvcC9cbmNvbnN0IGJsb2dUaGVtZSA9IGdldFRoZW1lQ29uZmlnKHtcbiAgLy8gXHU1RjAwXHU1NDJGUlNTXHU2NTJGXHU2MzAxXG4gIC8vIFJTUyxcblxuICAvLyBcdTY0MUNcdTdEMjJcbiAgLy8gXHU5RUQ4XHU4QkE0XHU1RjAwXHU1NDJGcGFnZWZpbmRcdTc5QkJcdTdFQkZcdTc2ODRcdTUxNjhcdTY1ODdcdTY0MUNcdTdEMjJcdTY1MkZcdTYzMDFcdUZGMDhcdTU5ODJcdTRGN0ZcdTc1MjhcdTUxNzZcdTVCODNcdTc2ODRcdTUzRUZcdTRFRTVcdThCQkVcdTdGNkVcdTRFM0FmYWxzZVx1RkYwOVxuICAvLyBtZXJtYWlkOiB0cnVlLFxuXG4gIC8vIFx1OTg3NVx1ODExQVxuICBmb290ZXI6IHtcbiAgICB2ZXJzaW9uOiBmYWxzZSxcbiAgICAvLyBtZXNzYWdlIFx1NUI1N1x1NkJCNVx1NjUyRlx1NjMwMVx1OTE0RFx1N0Y2RVx1NEUzQUhUTUxcdTUxODVcdTVCQjlcdUZGMENcdTkxNERcdTdGNkVcdTU5MUFcdTY3NjFcdTUzRUZcdTRFRTVcdTkxNERcdTdGNkVcdTRFM0FcdTY1NzBcdTdFQzRcbiAgICAvLyBtZXNzYWdlOiAnXHU0RTBCXHU5NzYyIFx1NzY4NFx1NTE4NVx1NUJCOVx1NTQ4Q1x1NTZGRVx1NjgwN1x1OTBGRFx1NjYyRlx1NTNFRlx1NEVFNVx1NEZFRVx1NjUzOVx1NzY4NFx1NTY2Mlx1RkYwOFx1NUY1M1x1NzEzNlx1NjcyQ1x1Njc2MVx1NTE4NVx1NUJCOVx1NEU1Rlx1NjYyRlx1NTNFRlx1NEVFNVx1OTY5MFx1ODVDRlx1NzY4NFx1RkYwOScsXG4gICAgLy8gY29weXJpZ2h0OiAnTUlUIExpY2Vuc2UgfCBcdTk3RTlcdTk4REVcdTdGQkQnXG5cbiAgICBtZXNzYWdlOiBgXHVEODNEXHVERTBCXHU3NTI4XHU1RkMzXHU1M0JCXHU0RUE3XHU1MUZBXHU5QUQ4XHU4RDI4XHU5MUNGXHU3Njg0XHU0RUUzXHU3ODAxYFxuICAgIC8vIGljcFJlY29yZDoge1xuICAgIC8vICAgbmFtZTogJ1x1ODcwMElDUFx1NTkwNzE5MDExNzI0XHU1M0Y3JyxcbiAgICAvLyAgIGxpbms6ICdodHRwczovL2JlaWFuLm1paXQuZ292LmNuLydcbiAgICAvLyB9LFxuICAgIC8vIHNlY3VyaXR5UmVjb3JkOiB7XG4gICAgLy8gICBuYW1lOiAnXHU1MTZDXHU3RjUxXHU1Qjg5XHU1OTA3eHh4eHgnLFxuICAgIC8vICAgbGluazogJ2h0dHBzOi8vd3d3LmJlaWFuLmdvdi5jbi9wb3J0YWwvaW5kZXguZG8nXG4gICAgLy8gfVxuICB9LFxuXG4gIC8vIFx1NEUzQlx1OTg5OFx1ODI3Mlx1NEZFRVx1NjUzOVxuICB0aGVtZUNvbG9yOiAnZWwtYmx1ZScsXG5cbiAgLy8gXHU2NTg3XHU3QUUwXHU5RUQ4XHU4QkE0XHU0RjVDXHU4MDA1XG4gIGF1dGhvcjogJ1x1OTdFOSBcdTk4REUgXHU3RkJEJyxcblxuICAvLyBcdTUzQ0JcdTk0RkVcbiAgZnJpZW5kOiBbXSxcbiAgb21sMmQ6IHtcbiAgICAvLyBkb2NrZWRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAvLyBtb2JpbGVEaXNwbGF5OiB0cnVlLFxuICAgIC8vIG1vZGVsczogW1xuICAgIC8vICAge1xuICAgIC8vICAgICBwb3NpdGlvbjogWzMwMCwgMF0sXG4gICAgLy8gICAgIG1vYmlsZVBvc2l0aW9uOiBbMCwgMF0sXG4gICAgLy8gICAgIC8vIHNjYWxlOiAwLjA1LFxuICAgIC8vICAgICAvLyBtb2JpbGVTY2FsZTogMC4wMixcbiAgICAvLyAgICAgc3RhZ2VTdHlsZToge1xuICAgIC8vICAgICAgIC8vIGhlaWdodDogNDUwXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIC8vIG1vYmlsZVN0YWdlU3R5bGU6IHtcbiAgICAvLyAgICAgLy8gICBoZWlnaHQ6IDM3MCxcbiAgICAvLyAgICAgLy8gICB3aWR0aDogNDAwXG4gICAgLy8gICAgIC8vIH0sXG4gICAgLy8gICAgIC8vIHBhdGg6ICdodHRwczovL21vZGVsLm9tbDJkLmNvbS9ISzQxNi0xLW5vcm1hbC9tb2RlbC5qc29uJ1xuICAgIC8vICAgICBwYXRoOiAnaHR0cHM6Ly9tb2RlbC5vbWwyZC5jb20vaGFydXRvL2hhcnV0by5tb2RlbC5qc29uJ1xuICAgIC8vICAgICAvLyBwYXRoOiAnaHR0cHM6Ly9vbWwyZC1tb2RlbHMuc3VnYXJhdC50b3AvbWFpL21vZGVsLmpzb24nXG4gICAgLy8gICB9XG4gICAgLy8gXVxuICB9LFxuICAvLyBcdTUxNkNcdTU0NEFcbiAgcG9wb3Zlcjoge1xuICAgIGR1cmF0aW9uOiAzLFxuICAgIG1vYmlsZU1pbmlmeTogdHJ1ZSxcbiAgICB0aXRsZTogJ1x1NTE2Q1x1NTQ0QScsXG4gICAgYm9keTogW1xuICAgICAgeyB0eXBlOiAndGV4dCcsIGNvbnRlbnQ6ICdcdUQ4M0RcdURDNDdcdUQ4M0RcdURDNDdcdUQ4M0RcdURDNDdcdTYyNkJcdTYyMTEnIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHN0eWxlOiAnaGVpZ2h0OjYwcHg7d2lkdGg6NjBweDtvYmplY3QtZml0OmNvdmVyJyxcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly9qZi10ZW1wLTEzMDE0NDYxODguY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vd2VDaGF0LmpwZydcbiAgICAgIH1cbiAgICBdXG4gIH1cbn0pXG5cbmV4cG9ydCB7IGJsb2dUaGVtZSB9XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGZvbnQtYWxsXFxcXHZpdGUtcHJlc3NcXFxcbXktYmxvZ1xcXFxkb2NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxmb250LWFsbFxcXFx2aXRlLXByZXNzXFxcXG15LWJsb2dcXFxcZG9jc1xcXFx1dGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZm9udC1hbGwvdml0ZS1wcmVzcy9teS1ibG9nL2RvY3MvdXRpbHMudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2lkZWJhcigpIHtcbiAgY29uc3QgZGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2FydGljbGVzJylcbiAgY29uc3QgZGlyZW50cyA9IGZzLnJlYWRkaXJTeW5jKGRpciwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gIGNvbnN0IHNpZGViYXIgPSBkaXJlbnRzLnJlZHVjZSgocHJlOiBhbnksIGRpcmVudCkgPT4ge1xuICAgIGlmIChkaXJlbnQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgY29uc3QgaXRlbXMgPSBmcy5yZWFkZGlyU3luYyhkaXIgKyAnXFxcXCcgKyBkaXJlbnQubmFtZSwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pLm1hcCgobykgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gby5uYW1lLnNwbGl0KCcuJykuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRleHQ6IG5hbWUsXG4gICAgICAgICAgbGluazogYC9hcnRpY2xlcy8ke2RpcmVudC5uYW1lfS8ke25hbWV9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGRpcmVudC5uYW1lID09PSAnXHU1RjAwXHU3QkM3Jykge1xuICAgICAgICBwcmUudW5zaGlmdCh7XG4gICAgICAgICAgdGV4dDogZGlyZW50Lm5hbWUsXG4gICAgICAgICAgaXRlbXNcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZS5wdXNoKHtcbiAgICAgICAgICB0ZXh0OiBkaXJlbnQubmFtZSxcbiAgICAgICAgICBpdGVtc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJlXG4gIH0sIFtdKVxuXG4gIHJldHVybiBzaWRlYmFyXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGZvbnQtYWxsXFxcXHZpdGUtcHJlc3NcXFxcbXktYmxvZ1xcXFxkb2NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxmb250LWFsbFxcXFx2aXRlLXByZXNzXFxcXG15LWJsb2dcXFxcZG9jc1xcXFxwbHVnaW5zLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9mb250LWFsbC92aXRlLXByZXNzL215LWJsb2cvZG9jcy9wbHVnaW5zLnRzXCI7ZXhwb3J0IGZ1bmN0aW9uIG11c2ljUGx1Z2luKG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdtdXNpYy1wbHVnaW4nLFxuICAgIGVuZm9yY2U6ICdwb3N0JyxcbiAgICBhc3luYyB3cml0ZUJ1bmRsZSgpIHtcbiAgICAgIC8vIFx1Nzg2RVx1NEZERFx1NTcyOGJvZHlcdTUyQTBcdThGN0RcdTVCOENcdTYyMTBcdTU0MEVcdTYyNjdcdTg4NENcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBzY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgLy8gXHU0RjYwXHU3Njg0XHU2M0QyXHU0RUY2XHU5MDNCXHU4RjkxXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RPTSBmdWxseSBsb2FkZWQgYW5kIHBhcnNlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIGBcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FsaW5lUGx1Z2luKG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICd3YWxpbmUtcGx1Z2luJyxcbiAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgYXN5bmMgd3JpdGVCdW5kbGUoKSB7XG4gICAgICAvLyBcdTc4NkVcdTRGRERcdTU3Mjhib2R5XHU1MkEwXHU4RjdEXHU1QjhDXHU2MjEwXHU1NDBFXHU2MjY3XHU4ODRDXG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgIC8vIFx1NEY2MFx1NzY4NFx1NjNEMlx1NEVGNlx1OTAzQlx1OEY5MVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdET00gZnVsbHkgbG9hZGVkIGFuZCBwYXJzZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICBgXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgICB9XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1UsU0FBUyxvQkFBb0I7QUFDN1YsU0FBUyxxQkFBcUI7OztBQ0E5QixTQUFTLHNCQUFzQjtBQWlCL0IsSUFBTSxZQUFZLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVMvQixRQUFRO0FBQUEsSUFDTixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLVCxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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