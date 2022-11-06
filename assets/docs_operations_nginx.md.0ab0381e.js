import{_ as s,o as n,c as a,a as p}from"./app.5305faa9.js";const d=JSON.parse('{"title":"\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u547D\u4EE4","slug":"\u547D\u4EE4"},{"level":2,"title":"\u57FA\u672C\u914D\u7F6E","slug":"\u57FA\u672C\u914D\u7F6E"},{"level":2,"title":"\u5F00\u542F gzip \u538B\u7F29","slug":"\u5F00\u542F-gzip-\u538B\u7F29"},{"level":2,"title":"\u8DE8\u57DF","slug":"\u8DE8\u57DF"}],"relativePath":"docs/operations/nginx.md"}'),l={name:"docs/operations/nginx.md"},e=p(`<h2 id="\u547D\u4EE4" tabindex="-1">\u547D\u4EE4 <a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    \u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;">    nginx -s quit</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u67E5\u770B\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">    ps -ef|grep nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u7EC8\u6B62\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">    kill -9 [\u8FDB\u7A0B\u547D\u4EE4]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1">\u57FA\u672C\u914D\u7F6E <a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">user nginx;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5DE5\u4F5C\u8FDB\u7A0B=&gt;\u4E00\u822C\u662F cpu \u6709\u51E0\u6838\u5C31\u5199\u51E0,\u53EF\u4EE5\u6700\u5927\u9650\u5EA6\u7684\u53BB\u53D1\u6325\u5B83\u7684\u6027\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes auto;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u9519\u8BEF\u65E5\u5FD7\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">error_log /var/log/nginx/error.log;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u4E00\u822C\u4E0D\u52A8\u5B83,\u7ED9\u5B88\u62A4\u8FDB\u7A0B\u7528\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">pid /run/nginx.pid;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.</span></span>
<span class="line"><span style="color:#A6ACCD;">include /usr/share/nginx/modules/*.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5E76\u53D1\u8FDE\u63A5\u6570=&gt;\u6700\u5927\u5E76\u53D1\u6570:\u4E00\u4E2A\u5DE5\u4F5C\u8FDB\u7A0B\u4E0B\u7684\u6700\u5927\u8FDE\u63A5;\u9ED8\u8BA4 1024 \u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections 1024;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># http \u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u65E5\u5FD7\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u662F\u5426\u5141\u8BB8\u4E0A\u4F20\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile            on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u80FD\u4E0D\u80FD\u63A8\u9001</span></span>
<span class="line"><span style="color:#A6ACCD;">    tcp_nopush          on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # gzip \u538B\u7F29</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip                on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    tcp_nodelay         on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u957F\u8FDE\u63A5\u591A\u957F\u65F6\u95F4\u6CA1\u6709\u901A\u4FE1\u81EA\u52A8\u65AD\u5F00</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout   65;</span></span>
<span class="line"><span style="color:#A6ACCD;">    types_hash_max_size 2048;</span></span>
<span class="line"><span style="color:#A6ACCD;">    include             /etc/nginx/mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u9ED8\u8BA4\u7684 http \u5934</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type        application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # Load modular configuration files from the /etc/nginx/conf.d directory.</span></span>
<span class="line"><span style="color:#A6ACCD;">    # See http://nginx.org/en/docs/ngx_core_module.html#include</span></span>
<span class="line"><span style="color:#A6ACCD;">    # for more information.</span></span>
<span class="line"><span style="color:#A6ACCD;">    include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u5B9A\u4E49\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">    upstream web{</span></span>
<span class="line"><span style="color:#A6ACCD;">        server 127.0.0.1:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">        # \u8FD9\u91CC\u7684 server \u5982\u679C\u53EA\u5199\u4E00\u4E2A\u5C31\u662F\u5355\u7EAF\u7684\u989D\u5916\u7F51\u53D1\u5E03,\u5982\u679C\u5199 n \u4E2A\u5C31\u662F\u8D1F\u8F7D\u5747\u8861</span></span>
<span class="line"><span style="color:#A6ACCD;">        server 127.0.0.1:8888 weight=1; #\u6DFB\u52A0\u6743\u91CD</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u4E00\u4E2A server \u5BF9\u5E94\u4E00\u4E2A\u7F51\u7AD9</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        # \u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       80 default_server;</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       [::]:80 default_server;</span></span>
<span class="line"><span style="color:#A6ACCD;">        # server\u57DF\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  _;</span></span>
<span class="line"><span style="color:#A6ACCD;">        root         /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        # Load configuration files for the default server block.</span></span>
<span class="line"><span style="color:#A6ACCD;">        include /etc/nginx/default.d/*.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;">        # \u7AD9\u70B9\u6839\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root    html;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index   index.html  index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        # \u53CD\u5411\u4EE3\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">        location /xxx/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">            # \u8FC7\u6765\u7684\u8BF7\u6C42\u4EE3\u7406\u5230\u54EA\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass http://web; # \u524D\u9762upstream\u5B9A\u4E49\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">            # \u5982\u679C\u9700\u8981\u5BA2\u6237\u7AEF ip,\u8FD9\u4E2A\u5F00\u5173\u53EF\u80FD\u4F1A\u91CD\u5199\u4E3A\u53CD\u5411\u4EE3\u7406\u7684 ip</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_redirect off;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # nginx \u53EF\u80FD\u4F1A\u6539\u5199\u5934,\u7528\u539F\u6765\u7684\u503C\u518D\u628A\u5B83\u6539\u56DE\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header Hose $host;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # \u4EE3\u7406\u670D\u52A1\u5668\u8F6C\u53D1\u8BF7\u6C42\u7684\u65F6\u5019\u7528\u7684\u534F\u8BAE\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header Connection &#39;upgrade&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_cache_bypass $http_upgrade;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # \u53D6\u5BA2\u6237\u7AEF\u771F\u5B9E ip</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            # \u8D85\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_connect_timeout 600;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_read_timeout 600;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        # \u914D\u7F6E https</span></span>
<span class="line"><span style="color:#A6ACCD;">        server {</span></span>
<span class="line"><span style="color:#A6ACCD;">            # \u4E00\u5B9A\u8981\u5E26\u4E0A ssl \u6807\u8BB0,\u9ED8\u8BA4 443 \u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">            listen       443 ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">            server_name  work.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">            ssl                  on;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # \u8BC1\u4E66</span></span>
<span class="line"><span style="color:#A6ACCD;">            ssl_certificate      /etc/nginx/server.crt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # \u5BC6\u94A5</span></span>
<span class="line"><span style="color:#A6ACCD;">            ssl_certificate_key  /etc/nginx/server.key;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # \u8D85\u65F6</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5F00\u542F-gzip-\u538B\u7F29" tabindex="-1">\u5F00\u542F gzip \u538B\u7F29 <a class="header-anchor" href="#\u5F00\u542F-gzip-\u538B\u7F29" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">gzip  on;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_min_length  1k;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_buffers     4 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_http_version 1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_comp_level 9;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_types       text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php application/javascript application/json;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_disable &quot;MSIE [1-6]\\.&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_vary on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u8DE8\u57DF" tabindex="-1">\u8DE8\u57DF <a class="header-anchor" href="#\u8DE8\u57DF" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">location ^~ /prefix {</span></span>
<span class="line"><span style="color:#A6ACCD;">	add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span style="color:#A6ACCD;">	add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	rewrite ^/prefix/(.*)$/$1 break;</span></span>
<span class="line"><span style="color:#A6ACCD;">	proxy_pass \u670D\u52A1\u5730\u5740;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[e];function c(t,r,i,A,C,y){return n(),a("div",null,o)}var _=s(l,[["render",c]]);export{d as __pageData,_ as default};
