import{_ as s,o as n,c as a,a as e}from"./app.4520312e.js";const m=JSON.parse('{"title":"\u5B89\u88C5 Volar \u63D2\u4EF6","description":"","frontmatter":{},"headers":[],"relativePath":"docs/\u524D\u7AEF/vue/\u5F00\u53D1vue3\u7684\u914D\u7F6E.md"}'),p={name:"docs/\u524D\u7AEF/vue/\u5F00\u53D1vue3\u7684\u914D\u7F6E.md"},l=e(`<h4 id="\u5B89\u88C5-volar-\u63D2\u4EF6" tabindex="-1">\u5B89\u88C5 Volar \u63D2\u4EF6 <a class="header-anchor" href="#\u5B89\u88C5-volar-\u63D2\u4EF6" aria-hidden="true">#</a></h4><p>vue language feature</p><h4 id="\u7981\u7528-builtin-typescript" tabindex="-1">\u7981\u7528 @builtin typescript <a class="header-anchor" href="#\u7981\u7528-builtin-typescript" aria-hidden="true">#</a></h4><h4 id="cnpm" tabindex="-1">cnpm <a class="header-anchor" href="#cnpm" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g cnpm --registry=https://registry.npm.taobao.org \u8BBE\u7F6E npm config set registry https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h4 id="\u5B89\u88C5-vue-\u811A\u624B\u67B6" tabindex="-1">\u5B89\u88C5 vue \u811A\u624B\u67B6 <a class="header-anchor" href="#\u5B89\u88C5-vue-\u811A\u624B\u67B6" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cnpm install @vue/cli -g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.editorconfig</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://editorconfig.org</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">root = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[*] # \u8868\u793A\u6240\u6709\u6587\u4EF6\u9002\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">charset = utf-8 # \u8BBE\u7F6E\u6587\u4EF6\u5B57\u7B26\u96C6\u4E3A utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">indent_style = space # \u7F29\u8FDB\u98CE\u683C\uFF08tab | space\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">indent_size = 2 # \u7F29\u8FDB\u5927\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;">end_of_line = lf # \u63A7\u5236\u6362\u884C\u7C7B\u578B(lf | cr | crlf)</span></span>
<span class="line"><span style="color:#A6ACCD;">trim_trailing_whitespace = true # \u53BB\u9664\u884C\u9996\u7684\u4EFB\u610F\u7A7A\u767D\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">insert_final_newline = true # \u59CB\u7EC8\u5728\u6587\u4EF6\u672B\u5C3E\u63D2\u5165\u4E00\u4E2A\u65B0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[*.md] # \u8868\u793A\u4EC5 md \u6587\u4EF6\u9002\u7528\u4EE5\u4E0B\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">max_line_length = off</span></span>
<span class="line"><span style="color:#A6ACCD;">trim_trailing_whitespace = false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B89\u88C5\u63D2\u4EF6 EditorConfig for VS Code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="\u4F7F\u7528-prettier" tabindex="-1">\u4F7F\u7528 prettier <a class="header-anchor" href="#\u4F7F\u7528-prettier" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install prettier -D</span></span>
<span class="line"><span style="color:#A6ACCD;">.prettierrc\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;useTabs&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;tabWidth&quot;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;printWidth&quot;: 80,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;singleQuote&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;trailingComma&quot;: &quot;none&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;semi&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.prettierignore\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/dist/*</span></span>
<span class="line"><span style="color:#A6ACCD;">.local</span></span>
<span class="line"><span style="color:#A6ACCD;">.output.js</span></span>
<span class="line"><span style="color:#A6ACCD;">/node_modules/**</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">**/*.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">**/*.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/public/*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B89\u88C5prettier\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">package.json -&gt;     &quot;prettier&quot;: &quot;prettier --write .&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,11),r=[l];function c(i,o,t,b,u,C){return n(),a("div",null,r)}var d=s(p,[["render",c]]);export{m as __pageData,d as default};
