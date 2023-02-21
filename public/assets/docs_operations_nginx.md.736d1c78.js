import{_ as s,o as n,c as a,a as l}from"./app.4520312e.js";const m=JSON.parse('{"title":"\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u547D\u4EE4","slug":"\u547D\u4EE4"},{"level":2,"title":"\u57FA\u672C\u914D\u7F6E","slug":"\u57FA\u672C\u914D\u7F6E"},{"level":2,"title":"\u5F00\u542F gzip \u538B\u7F29","slug":"\u5F00\u542F-gzip-\u538B\u7F29"},{"level":2,"title":"\u8DE8\u57DF","slug":"\u8DE8\u57DF"}],"relativePath":"docs/operations/nginx.md"}'),p={name:"docs/operations/nginx.md"},e=l(`<h2 id="\u547D\u4EE4" tabindex="-1">\u547D\u4EE4 <a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    \u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;">    nginx -s quit</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u67E5\u770B\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">    ps -ef|grep nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u7EC8\u6B62\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">    kill -9 [\u8FDB\u7A0B\u547D\u4EE4]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1">\u57FA\u672C\u914D\u7F6E <a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">user nginx;</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br></div></div><h2 id="\u5F00\u542F-gzip-\u538B\u7F29" tabindex="-1">\u5F00\u542F gzip \u538B\u7F29 <a class="header-anchor" href="#\u5F00\u542F-gzip-\u538B\u7F29" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">gzip  on;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_min_length  1k;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_buffers     4 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_http_version 1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_comp_level 9;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_types       text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php application/javascript application/json;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_disable &quot;MSIE [1-6]\\.&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_vary on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u8DE8\u57DF" tabindex="-1">\u8DE8\u57DF <a class="header-anchor" href="#\u8DE8\u57DF" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">location ^~ /prefix {</span></span>
<span class="line"><span style="color:#A6ACCD;">	add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span style="color:#A6ACCD;">	add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	rewrite ^/prefix/(.*)$/$1 break;</span></span>
<span class="line"><span style="color:#A6ACCD;">	proxy_pass \u670D\u52A1\u5730\u5740;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,8),r=[e];function c(o,i,t,b,A,C){return n(),a("div",null,r)}var y=s(p,[["render",c]]);export{m as __pageData,y as default};
