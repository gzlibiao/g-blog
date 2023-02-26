import{_ as s,c as n,o as a,a as l}from"./app.116e60de.js";const e="/assets/git.19cb8508.png",m=JSON.parse('{"title":"git 初始化 配置","description":"","frontmatter":{},"headers":[{"level":3,"title":"出错","slug":"出错","link":"#出错","children":[]},{"level":2,"title":"已有代码 删.git","slug":"已有代码-删-git","link":"#已有代码-删-git","children":[{"level":3,"title":"设置 git 全局信息设置","slug":"设置-git-全局信息设置","link":"#设置-git-全局信息设置","children":[]},{"level":3,"title":"重置提交仓库地址","slug":"重置提交仓库地址","link":"#重置提交仓库地址","children":[]},{"level":3,"title":"推送","slug":"推送","link":"#推送","children":[]},{"level":3,"title":"分支管理","slug":"分支管理","link":"#分支管理","children":[]},{"level":3,"title":"版本回退","slug":"版本回退","link":"#版本回退","children":[]},{"level":3,"title":"git 快速解决冲突","slug":"git-快速解决冲突","link":"#git-快速解决冲突","children":[]},{"level":3,"title":"清缓存","slug":"清缓存","link":"#清缓存","children":[]},{"level":3,"title":"设置 git commit 时不忽略大小写","slug":"设置-git-commit-时不忽略大小写","link":"#设置-git-commit-时不忽略大小写","children":[]},{"level":3,"title":"设置 ssh key","slug":"设置-ssh-key","link":"#设置-ssh-key","children":[]},{"level":3,"title":"关闭 git 证书校验","slug":"关闭-git-证书校验","link":"#关闭-git-证书校验","children":[]},{"level":3,"title":"开启 git 证书校验","slug":"开启-git-证书校验","link":"#开启-git-证书校验","children":[]},{"level":3,"title":"github 提速","slug":"github-提速","link":"#github-提速","children":[]}]}],"relativePath":"docs/other/git.md"}'),p={name:"docs/other/git.md"},i=l(`<h1 id="git-初始化-配置" tabindex="-1">git 初始化 配置 <a class="header-anchor" href="#git-初始化-配置" aria-hidden="true">#</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">1、在要推送的内容里面右键选择 git bash here</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2、输入 git init 初始化仓库, 本地会生成一个 .git 文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3、然后输入 git remote add origin https://gitee.com/仓库</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4、使用 git pull origin master 命令将码云的仓库 pull 到本地</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5、git add . (别忘记.)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6、git commit -m &#39;描述新添加的文件内容&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7、git push origin master 将本地仓库推送到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="出错" tabindex="-1">出错 <a class="header-anchor" href="#出错" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1 使用如下命令</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull —rebase origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2 然后再进行上传:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="已有代码-删-git" tabindex="-1">已有代码 删.git <a class="header-anchor" href="#已有代码-删-git" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">修改仓库地址:git remote set-url origin https://gitee.com/gz_lib/git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2 然后再进行上传:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="设置-git-全局信息设置" tabindex="-1">设置 git 全局信息设置 <a class="header-anchor" href="#设置-git-全局信息设置" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global --list</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.name xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.email xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="重置提交仓库地址" tabindex="-1">重置提交仓库地址 <a class="header-anchor" href="#重置提交仓库地址" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git remote set-url origin &lt;newurl&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="推送" tabindex="-1">推送 <a class="header-anchor" href="#推送" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git add .</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m&quot;x&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull //保持本地仓库和远程仓库的同步</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="分支管理" tabindex="-1">分支管理 <a class="header-anchor" href="#分支管理" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b 01nav //新建分支并切换分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch //查看分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin 01nav //推送分支到远程</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout master //切换分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge 01nav //合并分支</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="版本回退" tabindex="-1">版本回退 <a class="header-anchor" href="#版本回退" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git log //打印日志信息</span></span>
<span class="line"><span style="color:#A6ACCD;">git reflog //打印日志</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard xxxx //版本回退</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git branch 分支名称 创建新分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -d 分支名称 删除分支</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout 分支名称 切换分支</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git merge 分支名称 合并代码</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git chekcout feature</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase master</span></span>
<span class="line"><span style="color:#A6ACCD;">等同于</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase master feture</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">不推荐使用 rebase</span></span>
<span class="line"><span style="color:#A6ACCD;">推荐 checkout + merge</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git pull origin dev</span></span>
<span class="line"><span style="color:#A6ACCD;">等同于</span></span>
<span class="line"><span style="color:#A6ACCD;">git fetch origin dev</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge origin dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git tag -a v1(标签号) -m &quot;提交信息&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b dev // 创建并且跳转分支</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h4 id="面密操作" tabindex="-1">面密操作 <a class="header-anchor" href="#面密操作" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1.修改url</span></span>
<span class="line"><span style="color:#A6ACCD;">源地址：https://gitub.com/gzlib/dbhot.git</span></span>
<span class="line"><span style="color:#A6ACCD;">修改地址: https://用户名:密码@github.com/gzlib/dbhot.git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2.SSH实现</span></span>
<span class="line"><span style="color:#A6ACCD;">生成公私钥，将公钥保存到gitee</span></span>
<span class="line"><span style="color:#A6ACCD;">id_rsa.pub公钥，id_rsa私钥</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ssh-keygen</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="gitignore-文件" tabindex="-1">.gitignore 文件 <a class="header-anchor" href="#gitignore-文件" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">*.py // 忽略py文件</span></span>
<span class="line"><span style="color:#A6ACCD;">!a.py // 忽略除了a.py之外的文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="git-快速解决冲突" tabindex="-1">git 快速解决冲突 <a class="header-anchor" href="#git-快速解决冲突" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">1 安装 beyond compare</span></span>
<span class="line"><span style="color:#A6ACCD;">2 git 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --local merge.tool bc3</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --local mergetool.path &#39;/usr/local/bin/bcomp&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --local mergetool.keepBackup false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3 应用 beyond compare 解决冲突</span></span>
<span class="line"><span style="color:#A6ACCD;">git mergetool</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="清缓存" tabindex="-1">清缓存 <a class="header-anchor" href="#清缓存" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git rm -r --cached .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="设置-git-commit-时不忽略大小写" tabindex="-1">设置 git commit 时不忽略大小写 <a class="header-anchor" href="#设置-git-commit-时不忽略大小写" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git config core.ignorecase false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="设置-ssh-key" tabindex="-1">设置 ssh key <a class="header-anchor" href="#设置-ssh-key" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3437705679@qq.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+e+`" alt=""></p><h3 id="关闭-git-证书校验" tabindex="-1">关闭 git 证书校验 <a class="header-anchor" href="#关闭-git-证书校验" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git config --global http.sslVerify &quot;false&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="开启-git-证书校验" tabindex="-1">开启 git 证书校验 <a class="header-anchor" href="#开启-git-证书校验" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git config --global http.sslVerify &quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="github-提速" tabindex="-1">github 提速 <a class="header-anchor" href="#github-提速" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">目录 windows/system32/devices/etc/hosts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">192.30.253.112 github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">192.30.253.119 gist.github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 assets-cdn.github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 raw.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 gist.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 cloud.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 camo.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 avatars0.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 avatars1.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 avatars2.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 avatars3.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 avatars4.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 avatars5.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 avatars6.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 avatars7.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;">151.101.100.133 avatars8.githubusercontent.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,35),r=[i];function c(t,o,b,u,C,d){return a(),n("div",null,r)}const g=s(p,[["render",c]]);export{m as __pageData,g as default};
