## host 文件配置 加速 github 访问

### https://ip.tool.chinaz.com/140.82.121.4

```
修改本地hosts文件
13.114.40.48	  github.com
151.101.1.194	  github.global.ssl.fastly.net
185.199.110.154   github.githubassets.com
185.199.108.153   assets-cdn.github.com
13.230.158.120	  api.github.com
52.192.72.89	  www.github.com
151.101.2.132 echarts.apache.org

在cmd中输入以下命令生效
ipconfig/flushdns
```

## cdn
什么是cdn
公司的一些静态文件 css sdk 图标这些放到 腾讯 阿里云
客户端下次请求资源的时候cdn服务商就近提供网络节点资源 从而提高资源加载速度