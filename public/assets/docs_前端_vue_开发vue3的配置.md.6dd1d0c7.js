import{_ as s,c as n,o as a,a as e}from"./app.116e60de.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/前端/vue/开发vue3的配置.md"}'),l={name:"docs/前端/vue/开发vue3的配置.md"},p=e(`<h4 id="安装-volar-插件" tabindex="-1">安装 Volar 插件 <a class="header-anchor" href="#安装-volar-插件" aria-hidden="true">#</a></h4><p>vue language feature</p><h4 id="禁用-builtin-typescript" tabindex="-1">禁用 @builtin typescript <a class="header-anchor" href="#禁用-builtin-typescript" aria-hidden="true">#</a></h4><h4 id="cnpm" tabindex="-1">cnpm <a class="header-anchor" href="#cnpm" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install -g cnpm --registry=https://registry.npm.taobao.org 设置 npm config set registry https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="安装-vue-脚手架" tabindex="-1">安装 vue 脚手架 <a class="header-anchor" href="#安装-vue-脚手架" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">cnpm install @vue/cli -g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">.editorconfig</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://editorconfig.org</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">root = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[*] # 表示所有文件适用</span></span>
<span class="line"><span style="color:#A6ACCD;">charset = utf-8 # 设置文件字符集为 utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">indent_style = space # 缩进风格（tab | space）</span></span>
<span class="line"><span style="color:#A6ACCD;">indent_size = 2 # 缩进大小</span></span>
<span class="line"><span style="color:#A6ACCD;">end_of_line = lf # 控制换行类型(lf | cr | crlf)</span></span>
<span class="line"><span style="color:#A6ACCD;">trim_trailing_whitespace = true # 去除行首的任意空白字符</span></span>
<span class="line"><span style="color:#A6ACCD;">insert_final_newline = true # 始终在文件末尾插入一个新行</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[*.md] # 表示仅 md 文件适用以下规则</span></span>
<span class="line"><span style="color:#A6ACCD;">max_line_length = off</span></span>
<span class="line"><span style="color:#A6ACCD;">trim_trailing_whitespace = false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">安装插件 EditorConfig for VS Code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="使用-prettier" tabindex="-1">使用 prettier <a class="header-anchor" href="#使用-prettier" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install prettier -D</span></span>
<span class="line"><span style="color:#A6ACCD;">.prettierrc文件</span></span>
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
<span class="line"><span style="color:#A6ACCD;">.prettierignore文件</span></span>
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
<span class="line"><span style="color:#A6ACCD;">安装prettier插件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">package.json -&gt;     &quot;prettier&quot;: &quot;prettier --write .&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,11),r=[p];function i(c,t,o,b,u,C){return a(),n("div",null,r)}const m=s(l,[["render",i]]);export{d as __pageData,m as default};
