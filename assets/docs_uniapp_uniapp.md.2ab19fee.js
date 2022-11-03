import{_ as s,o as a,c as n,a as p}from"./app.f87dd172.js";const D=JSON.parse('{"title":"\u7EC4\u4EF6/\u6807\u7B7E\u7684\u53D8\u5316","description":"","frontmatter":{},"headers":[],"relativePath":"docs/uniapp/uniapp.md"}'),l={name:"docs/uniapp/uniapp.md"},e=p(`<h1 id="\u7EC4\u4EF6-\u6807\u7B7E\u7684\u53D8\u5316" tabindex="-1">\u7EC4\u4EF6/\u6807\u7B7E\u7684\u53D8\u5316 <a class="header-anchor" href="#\u7EC4\u4EF6-\u6807\u7B7E\u7684\u53D8\u5316" aria-hidden="true">#</a></h1><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u4EE5\u524D\u662Fhtml\u6807\u7B7E\uFF0C\u73B0\u5728\u662F\u5C0F\u7A0B\u5E8F\u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">div \u6539\u6210 view</span></span>
<span class="line"><span style="color:#A6ACCD;">span\u3001font \u6539\u6210 text</span></span>
<span class="line"><span style="color:#A6ACCD;">a \u6539\u6210 navigator</span></span>
<span class="line"><span style="color:#A6ACCD;">img \u6539\u6210 image</span></span>
<span class="line"><span style="color:#A6ACCD;">input \u8FD8\u5728\uFF0C\u4F46type\u5C5E\u6027\u6539\u6210\u4E86confirmtype</span></span>
<span class="line"><span style="color:#A6ACCD;">form\u3001button\u3001checkbox\u3001radio\u3001label\u3001textarea\u3001canvas\u3001video \u8FD9\u4E9B\u8FD8\u5728\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">select \u6539\u6210 picker</span></span>
<span class="line"><span style="color:#A6ACCD;">iframe \u6539\u6210 web-view</span></span>
<span class="line"><span style="color:#A6ACCD;">ul\u3001li\u6CA1\u6709\u4E86\uFF0C\u90FD\u7528view\u66FF\u4EE3</span></span>
<span class="line"><span style="color:#A6ACCD;">audio \u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u6539\u6210api\u65B9\u5F0F\uFF0C\u80CC\u666F\u97F3\u9891api\u6587\u6863</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5176\u5B9E\u8001\u7684HTML\u6807\u7B7E\u4E5F\u53EF\u4EE5\u5728uni-app\u91CC\u4F7F\u7528\uFF0Cuni-app\u7F16\u8BD1\u5668\u4F1A\u5728\u7F16\u8BD1\u65F6\u628A\u8001\u6807\u7B7E\u8F6C\u4E3A\u65B0\u6807\u7B7E\u3002\u4F46\u4E0D\u63A8\u8350\u8FD9\u79CD\u7528\u6CD5\uFF0C\u8C03\u8BD5H5\u7AEF\u65F6\u5BB9\u6613\u6DF7\u4E71\uFF0C\u57FA\u4E8E\u5143\u7D20\u7684\u9009\u62E9\u5668\u4E5F\u4F1A\u51FA\u95EE\u9898\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u9664\u4E86\u6539\u52A8\u5916\uFF0C\u65B0\u589E\u4E86\u4E00\u6279\u624B\u673A\u7AEF\u5E38\u7528\u7684\u65B0\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">scroll-view \u53EF\u533A\u57DF\u6EDA\u52A8\u89C6\u56FE\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">swiper \u53EF\u6ED1\u52A8\u533A\u57DF\u89C6\u56FE\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">icon \u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">rich-text \u5BCC\u6587\u672C\uFF08\u4E0D\u53EF\u6267\u884Cjs\uFF0C\u4F46\u53EF\u6E32\u67D3\u5404\u79CD\u6587\u5B57\u683C\u5F0F\u548C\u56FE\u7247\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">progress \u8FDB\u5EA6\u6761</span></span>
<span class="line"><span style="color:#A6ACCD;">slider \u6ED1\u5757\u6307\u793A\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">switch \u5F00\u5173\u9009\u62E9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">camera \u76F8\u673A</span></span>
<span class="line"><span style="color:#A6ACCD;">live-player \u76F4\u64AD</span></span>
<span class="line"><span style="color:#A6ACCD;">map \u5730\u56FE</span></span>
<span class="line"><span style="color:#A6ACCD;">cover-view \u53EF\u8986\u76D6\u539F\u751F\u7EC4\u4EF6\u7684\u89C6\u56FE\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">cover-view\u9700\u8981\u591A\u5F3A\u8C03\u51E0\u53E5\uFF0Cuni-app\u7684\u975Eh5\u7AEF\u7684video\u3001map\u3001canvas\u3001textarea\u662F\u539F\u751F\u7EC4\u4EF6\uFF0C\u5C42\u7EA7\u9AD8\u4E8E\u5176\u4ED6\u7EC4\u4EF6\u3002\u5982\u9700\u8986\u76D6\u539F\u751F\u7EC4\u4EF6\uFF0C\u6BD4\u5982\u5728map\u4E0A\u52A0\u4E2A\u906E\u7F69\uFF0C\u5219\u9700\u8981\u4F7F\u7528cover-view\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u9664\u4E86\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u8FD8\u6709\u5F88\u591A\u5F00\u6E90\u7684\u6269\u5C55\u7EC4\u4EF6\uFF0C\u628A\u5E38\u7528\u64CD\u4F5C\u90FD\u8FDB\u884C\u5C01\u88C5\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="rpx" tabindex="-1">rpx <a class="header-anchor" href="#rpx" aria-hidden="true">#</a></h1><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">rpx \u662F\u76F8\u5BF9\u4E8E\u57FA\u51C6\u5BBD\u5EA6\u7684\u5355\u4F4D\uFF0C\u53EF\u4EE5\u6839\u636E\u5C4F\u5E55\u5BBD\u5EA6\u8FDB\u884C\u81EA\u9002\u5E94\u3002uni-app \u89C4\u5B9A\u5C4F\u5E55\u57FA\u51C6\u5BBD\u5EA6 750rpx\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u8BBE\u8BA1\u7A3F\u57FA\u51C6\u5BBD\u5EA6\u8BA1\u7B97\u9875\u9762\u5143\u7D20 rpx \u503C\uFF0C\u8BBE\u8BA1\u7A3F 1px \u4E0E\u6846\u67B6\u6837\u5F0F 1rpx \u8F6C\u6362\u516C\u5F0F\u5982\u4E0B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BBE\u8BA1\u7A3F 1px / \u8BBE\u8BA1\u7A3F\u57FA\u51C6\u5BBD\u5EA6 = \u6846\u67B6\u6837\u5F0F 1rpx / 750rpx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6362\u8A00\u4E4B\uFF0C\u9875\u9762\u5143\u7D20\u5BBD\u5EA6\u5728 uni-app \u4E2D\u7684\u5BBD\u5EA6\u8BA1\u7B97\u516C\u5F0F\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">750 * \u5143\u7D20\u5728\u8BBE\u8BA1\u7A3F\u4E2D\u7684\u5BBD\u5EA6 / \u8BBE\u8BA1\u7A3F\u57FA\u51C6\u5BBD\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="js-\u7684\u53D8\u5316" tabindex="-1">js \u7684\u53D8\u5316 <a class="header-anchor" href="#js-\u7684\u53D8\u5316" aria-hidden="true">#</a></h1><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8FD0\u884C\u73AF\u5883\u4ECE\u6D4F\u89C8\u5668\u53D8\u6210v8\u5F15\u64CE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),c=[e];function o(r,i,t,A,C,d){return a(),n("div",null,c)}var h=s(l,[["render",o]]);export{D as __pageData,h as default};
