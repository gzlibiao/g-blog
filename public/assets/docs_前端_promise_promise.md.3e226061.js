import{_ as s,o as n,c as a,a as e}from"./app.f360d8c4.js";const d=JSON.parse('{"title":"api","description":"","frontmatter":{},"headers":[],"relativePath":"docs/\u524D\u7AEF/promise/promise.md"}'),p={name:"docs/\u524D\u7AEF/promise/promise.md"},l=e(`<h4 id="api" tabindex="-1">api <a class="header-anchor" href="#api" aria-hidden="true">#</a></h4><p>promise.all \u6240\u6709\u7684 resolve promise.race \u7B2C\u4E00\u4E2A\u6210\u529F resolve \u7684 promise.any promise.allSellect</p><h4 id="\u624B\u5199-promise" tabindex="-1">\u624B\u5199 promise <a class="header-anchor" href="#\u624B\u5199-promise" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,4),r=[l];function c(o,i,t,b,m,A){return n(),a("div",null,r)}var u=s(p,[["render",c]]);export{d as __pageData,u as default};
