## 命令

```
    停止
    nginx -s quit
    查看进程
    ps -ef|grep nginx
    终止进程
    kill -9 [进程命令]
```

## 基本配置

```
user nginx;

# 工作进程=>一般是 cpu 有几核就写几,可以最大限度的去发挥它的性能
worker_processes auto;

# 错误日志路径
error_log /var/log/nginx/error.log;

# 一般不动它,给守护进程用的
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

# 并发连接数=>最大并发数:一个工作进程下的最大连接;默认 1024 个
events {
    worker_connections 1024;
}

# http 配置
http {
    # 日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;
    # 是否允许上传文件
    sendfile            on;
    # 能不能推送
    tcp_nopush          on;
    # gzip 压缩
    gzip                on;
    tcp_nodelay         on;
    # 长连接多长时间没有通信自动断开
    keepalive_timeout   65;
    types_hash_max_size 2048;
    include             /etc/nginx/mime.types;
    # 默认的 http 头
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;
    # 定义反向代理服务器
    upstream web{
        server 127.0.0.1:8080;
        # 这里的 server 如果只写一个就是单纯的额外网发布,如果写 n 个就是负载均衡
        server 127.0.0.1:8888 weight=1; #添加权重
    }

    # 一个 server 对应一个网站
    server {
        # 端口
        listen       80 default_server;
        listen       [::]:80 default_server;
        # server域名
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;
        # 站点根目录
        location / {
            root    html;
            index   index.html  index.htm;
        }
        # 反向代理
        location /xxx/ {
            # 过来的请求代理到哪里
            proxy_pass http://web; # 前面upstream定义的
            # 如果需要客户端 ip,这个开关可能会重写为反向代理的 ip
            proxy_redirect off;
            # nginx 可能会改写头,用原来的值再把它改回来
            proxy_set_header Hose $host;
            # 代理服务器转发请求的时候用的协议版本
            proxy_http_version 1.1;

            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_cache_bypass $http_upgrade;
            # 取客户端真实 ip
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

            # 超时
            proxy_connect_timeout 600;
            proxy_read_timeout 600;
        }
        # 配置 https
        server {
            # 一定要带上 ssl 标记,默认 443 端口
            listen       443 ssl;
            server_name  work.com;
            ssl                  on;
            # 证书
            ssl_certificate      /etc/nginx/server.crt;
            # 密钥
            ssl_certificate_key  /etc/nginx/server.key;
            # 超时
            ssl_session_timeout  5m;
            location / {
                root   /usr/local/web/;
                add_header 'Cache-Control' 'no-store';
            }
            error_page 404 /404.html;
                location = /40x.html {
            }

            error_page 500 502 503 504 /50x.html;
                location = /50x.html {
            }
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

}
```

## 开启 gzip 压缩

```
gzip  on;
gzip_min_length  1k;
gzip_buffers     4 16k;
gzip_http_version 1.1;
gzip_comp_level 9;
gzip_types       text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php application/javascript application/json;
gzip_disable "MSIE [1-6]\.";
gzip_vary on;
```

## 跨域

```
location ^~ /prefix {
	add_header Access-Control-Allow-Origin *;
	add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
	add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
	rewrite ^/prefix/(.*)$/$1 break;
	proxy_pass 服务地址;
}
```