#### 生命周期


#### seo


#### 解决token丢失并持久化方案
1.下载
yarn add cookie-universal-nuxt -S
2.配置
nuxt.config.js
modules:[
  'cookie-universal-nuxt'
]
3.操作
this.$cookies.get
this.$cookies.set
this.$cookies.remove

1, 刚开始做项目得时候登录后会把Token存在客户端的本地存储中用来判断用户是否登录，然后会在全局请求是带上登录后返回来的token以及其他的信息，但是在项目中使用localstroge会报window or document 对象未定义，这是因为在服务端是没有window或者document对象的。

2, 鉴于上边的问题，但是又要实现这个功能，所以就开始折腾，过程中发现cookie-universal-nuxt这个在服务端获取cookie的插件。这里把cookie-universal-nuxt官网链接放在这里，以供参考，官网的介绍很全面。

3,（个人见解） 在用完后才领悟到这里是利用了存到cookie中的内容是会被携带在请求头中的原理做的，你也可以利用这个原理在你存到cookie中后，然后在请求头中取出来，在分别加进去或者在asyncData或fetch获取cookie中的内容，做一些自己的操作
