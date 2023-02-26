import{_ as s,c as n,o as a,a as l}from"./app.116e60de.js";const m=JSON.parse('{"title":"环境搭建","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装脚手架","slug":"安装脚手架","link":"#安装脚手架","children":[]},{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"另一种创建方式","slug":"另一种创建方式","link":"#另一种创建方式","children":[{"level":3,"title":"链接到 mumu 模拟器","slug":"链接到-mumu-模拟器","link":"#链接到-mumu-模拟器","children":[]},{"level":3,"title":"夜神 模拟器","slug":"夜神-模拟器","link":"#夜神-模拟器","children":[]},{"level":3,"title":"项目跑起来","slug":"项目跑起来","link":"#项目跑起来","children":[]},{"level":3,"title":"低于 0.67 版本的 React Native 需要 JDK 1.8 版本（官方也称 8 版本）。","slug":"低于-0-67-版本的-react-native-需要-jdk-1-8-版本-官方也称-8-版本-。","link":"#低于-0-67-版本的-react-native-需要-jdk-1-8-版本-官方也称-8-版本-。","children":[]}]},{"level":2,"title":"RN 基础组件 1 —— Text","slug":"rn-基础组件-1-——-text","link":"#rn-基础组件-1-——-text","children":[]},{"level":2,"title":"二、RN 基础组件 2 —— View 和 ScrollView","slug":"二、rn-基础组件-2-——-view-和-scrollview","link":"#二、rn-基础组件-2-——-view-和-scrollview","children":[]},{"level":2,"title":"三、RN 基础组件 3 —— Image 和 ImageBackground","slug":"三、rn-基础组件-3-——-image-和-imagebackground","link":"#三、rn-基础组件-3-——-image-和-imagebackground","children":[]},{"level":2,"title":"打包","slug":"打包","link":"#打包","children":[{"level":3,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":3,"title":"常用组件","slug":"常用组件","link":"#常用组件","children":[]},{"level":3,"title":"api","slug":"api","link":"#api","children":[]},{"level":3,"title":"打包","slug":"打包-1","link":"#打包-1","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"relativePath":"docs/前端/react-native/react-native.md"}'),p={name:"docs/前端/react-native/react-native.md"},e=l(`<h1 id="环境搭建" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm config set registry https://registry.npm.taobao.org --global</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config set disturl https://npm.taobao.org/dist --global</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="安装脚手架" tabindex="-1">安装脚手架 <a class="header-anchor" href="#安装脚手架" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install -g react-native-cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npx react-native init myReact</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="另一种创建方式" tabindex="-1">另一种创建方式 <a class="header-anchor" href="#另一种创建方式" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install -g create-react-native-app</span></span>
<span class="line"><span style="color:#A6ACCD;">1.安装好环境</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2.npm install -g create-react-native-app</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3.create-react-native-app Demo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4 在 Demo 下创建一个 android 目录，在 android studio 中创建一个本地的工程，将工程复制到 Demo 的 android 目录下</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5 修改 package.json 文件，npm install(按照官方文档保留，通过自己创建的 react native 工程，package.json 中的文件会生成更多)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6 配置 maven</span></span>
<span class="line"><span style="color:#A6ACCD;">在你的 app 中 build.gradle 文件中添加 React Native 依赖:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dependencies {</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">compile &quot;com.facebook.react:react-native:+&quot; // From node_modules.</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7 在项目的 build.gradle 文件中为 React Native 添加一个 maven 依赖的入口，必须写在 &quot;allprojects&quot; 代码块中:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">allprojects {</span></span>
<span class="line"><span style="color:#A6ACCD;">repositories {</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">maven {</span></span>
<span class="line"><span style="color:#A6ACCD;">// All of React Native (JS, Android binaries) is installed from npm</span></span>
<span class="line"><span style="color:#A6ACCD;">url &quot;$rootDir/../node_modules/react-native/android&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">在 sync 的时候，出现了错误，一个是原生的 minSdkVersion 与 RN 的不一致</span></span>
<span class="line"><span style="color:#A6ACCD;">第二个是需要在清单文件中</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;use-sdk tools:overrideLibrary=&quot;com.facebook.react&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="链接到-mumu-模拟器" tabindex="-1">链接到 mumu 模拟器 <a class="header-anchor" href="#链接到-mumu-模拟器" aria-hidden="true">#</a></h3><p>adb connect 127.0.0.1:7555</p><p>adb devices // 查看所有可连接的设备 adb kill-server adb connect 127.0.0.1:62001</p><h3 id="夜神-模拟器" tabindex="-1">夜神 模拟器 <a class="header-anchor" href="#夜神-模拟器" aria-hidden="true">#</a></h3><p>connect 127.0.0.1:62001</p><h3 id="项目跑起来" tabindex="-1">项目跑起来 <a class="header-anchor" href="#项目跑起来" aria-hidden="true">#</a></h3><p>yarn android or npx react-native run-android</p><h3 id="低于-0-67-版本的-react-native-需要-jdk-1-8-版本-官方也称-8-版本-。" tabindex="-1">低于 0.67 版本的 React Native 需要 JDK 1.8 版本（官方也称 8 版本）。 <a class="header-anchor" href="#低于-0-67-版本的-react-native-需要-jdk-1-8-版本-官方也称-8-版本-。" aria-hidden="true">#</a></h3><h1 id="组件篇" tabindex="-1">组件篇 <a class="header-anchor" href="#组件篇" aria-hidden="true">#</a></h1><h2 id="rn-基础组件-1-——-text" tabindex="-1">RN 基础组件 1 —— Text <a class="header-anchor" href="#rn-基础组件-1-——-text" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { Text } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;Text&gt;&lt;/Text&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">常用属性：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        numberOfLines：显示的行数，溢出部分会隐藏</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ellipsizeMode： tail / head / middle / clip</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">常用事件：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        onPress：点击</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        onLongPress：长按</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">注意：RN 中容器（如 View）中不能放置文本，文本字符串只能放在 Text 中</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="二、rn-基础组件-2-——-view-和-scrollview" tabindex="-1">二、RN 基础组件 2 —— View 和 ScrollView <a class="header-anchor" href="#二、rn-基础组件-2-——-view-和-scrollview" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { View } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;View&gt;&lt;/View&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">说明：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">①View 默认没有高度，要靠内容撑起来</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">②View 可以任意指定高度，也可以指定高度为 100%，从而撑满屏幕</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">③View 中内容溢出了，不能滚动！如果希望滚动，请使用 ScrollView</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { ScrollView } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;ScrollView &gt;&lt;/ScrollView &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">说明：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">①ScrollView 默认有高度，撑满父容器</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">②ScrollView 不能任意指定高度</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">③ScrollView 中内容溢出了，自动滚动！—— 默认是竖直滚动</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">④ScrollView 默认是竖直滚动，想水平滚动，指定属性 horizontal={true}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">⑤ScrollView 可以实现“滚动到顶部”动画效果：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        import  {useRef}  from  &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        function XzGoTop(){</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                let sv = useRef()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                function goTop(){  sv.current.scrollTo({y: 0})  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                return (&lt;ScrollView ref={sv}&gt;&lt;/ScrollView&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">总结：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">React 官方为函数式组件提供了三个 Hook：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">①useState( )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">②useEffect( )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">③useRef( )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h2 id="三、rn-基础组件-3-——-image-和-imagebackground" tabindex="-1">三、RN 基础组件 3 —— Image 和 ImageBackground <a class="header-anchor" href="#三、rn-基础组件-3-——-image-和-imagebackground" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { Image } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;Image /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">说明：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">① 本地图片：需要在打包时一起编译到手机 APP 中，可以使用 require()或 import 进行导入；可以不指定尺寸</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Image source={require(&#39;./xx/xx.png&#39;)}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">② 远程图片：不能使用 require 或 import 导入，只能使用选项对象指定地址： { uri: &#39;远程服务器上的地址&#39; }；必须手工指定图片尺寸，否则不显示（默认尺寸为 0）—— 为了避免页面重绘</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Image style={width:x, height:y} source={{uri: &#39;http://xxx/x.png&#39;}}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">③ 图片的 resizeMode 属性指定如何缩放图片：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                center：图片不缩不放，直接显示在Image区域中央</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                cover：覆盖，图片进行等比例缩放，保证最小边可以覆盖Image区域，大边可能溢出</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                contain：包含，图片进行等比例缩放，保证所有边都在Image区域，可能出现空白</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                stretch：拉伸，图片进行不等比例缩放，保证完美覆盖Image区域</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                repeat：重复/平铺，图片进行等比例缩放，保证所有边都在Image区域，空白区域继续平铺</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">④ 如果希望获得服务器端图片的默认尺寸，可以使用 Image.getSize() 方法</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        Image.getSize(uri,  (w, h)=&gt;{ } )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">行业小知识：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">URI： Unified Resource Identifier， 统一的资源识别符号 URI = URL + URN</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">URL： Unified Resource Locator，统一的资源定位符，例如：http://www.baidu.com/img/logo.png</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">URN: Unified Resource Naming，统一的资源命名符，例如： mailto:xx@tedu.cn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;a href=&quot;mailto:admin@tedu.cn&quot;&gt;联系管理员&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;a href=&quot;tel: 13501234567&quot;&gt;给我打电话吧&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;a href=&quot;javascript:window.close()&quot;&gt;关闭页面&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { ImageBackground } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;ImageBackground&gt;内容&lt;/ImageBackground&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">说明：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">①RN 的样式体系中没有 backgroundImage 相关的属性，想使用背景图片，就用 ImageBackground</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">②ImageBackground 和 Image 的属性完全一样 —— 只是 ImageBackground 内部可以放置内容</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">③ 可以使用 blurRadius 属性控制图片或背景图片的“模糊半径”</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">四、RN 基础组件 4 —— Button 和 TouchableOpacity</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { Button } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;Button /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">说明：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">①Button 没有 innerHTML 部分，是一个单标记标签</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">②Button 有两个必需的属性： title——指定按钮上方的文字、onPress——单击事件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">③Button 没有 onLongPress 事件、也没有 style 属性 —— 不能指定样式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">④Button 只有一个样式相关的属性：color，指定按钮的背景颜色</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">注意：因为 Button 的限制太多，项目开发中一般使用 TouchableOpacity 组件代替</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { TouchableOpacity } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;TouchableOpacity&gt;子组件&lt;/TouchableOpacity&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">说明：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">① 翻译：触摸时能够发生透明度改变的组件，该组件内可以放置任何其它组件，实现“触摸变透明”</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">② 有一个 activeOpacity 的属性，可以指定当触摸时透明度值：0~1 小数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">五、RN 基础组件 5 —— TextInput</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { TextInput } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;TextInput /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">说明：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">① 输入框默认没有外观效果，需要的话手工添加 style</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">② 想获得输入框中内容，只能使用“受控组件”方式——输入框的 value 属性无法获得用户的输入</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;TextInput value={uname} onChangeText={(val)={}}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">③ 监听输入框内容改变不用 onChange 事件，使用 onChangeText，形参就是用户的输入</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">④TextInput 默认是单行文本输入框；声明 secureTextEntry={true} 属性变为单行密码输入框；声明 multiline={true} numberOfLines={3} 两个属性变为多行文本输入框</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一、RN 基础组件 6 —— ActivityIndicator</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { ActivityIndicator } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;ActivityIndicator /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">说明：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">①Activity：活动/进程 Indicator：指示器</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">② 常用属性：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                size:  small | large | 数字</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                color:  颜色</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                animating:  true(显示) | false(不显示但仍占用布局空间)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">二、RN 基础组件 7 —— StatusBar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { StatusBar } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;StatusBar /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">说明：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">①Status：状态 Bar：条/栏</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">② 常用属性：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        backgroundColor: 状态栏背景色，可以用半透明色</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        barStyle：状态栏中图标和文字的颜色，dark-content 、 light-content</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        hidden：是否隐藏状态栏，隐藏的话，App就是全屏显示</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        translucent：是否启用沉浸式状态栏，是的话页面内容可以扎到状态栏下方，一般和半透明背景色配合</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">————————————————</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br></div></div><h2 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npx react-native bundle --platform ios --dev fase --entry-file index.js --bundle-output realease/index.ios.bundle</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">npx react-native bundle --platform android --dev fase --entry-file index.js --bundle-output realease/index.android.bundle</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="react-native" tabindex="-1">react native <a class="header-anchor" href="#react-native" aria-hidden="true">#</a></h1><h3 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-hidden="true">#</a></h3><h3 id="常用组件" tabindex="-1">常用组件 <a class="header-anchor" href="#常用组件" aria-hidden="true">#</a></h3><h3 id="api" tabindex="-1">api <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h3 id="打包-1" tabindex="-1">打包 <a class="header-anchor" href="#打包-1" aria-hidden="true">#</a></h3><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h3>`,31),r=[e];function c(i,o,t,b,C,A){return a(),n("div",null,r)}const y=s(p,[["render",c]]);export{m as __pageData,y as default};
