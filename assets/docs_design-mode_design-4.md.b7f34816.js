import{_ as s,o as n,c as a,a as l}from"./app.13841226.js";const i=JSON.parse('{"title":"\u7B56\u7565\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B56\u7565\u6A21\u5F0F\u5B9A\u4E49","slug":"\u7B56\u7565\u6A21\u5F0F\u5B9A\u4E49"},{"level":2,"title":"\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u8BA1\u7B97\u5956\u91D1","slug":"\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u8BA1\u7B97\u5956\u91D1"},{"level":2,"title":"\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u5C01\u88C5","slug":"\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u5C01\u88C5"}],"relativePath":"docs/design-mode/design-4.md"}'),p={name:"docs/design-mode/design-4.md"},o=l(`<h1 id="\u7B56\u7565\u6A21\u5F0F" tabindex="-1">\u7B56\u7565\u6A21\u5F0F <a class="header-anchor" href="#\u7B56\u7565\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u7B56\u7565\u6A21\u5F0F\u5B9A\u4E49" tabindex="-1">\u7B56\u7565\u6A21\u5F0F\u5B9A\u4E49 <a class="header-anchor" href="#\u7B56\u7565\u6A21\u5F0F\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u7B56\u7565\u6A21\u5F0F\u7684\u5B9A\u4E49\u662F\uFF1A<code>\u5B9A\u4E49\u4E00\u4E9B\u5217\u7684\u7B97\u6CD5\uFF0C\u628A\u5B83\u4EEC\u4E00\u4E2A\u4E2A\u5C01\u88C5\u8D77\u6765\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4F7F\u5B83\u4EEC\u53EF\u4EE5\u76F8\u4E92\u66FF\u6362</code>\u3002</p><h2 id="\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u8BA1\u7B97\u5956\u91D1" tabindex="-1">\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u8BA1\u7B97\u5956\u91D1 <a class="header-anchor" href="#\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u8BA1\u7B97\u5956\u91D1" aria-hidden="true">#</a></h2><p>\u6BD4\u5982\u5E74\u7EC8\u5206\u53D1\u7ED9\u5458\u5DE5\u7684\u5956\u91D1\u6839\u636E\u8BC4\u4EF7\u7B49\u7EA7\u6765\u5B9A\uFF1AS \u7EA7\u53EF\u4EE5\u5F97\u5230 4 \u500D\u5956\u91D1\uFF0CA \u7EA7\u53EF\u4EE5\u62FF 3 \u500D\u5956\u91D1\uFF0CB \u7EA7\u53EF\u4EE5\u62FF 2 \u500D\u5956\u91D1</p><p>\u90A3\u4E48\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A\u57FA\u672C\u7684\u51FD\u6570\u6765\u8BA1\u7B97</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">grade</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> bonus</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">grade</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">S</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bonus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">grade</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bonus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">grade</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bonus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">S</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 12000</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 6000</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u662F\u8FD9\u4E2A\u51FD\u6570\u770B\u8D77\u6765\u6BD4\u8F83\u632B\uFF0C\u5185\u90E8\u5305\u542B\u4E86\u5F88\u591A\u7684 <code>if else</code> \u8BED\u53E5\uFF0C\u800C\u4E14\u5982\u679C\u540E\u671F\u65B0\u589E\u4E86\u4E00\u4E2A\u5176\u5B83\u7684\u7B49\u7EA7\uFF0C\u8FD8\u9700\u8981\u4FEE\u6539\u539F\u51FD\u6570\uFF0C\u8FD9\u4E2A\u5BF9\u4E8E\u7F16\u5199\u4EE3\u7801\u6765\u8BF4\u662F\u975E\u5E38\u4E0D\u53CB\u597D\u7684</p><h2 id="\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u5C01\u88C5" tabindex="-1">\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u5C01\u88C5 <a class="header-anchor" href="#\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u5C01\u88C5" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u5C06\u4E0A\u9762\u7684\u4F8B\u5B50\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u8FDB\u884C\u5C01\u88C5\uFF0C\u4F1A\u8BAE\u4E00\u4E0B\u7B56\u7565\u6A21\u5F0F\u7684\u5B9A\u4E49\uFF1A</p><p><code>\u5B9A\u4E49\u4E00\u4E9B\u5217\u7684\u7B97\u6CD5\uFF0C\u628A\u5B83\u4EEC\u4E00\u4E2A\u4E2A\u5C01\u88C5\u8D77\u6765\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4F7F\u5B83\u4EEC\u53EF\u4EE5\u76F8\u4E92\u66FF\u6362</code></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GradeS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">computed</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">bonus</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bonus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GradeA</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">computed</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">bonus</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bonus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GradeB</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">computed</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">bonus</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bonus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComputedBonus</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">salary</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> strategy</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">salary</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">salary</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">strategy</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strategy</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getBonus</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">strategy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">computed</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">salary</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> computedBonus1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ComputedBonus</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GradeS</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> computedBonus2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ComputedBonus</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GradeA</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(computedBonus1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBonus</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;font-style:italic;">// 12000</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(computedBonus2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBonus</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;font-style:italic;">// 6000</span></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function c(t,r,y,F,D,A){return n(),a("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};