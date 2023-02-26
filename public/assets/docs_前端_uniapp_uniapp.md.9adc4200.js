import{_ as s,c as n,o as a,a as l}from"./app.116e60de.js";const d=JSON.parse('{"title":"生命周期","description":"","frontmatter":{},"headers":[{"level":2,"title":"应用生命周期","slug":"应用生命周期","link":"#应用生命周期","children":[]},{"level":2,"title":"页面生命周期函数:","slug":"页面生命周期函数","link":"#页面生命周期函数","children":[]},{"level":2,"title":"组件生命周期","slug":"组件生命周期","link":"#组件生命周期","children":[]}],"relativePath":"docs/前端/uniapp/uniapp.md"}'),p={name:"docs/前端/uniapp/uniapp.md"},e=l(`<h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-hidden="true">#</a></h1><h2 id="应用生命周期" tabindex="-1">应用生命周期 <a class="header-anchor" href="#应用生命周期" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">onLaunch:当 uni-app 初始化完成时触发(全局只触发一次)</span></span>
<span class="line"><span style="color:#A6ACCD;">onShow:当 uni-app 启动，或从后台进入前台显示</span></span>
<span class="line"><span style="color:#A6ACCD;">onHide:当 uni-app 从前台进入后台</span></span>
<span class="line"><span style="color:#A6ACCD;">onError:当 uni-app 报错时触发</span></span>
<span class="line"><span style="color:#A6ACCD;">onUniNViewMessage:对 nvue 页面发送的数据进行监听</span></span>
<span class="line"><span style="color:#A6ACCD;">onUnhandledRejection:对未处理的 Promise 拒绝事件监听函数</span></span>
<span class="line"><span style="color:#A6ACCD;">onPageNotFound:页面不存在监听函数</span></span>
<span class="line"><span style="color:#A6ACCD;">onThemeChange:监听系统主题变化</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="页面生命周期函数" tabindex="-1">页面生命周期函数: <a class="header-anchor" href="#页面生命周期函数" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">onLoad: 监听页面加载，其参数为上个页面传递的数据，参数类型为 Object(用于页面传参)。</span></span>
<span class="line"><span style="color:#A6ACCD;">onShow: 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面</span></span>
<span class="line"><span style="color:#A6ACCD;">onReady: 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发</span></span>
<span class="line"><span style="color:#A6ACCD;">onHide: 监听页面隐藏</span></span>
<span class="line"><span style="color:#A6ACCD;">onUnload: 监听页面卸载</span></span>
<span class="line"><span style="color:#A6ACCD;">onResize: 监听窗口尺寸变化</span></span>
<span class="line"><span style="color:#A6ACCD;">onPullDownRefresh: 监听用户下拉动作，一般用于下拉刷新</span></span>
<span class="line"><span style="color:#A6ACCD;">onReachBottom: 页面滚动到底部的事件（不是 scroll-view 滚到底），常用于下拉下一页数据。</span></span>
<span class="line"><span style="color:#A6ACCD;">onTabItemTap: 点击 tab 时触发，参数为 Object</span></span>
<span class="line"><span style="color:#A6ACCD;">onShareAppMessage: 用户点击右上角分享</span></span>
<span class="line"><span style="color:#A6ACCD;">onPageScroll: 监听页面滚动，参数为 Object</span></span>
<span class="line"><span style="color:#A6ACCD;">onNavigationBarButtonTap: 监听原生标题栏按钮点击事件，参数为 Object</span></span>
<span class="line"><span style="color:#A6ACCD;">onBackPress: 监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack 表示来源是 uni.navigateBack</span></span>
<span class="line"><span style="color:#A6ACCD;">onNavigationBarSearchInputChanged: 监听原生标题栏搜索输入框输入内容变化事件</span></span>
<span class="line"><span style="color:#A6ACCD;">onNavigationBarSearchInputConfirmed: 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。</span></span>
<span class="line"><span style="color:#A6ACCD;">onNavigationBarSearchInputClicked: 监听原生标题栏搜索输入框点击事件</span></span>
<span class="line"><span style="color:#A6ACCD;">onShareTimeline: 监听用户点击右上角转发到朋友圈</span></span>
<span class="line"><span style="color:#A6ACCD;">onAddToFavorites: 监听用户点击右上角收藏</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="组件生命周期" tabindex="-1">组件生命周期 <a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni-app 组件支持的生命周期，与 vue 标准组件的生命周期相同。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">beforeCreate： 在实例初始化之后被调用</span></span>
<span class="line"><span style="color:#A6ACCD;">created: 在实例创建完成后被立即调用</span></span>
<span class="line"><span style="color:#A6ACCD;">beforeMount: 在挂载开始之前被调用</span></span>
<span class="line"><span style="color:#A6ACCD;">mounted: 挂载到实例上去之后调用</span></span>
<span class="line"><span style="color:#A6ACCD;">beforeUpdate: 数据更新时调用，发生在虚拟 DOM 打补丁之前。</span></span>
<span class="line"><span style="color:#A6ACCD;">updated: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。</span></span>
<span class="line"><span style="color:#A6ACCD;">beforeDestroy: 实例销毁之前调用。在这一步，实例仍然完全可用。</span></span>
<span class="line"><span style="color:#A6ACCD;">destroyed: Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h1 id="组件-标签的变化" tabindex="-1">组件/标签的变化 <a class="header-anchor" href="#组件-标签的变化" aria-hidden="true">#</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">以前是html标签，现在是小程序标签</span></span>
<span class="line"><span style="color:#A6ACCD;">div 改成 view</span></span>
<span class="line"><span style="color:#A6ACCD;">span、font 改成 text</span></span>
<span class="line"><span style="color:#A6ACCD;">a 改成 navigator</span></span>
<span class="line"><span style="color:#A6ACCD;">img 改成 image</span></span>
<span class="line"><span style="color:#A6ACCD;">input 还在，但type属性改成了confirmtype</span></span>
<span class="line"><span style="color:#A6ACCD;">form、button、checkbox、radio、label、textarea、canvas、video 这些还在。</span></span>
<span class="line"><span style="color:#A6ACCD;">select 改成 picker</span></span>
<span class="line"><span style="color:#A6ACCD;">iframe 改成 web-view</span></span>
<span class="line"><span style="color:#A6ACCD;">ul、li没有了，都用view替代</span></span>
<span class="line"><span style="color:#A6ACCD;">audio 不再推荐使用，改成api方式，背景音频api文档</span></span>
<span class="line"><span style="color:#A6ACCD;">其实老的HTML标签也可以在uni-app里使用，uni-app编译器会在编译时把老标签转为新标签。但不推荐这种用法，调试H5端时容易混乱，基于元素的选择器也会出问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">除了改动外，新增了一批手机端常用的新组件</span></span>
<span class="line"><span style="color:#A6ACCD;">scroll-view 可区域滚动视图容器</span></span>
<span class="line"><span style="color:#A6ACCD;">swiper 可滑动区域视图容器</span></span>
<span class="line"><span style="color:#A6ACCD;">icon 图标</span></span>
<span class="line"><span style="color:#A6ACCD;">rich-text 富文本（不可执行js，但可渲染各种文字格式和图片）</span></span>
<span class="line"><span style="color:#A6ACCD;">progress 进度条</span></span>
<span class="line"><span style="color:#A6ACCD;">slider 滑块指示器</span></span>
<span class="line"><span style="color:#A6ACCD;">switch 开关选择器</span></span>
<span class="line"><span style="color:#A6ACCD;">camera 相机</span></span>
<span class="line"><span style="color:#A6ACCD;">live-player 直播</span></span>
<span class="line"><span style="color:#A6ACCD;">map 地图</span></span>
<span class="line"><span style="color:#A6ACCD;">cover-view 可覆盖原生组件的视图容器</span></span>
<span class="line"><span style="color:#A6ACCD;">cover-view需要多强调几句，uni-app的非h5端的video、map、canvas、textarea是原生组件，层级高于其他组件。如需覆盖原生组件，比如在map上加个遮罩，则需要使用cover-view组件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">除了内置组件，还有很多开源的扩展组件，把常用操作都进行封装，</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h1 id="rpx" tabindex="-1">rpx <a class="header-anchor" href="#rpx" aria-hidden="true">#</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">rpx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。uni-app 规定屏幕基准宽度 750rpx。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">开发者可以通过设计稿基准宽度计算页面元素 rpx 值，设计稿 1px 与框架样式 1rpx 转换公式如下：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">换言之，页面元素宽度在 uni-app 中的宽度计算公式：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">750 * 元素在设计稿中的宽度 / 设计稿基准宽度</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h1 id="js-的变化" tabindex="-1">js 的变化 <a class="header-anchor" href="#js-的变化" aria-hidden="true">#</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">运行环境从浏览器变成v8引擎</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="nvue" tabindex="-1">nvue <a class="header-anchor" href="#nvue" aria-hidden="true">#</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">1. nvue 开发与 vue 开发的常见区别</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2. nvue 页面控制显隐只可以使用 v-if 不可以使用 v-show。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3. nvue 页面只能使用 flex 布局，不支持其他布局方式。页面开发前，首先想清楚这个页面的纵向内容有什么，哪些是要滚动的，然后每个纵向内容的横轴排布有什么，按 flex 布局设计好界面。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4. nvue 页面编译为 H5、小程序时，会做一件 css 默认值对齐的工作。因为 weex 渲染引擎只支持 flex，并且默认 flex 方向是垂直。而 H5 和小程序端，使用 web 渲染，默认不是 flex，并且设置 display:flex 后，它的 flex 方向默认是水平而不是垂直的。所以 nvue 编译为 H5、小程序时，会自动把页面默认布局设为 flex、方向为垂直。当然开发者手动设置后会覆盖默认设置。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5. 文字内容，必须、只能在 组件下。不能在 &lt;div&gt;、&lt;view&gt; 的 text 区域里直接写文字。否则即使渲染了，也无法绑定 js 里的变量。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6. 只有 text 标签可以设置字体大小，字体颜色。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7. 布局不能使用百分比、没有媒体查询。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h1 id="条件编译" tabindex="-1">条件编译 <a class="header-anchor" href="#条件编译" aria-hidden="true">#</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* #ifdef H5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">/* #endif */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* #ifdef MP-WEIXIN */</span></span>
<span class="line"><span style="color:#A6ACCD;">/* #endif */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* #ifdef APP-PLUS */</span></span>
<span class="line"><span style="color:#A6ACCD;">/* #endif */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h1 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-hidden="true">#</a></h1><p>uni.navigateTo(Object) ==&gt; 保留当前界面跳转 uni.redirectTo(object) ==&gt; 关闭当前界面跳转 uni.reLaunch({object}) ==&gt; 关闭所有界面跳转 uni.switchTab(object) ==&gt; 跳转tabBar界面，并且关闭所有非tabBar界面 uni.navigateBack(object) ==&gt; 关闭当前界面，并返回之前界面 通过 getCurrentPages()获取当前界面栈觉得返回第几层</p><h1 id="pages-json文件配置" tabindex="-1">pages.json文件配置 <a class="header-anchor" href="#pages-json文件配置" aria-hidden="true">#</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  pages:[</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      path:&quot;文件路径&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      style:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;navigationBarTitleText&quot;:&quot;界面标题栏名称&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;navigationBarBackgroundColor&quot;:&quot;#000&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;navigationBarTextStyle&quot;:&quot;white|black&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;navigationBarShadow&quot;:{</span></span>
<span class="line"><span style="color:#A6ACCD;">          colorType:&quot;red&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        enablePullDownRefresh:true, // uni.stopPullDownRefresh=&gt;关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">        titlePenetrate:&quot;NO&quot;, // 导航栏点击穿透</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  globalStyle:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    navigationBarTextStyle:&#39;black&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    navigationBarTitleText:&#39;全局顶栏标题&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    navigationBarBackgroundColor:&#39;#fff&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    backgroundColor:&quot;#fff&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  tabbar:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    list:[</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        pagePath:&#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        text:&#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        iconPath:&#39;默认图标&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        selectedIconPath:&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    midButton:{ // ==&gt; 监听 uni.onTabBarMidButtonTap</span></span>
<span class="line"><span style="color:#A6ACCD;">      width:&#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      height:&#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      text:&#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      iconPath:&#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      iconWidth:&#39;24px&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      backgroundImage:&#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      iconFont:&#39;字体图标&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  easycom:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    custom:&quot;u-view&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,21),r=[e];function c(i,o,t,b,C,A){return a(),n("div",null,r)}const m=s(p,[["render",c]]);export{d as __pageData,m as default};
