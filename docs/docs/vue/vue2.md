# Vue2 相关

## 生命周期

```


```

## 性能优化

```
● 懒加载、
● 路由懒加载、
● 组件懒加载、
● 图片懒加载、
● 三方插件按需引入、
● 长列表性能优化，如果列表只是存粹的数据展示，不会发生改变，可以不做响应式
this.list=Object.freeze(list);
如果是大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容 vue-virtual-scroller

● 事件的销毁
Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。
定时器要销毁
总线通信注意销毁

● 无状态的组件标记为functional
函数式组件
无状态
无法实例化
内部没有任何生命周期处理函数
轻量,渲染性能高,适合只依赖于外部数据传递而变化的组件(展示组件，无逻辑和状态修改)
在template标签里标明functional
只接受props值

● key的使用
● v-show与v-if的合理使用
● keep-alive合理使用
● 用computed替代method 或 watch
● 使用is动态组件 <component :is='componentName'/>
```

## 关于样式冲突问题

> 多个组件污染（多个组件公用一套样式时影响其他组件）

在开发过程中为了避免不必要的资源浪费，多个组件在会共用一套 CSS 代码时，如果采用下面方法引入，可能会导致组件样式污染（加载组件的时候加载的不是当前组件的样式，必须要刷新一次才能当前组件的样式）

```html
<style scoped>
  @import '../assets/css/Login.css';
</style>
```

那么解决这个问题可以通过下面方法进行引入样式

```html
<style lang="" src="../assets/css/Login.css" scoped></style>
```

```
其原理是通过使用 PostCSS 来实现以下转换：
.class[data-v-f3f3eg9] { }

1. 当前组件中的元素及子组件根元素样式
2. 如果想覆盖子元素的样式 使用 深度作用选择器
  a. css   >>>
  b. scss /deep/ or ::v-deep
```

## 关于 vue.config.js

```js
module.exports = {
  devServer: {
    port: 8080, // 端口号 可以自定义
    open: true, // 启动项目后自动在浏览器打开项目
    proxy: {
      // 把所有以 /api 开头的请求代理转发
      '/api': {
        target: '', // 目标基础地址 url
        changeOrigin: true, // 允许跨域
        ws: true, // 开启 webSocket 代理
        pathRewrite: {
          // 重写路径
          '^/api': ''
        }
      }
    }
  }
}
```

## nextTick 的实现原理 MutationObserver

```javascript
// MutationObserver是HTML5新增的属性，用于监听DOM修改事件，能够监听到节点的属性、文本内容、子节点等的改动
// MutationObserver基本用法
var observer = new MutationObserver(function () {
  //这里是回调函数
  console.log('DOM被修改了！')
})
var article = document.querySelector('article')
observer.observer(article)

// Promise  > MutationObserver > setImmediate > setTimeout
```

## vue 设计原则的理解？

```
1. 渐进式JavaScript框架
  a. 与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易 于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使 用时，Vue 也完全能够为复杂的单页应用提供驱动。
2. 易用、灵活和高效
  a. 易用性 vue提供数据响应式、声明式模板语法和基于配置的组件系统等核心特性。这些使我们只需要关注应用 的核心业务即可，只要会写js、html和css就能轻松编写vue应用。
  b. 灵活性 渐进式框架的最大优点就是灵活性，如果应用足够小，我们可能仅需要vue核心特性即可完成功能；随着应用规模不断扩大，我们才可能逐渐引入路由、状态管理、vue-cli等库和工具，不管是应用体积还是 学习难度都是一个逐渐增加的平和曲线。
  c. 高效性 超快的虚拟 DOM 和 diﬀ 算法使我们的应用拥有最佳的性能表现。追求高效的过程还在继续，vue3中引入Proxy对数据响应式改进以及编译器中对于静态内容编译的改进都会让vue更加高效。
```

## 关于冗余导航报错问题

当我们在使用下面方法进行路由跳转时：

```html
<p @click="$router.push('/setting')">设置</p>
```

效果是想点击设置跳转到设置的页面，效果是完全可以正常实现跳转

但是，如果当前已经在`/setting`路由下，那么再点击就会报错：

```shell
[Vue warn]: Error in v-on handler (Promise/async): "NavigationDuplicated: Avoided redundant navigation to current location: "/setting"."
```

大概的意思就是：当前你已经在这个导航下了，不要再重复冗余

这个其实并不是一个错误，只是说你的操作多余了

那么解决方法就是：在 `router/index.js`中加入下面一段代码即可解决报错问题

```js
const router = new VueRouter({
  routes
})

// 解决 冗余导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
```

## Vue 组件 data 为什么必须是个函数而 Vue 的根实例则没有此限制？

```
● Vue组件可能存在多个实例，如果使用对象形式定义data，则会导致它们共用一个data对象，那么状态
变更将会影响所有组件实例，这是不合理的；采用函数形式定义，在initData时会将其作为工厂函数返 回全新data对象，有效规避多实例之间状态污染问题。
● 而在Vue根实例只能有一个，所以不需要担心这种情况。
```

## Vue 给 for 循环的标签添加背景图

```html
<div :style="{ 'background-image': 'url(' + item.PlaceImgUrl + ')' }"></div>
```

## watch 监听器

通过 watch 可以定义一个监视器，用于监视某一些数据，当这个被监视的数据一旦发生变化，就会执行里面的逻辑：

```vue
<template>
  <div>
    <input v-model="text" type="text" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    },
    watch: {
      text() {
        console.log('text 值发生改变了！！')
      }
    }
  }
</script>
```

但是不免有些特殊的情况，比如：我们希望在页面刚刚初始化的时候，虽然数据没有发生变化，但也需要立刻执行一次监视器中的内容，这样的话，监视器的表现形式会变成对象，里面透过配置一个 `handler` 的函数和 `immediate` 方法来解决：

```vue
<template>
  <div>
    <input v-model="text" type="text" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    },
    watch: {
      // 使用对象写法，监视数据 text
      text: {
        // 使用 handler 方法，处理变化后的逻辑代码
        handler() {
          console.log('text 值发生改变了！！')
        },
        // immediate 这个属性值为 true 的时候，默认页面初始化完成之后执行一次上面的代码
        immediate: true
      }
    }
  }
</script>
```

## vue2 响应式弊端：

```
● 响应化过程需要递归遍历，消耗较大;
● 新加或删除属性无法监听 ;
● 数组响应化需要额外实现 ;
● Map、Set、Class等无法响应式 ;
● 修改语法有限制;
```

## Vue 组件 通信方式

```
● 父子组件通信 props $emit
● 嵌套层级比较多 或 当前父组件下多个子组件 用 provide - inject
● 非嵌套关系 用 事件总线 Vue.$prototype.$bus = new Vue();  this.$bus.on   this.$bus.emit
● $refs $parent $children $attrs $listeners  不推荐，存在耦合
● vuex
```

## Vue 脚手架搭建

1. 处理资源路径(相对路径资源将被 webpack 处理，文件名包含了内容哈希)

```
  a. 如果 URL 是一个绝对路径 (例如 /images/foo.png )，它将会被保留不变。
  b. 如果 URL 以 . 开头会作为一个相对模块请求被解释并基于文件系统相对路径。
    ⅰ. <img alt="Vue logo" src="./assets/logo.png">
  c. 如果 URL 以 ~ 开头会作为一个模块请求被解析。这意味着你甚至可以引用 Node 模块中的资源：
    ⅰ. <img src="~some-npm-package/foo.png">
  d. 如果 URL 以 @ 开头会作为一个模块请求被解析。Vue CLI 默认会设置一个指向 src 的别名
  e. 如果你不需要内容哈希，把资源放到public文件夹
```

2. 网站放在二级目录下面

```
   a. 修改 vue.config.js publicPath
   b. 在 public/index.html 等通过 html-webpack-plugin 用作模板的 HTML 文件中，
   通过 <%= BASE_URL %> 设置链接前缀：<link rel="icon" href="<%= BASE_URL %>favicon.ico">
   c. 在模板中，先向组件传入 BASE_URL 然后<img :src="`${publicPath}my-image.png`">
```

3. Css 使用预处理器

```
# Sass

npm install -D sass-loader node-sass

# Less

npm install -D less-loader less

# Stylus

npm install -D stylus-loader stylus
```

## Vue 组件化的理解

```

● 组件是独立和可复用的代码组织单元。组件系统是 Vue 核心特性之一。
● 组件化开发能大幅提高应用开发效率、测试性、复用性等；
● 组件使用按分类有：页面组件、业务组件、通用组件；合理的划分组件，有助于提升应用性能；
● vue 的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，它们基于 VueComponent，扩展于 Vue；
● vue 中常见组件化技术有：属性 prop，自定义事件，插槽，mixins 等，它们主要用于组件通信、扩展等；
● 组件应该是高内聚、低耦合的；
● 遵循单向数据流的原则。
● 组件创建顺序自上而下 ，组件挂载顺序自下而上

```

```

```
