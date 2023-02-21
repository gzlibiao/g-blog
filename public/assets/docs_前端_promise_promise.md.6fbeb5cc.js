import{_ as s,o as n,c as a,a as e}from"./app.4520312e.js";const u=JSON.parse('{"title":"\u9759\u6001\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9759\u6001\u65B9\u6CD5","slug":"\u9759\u6001\u65B9\u6CD5"},{"level":2,"title":"\u624B\u5199 promise","slug":"\u624B\u5199-promise"}],"relativePath":"docs/\u524D\u7AEF/promise/promise.md"}'),l={name:"docs/\u524D\u7AEF/promise/promise.md"},p=e(`<h2 id="\u9759\u6001\u65B9\u6CD5" tabindex="-1">\u9759\u6001\u65B9\u6CD5 <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1. promise.all \u6240\u6709\u7684 resolve</span></span>
<span class="line"><span style="color:#A6ACCD;">2. promise.race \u4EFB\u4F55\u4E00\u4E2A\u63A5\u53E3\u5148\u5B8C\u6210\u5C31\u53EF\u4EE5\uFF0C\u65E0\u8BBA\u662F\u6210\u529F\u8FD8\u662F\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">3. promise.any \u4EFB\u4F55\u4E00\u4E2A\u63A5\u53E3\u5148\u5B8C\u6210\u7684\uFF0C\u5FC5\u987B\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">4. promise.allSellect \u65E0\u8BBA\u6210\u529F\u6216\u8005\u5931\u8D25\uFF0C\u5168\u90E8\u6267\u884C {status:&#39;fulfilled&#39;|&#39;rejected&#39;,reason:&#39;&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u624B\u5199-promise" tabindex="-1">\u624B\u5199 promise <a class="header-anchor" href="#\u624B\u5199-promise" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Promise{</span></span>
<span class="line"><span style="color:#A6ACCD;">  cbs=[]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(invoke){</span></span>
<span class="line"><span style="color:#A6ACCD;">    invoke(this.resolve.bind(this));</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  then(callback){</span></span>
<span class="line"><span style="color:#A6ACCD;">    tis.cbs.push(callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve(value){</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.cbs.forEach(c=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">      c(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,4),r=[p];function c(o,i,t,b,m,A){return n(),a("div",null,r)}var d=s(l,[["render",c]]);export{u as __pageData,d as default};
