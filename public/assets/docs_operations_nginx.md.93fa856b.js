import{_ as s,c as n,o as a,a as l}from"./app.116e60de.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":2,"title":"基本配置","slug":"基本配置","link":"#基本配置","children":[]},{"level":2,"title":"开启 gzip 压缩","slug":"开启-gzip-压缩","link":"#开启-gzip-压缩","children":[]},{"level":2,"title":"跨域","slug":"跨域","link":"#跨域","children":[]}],"relativePath":"docs/operations/nginx.md"}'),p={name:"docs/operations/nginx.md"},e=l(`<h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    停止</span></span>
<span class="line"><span style="color:#A6ACCD;">    nginx -s quit</span></span>
<span class="line"><span style="color:#A6ACCD;">    查看进程</span></span>
<span class="line"><span style="color:#A6ACCD;">    ps -ef|grep nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">    终止进程</span></span>
<span class="line"><span style="color:#A6ACCD;">    kill -9 [进程命令]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="基本配置" tabindex="-1">基本配置 <a class="header-anchor" href="#基本配置" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">user nginx;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 工作进程=&gt;一般是 cpu 有几核就写几,可以最大限度的去发挥它的性能</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes auto;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 错误日志路径</span></span>
<span class="line"><span style="color:#A6ACCD;">error_log /var/log/nginx/error.log;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 一般不动它,给守护进程用的</span></span>
<span class="line"><span style="color:#A6ACCD;">pid /run/nginx.pid;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.</span></span>
<span class="line"><span style="color:#A6ACCD;">include /usr/share/nginx/modules/*.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 并发连接数=&gt;最大并发数:一个工作进程下的最大连接;默认 1024 个</span></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections 1024;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># http 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 日志格式</span></span>
<span class="line"><span style="color:#A6ACCD;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 是否允许上传文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile            on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 能不能推送</span></span>
<span class="line"><span style="color:#A6ACCD;">    tcp_nopush          on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # gzip 压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip                on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    tcp_nodelay         on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 长连接多长时间没有通信自动断开</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout   65;</span></span>
<span class="line"><span style="color:#A6ACCD;">    types_hash_max_size 2048;</span></span>
<span class="line"><span style="color:#A6ACCD;">    include             /etc/nginx/mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 默认的 http 头</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type        application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # Load modular configuration files from the /etc/nginx/conf.d directory.</span></span>
<span class="line"><span style="color:#A6ACCD;">    # See http://nginx.org/en/docs/ngx_core_module.html#include</span></span>
<span class="line"><span style="color:#A6ACCD;">    # for more information.</span></span>
<span class="line"><span style="color:#A6ACCD;">    include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 定义反向代理服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">    upstream web{</span></span>
<span class="line"><span style="color:#A6ACCD;">        server 127.0.0.1:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 这里的 server 如果只写一个就是单纯的额外网发布,如果写 n 个就是负载均衡</span></span>
<span class="line"><span style="color:#A6ACCD;">        server 127.0.0.1:8888 weight=1; #添加权重</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # 一个 server 对应一个网站</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 端口</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       80 default_server;</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       [::]:80 default_server;</span></span>
<span class="line"><span style="color:#A6ACCD;">        # server域名</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  _;</span></span>
<span class="line"><span style="color:#A6ACCD;">        root         /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        # Load configuration files for the default server block.</span></span>
<span class="line"><span style="color:#A6ACCD;">        include /etc/nginx/default.d/*.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 站点根目录</span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root    html;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index   index.html  index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 反向代理</span></span>
<span class="line"><span style="color:#A6ACCD;">        location /xxx/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 过来的请求代理到哪里</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass http://web; # 前面upstream定义的</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 如果需要客户端 ip,这个开关可能会重写为反向代理的 ip</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_redirect off;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # nginx 可能会改写头,用原来的值再把它改回来</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header Hose $host;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 代理服务器转发请求的时候用的协议版本</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header Connection &#39;upgrade&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_cache_bypass $http_upgrade;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 取客户端真实 ip</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            # 超时</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_connect_timeout 600;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_read_timeout 600;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 配置 https</span></span>
<span class="line"><span style="color:#A6ACCD;">        server {</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 一定要带上 ssl 标记,默认 443 端口</span></span>
<span class="line"><span style="color:#A6ACCD;">            listen       443 ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">            server_name  work.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">            ssl                  on;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 证书</span></span>
<span class="line"><span style="color:#A6ACCD;">            ssl_certificate      /etc/nginx/server.crt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 密钥</span></span>
<span class="line"><span style="color:#A6ACCD;">            ssl_certificate_key  /etc/nginx/server.key;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 超时</span></span>
<span class="line"><span style="color:#A6ACCD;">            ssl_session_timeout  5m;</span></span>
<span class="line"><span style="color:#A6ACCD;">            location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">                root   /usr/local/web/;</span></span>
<span class="line"><span style="color:#A6ACCD;">                add_header &#39;Cache-Control&#39; &#39;no-store&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            error_page 404 /404.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">                location = /40x.html {</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">                location = /50x.html {</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        error_page 404 /404.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">            location = /40x.html {</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">            location = /50x.html {</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br></div></div><h2 id="开启-gzip-压缩" tabindex="-1">开启 gzip 压缩 <a class="header-anchor" href="#开启-gzip-压缩" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">gzip  on;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_min_length  1k;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_buffers     4 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_http_version 1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_comp_level 9;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_types       text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php application/javascript application/json;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_disable &quot;MSIE [1-6]\\.&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_vary on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">location ^~ /prefix {</span></span>
<span class="line"><span style="color:#A6ACCD;">	add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span style="color:#A6ACCD;">	add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	rewrite ^/prefix/(.*)$/$1 break;</span></span>
<span class="line"><span style="color:#A6ACCD;">	proxy_pass 服务地址;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,8),r=[e];function c(o,i,t,b,C,A){return a(),n("div",null,r)}const y=s(p,[["render",c]]);export{m as __pageData,y as default};
