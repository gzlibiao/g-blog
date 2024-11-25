import{_ as n,o as a,c as l,a as e}from"./app.d0abd10b.js";const p="/assets/replay.f92e4953.png",r="/assets/copyfetch.2d6e6cb5.png",c="/assets/selector.93448132.png",i="/assets/quickSelector.142f0122.png",o="/assets/lighthouse.b36b2cb6.png",t="/assets/performance.a06c065b.webp",b="/assets/performance1.99abd246.webp",g=JSON.parse('{"title":"google 调试技巧","description":"","frontmatter":{},"headers":[{"level":2,"title":"获取网页图片的 base64","slug":"获取网页图片的-base64","link":"#获取网页图片的-base64","children":[]},{"level":2,"title":"网络请求过滤","slug":"网络请求过滤","link":"#网络请求过滤","children":[]},{"level":2,"title":"请求重发","slug":"请求重发","link":"#请求重发","children":[]},{"level":2,"title":"修改请求参数 copy as fetch","slug":"修改请求参数-copy-as-fetch","link":"#修改请求参数-copy-as-fetch","children":[]},{"level":2,"title":"快速选中 查看元素","slug":"快速选中-查看元素","link":"#快速选中-查看元素","children":[]},{"level":2,"title":"快速选中某些元素","slug":"快速选中某些元素","link":"#快速选中某些元素","children":[]},{"level":2,"title":"lighthouse 生成网站报告","slug":"lighthouse-生成网站报告","link":"#lighthouse-生成网站报告","children":[{"level":3,"title":"Lighthouse 会衡量以下 Metrics 性能指标项：","slug":"lighthouse-会衡量以下-metrics-性能指标项","link":"#lighthouse-会衡量以下-metrics-性能指标项","children":[]},{"level":3,"title":"lighthouse 总结","slug":"lighthouse-总结","link":"#lighthouse-总结","children":[]}]},{"level":2,"title":"performance","slug":"performance","link":"#performance","children":[{"level":3,"title":"分析每一秒的帧","slug":"分析每一秒的帧","link":"#分析每一秒的帧","children":[]},{"level":3,"title":"话外:","slug":"话外","link":"#话外","children":[]}]}],"relativePath":"docs/other/google调试技巧.md"}'),C={name:"docs/other/google调试技巧.md"};function A(u,s,m,y,h,d){return a(),l("div",null,s[0]||(s[0]=[e('<h1 id="google-调试技巧" tabindex="-1">google 调试技巧 <a class="header-anchor" href="#google-调试技巧" aria-hidden="true">#</a></h1><h2 id="获取网页图片的-base64" tabindex="-1">获取网页图片的 base64 <a class="header-anchor" href="#获取网页图片的-base64" aria-hidden="true">#</a></h2><p>在开发者工具里打开源代码模式 source 选择图片 找到右边图片显示区 以数据 uri 格式复制图片</p><h2 id="网络请求过滤" tabindex="-1">网络请求过滤 <a class="header-anchor" href="#网络请求过滤" aria-hidden="true">#</a></h2><p>netword fetch/xhr</p><h2 id="请求重发" tabindex="-1">请求重发 <a class="header-anchor" href="#请求重发" aria-hidden="true">#</a></h2><p>netword 请求 右键 replay xhr <img src="'+p+'" alt=""></p><h2 id="修改请求参数-copy-as-fetch" tabindex="-1">修改请求参数 copy as fetch <a class="header-anchor" href="#修改请求参数-copy-as-fetch" aria-hidden="true">#</a></h2><p><img src="'+r+'" alt=""></p><h2 id="快速选中-查看元素" tabindex="-1">快速选中 查看元素 <a class="header-anchor" href="#快速选中-查看元素" aria-hidden="true">#</a></h2><p><img src="'+c+'" alt=""></p><h2 id="快速选中某些元素" tabindex="-1">快速选中某些元素 <a class="header-anchor" href="#快速选中某些元素" aria-hidden="true">#</a></h2><p><img src="'+i+'" alt=""></p><h2 id="lighthouse-生成网站报告" tabindex="-1">lighthouse 生成网站报告 <a class="header-anchor" href="#lighthouse-生成网站报告" aria-hidden="true">#</a></h2><p>先访问需要评估的网站，比如 <a href="http://www.baidu.com" target="_blank" rel="noreferrer">http://www.baidu.com</a>，然后点击灯塔按钮，选择 generate report 即可 <img src="'+o+`" alt=""></p><h3 id="lighthouse-会衡量以下-metrics-性能指标项" tabindex="-1">Lighthouse 会衡量以下 Metrics 性能指标项： <a class="header-anchor" href="#lighthouse-会衡量以下-metrics-性能指标项" aria-hidden="true">#</a></h3><p>首次内容绘制（First Contentful Paint）。即浏览器首次将任意内容（如文字、图像、canvas 等）绘制到屏幕上的时间点。</p><p>首次有效绘制（First Meaningful Paint）。衡量了用户感知页面的主要内容（primary content）可见的时间。对于不同的站点，首要内容是不同的，例如：对于博客文章，标题及首屏文字是首要内容，而对于购物网站来说，图片也会变得很重要。</p><p>首次 CPU 空闲（First CPU Idle）。即页面首次能够对输入做出反应的时间点，其出现时机往往在首次有效绘制完成之后。该指标目前仍处于实验阶段。</p><p>可交互时间（Time to Interactive）。指的是所有的页面内容都已经成功加载，且能够快速地对用户的操作做出反应的时间点。该指标目前仍处于实验阶段。</p><p>速度指标（Speed Index）。衡量了首屏可见内容绘制在屏幕上的速度。在首次加载页面的过程中尽量展现更多的内容，往往能给用户带来更好的体验，所以速度指标的值约小越好。</p><p>输入延迟估值（Estimated Input Latency）。这个指标衡量了页面对用户输入行为的反应速度，其基准值应低于 50ms。 Metrics 部分的指标项会直接影响分数，可以作为我们的主要参考点。</p><h3 id="lighthouse-总结" tabindex="-1">lighthouse 总结 <a class="header-anchor" href="#lighthouse-总结" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Num.1 减少未使用的 JavaScript</span></span>
<span class="line"><span style="color:#A6ACCD;">Remove unused JavaScript</span></span>
<span class="line"><span style="color:#A6ACCD;">请减少未使用的 JavaScript，并等到需要使用时再加载脚本，以减少网络活动耗用的字节数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.2 采用新一代格式提供图片</span></span>
<span class="line"><span style="color:#A6ACCD;">Serve images in modern formats</span></span>
<span class="line"><span style="color:#A6ACCD;">WebP 和 AVIF 等图片格式的压缩效果通常优于 PNG 或 JPEG，因而下载速度更快，消耗的数据流量更少</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.3 适当调整图片大小</span></span>
<span class="line"><span style="color:#A6ACCD;">Properly size images</span></span>
<span class="line"><span style="color:#A6ACCD;">提供大小合适的图片可节省移动数据网络流量并缩短加载用时</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.4 推迟加载屏幕外图片</span></span>
<span class="line"><span style="color:#A6ACCD;">Defer offscreen images</span></span>
<span class="line"><span style="color:#A6ACCD;">建议您在所有关键资源加载完毕后推迟加载屏幕外图片和处于隐藏状态的图片，从而缩短可交互前的耗时</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;/docs5 移除阻塞渲染的资源</span></span>
<span class="line"><span style="color:#A6ACCD;">Eliminate render-blocking resources</span></span>
<span class="line"><span style="color:#A6ACCD;">资源阻止了系统对您网页的首次渲染。建议以内嵌方式提供关键的 JS/CSS，并推迟提供所有非关键的 JS/样式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.6 减少未使用的 CSS</span></span>
<span class="line"><span style="color:#A6ACCD;">Remove unused CSS</span></span>
<span class="line"><span style="color:#A6ACCD;">请从样式表中减少未使用的规则，并延迟加载首屏内容未用到的 CSS，以减少网络活动耗用的字节数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.7 使用视频格式提供动画内容</span></span>
<span class="line"><span style="color:#A6ACCD;">Use video formats for animated content</span></span>
<span class="line"><span style="color:#A6ACCD;">使用大型 GIF 提供动画内容会导致效率低下。建议您改用 MPEG4/WebM 视频（来提供动画）和 PNG/WebP（来提供静态图片）以减少网络活动消耗的字节数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.8 预先连接到必要的来源</span></span>
<span class="line"><span style="color:#A6ACCD;">Preconnect to required origins</span></span>
<span class="line"><span style="color:#A6ACCD;">建议添加 preconnect 或 dns-prefetch 资源提示，以尽早与重要的第三方来源建立连接</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.9 应避免向新型浏览器提供旧版 JavaScript</span></span>
<span class="line"><span style="color:#A6ACCD;">Deploying ES2015+ Code in Production Today</span></span>
<span class="line"><span style="color:#A6ACCD;">Polyfill 和 transform 让旧版浏览器能够使用新的 JavaScript 功能。不过，其中的很多函数对新型浏览器而言并非必需。对于打包的 JavaScript，请采用现代脚本部署策略，以便利用 module/nomodule 功能检测机制来减少传送到新型浏览器的代码量，同时保留对旧版浏览器的支持</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.10 确保文本在网页字体加载期间保持可见状态</span></span>
<span class="line"><span style="color:#A6ACCD;">Ensure text remains visible during webfont load</span></span>
<span class="line"><span style="color:#A6ACCD;">利用 font-display 这项 CSS 功能，确保文本在网页字体加载期间始终对用户可见</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.11 未使用被动式监听器来提高滚动性能</span></span>
<span class="line"><span style="color:#A6ACCD;">Use passive listeners to improve scrolling performance</span></span>
<span class="line"><span style="color:#A6ACCD;">建议您将触摸和滚轮事件监听器标记为 passive，以提高页面的滚动性能,passive 不会对事件的默认行为说 no</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.12 图片元素没有明确的 width 和 height</span></span>
<span class="line"><span style="color:#A6ACCD;">请为图片元素设置明确的宽度值和高度值，以减少布局偏移并改善 CLS</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.13 注册“unload”事件监听器</span></span>
<span class="line"><span style="color:#A6ACCD;">Legacy lifecycle APIs to avoid</span></span>
<span class="line"><span style="color:#A6ACCD;">unload 事件不会可靠地触发，而且监听该事件可能会妨碍系统实施“往返缓存”之类的浏览器优化策略。建议您改用 pagehide 或 visibilitychange 事件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.14 最大限度地减少主线程工作</span></span>
<span class="line"><span style="color:#A6ACCD;">Minimize main thread work</span></span>
<span class="line"><span style="color:#A6ACCD;">建议您减少为解析、编译和执行 JS 而花费的时间。您可能会发现，提供较小的 JS 负载有助于实现此目标</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.15 采用高效的缓存策略提供静态资源</span></span>
<span class="line"><span style="color:#A6ACCD;">Serve static assets with an efficient cache policy</span></span>
<span class="line"><span style="color:#A6ACCD;">延长缓存期限可加快重访您网页的速度</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.16 缩短 JavaScript 执行用时</span></span>
<span class="line"><span style="color:#A6ACCD;">Reduce JavaScript execution time</span></span>
<span class="line"><span style="color:#A6ACCD;">建议您减少为解析、编译和执行 JS 而花费的时间。您可能会发现，提供较小的 JS 负载有助于实现此目标</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.17 避免链接关键请求</span></span>
<span class="line"><span style="color:#A6ACCD;">Avoid chaining critical requests</span></span>
<span class="line"><span style="color:#A6ACCD;">下面的关键请求链显示了以高优先级加载的资源。请考虑缩短链长、缩减资源的下载文件大小，或者推迟下载不必要的资源，从而提高网页加载速度</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.18 请保持较低的请求数量和较小的传输大小</span></span>
<span class="line"><span style="color:#A6ACCD;">Use Lighthouse for performance budgets</span></span>
<span class="line"><span style="color:#A6ACCD;">performancebudget</span></span>
<span class="line"><span style="color:#A6ACCD;">若要设置页面资源数量和大小的预算，请添加 budget.json 文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.19 最大内容渲染时间元素</span></span>
<span class="line"><span style="color:#A6ACCD;">Largest Contentful Paint</span></span>
<span class="line"><span style="color:#A6ACCD;">这是此视口内渲染的最大内容元素</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.20 请避免出现大幅度的布局偏移</span></span>
<span class="line"><span style="color:#A6ACCD;">这些 DOM 元素对该网页的 CLS 影响最大</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.21 应避免出现长时间运行的主线程任务</span></span>
<span class="line"><span style="color:#A6ACCD;">Are long JavaScript tasks delaying your Time to Interactive?</span></span>
<span class="line"><span style="color:#A6ACCD;">列出了主线程中运行时间最长的任务，有助于识别出导致输入延迟的最主要原因</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.22 避免使用未合成的动画</span></span>
<span class="line"><span style="color:#A6ACCD;">Avoid non-composited animations</span></span>
<span class="line"><span style="color:#A6ACCD;">未合成的动画可能会卡顿并增加 CLS</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.23 缩减 CSS</span></span>
<span class="line"><span style="color:#A6ACCD;">Minify CSS</span></span>
<span class="line"><span style="color:#A6ACCD;">缩减 CSS 文件大小可缩减网络负载规模</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.24 缩减 JavaScript</span></span>
<span class="line"><span style="color:#A6ACCD;">Minify JavaScript</span></span>
<span class="line"><span style="color:#A6ACCD;">如果缩减 JavaScript 文件大小，则既能缩减负载规模，又能缩短脚本解析用时</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.25 对图片进行高效编码</span></span>
<span class="line"><span style="color:#A6ACCD;">Efficiently encode images</span></span>
<span class="line"><span style="color:#A6ACCD;">如果图片经过了优化，则加载速度会更快，且消耗的移动数据网络流量会更少</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.26 启用文本压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">Enable text compression</span></span>
<span class="line"><span style="color:#A6ACCD;">对于文本资源，应先压缩（gzip、deflate 或 brotli），然后再提供，以最大限度地减少网络活动消耗的字节总数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.27 初始服务器响应用时较短</span></span>
<span class="line"><span style="color:#A6ACCD;">Reduce server response times (TTFB)</span></span>
<span class="line"><span style="color:#A6ACCD;">请确保服务器响应主文档的用时较短，因为这会影响到所有其他请求的响应时间</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.28 避免多次网页重定向</span></span>
<span class="line"><span style="color:#A6ACCD;">Avoid multiple page redirects</span></span>
<span class="line"><span style="color:#A6ACCD;">重定向会在网页可加载前引入更多延迟</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.29 预加载关键请求</span></span>
<span class="line"><span style="color:#A6ACCD;">Preload key requests</span></span>
<span class="line"><span style="color:#A6ACCD;">建议使用 来优先提取当前在网页加载后期请求的资源</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.30 使用 HTTP/2</span></span>
<span class="line"><span style="color:#A6ACCD;">Does not use HTTP/2 for all of its resources</span></span>
<span class="line"><span style="color:#A6ACCD;">HTTP/2 提供了许多优于 HTTP/1.1 的益处，包括二进制标头和多路复用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.31 请移除 JavaScript 软件包中的重复模块</span></span>
<span class="line"><span style="color:#A6ACCD;">从软件包中移除重复的大型 JavaScript 模块可减少网络传输时不必要的流量消耗</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.32 预加载 LCP 元素所用图片</span></span>
<span class="line"><span style="color:#A6ACCD;">优化 Largest Contentful Paint 最大内容绘制</span></span>
<span class="line"><span style="color:#A6ACCD;">请预加载 Largest Contentful Paint (LCP) 元素所用的图片，以缩短您的 LCP 用时</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.33 避免网络负载过大</span></span>
<span class="line"><span style="color:#A6ACCD;">Avoid enormous network payloads</span></span>
<span class="line"><span style="color:#A6ACCD;">网络负载过大不仅会让用户付出真金白银，还极有可能会延长加载用时</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.34 避免 DOM 规模过大</span></span>
<span class="line"><span style="color:#A6ACCD;">Avoid an excessive DOM size</span></span>
<span class="line"><span style="color:#A6ACCD;">大型 DOM 会增加内存使用量、导致样式计算用时延长，并产生高昂的布局重排成本</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.35 User Timing 标记和测量结果</span></span>
<span class="line"><span style="color:#A6ACCD;">User Timing marks and measures</span></span>
<span class="line"><span style="color:#A6ACCD;">建议使用 User Timing API 检测您的应用，从而衡量应用在关键用户体验中的实际性能</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.36 尽量减少第三方使用</span></span>
<span class="line"><span style="color:#A6ACCD;">Loading Third-Party JavaScript</span></span>
<span class="line"><span style="color:#A6ACCD;">第三方代码可能会显著影响加载性能。请限制冗余第三方提供商的数量，并尝试在页面完成主要加载后再加载第三方代码</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.37 使用 Facade 延迟加载第三方资源</span></span>
<span class="line"><span style="color:#A6ACCD;">Lazy load third-party resources with facades</span></span>
<span class="line"><span style="color:#A6ACCD;">您可以延迟加载某些第三方嵌入代码。不妨考虑使用 Facade 替换这些代码，直到您需要使用它们为止</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.38 Largest Contentful Paint 所对应的图片未被延迟加载</span></span>
<span class="line"><span style="color:#A6ACCD;">The performance effects of too much lazy-loading</span></span>
<span class="line"><span style="color:#A6ACCD;">被延迟加载的首屏图片会在页面生命周期内的较晚时间呈现，这可能会致使系统延迟渲染最大内容元素</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.39 请勿使用 document.write()</span></span>
<span class="line"><span style="color:#A6ACCD;">Uses document.write()</span></span>
<span class="line"><span style="color:#A6ACCD;">对于连接速度较慢的用户，通过 document.write() 动态注入的外部脚本可将网页加载延迟数十秒</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Num.40 具有包含 width 或 initial-scale 的 标记</span></span>
<span class="line"><span style="color:#A6ACCD;">Does not have a tag with width or initial-scale</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br></div></div><h2 id="performance" tabindex="-1">performance <a class="header-anchor" href="#performance" aria-hidden="true">#</a></h2><p>点击录制按钮，开始录制，在对应页面进行有关操作，然后点击停止，停止录制、处理数据并生成性能报告。 <img src="`+t+'" alt=""></p><h3 id="分析每一秒的帧" tabindex="-1">分析每一秒的帧 <a class="header-anchor" href="#分析每一秒的帧" aria-hidden="true">#</a></h3><p>FPS（frames per second）是用来分析动画的一个主要性能指标。能保持在 60 的 FPS 的话，那么用户体验就是不错的。观察 FPS 图表，如果你发现了一个红色的长条，那么就说明这些帧存在严重问题，有可能导致非常差的用户体验。一般来说，绿色的长条越高，说明 FPS 越高，用户体验越好。</p><p>就在 FPS 图表下方，你会看到 CPU 图表。在 CPU 图表中的各种颜色与 Summary 面板里的颜色是相互对应的，Summary 面板就在 Performance 面板的下方。CPU 图表中的各种颜色代表着在这个时间段内，CPU 在各种处理上所花费的时间。如果你看到了某个处理占用了大量的时间，那么这可能就是一个可以找到性能瓶颈的线索。 <img src="'+b+'" alt=""></p><h3 id="话外" tabindex="-1">话外: <a class="header-anchor" href="#话外" aria-hidden="true">#</a></h3><p>破解 csdn 登录复制 document.designMode=&#39;on&#39;</p><p><a href="https://www.yuque.com/qzhou/learning/lwhew1" target="_blank" rel="noreferrer">https://www.yuque.com/qzhou/learning/lwhew1</a></p>',32)]))}const f=n(C,[["render",A]]);export{g as __pageData,f as default};
