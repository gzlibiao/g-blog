import{_ as s,o as a,c as e,a as n}from"./app.0628cd47.js";const u=JSON.parse('{"title":"Git \u57FA\u7840\u77E5\u8BC6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4"},{"level":2,"title":"\u5206\u652F\u7BA1\u7406","slug":"\u5206\u652F\u7BA1\u7406"},{"level":2,"title":"\u56DE\u6EAF\u7248\u672C","slug":"\u56DE\u6EAF\u7248\u672C"},{"level":2,"title":"\u914D\u7F6E Git SSH Key","slug":"\u914D\u7F6E-git-ssh-key"},{"level":2,"title":"\u5173\u8054\u5B58\u50A8\u5E93","slug":"\u5173\u8054\u5B58\u50A8\u5E93"},{"level":2,"title":"\u4FEE\u6539\u7528\u6237\u540D\u548C\u90AE\u7BB1","slug":"\u4FEE\u6539\u7528\u6237\u540D\u548C\u90AE\u7BB1"},{"level":2,"title":"\u66F4\u6539\u5206\u652F\u540D","slug":"\u66F4\u6539\u5206\u652F\u540D"}],"relativePath":"article/article/article-8.md"}'),t={name:"article/article/article-8.md"},l=n(`<h1 id="git-\u57FA\u7840\u77E5\u8BC6" tabindex="-1">Git \u57FA\u7840\u77E5\u8BC6 <a class="header-anchor" href="#git-\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a></h1><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><table><thead><tr><th>\u547D\u4EE4</th><th>\u7B80\u8981\u8BF4\u660E</th></tr></thead><tbody><tr><td>git clone \u4ED3\u5E93\u5730\u5740</td><td>\u514B\u9686\u7248\u672C\u5E93</td></tr><tr><td>git status</td><td>\u67E5\u770B\u72B6\u6001</td></tr><tr><td>git add .</td><td>\u6DFB\u52A0\u81F3\u6682\u5B58\u533A</td></tr><tr><td>git commit -m &#39;\u8BF4\u660E&#39;</td><td>\u63D0\u4EA4\u5E76\u6DFB\u52A0\u8BF4\u660E</td></tr><tr><td>git push -u origin master</td><td>\u63A8\u9001\u81F3\u8FDC\u7A0B\u4ED3\u5E93 master \u5206\u652F</td></tr><tr><td>git branch -a</td><td>\u5217\u51FA\u6240\u6709\u5206\u652F</td></tr><tr><td>git branch dev</td><td>\u521B\u5EFA dev \u5206\u652F</td></tr><tr><td>git checkout dev</td><td>\u5207\u6362\u5230 dev \u5206\u652F</td></tr><tr><td>git merge dev</td><td>\u628A dev \u5206\u652F\u5408\u5E76\u5230 master \u5206\u652F</td></tr><tr><td>git branch -d dev</td><td>\u5220\u9664 dev \u5206\u652F</td></tr><tr><td>git pull origin master</td><td>\u540C\u6B65\u5206\u652F\u5230\u672C\u5730</td></tr><tr><td>git reset --hard \u7248\u672C\u53F7</td><td>\u83B7\u53D6\u5386\u53F2\u7248\u672C</td></tr></tbody></table><h2 id="\u5206\u652F\u7BA1\u7406" tabindex="-1">\u5206\u652F\u7BA1\u7406 <a class="header-anchor" href="#\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a></h2><p>\u521B\u5EFA\u548C\u5207\u6362</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u521B\u5EFA dev \u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u5230 dev \u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout dev</span></span>
<span class="line"></span></code></pre></div><p>\u5408\u5E76\u5206\u652F</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5148\u5207\u6362\u4E3A master \u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5408\u5E76\u5206\u652F \u628A dev \u5206\u652F\u5408\u5E76\u5230 master \u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5C06\u5408\u5E76\u7684\u5206\u652F\u63D0\u4EA4\u5230\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">git push</span></span>
<span class="line"></span></code></pre></div><h2 id="\u56DE\u6EAF\u7248\u672C" tabindex="-1">\u56DE\u6EAF\u7248\u672C <a class="header-anchor" href="#\u56DE\u6EAF\u7248\u672C" aria-hidden="true">#</a></h2><p>\u67E5\u770B <code>commit hash</code> \u503C</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reflog</span></span>
<span class="line"></span></code></pre></div><p>\u56DE\u6EAF\u7248\u672C</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reset --hard xxxx</span></span>
<span class="line"></span></code></pre></div><p>\u56DE\u6EAF\u547D\u4EE4</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git push -f</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6E-git-ssh-key" tabindex="-1">\u914D\u7F6E Git SSH Key <a class="header-anchor" href="#\u914D\u7F6E-git-ssh-key" aria-hidden="true">#</a></h2><p>\u547D\u4EE4\u884C\u8F93\u5165\uFF1A</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh-keygen -t rsa -b 4096 -C </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u90AE\u7BB1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u8FDE\u7EED\u6572\u51FB 3 \u6B21\u56DE\u8F66\uFF0C\u5373\u53EF <code>/c/Users/</code> \u5F53\u524D\u7528\u6237<code> /.ssh/</code> \u76EE\u5F55\u4E2D\u751F\u6210 <code>id_rsa</code> \u548C <code>id_rsa.pub</code> \u4E24\u4E2A\u6587\u4EF6</p><h2 id="\u5173\u8054\u5B58\u50A8\u5E93" tabindex="-1">\u5173\u8054\u5B58\u50A8\u5E93 <a class="header-anchor" href="#\u5173\u8054\u5B58\u50A8\u5E93" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin xxxxx</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4FEE\u6539\u7528\u6237\u540D\u548C\u90AE\u7BB1" tabindex="-1">\u4FEE\u6539\u7528\u6237\u540D\u548C\u90AE\u7BB1 <a class="header-anchor" href="#\u4FEE\u6539\u7528\u6237\u540D\u548C\u90AE\u7BB1" aria-hidden="true">#</a></h2><p>\u8F93\u5165\u547D\u4EE4\uFF1A</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git config --global user.name </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxxx</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.email </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxxx@qq.com</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u66F4\u6539\u5206\u652F\u540D" tabindex="-1">\u66F4\u6539\u5206\u652F\u540D <a class="header-anchor" href="#\u66F4\u6539\u5206\u652F\u540D" aria-hidden="true">#</a></h2><p>\u4FEE\u6539\u672C\u5730\u5206\u652F\u540D\u79F0\uFF1A</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git branch -m oldBranchName newBranchName</span></span>
<span class="line"></span></code></pre></div><p>\u5C06\u6539\u540D\u540E\u7684\u672C\u5730\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\uFF0C\u5E76\u5C06\u672C\u5730\u5206\u652F\u4E0E\u4E4B\u5173\u8054</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git push --set-upstream origin newBranchName</span></span>
<span class="line"></span></code></pre></div>`,29),p=[l];function c(d,r,i,o,h,g){return a(),e("div",null,p)}var v=s(t,[["render",c]]);export{u as __pageData,v as default};