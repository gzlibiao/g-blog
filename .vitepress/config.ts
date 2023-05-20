import { defineConfig } from "vitepress";
import { nav } from "./utils/nav";
import { sidebar } from "./utils/sidebar";
import { description } from "./utils/description";
import { algolia } from "./configs/algolia";

const config = defineConfig({
  title: "Smart",
  lang: "zh-CN",
  lastUpdated: false,
  head: [
    [
      "link",
      {
        rel: "icon",
        href:
          "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/R09TUw==/eyJpZCI6IjBkYWFmMGRlLTRjNGYtNDU0OS1iNzVmLTc3YmZlNTU0YjdjZSIsIm5hbWUiOiJ3ZWNoYXQuYm1wIiwiZGlyIjoi5aS05YOPIn0=",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        id: "font-awesome-css",
        href: "https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css",
        type: "text/css",
        media: "all",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js",
      },
    ],
    [
      "script",
      {
        id: "xplayer",
        src: "https://player.qsdurl.cn/Static/player/player.js",
        key: "646868c966e23",
        m: "1",
      },
    ],
  ],
  outDir: "./public",
  description,
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    nav,
    sidebar,
    algolia,
    logo:
      "https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/R09TUw==/eyJpZCI6IjBkYWFmMGRlLTRjNGYtNDU0OS1iNzVmLTc3YmZlNTU0YjdjZSIsIm5hbWUiOiJ3ZWNoYXQuYm1wIiwiZGlyIjoi5aS05YOPIn0=",
    outline: "deep",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outlineTitle: "导航栏",
    footer: {
      message: `😋用心去做高质量的专业前端内容网站`,
    },
  },
});
export default config;
