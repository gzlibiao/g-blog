#### nuxtjs

#### 生命周期

#### asyncData 和 fetch
```
1.两者都是服务端钩子

2.asyncData只能在page中用 component不支持   fetch page 和 component都可以

3. asyncData 发生在路由阶段 错误会导致界面跳转失效
4. asyncData发生在route阶段 在beforeCreate之前 
5. 在服务端端执行 fetch在beforeCreate之前
5. 在客户端执行 fetch在beforeMount之后
6. asyncData 函数参数自带context
7. fetch 需要通过this.$nuxt.context获取
8. fetch可以操作组件上的data asyncData则会和data进行合并输出
```


