import{_ as n,o as a,c as e,a as l}from"./app.d0abd10b.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"静态方法","slug":"静态方法","link":"#静态方法","children":[]},{"level":2,"title":"手写 promise","slug":"手写-promise","link":"#手写-promise","children":[]}],"relativePath":"docs/前端/promise/promise.md"}'),p={name:"docs/前端/promise/promise.md"};function r(c,s,i,o,t,b){return a(),e("div",null,s[0]||(s[0]=[l(`<h2 id="静态方法" tabindex="-1">静态方法 <a class="header-anchor" href="#静态方法" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">1. promise.all 所有的 resolve</span></span>
<span class="line"><span style="color:#A6ACCD;">2. promise.race 任何一个接口先完成就可以，无论是成功还是报错</span></span>
<span class="line"><span style="color:#A6ACCD;">3. promise.any 任何一个接口先完成的，必须成功</span></span>
<span class="line"><span style="color:#A6ACCD;">4. promise.allSellect 无论成功或者失败，全部执行 {status:&#39;fulfilled&#39;|&#39;rejected&#39;,reason:&#39;&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="手写-promise" tabindex="-1">手写 promise <a class="header-anchor" href="#手写-promise" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,4)]))}const u=n(p,[["render",r]]);export{C as __pageData,u as default};
