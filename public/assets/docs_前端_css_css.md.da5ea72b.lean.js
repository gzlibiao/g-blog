import{_ as e,o as p,c as o,a as l,b as s,d as n}from"./app.d0abd10b.js";const t="/assets/gridline.37140a27.png",u=JSON.parse('{"title":"布局","description":"","frontmatter":{},"headers":[{"level":2,"title":"flex","slug":"flex","link":"#flex","children":[{"level":3,"title":"align-items 和 align-content","slug":"align-items-和-align-content","link":"#align-items-和-align-content","children":[]}]},{"level":2,"title":"grid","slug":"grid","link":"#grid","children":[{"level":3,"title":"容器属性","slug":"容器属性","link":"#容器属性","children":[]},{"level":3,"title":"子容器属性","slug":"子容器属性","link":"#子容器属性","children":[]}]},{"level":2,"title":"媒体查询","slug":"媒体查询","link":"#媒体查询","children":[]},{"level":2,"title":"文字溢出隐藏","slug":"文字溢出隐藏","link":"#文字溢出隐藏","children":[]},{"level":2,"title":"无影响触发 bfc","slug":"无影响触发-bfc","link":"#无影响触发-bfc","children":[]},{"level":2,"title":"CSS3 四个自适应关键字——fill-available、max-content、min-content、fit-content","slug":"css3-四个自适应关键字——fill-available、max-content、min-content、fit-content","link":"#css3-四个自适应关键字——fill-available、max-content、min-content、fit-content","children":[{"level":3,"title":"fill-available","slug":"fill-available","link":"#fill-available","children":[]},{"level":3,"title":"fit-content","slug":"fit-content","link":"#fit-content","children":[]},{"level":3,"title":"min-content","slug":"min-content","link":"#min-content","children":[]},{"level":3,"title":"max-content","slug":"max-content","link":"#max-content","children":[]}]},{"level":2,"title":"css 元素混合","slug":"css-元素混合","link":"#css-元素混合","children":[]}],"relativePath":"docs/前端/css/css.md"}'),r={name:"docs/前端/css/css.md"};function c(i,a,d,y,D,C){return p(),o("div",null,a[0]||(a[0]=[l(`<h1 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-hidden="true">#</a></h1><h2 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-hidden="true">#</a></h2><p>居中</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">flex</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>设置三列</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">flex</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> // grow shrink basis</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>根据内容选择大小</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">flex</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="align-items-和-align-content" tabindex="-1">align-items 和 align-content <a class="header-anchor" href="#align-items-和-align-content" aria-hidden="true">#</a></h3><p>flex 容器不设置高度并且子项只有一行时，align-content 属性是不起作用的。</p><h2 id="grid" tabindex="-1">grid <a class="header-anchor" href="#grid" aria-hidden="true">#</a></h2><p>设置三列</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">grid</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>自动填充子容器宽度 最小宽度 80px (最后一列居左)</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">grid</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">repeat</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;font-style:italic;">auto-fit</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">minmax</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">80px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* fit 铺满整行 fill 计算空轨道*/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>子容器出现在固定位置</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">garden</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* grid-template-columns: repeat(5,20%) */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-template-rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-column-start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-row-start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-column-end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-row-end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>间隙</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">grid</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">grid-column-gap</span><span style="color:#A6ACCD;">、</span><span style="color:#B2CCD6;">grid-row-gap</span><span style="color:#A6ACCD;">、</span><span style="color:#B2CCD6;">grid-gap</span><span style="color:#A6ACCD;">（前俩的简写）</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="容器属性" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性" aria-hidden="true">#</a></h3><p>grid-template-areas:&#39;lt ct rt&#39; &#39;lm cm rm&#39; &#39;lb cb rb&#39; 和 grid-area</p><p>grid: 行、列、以及行列宽高、间距属性的简写</p><p>grid-auto-columns:50px 设置默认列的宽度，好像没啥用？因为我们通常用 grid-template-columns 来定义列的一些配置信息（已经指定了列的宽度，这时候用 grid-auto-columns 是不生效的）</p><p>grid-auto-rows:50px 设置默认行的高度</p><p>grid-auto-flow:[row|column|dense|row dense|column dense] 控制网格元素排列方式</p><p>row: 也是默认值，增加行的方式继续往下排列 (纵向)</p><p>column: 网格元素排列方式是列 (横向)</p><p>dense； 简单理解就是 宽度是 auto 的</p><p>grid-column-gap 列的间距（也可以写作 column-gap ） grid-row-gap 行的间距（也可以写作 row-gap ） gap (grid-gap) 列、行的间距简写（同样，个人不太提倡使用简写方式）</p><h3 id="子容器属性" tabindex="-1">子容器属性 <a class="header-anchor" href="#子容器属性" aria-hidden="true">#</a></h3><p>grid-area: 合并行、列那几个属性的简写 grid-row-start、grid-column-start、grid-row-end、grid-column-end</p><p>grid-column 列合并两个属性的简写（grid-column-start、grid-column-end），中间使用 / 分割开</p><p>grid-column: 1 / 3;</p><p>grid-row 行合并两个属性的简写（grid-row-start、grid-row-end）用法同上</p><p><img src="`+t+`" alt=""></p><h2 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 超出300像素屏幕</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 300像素屏幕以内</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="文字溢出隐藏" tabindex="-1">文字溢出隐藏 <a class="header-anchor" href="#文字溢出隐藏" aria-hidden="true">#</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ellipsis</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ellipsis</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nowrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="无影响触发-bfc" tabindex="-1">无影响触发 bfc <a class="header-anchor" href="#无影响触发-bfc" aria-hidden="true">#</a></h2><p>display 为 inline-block, table-cell, table-caption, flex,inline-flex overflow:overflow</p><h2 id="css3-四个自适应关键字——fill-available、max-content、min-content、fit-content" tabindex="-1">CSS3 四个自适应关键字——fill-available、max-content、min-content、fit-content <a class="header-anchor" href="#css3-四个自适应关键字——fill-available、max-content、min-content、fit-content" aria-hidden="true">#</a></h2><h3 id="fill-available" tabindex="-1">fill-available <a class="header-anchor" href="#fill-available" aria-hidden="true">#</a></h3><p>width:fill-available 表示撑满可用空间</p>`,44),s("iframe",{width:"100%",height:"auto",frameborder:"0",srcdoc:`
<style>
div{
  background-color: pink;
  display:inline-block;
  width:-webkit-fill-available;
}
</style>
<div>小火柴的蓝色理想</div>
`},null,-1),l(`<div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -webkit-fill-available</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">小火柴的蓝色理想</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="fit-content" tabindex="-1">fit-content <a class="header-anchor" href="#fit-content" aria-hidden="true">#</a></h3><p>width:fit-content 表示将元素宽度收缩为内容宽度</p>`,3),s("iframe",{width:"100%",height:"auto",frameborder:"0",srcdoc:`
<style>
div{
  background-color: pink;
  width:-webkit-fit-content;
  margin:auto;
}
</style>
<div>小火柴的蓝色理想</div>
`},null,-1),s("h3",{id:"min-content",tabindex:"-1"},[n("min-content "),s("a",{class:"header-anchor",href:"#min-content","aria-hidden":"true"},"#")],-1),s("p",null,"width:min-content 表示采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度",-1),s("p",null,"首先，要明白这里的“最小宽度值”是什么意思。替换元素，例如图片的最小宽度值就是图片呈现的宽度，对于文本元素，如果全部是中文，则最小宽度值就是一个中文的宽度值；如果包含英文，因为默认英文单词不换行，所以，最小宽度可能就是里面最长的英文单词的宽度",-1),s("iframe",{width:"100%",height:"auto",frameborder:"0",srcdoc:`
<style>
.outer{
  width:-webkit-min-content;
}
</style>
<div class="outer">
  <div style="height:10px;width:100px;background:lightgreen"></div>
  <div style="background-color: pink;">小火柴的蓝色理想</div>
</div>
`},null,-1),s("h3",{id:"max-content",tabindex:"-1"},[n("max-content "),s("a",{class:"header-anchor",href:"#max-content","aria-hidden":"true"},"#")],-1),s("p",null,"width:max-content 表示采用内部元素宽度值最大的那个元素的宽度作为最终容器的宽度。如果出现文本，则相当于文本不换行",-1),s("iframe",{width:"100%",height:"auto",frameborder:"0",srcdoc:`
<style>
.outer{
  width:-webkit-max-content;
  border:1px solid black;
}
</style>
<div class="outer">
  <div style="height:10px;width:100px;background:lightgreen"></div>
  <div style="background-color: pink;">小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想</div>
</div>
`},null,-1),s("h2",{id:"css-元素混合",tabindex:"-1"},[n("css 元素混合 "),s("a",{class:"header-anchor",href:"#css-元素混合","aria-hidden":"true"},"#")],-1),s("p",null,"元素混合 mix-blend-mode 应用于两个元素之间的混合",-1),s("p",null,"mix-blend-mode",-1),s("p",null,"初始值: normal",-1),s("p",null,"应用于: 所有元素",-1),s("p",null,"继承性: 无",-1),s("p",null,"值: normal(正常) | multiply(正片叠底) | screen(滤色) | overlay(叠加) | darken(变暗) | lighten(变亮) | color-dodge(颜色减淡) | color-burn(颜色加深) | hard-light(强光) | soft-light(柔光) | difference(差值) | exclusion(排除) | hue(色相) | saturation(饱和度) | color(颜色) | luminosity (亮度) | initial(初始) | inherit(继承) | unset(复原)",-1),s("iframe",{width:"100%",height:"auto",frameborder:"0",srcdoc:`
<html lang="en"><head>
<meta charset="UTF-8">
<title>Document</title>
<style>
.box1,.box2{
  display:inline-block;
  height: 150px;
  width: 200px;
  text-align: center;
} 
.box2{
  background:#224E71;
}
h1{
  line-height: 2;
  margin: 0;
  mix-blend-mode:normal;
}
h1:first-line{
  color:white;
}
@media (max-width:700px) {
.box1,.box2{
    height: 75px;
    width: 100px;
  }
h1{line-height:1}
    }  
</style>
</head>
<body>
<div class="box1">
  <h1 style="mix-blend-mode: unset;">春分<br>白露</h1>
</div>
<div class="box2">
  <h1 style="mix-blend-mode: unset;">春分<br>白露</h1>
</div>  
<br>
<select id="test">
  <option value="normal">normal-正常</option>
  <option value="multiply">multiply-正片叠底</option>
  <option value="screen">screen-滤色</option>
  <option value="overlay">overlay-叠加</option>
  <option value="darken">darken-变暗</option>
  <option value="lighten">lighten-变亮</option>
  <option value="color-dodge">color-dodge-颜色减淡</option>
  <option value="color-burn">color-burn-颜色加深</option>
  <option value="hard-light">hard-light-强光</option>
  <option value="soft-light">soft-light-柔光</option>
  <option value="difference">difference-差值</option>
  <option value="exclusion">exclusion-排除</option>
  <option value="hue">hue-色相</option>
  <option value="saturation">saturation-饱和度</option>
  <option value="color">color-颜色</option>
  <option value="luminosity">luminosity-亮度</option>
  <option value="initial">initial-初始</option>
  <option value="inherit">inherit-继承</option>
  <option value="unset">unset-复原</option>
</select>
<script>
test.onchange = function(){
  var oH = document.getElementsByTagName("h1");
  for(var i = 0; i < oH.length; i++){
    oH[i].style.mixBlendMode = this.value;
  }
};
<\/script>
</body></html>
`},null,-1)]))}const b=e(r,[["render",c]]);export{u as __pageData,b as default};
