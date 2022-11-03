import{_ as s,o as a,c as n,a as l}from"./app.ddbd32bb.js";var e="/assets/git.19cb8508.png";const y=JSON.parse('{"title":"git \u521D\u59CB\u5316 \u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u51FA\u9519","slug":"\u51FA\u9519"},{"level":2,"title":"\u5DF2\u6709\u4EE3\u7801 \u5220.git","slug":"\u5DF2\u6709\u4EE3\u7801-\u5220-git"},{"level":3,"title":"\u8BBE\u7F6E git \u5168\u5C40\u4FE1\u606F\u8BBE\u7F6E","slug":"\u8BBE\u7F6E-git-\u5168\u5C40\u4FE1\u606F\u8BBE\u7F6E"},{"level":3,"title":"\u91CD\u7F6E\u63D0\u4EA4\u4ED3\u5E93\u5730\u5740","slug":"\u91CD\u7F6E\u63D0\u4EA4\u4ED3\u5E93\u5730\u5740"},{"level":3,"title":"\u63A8\u9001","slug":"\u63A8\u9001"},{"level":3,"title":"\u5206\u652F\u7BA1\u7406","slug":"\u5206\u652F\u7BA1\u7406"},{"level":3,"title":"\u7248\u672C\u56DE\u9000","slug":"\u7248\u672C\u56DE\u9000"},{"level":3,"title":"\u6E05\u7F13\u5B58","slug":"\u6E05\u7F13\u5B58"},{"level":3,"title":"\u8BBE\u7F6E git commit \u65F6\u4E0D\u5FFD\u7565\u5927\u5C0F\u5199","slug":"\u8BBE\u7F6E-git-commit-\u65F6\u4E0D\u5FFD\u7565\u5927\u5C0F\u5199"},{"level":3,"title":"\u8BBE\u7F6E ssh key","slug":"\u8BBE\u7F6E-ssh-key"}],"relativePath":"docs/other/git.md"}'),p={name:"docs/other/git.md"},c=l(`<h1 id="git-\u521D\u59CB\u5316-\u914D\u7F6E" tabindex="-1">git \u521D\u59CB\u5316 \u914D\u7F6E <a class="header-anchor" href="#git-\u521D\u59CB\u5316-\u914D\u7F6E" aria-hidden="true">#</a></h1><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1\u3001\u5728\u8981\u63A8\u9001\u7684\u5185\u5BB9\u91CC\u9762\u53F3\u952E\u9009\u62E9 git bash here</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2\u3001\u8F93\u5165 git init \u521D\u59CB\u5316\u4ED3\u5E93, \u672C\u5730\u4F1A\u751F\u6210\u4E00\u4E2A .git \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3\u3001\u7136\u540E\u8F93\u5165 git remote add origin https://gitee.com/\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4\u3001\u4F7F\u7528 git pull origin master \u547D\u4EE4\u5C06\u7801\u4E91\u7684\u4ED3\u5E93 pull \u5230\u672C\u5730</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5\u3001git add . (\u522B\u5FD8\u8BB0.)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6\u3001git commit -m &#39;\u63CF\u8FF0\u65B0\u6DFB\u52A0\u7684\u6587\u4EF6\u5185\u5BB9&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7\u3001git push origin master \u5C06\u672C\u5730\u4ED3\u5E93\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u51FA\u9519" tabindex="-1">\u51FA\u9519 <a class="header-anchor" href="#\u51FA\u9519" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1 \u4F7F\u7528\u5982\u4E0B\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull \u2014rebase origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2 \u7136\u540E\u518D\u8FDB\u884C\u4E0A\u4F20:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5DF2\u6709\u4EE3\u7801-\u5220-git" tabindex="-1">\u5DF2\u6709\u4EE3\u7801 \u5220.git <a class="header-anchor" href="#\u5DF2\u6709\u4EE3\u7801-\u5220-git" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4FEE\u6539\u4ED3\u5E93\u5730\u5740:git remote set-url origin https://gitee.com/gz_lib/git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2 \u7136\u540E\u518D\u8FDB\u884C\u4E0A\u4F20:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u8BBE\u7F6E-git-\u5168\u5C40\u4FE1\u606F\u8BBE\u7F6E" tabindex="-1">\u8BBE\u7F6E git \u5168\u5C40\u4FE1\u606F\u8BBE\u7F6E <a class="header-anchor" href="#\u8BBE\u7F6E-git-\u5168\u5C40\u4FE1\u606F\u8BBE\u7F6E" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global --list</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.name xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.email xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u91CD\u7F6E\u63D0\u4EA4\u4ED3\u5E93\u5730\u5740" tabindex="-1">\u91CD\u7F6E\u63D0\u4EA4\u4ED3\u5E93\u5730\u5740 <a class="header-anchor" href="#\u91CD\u7F6E\u63D0\u4EA4\u4ED3\u5E93\u5730\u5740" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git remote set-url origin &lt;newurl&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u63A8\u9001" tabindex="-1">\u63A8\u9001 <a class="header-anchor" href="#\u63A8\u9001" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git add .</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m&quot;x&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull //\u4FDD\u6301\u672C\u5730\u4ED3\u5E93\u548C\u8FDC\u7A0B\u4ED3\u5E93\u7684\u540C\u6B65</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5206\u652F\u7BA1\u7406" tabindex="-1">\u5206\u652F\u7BA1\u7406 <a class="header-anchor" href="#\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b 01nav //\u65B0\u5EFA\u5206\u652F\u5E76\u5207\u6362\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch //\u67E5\u770B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin 01nav //\u63A8\u9001\u5206\u652F\u5230\u8FDC\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout master //\u5207\u6362\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge 01nav //\u5408\u5E76\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u7248\u672C\u56DE\u9000" tabindex="-1">\u7248\u672C\u56DE\u9000 <a class="header-anchor" href="#\u7248\u672C\u56DE\u9000" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git log //\u6253\u5370\u65E5\u5FD7\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">git reflog //\u6253\u5370\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard xxxx //\u7248\u672C\u56DE\u9000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u6E05\u7F13\u5B58" tabindex="-1">\u6E05\u7F13\u5B58 <a class="header-anchor" href="#\u6E05\u7F13\u5B58" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git rm -r --cached .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u8BBE\u7F6E-git-commit-\u65F6\u4E0D\u5FFD\u7565\u5927\u5C0F\u5199" tabindex="-1">\u8BBE\u7F6E git commit \u65F6\u4E0D\u5FFD\u7565\u5927\u5C0F\u5199 <a class="header-anchor" href="#\u8BBE\u7F6E-git-commit-\u65F6\u4E0D\u5FFD\u7565\u5927\u5C0F\u5199" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git config core.ignorecase false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u8BBE\u7F6E-ssh-key" tabindex="-1">\u8BBE\u7F6E ssh key <a class="header-anchor" href="#\u8BBE\u7F6E-ssh-key" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  ssh-keygen -t rsa -C </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3437705679@qq.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p><img src="`+e+'" alt=""></p>',23),o=[c];function i(t,r,C,A,d,g){return a(),n("div",null,o)}var D=s(p,[["render",i]]);export{y as __pageData,D as default};
