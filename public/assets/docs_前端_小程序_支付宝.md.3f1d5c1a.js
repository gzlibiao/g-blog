import{_ as n,o as a,c as l,a as e}from"./app.d0abd10b.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"支付宝小程序","slug":"支付宝小程序","link":"#支付宝小程序","children":[]},{"level":3,"title":"小程序组件的生命周期","slug":"小程序组件的生命周期","link":"#小程序组件的生命周期","children":[]}],"relativePath":"docs/前端/小程序/支付宝.md"}'),p={name:"docs/前端/小程序/支付宝.md"};function o(r,s,t,c,i,u){return a(),l("div",null,s[0]||(s[0]=[e(`<h3 id="支付宝小程序" tabindex="-1">支付宝小程序 <a class="header-anchor" href="#支付宝小程序" aria-hidden="true">#</a></h3><h4 id="多维数组循环时指定for-item的名称" tabindex="-1">多维数组循环时指定for-item的名称 <a class="header-anchor" href="#多维数组循环时指定for-item的名称" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const data: [ {name: &#39;a&#39;, datas: [1,2,3]}, {name: &#39;b&#39;, datas: [4,5,6]}]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;view a:for=&quot;{{data}}&quot; a:for-index=&quot;xi&quot; a:for-item=&quot;xitem&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {{xi}}:{{xitem.name}}</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;view a:for=&quot;{{xitem.datas}}&quot; a:for-index=&quot;yi&quot; a:for-item=&quot;yitem&quot;&gt;--{{yi}}:{{yitem}}&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="空标签" tabindex="-1">空标签 <a class="header-anchor" href="#空标签" aria-hidden="true">#</a></h4><p>不会在页面中显示这个标签，常配合if,for使用</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;block&gt;xxxxx&lt;/block&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="图片引入" tabindex="-1">图片引入 <a class="header-anchor" href="#图片引入" aria-hidden="true">#</a></h4><p>css背景图 ACSS 文件里的本地资源引用请使用绝对路径的方式，不支持相对路径引用，例如下方示例</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* 支持 */</span></span>
<span class="line"><span style="color:#A6ACCD;">background-image: url(&#39;/images/ant.png&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">/* 不支持 */</span></span>
<span class="line"><span style="color:#A6ACCD;">background-image: url(&#39;./images/ant.png&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-hidden="true">#</a></h4><p>设置数据，点击事件，事件传参，修改数据</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 1.点击事件-传参，修改参数</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;button onTap=&quot;clickfn&quot; data-msg=&#39;222222&#39;&gt;点击事件&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;view&gt;我是首页--{{msg}}&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Page({</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 数据</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg: &#39;1111&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    clickfn(e){</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 测试点击事件和传参</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;clickfn: &#39;, e, e.target.dataset);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setData({msg: e.target.dataset.msg})</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="底部导航" tabindex="-1">底部导航 <a class="header-anchor" href="#底部导航" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;pages&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;pages/index/index&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;pages/goods/goods&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;pages/user/user&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;window&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;defaultTitle&quot;: &quot;玄空小程序&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;tabBar&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;textColor&quot;: &quot;#dddddd&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;selectedColor&quot;: &quot;#49a9ee&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;backgroundColor&quot;: &quot;#ffffff&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;items&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;pagePath&quot;: &quot;pages/index/index&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;name&quot;: &quot;首页&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;icon&quot;:&quot;assets/imgs/tabnav/icon1.png&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;activeIcon&quot;:&quot;assets/imgs/tabnav/icon1-act.png&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;pagePath&quot;: &quot;pages/goods/goods&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;name&quot;: &quot;商品&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;icon&quot;:&quot;assets/imgs/tabnav/icon2.png&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;activeIcon&quot;:&quot;assets/imgs/tabnav/icon2-act.png&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;pagePath&quot;: &quot;pages/user/user&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;name&quot;: &quot;我的&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;icon&quot;:&quot;assets/imgs/tabnav/icon3.png&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;activeIcon&quot;:&quot;assets/imgs/tabnav/icon3-act.png&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="小程序组件的生命周期" tabindex="-1">小程序组件的生命周期 <a class="header-anchor" href="#小程序组件的生命周期" aria-hidden="true">#</a></h3><ul><li>小程序的应用生命周期指的是从小程序启动到退出的整个过程，主要包含以下几个阶段：</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">onLaunch：小程序初始化时触发，一般用于进行全局数据的初始化和获取，例如获取用户信息、检查登录状态等。</span></span>
<span class="line"><span style="color:#A6ACCD;">onShow：小程序启动或切换到前台时触发，可以执行一些需要实时更新的操作，比如获取用户位置、更新数据等。</span></span>
<span class="line"><span style="color:#A6ACCD;">onHide：小程序切换到后台时触发，可以进行一些清理操作，比如保存用户数据、停止定时器等。</span></span>
<span class="line"><span style="color:#A6ACCD;">onError：小程序发生错误时触发，一般用于捕捉并处理小程序运行时的异常情况，例如网络请求失败、数据解析错误等。</span></span>
<span class="line"><span style="color:#A6ACCD;">onPageNotFount：冷启动（如扫码）打开小程序的页面不存在时</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p>此外，小程序的生命周期还会受到系统资源占用过高、使用重定向方法等因素的影响。当系统资源占用过高或使用重定向方法时，小程序可能会被销毁或触发onHide等生命周期函数。因此，开发者需要注意这些因素对小程序生命周期的影响，并合理利用生命周期函数来实现小程序的最佳性能和用户体验。</p></li><li><p>小程序的页面生命周期主要包含以下几个阶段：</p></li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">onLoad：页面加载时触发，一般在onLoad中发送异步请求来初始化页面数据。</span></span>
<span class="line"><span style="color:#A6ACCD;">onShow：页面显示时触发。</span></span>
<span class="line"><span style="color:#A6ACCD;">onReady：页面初次渲染完成时触发。</span></span>
<span class="line"><span style="color:#A6ACCD;">onHide：页面隐藏时触发，注意不是应用隐藏，切后台时，页面就会隐藏。即整个小程序隐藏时，页面也就隐藏了。另外，在当前页面跳转的时候也相当于当前页面隐藏。</span></span>
<span class="line"><span style="color:#A6ACCD;">onUnload：页面卸载（关闭）时触发，当open-type为redirect、reLaunch、navigateBack时都是关闭当前页面，也即卸载当前页面。</span></span>
<span class="line"><span style="color:#A6ACCD;">onPullDownRefresh：监听用户的下拉动作，当在app.json中配置了允许下拉刷新，在页面中往下拉动就会有下拉刷新的效果。还可以设置下拉刷新时的背景颜色。</span></span>
<span class="line"><span style="color:#A6ACCD;">onReachBottom：页面上拉触底时才会触发。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>小程序的组件生命周期主要包含以下几个阶段：</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">created：组件实例刚被创建好时执行。此时还不能调用setData，一般情况下，这个生命周期只应该用于给组件 this 添加一些自定义属性字段。</span></span>
<span class="line"><span style="color:#A6ACCD;">attached：组件完全初始化完毕、进入页面节点树后执行。this.data 已被初始化，绝大多数初始化工作可以在这个时机进行。</span></span>
<span class="line"><span style="color:#A6ACCD;">detached：组件离开页面节点树后执行。退出一个页面时，如果组件还在页面节点树中，则 detached 会被触发。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,21)]))}const d=n(p,[["render",o]]);export{C as __pageData,d as default};
