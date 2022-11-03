# 组件/标签的变化

```
以前是html标签，现在是小程序标签
div 改成 view
span、font 改成 text
a 改成 navigator
img 改成 image
input 还在，但type属性改成了confirmtype
form、button、checkbox、radio、label、textarea、canvas、video 这些还在。
select 改成 picker
iframe 改成 web-view
ul、li没有了，都用view替代
audio 不再推荐使用，改成api方式，背景音频api文档
其实老的HTML标签也可以在uni-app里使用，uni-app编译器会在编译时把老标签转为新标签。但不推荐这种用法，调试H5端时容易混乱，基于元素的选择器也会出问题。

除了改动外，新增了一批手机端常用的新组件
scroll-view 可区域滚动视图容器
swiper 可滑动区域视图容器
icon 图标
rich-text 富文本（不可执行js，但可渲染各种文字格式和图片）
progress 进度条
slider 滑块指示器
switch 开关选择器
camera 相机
live-player 直播
map 地图
cover-view 可覆盖原生组件的视图容器
cover-view需要多强调几句，uni-app的非h5端的video、map、canvas、textarea是原生组件，层级高于其他组件。如需覆盖原生组件，比如在map上加个遮罩，则需要使用cover-view组件

除了内置组件，还有很多开源的扩展组件，把常用操作都进行封装，
```

# rpx

```
rpx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。uni-app 规定屏幕基准宽度 750rpx。

开发者可以通过设计稿基准宽度计算页面元素 rpx 值，设计稿 1px 与框架样式 1rpx 转换公式如下：

设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx

换言之，页面元素宽度在 uni-app 中的宽度计算公式：

750 * 元素在设计稿中的宽度 / 设计稿基准宽度
```

# js 的变化

```
运行环境从浏览器变成v8引擎
```
