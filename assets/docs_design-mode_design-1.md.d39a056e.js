import{_ as s,o as n,c as a,a as l}from"./app.13841226.js";const i=JSON.parse('{"title":"\u57FA\u7840\u77E5\u8BC6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u591A\u6001","slug":"\u57FA\u7840\u591A\u6001"},{"level":2,"title":"\u5C01\u88C5\u591A\u6001","slug":"\u5C01\u88C5\u591A\u6001"}],"relativePath":"docs/design-mode/design-1.md"}'),p={name:"docs/design-mode/design-1.md"},o=l(`<h1 id="\u57FA\u7840\u77E5\u8BC6" tabindex="-1">\u57FA\u7840\u77E5\u8BC6 <a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a></h1><h2 id="\u57FA\u7840\u591A\u6001" tabindex="-1">\u57FA\u7840\u591A\u6001 <a class="header-anchor" href="#\u57FA\u7840\u591A\u6001" aria-hidden="true">#</a></h2><p>\u591A\u6001\u7684\u5B9A\u4E49\u662F\uFF1A<code>\u540C\u4E00\u64CD\u4F5C\uFF0C\u4F5C\u7528\u5728\u4E0D\u540C\u7684\u5BF9\u8C61\u4E0A\u9762\uFF0C\u53EF\u4EE5\u4EA7\u751F\u4E0D\u540C\u7684\u89E3\u91CA\u548C\u4E0D\u540C\u7684\u6267\u884C\u7ED3\u679C</code></p><p>\u6BD4\u5982\u60F3\u8981\u901A\u8FC7\u4E00\u4E2A\u7C7B\uFF0C\u6765\u63CF\u8FF0\u4E0D\u540C\u52A8\u7269\u7684\u53EB\u58F0\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u5199\u6CD5\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">makeSound</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">anima</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">anima</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Duck</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u560E\u560E\u560E</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">anima</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Chicken</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u54AF\u54AF\u54AF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Duck</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Chicken</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">makeSound</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Duck</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;font-style:italic;">// \u560E\u560E\u560E</span></span>
<span class="line"><span style="color:#82AAFF;">makeSound</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Chicken</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;font-style:italic;">// \u54AF\u54AF\u54AF</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u662F\u8FD9\u91CC\u5982\u679C\u540E\u9762\u8981\u65B0\u589E\u4E00\u4E2A\u52A8\u7269\u7684\u53EB\u58F0\uFF0C\u5C31\u9700\u8981\u6539\u53D8 <code>makeSound</code> \u51FD\u6570\uFF0C\u4FEE\u6539\u4EE3\u7801\u603B\u662F\u5371\u9669\u7684\uFF0C\u540E\u7EED\u5982\u679C\u589E\u52A0\u7684\u52A8\u7269\u8D8A\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4 <code>makeSound</code> \u51FD\u6570\u53D8\u5F97\u5DE8\u5927\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u8981\u5C06 <code>\u505A\u4EC0\u4E48</code> \u548C <code>\u8C01\u53BB\u505A</code> \u5206\u5F00\u6765\uFF0C\u56E0\u4E3A\u52A8\u7269\u4F1A\u53EB\uFF0C\u8FD9\u662F\u4E0D\u53D8\u7684\uFF0C\u4F46\u662F\u4E0D\u540C\u7684\u52A8\u7269\u600E\u4E48\u53EB\u662F\u53D8\u5316\u7684\u3002\u628A\u4E0D\u53D8\u7684\u90E8\u5206\u5206\u79BB\u51FA\u6765\uFF0C\u628A\u53EF\u53D8\u7684\u90E8\u5206\u5C01\u88C5\u8D77\u6765\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u8BA9\u6211\u4EEC\u7684\u7A0B\u5E8F\u662F\u4E00\u4E2A\u53EF\u751F\u957F\u7684\u72B6\u6001\u3002</p><h2 id="\u5C01\u88C5\u591A\u6001" tabindex="-1">\u5C01\u88C5\u591A\u6001 <a class="header-anchor" href="#\u5C01\u88C5\u591A\u6001" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u5C06\u4E0A\u9762\u7684\u4F8B\u5B50\u8FDB\u884C\u5C01\u88C5\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u901A\u7528\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">makeSound</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">anima</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">anima</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sound</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Duck</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sound</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u560E\u560E\u560E</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Chicken</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sound</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u54AF\u54AF\u54AF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">makeSound</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Duck</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;font-style:italic;">// \u560E\u560E\u560E</span></span>
<span class="line"><span style="color:#82AAFF;">makeSound</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Chicken</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;font-style:italic;">// \u54AF\u54AF\u54AF</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6837\uFF0C\u5982\u679C\u540E\u7EED\u8FD8\u9700\u8981\u518D\u65B0\u589E\u4E00\u4E2A\u72D7\u7684\u53EB\u58F0\uFF0C\u5C31\u76F4\u63A5\u65B0\u589E\u4E00\u4E2A <code>Dog</code> \u7C7B\u5373\u53EF\uFF0C\u800C\u4E0D\u9700\u8981\u53BB\u6539\u53D8\u539F\u59CB\u4EE3\u7801</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dog</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sound</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6C6A\u6C6A\u6C6A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function c(t,r,F,y,D,A){return n(),a("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};