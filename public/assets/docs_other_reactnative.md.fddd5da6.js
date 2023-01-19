import{_ as s,o as n,c as a,a as l}from"./app.5305faa9.js";const d=JSON.parse('{"title":"\u73AF\u5883\u642D\u5EFA","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5\u811A\u624B\u67B6","slug":"\u5B89\u88C5\u811A\u624B\u67B6"},{"level":2,"title":"\u521B\u5EFA\u9879\u76EE","slug":"\u521B\u5EFA\u9879\u76EE"},{"level":2,"title":"\u7684\u53E6\u4E00\u79CD\u521B\u5EFA\u65B9\u5F0F","slug":"\u7684\u53E6\u4E00\u79CD\u521B\u5EFA\u65B9\u5F0F"},{"level":3,"title":"\u94FE\u63A5\u5230 mumu \u6A21\u62DF\u5668","slug":"\u94FE\u63A5\u5230-mumu-\u6A21\u62DF\u5668"},{"level":3,"title":"\u591C\u795E \u6A21\u62DF\u5668","slug":"\u591C\u795E-\u6A21\u62DF\u5668"},{"level":3,"title":"\u9879\u76EE\u8DD1\u8D77\u6765","slug":"\u9879\u76EE\u8DD1\u8D77\u6765"},{"level":3,"title":"\u4F4E\u4E8E 0.67 \u7248\u672C\u7684 React Native \u9700\u8981 JDK 1.8 \u7248\u672C\uFF08\u5B98\u65B9\u4E5F\u79F0 8 \u7248\u672C\uFF09\u3002","slug":"\u4F4E\u4E8E-0-67-\u7248\u672C\u7684-react-native-\u9700\u8981-jdk-1-8-\u7248\u672C\uFF08\u5B98\u65B9\u4E5F\u79F0-8-\u7248\u672C\uFF09\u3002"},{"level":2,"title":"RN \u57FA\u7840\u7EC4\u4EF6 1 \u2014\u2014 Text","slug":"rn-\u57FA\u7840\u7EC4\u4EF6-1-\u2014\u2014-text"},{"level":2,"title":"\u4E8C\u3001RN \u57FA\u7840\u7EC4\u4EF6 2 \u2014\u2014 View \u548C ScrollView","slug":"\u4E8C\u3001rn-\u57FA\u7840\u7EC4\u4EF6-2-\u2014\u2014-view-\u548C-scrollview"},{"level":2,"title":"\u4E09\u3001RN \u57FA\u7840\u7EC4\u4EF6 3 \u2014\u2014 Image \u548C ImageBackground","slug":"\u4E09\u3001rn-\u57FA\u7840\u7EC4\u4EF6-3-\u2014\u2014-image-\u548C-imagebackground"},{"level":2,"title":"\u6253\u5305","slug":"\u6253\u5305"}],"relativePath":"docs/other/reactnative.md"}'),p={name:"docs/other/reactnative.md"},e=l(`<h1 id="\u73AF\u5883\u642D\u5EFA" tabindex="-1">\u73AF\u5883\u642D\u5EFA <a class="header-anchor" href="#\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a></h1><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm config set registry https://registry.npm.taobao.org --global</span></span>
<span class="line"><span style="color:#A6ACCD;">npm config set disturl https://npm.taobao.org/dist --global</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5B89\u88C5\u811A\u624B\u67B6" tabindex="-1">\u5B89\u88C5\u811A\u624B\u67B6 <a class="header-anchor" href="#\u5B89\u88C5\u811A\u624B\u67B6" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g react-native-cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1">\u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx react-native init myReact</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7684\u53E6\u4E00\u79CD\u521B\u5EFA\u65B9\u5F0F" tabindex="-1">\u7684\u53E6\u4E00\u79CD\u521B\u5EFA\u65B9\u5F0F <a class="header-anchor" href="#\u7684\u53E6\u4E00\u79CD\u521B\u5EFA\u65B9\u5F0F" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g create-react-native-app</span></span>
<span class="line"><span style="color:#A6ACCD;">1.\u5B89\u88C5\u597D\u73AF\u5883</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2.npm install -g create-react-native-app</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3.create-react-native-app Demo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4 \u5728 Demo \u4E0B\u521B\u5EFA\u4E00\u4E2A android \u76EE\u5F55\uFF0C\u5728 android studio \u4E2D\u521B\u5EFA\u4E00\u4E2A\u672C\u5730\u7684\u5DE5\u7A0B\uFF0C\u5C06\u5DE5\u7A0B\u590D\u5236\u5230 Demo \u7684 android \u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5 \u4FEE\u6539 package.json \u6587\u4EF6\uFF0Cnpm install(\u6309\u7167\u5B98\u65B9\u6587\u6863\u4FDD\u7559\uFF0C\u901A\u8FC7\u81EA\u5DF1\u521B\u5EFA\u7684 react native \u5DE5\u7A0B\uFF0Cpackage.json \u4E2D\u7684\u6587\u4EF6\u4F1A\u751F\u6210\u66F4\u591A)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6 \u914D\u7F6E maven</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5728\u4F60\u7684 app \u4E2D build.gradle \u6587\u4EF6\u4E2D\u6DFB\u52A0 React Native \u4F9D\u8D56:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dependencies {</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">compile &quot;com.facebook.react:react-native:+&quot; // From node_modules.</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7 \u5728\u9879\u76EE\u7684 build.gradle \u6587\u4EF6\u4E2D\u4E3A React Native \u6DFB\u52A0\u4E00\u4E2A maven \u4F9D\u8D56\u7684\u5165\u53E3\uFF0C\u5FC5\u987B\u5199\u5728 &quot;allprojects&quot; \u4EE3\u7801\u5757\u4E2D:</span></span>
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
<span class="line"><span style="color:#A6ACCD;">\u5728 sync \u7684\u65F6\u5019\uFF0C\u51FA\u73B0\u4E86\u9519\u8BEF\uFF0C\u4E00\u4E2A\u662F\u539F\u751F\u7684 minSdkVersion \u4E0E RN \u7684\u4E0D\u4E00\u81F4</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7B2C\u4E8C\u4E2A\u662F\u9700\u8981\u5728\u6E05\u5355\u6587\u4EF6\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;use-sdk tools:overrideLibrary=&quot;com.facebook.react&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u94FE\u63A5\u5230-mumu-\u6A21\u62DF\u5668" tabindex="-1">\u94FE\u63A5\u5230 mumu \u6A21\u62DF\u5668 <a class="header-anchor" href="#\u94FE\u63A5\u5230-mumu-\u6A21\u62DF\u5668" aria-hidden="true">#</a></h3><p>adb connect 127.0.0.1:7555</p><h3 id="\u591C\u795E-\u6A21\u62DF\u5668" tabindex="-1">\u591C\u795E \u6A21\u62DF\u5668 <a class="header-anchor" href="#\u591C\u795E-\u6A21\u62DF\u5668" aria-hidden="true">#</a></h3><p>connect 127.0.0.1:62001</p><h3 id="\u9879\u76EE\u8DD1\u8D77\u6765" tabindex="-1">\u9879\u76EE\u8DD1\u8D77\u6765 <a class="header-anchor" href="#\u9879\u76EE\u8DD1\u8D77\u6765" aria-hidden="true">#</a></h3><p>yarn android or npx react-native run-android</p><h3 id="\u4F4E\u4E8E-0-67-\u7248\u672C\u7684-react-native-\u9700\u8981-jdk-1-8-\u7248\u672C\uFF08\u5B98\u65B9\u4E5F\u79F0-8-\u7248\u672C\uFF09\u3002" tabindex="-1">\u4F4E\u4E8E 0.67 \u7248\u672C\u7684 React Native \u9700\u8981 JDK 1.8 \u7248\u672C\uFF08\u5B98\u65B9\u4E5F\u79F0 8 \u7248\u672C\uFF09\u3002 <a class="header-anchor" href="#\u4F4E\u4E8E-0-67-\u7248\u672C\u7684-react-native-\u9700\u8981-jdk-1-8-\u7248\u672C\uFF08\u5B98\u65B9\u4E5F\u79F0-8-\u7248\u672C\uFF09\u3002" aria-hidden="true">#</a></h3><h1 id="\u7EC4\u4EF6\u7BC7" tabindex="-1">\u7EC4\u4EF6\u7BC7 <a class="header-anchor" href="#\u7EC4\u4EF6\u7BC7" aria-hidden="true">#</a></h1><h2 id="rn-\u57FA\u7840\u7EC4\u4EF6-1-\u2014\u2014-text" tabindex="-1">RN \u57FA\u7840\u7EC4\u4EF6 1 \u2014\u2014 Text <a class="header-anchor" href="#rn-\u57FA\u7840\u7EC4\u4EF6-1-\u2014\u2014-text" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { Text } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;Text&gt;&lt;/Text&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5E38\u7528\u5C5E\u6027\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        numberOfLines\uFF1A\u663E\u793A\u7684\u884C\u6570\uFF0C\u6EA2\u51FA\u90E8\u5206\u4F1A\u9690\u85CF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ellipsizeMode\uFF1A tail / head / middle / clip</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5E38\u7528\u4E8B\u4EF6\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        onPress\uFF1A\u70B9\u51FB</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        onLongPress\uFF1A\u957F\u6309</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u610F\uFF1ARN \u4E2D\u5BB9\u5668\uFF08\u5982 View\uFF09\u4E2D\u4E0D\u80FD\u653E\u7F6E\u6587\u672C\uFF0C\u6587\u672C\u5B57\u7B26\u4E32\u53EA\u80FD\u653E\u5728 Text \u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4E8C\u3001rn-\u57FA\u7840\u7EC4\u4EF6-2-\u2014\u2014-view-\u548C-scrollview" tabindex="-1">\u4E8C\u3001RN \u57FA\u7840\u7EC4\u4EF6 2 \u2014\u2014 View \u548C ScrollView <a class="header-anchor" href="#\u4E8C\u3001rn-\u57FA\u7840\u7EC4\u4EF6-2-\u2014\u2014-view-\u548C-scrollview" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { View } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;View&gt;&lt;/View&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF4\u660E\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2460View \u9ED8\u8BA4\u6CA1\u6709\u9AD8\u5EA6\uFF0C\u8981\u9760\u5185\u5BB9\u6491\u8D77\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2461View \u53EF\u4EE5\u4EFB\u610F\u6307\u5B9A\u9AD8\u5EA6\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u9AD8\u5EA6\u4E3A 100%\uFF0C\u4ECE\u800C\u6491\u6EE1\u5C4F\u5E55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2462View \u4E2D\u5185\u5BB9\u6EA2\u51FA\u4E86\uFF0C\u4E0D\u80FD\u6EDA\u52A8\uFF01\u5982\u679C\u5E0C\u671B\u6EDA\u52A8\uFF0C\u8BF7\u4F7F\u7528 ScrollView</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { ScrollView } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;ScrollView &gt;&lt;/ScrollView &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF4\u660E\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2460ScrollView \u9ED8\u8BA4\u6709\u9AD8\u5EA6\uFF0C\u6491\u6EE1\u7236\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2461ScrollView \u4E0D\u80FD\u4EFB\u610F\u6307\u5B9A\u9AD8\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2462ScrollView \u4E2D\u5185\u5BB9\u6EA2\u51FA\u4E86\uFF0C\u81EA\u52A8\u6EDA\u52A8\uFF01\u2014\u2014 \u9ED8\u8BA4\u662F\u7AD6\u76F4\u6EDA\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2463ScrollView \u9ED8\u8BA4\u662F\u7AD6\u76F4\u6EDA\u52A8\uFF0C\u60F3\u6C34\u5E73\u6EDA\u52A8\uFF0C\u6307\u5B9A\u5C5E\u6027 horizontal={true}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2464ScrollView \u53EF\u4EE5\u5B9E\u73B0\u201C\u6EDA\u52A8\u5230\u9876\u90E8\u201D\u52A8\u753B\u6548\u679C\uFF1A</span></span>
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
<span class="line"><span style="color:#A6ACCD;">\u603B\u7ED3\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">React \u5B98\u65B9\u4E3A\u51FD\u6570\u5F0F\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E09\u4E2A Hook\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2460useState( )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2461useEffect( )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2462useRef( )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4E09\u3001rn-\u57FA\u7840\u7EC4\u4EF6-3-\u2014\u2014-image-\u548C-imagebackground" tabindex="-1">\u4E09\u3001RN \u57FA\u7840\u7EC4\u4EF6 3 \u2014\u2014 Image \u548C ImageBackground <a class="header-anchor" href="#\u4E09\u3001rn-\u57FA\u7840\u7EC4\u4EF6-3-\u2014\u2014-image-\u548C-imagebackground" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Image } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;Image /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF4\u660E\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2460 \u672C\u5730\u56FE\u7247\uFF1A\u9700\u8981\u5728\u6253\u5305\u65F6\u4E00\u8D77\u7F16\u8BD1\u5230\u624B\u673A APP \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 require()\u6216 import \u8FDB\u884C\u5BFC\u5165\uFF1B\u53EF\u4EE5\u4E0D\u6307\u5B9A\u5C3A\u5BF8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Image source={require(&#39;./xx/xx.png&#39;)}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2461 \u8FDC\u7A0B\u56FE\u7247\uFF1A\u4E0D\u80FD\u4F7F\u7528 require \u6216 import \u5BFC\u5165\uFF0C\u53EA\u80FD\u4F7F\u7528\u9009\u9879\u5BF9\u8C61\u6307\u5B9A\u5730\u5740\uFF1A { uri: &#39;\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u5730\u5740&#39; }\uFF1B\u5FC5\u987B\u624B\u5DE5\u6307\u5B9A\u56FE\u7247\u5C3A\u5BF8\uFF0C\u5426\u5219\u4E0D\u663E\u793A\uFF08\u9ED8\u8BA4\u5C3A\u5BF8\u4E3A 0\uFF09\u2014\u2014 \u4E3A\u4E86\u907F\u514D\u9875\u9762\u91CD\u7ED8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Image style={width:x, height:y} source={{uri: &#39;http://xxx/x.png&#39;}}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2462 \u56FE\u7247\u7684 resizeMode \u5C5E\u6027\u6307\u5B9A\u5982\u4F55\u7F29\u653E\u56FE\u7247\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                center\uFF1A\u56FE\u7247\u4E0D\u7F29\u4E0D\u653E\uFF0C\u76F4\u63A5\u663E\u793A\u5728Image\u533A\u57DF\u4E2D\u592E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                cover\uFF1A\u8986\u76D6\uFF0C\u56FE\u7247\u8FDB\u884C\u7B49\u6BD4\u4F8B\u7F29\u653E\uFF0C\u4FDD\u8BC1\u6700\u5C0F\u8FB9\u53EF\u4EE5\u8986\u76D6Image\u533A\u57DF\uFF0C\u5927\u8FB9\u53EF\u80FD\u6EA2\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                contain\uFF1A\u5305\u542B\uFF0C\u56FE\u7247\u8FDB\u884C\u7B49\u6BD4\u4F8B\u7F29\u653E\uFF0C\u4FDD\u8BC1\u6240\u6709\u8FB9\u90FD\u5728Image\u533A\u57DF\uFF0C\u53EF\u80FD\u51FA\u73B0\u7A7A\u767D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                stretch\uFF1A\u62C9\u4F38\uFF0C\u56FE\u7247\u8FDB\u884C\u4E0D\u7B49\u6BD4\u4F8B\u7F29\u653E\uFF0C\u4FDD\u8BC1\u5B8C\u7F8E\u8986\u76D6Image\u533A\u57DF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                repeat\uFF1A\u91CD\u590D/\u5E73\u94FA\uFF0C\u56FE\u7247\u8FDB\u884C\u7B49\u6BD4\u4F8B\u7F29\u653E\uFF0C\u4FDD\u8BC1\u6240\u6709\u8FB9\u90FD\u5728Image\u533A\u57DF\uFF0C\u7A7A\u767D\u533A\u57DF\u7EE7\u7EED\u5E73\u94FA</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2463 \u5982\u679C\u5E0C\u671B\u83B7\u5F97\u670D\u52A1\u5668\u7AEF\u56FE\u7247\u7684\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u53EF\u4EE5\u4F7F\u7528 Image.getSize() \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        Image.getSize(uri,  (w, h)=&gt;{ } )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u884C\u4E1A\u5C0F\u77E5\u8BC6\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">URI\uFF1A Unified Resource Identifier\uFF0C \u7EDF\u4E00\u7684\u8D44\u6E90\u8BC6\u522B\u7B26\u53F7 URI = URL + URN</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">URL\uFF1A Unified Resource Locator\uFF0C\u7EDF\u4E00\u7684\u8D44\u6E90\u5B9A\u4F4D\u7B26\uFF0C\u4F8B\u5982\uFF1Ahttp://www.baidu.com/img/logo.png</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">URN: Unified Resource Naming\uFF0C\u7EDF\u4E00\u7684\u8D44\u6E90\u547D\u540D\u7B26\uFF0C\u4F8B\u5982\uFF1A mailto:xx@tedu.cn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;a href=&quot;mailto:admin@tedu.cn&quot;&gt;\u8054\u7CFB\u7BA1\u7406\u5458&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;a href=&quot;tel: 13501234567&quot;&gt;\u7ED9\u6211\u6253\u7535\u8BDD\u5427&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;a href=&quot;javascript:window.close()&quot;&gt;\u5173\u95ED\u9875\u9762&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { ImageBackground } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;ImageBackground&gt;\u5185\u5BB9&lt;/ImageBackground&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF4\u660E\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2460RN \u7684\u6837\u5F0F\u4F53\u7CFB\u4E2D\u6CA1\u6709 backgroundImage \u76F8\u5173\u7684\u5C5E\u6027\uFF0C\u60F3\u4F7F\u7528\u80CC\u666F\u56FE\u7247\uFF0C\u5C31\u7528 ImageBackground</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2461ImageBackground \u548C Image \u7684\u5C5E\u6027\u5B8C\u5168\u4E00\u6837 \u2014\u2014 \u53EA\u662F ImageBackground \u5185\u90E8\u53EF\u4EE5\u653E\u7F6E\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2462 \u53EF\u4EE5\u4F7F\u7528 blurRadius \u5C5E\u6027\u63A7\u5236\u56FE\u7247\u6216\u80CC\u666F\u56FE\u7247\u7684\u201C\u6A21\u7CCA\u534A\u5F84\u201D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u56DB\u3001RN \u57FA\u7840\u7EC4\u4EF6 4 \u2014\u2014 Button \u548C TouchableOpacity</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { Button } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;Button /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF4\u660E\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2460Button \u6CA1\u6709 innerHTML \u90E8\u5206\uFF0C\u662F\u4E00\u4E2A\u5355\u6807\u8BB0\u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2461Button \u6709\u4E24\u4E2A\u5FC5\u9700\u7684\u5C5E\u6027\uFF1A title\u2014\u2014\u6307\u5B9A\u6309\u94AE\u4E0A\u65B9\u7684\u6587\u5B57\u3001onPress\u2014\u2014\u5355\u51FB\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2462Button \u6CA1\u6709 onLongPress \u4E8B\u4EF6\u3001\u4E5F\u6CA1\u6709 style \u5C5E\u6027 \u2014\u2014 \u4E0D\u80FD\u6307\u5B9A\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2463Button \u53EA\u6709\u4E00\u4E2A\u6837\u5F0F\u76F8\u5173\u7684\u5C5E\u6027\uFF1Acolor\uFF0C\u6307\u5B9A\u6309\u94AE\u7684\u80CC\u666F\u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u610F\uFF1A\u56E0\u4E3A Button \u7684\u9650\u5236\u592A\u591A\uFF0C\u9879\u76EE\u5F00\u53D1\u4E2D\u4E00\u822C\u4F7F\u7528 TouchableOpacity \u7EC4\u4EF6\u4EE3\u66FF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { TouchableOpacity } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;TouchableOpacity&gt;\u5B50\u7EC4\u4EF6&lt;/TouchableOpacity&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF4\u660E\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2460 \u7FFB\u8BD1\uFF1A\u89E6\u6478\u65F6\u80FD\u591F\u53D1\u751F\u900F\u660E\u5EA6\u6539\u53D8\u7684\u7EC4\u4EF6\uFF0C\u8BE5\u7EC4\u4EF6\u5185\u53EF\u4EE5\u653E\u7F6E\u4EFB\u4F55\u5176\u5B83\u7EC4\u4EF6\uFF0C\u5B9E\u73B0\u201C\u89E6\u6478\u53D8\u900F\u660E\u201D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2461 \u6709\u4E00\u4E2A activeOpacity \u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u6307\u5B9A\u5F53\u89E6\u6478\u65F6\u900F\u660E\u5EA6\u503C\uFF1A0~1 \u5C0F\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E94\u3001RN \u57FA\u7840\u7EC4\u4EF6 5 \u2014\u2014 TextInput</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { TextInput } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;TextInput /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF4\u660E\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2460 \u8F93\u5165\u6846\u9ED8\u8BA4\u6CA1\u6709\u5916\u89C2\u6548\u679C\uFF0C\u9700\u8981\u7684\u8BDD\u624B\u5DE5\u6DFB\u52A0 style</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2461 \u60F3\u83B7\u5F97\u8F93\u5165\u6846\u4E2D\u5185\u5BB9\uFF0C\u53EA\u80FD\u4F7F\u7528\u201C\u53D7\u63A7\u7EC4\u4EF6\u201D\u65B9\u5F0F\u2014\u2014\u8F93\u5165\u6846\u7684 value \u5C5E\u6027\u65E0\u6CD5\u83B7\u5F97\u7528\u6237\u7684\u8F93\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;TextInput value={uname} onChangeText={(val)={}}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2462 \u76D1\u542C\u8F93\u5165\u6846\u5185\u5BB9\u6539\u53D8\u4E0D\u7528 onChange \u4E8B\u4EF6\uFF0C\u4F7F\u7528 onChangeText\uFF0C\u5F62\u53C2\u5C31\u662F\u7528\u6237\u7684\u8F93\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2463TextInput \u9ED8\u8BA4\u662F\u5355\u884C\u6587\u672C\u8F93\u5165\u6846\uFF1B\u58F0\u660E secureTextEntry={true} \u5C5E\u6027\u53D8\u4E3A\u5355\u884C\u5BC6\u7801\u8F93\u5165\u6846\uFF1B\u58F0\u660E multiline={true} numberOfLines={3} \u4E24\u4E2A\u5C5E\u6027\u53D8\u4E3A\u591A\u884C\u6587\u672C\u8F93\u5165\u6846</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E00\u3001RN \u57FA\u7840\u7EC4\u4EF6 6 \u2014\u2014 ActivityIndicator</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { ActivityIndicator } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;ActivityIndicator /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF4\u660E\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2460Activity\uFF1A\u6D3B\u52A8/\u8FDB\u7A0B Indicator\uFF1A\u6307\u793A\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2461 \u5E38\u7528\u5C5E\u6027\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                size:  small | large | \u6570\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                color:  \u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                animating:  true(\u663E\u793A) | false(\u4E0D\u663E\u793A\u4F46\u4ECD\u5360\u7528\u5E03\u5C40\u7A7A\u95F4)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E8C\u3001RN \u57FA\u7840\u7EC4\u4EF6 7 \u2014\u2014 StatusBar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { StatusBar } from &#39;react-native&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;StatusBar /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF4\u660E\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2460Status\uFF1A\u72B6\u6001 Bar\uFF1A\u6761/\u680F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2461 \u5E38\u7528\u5C5E\u6027\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        backgroundColor: \u72B6\u6001\u680F\u80CC\u666F\u8272\uFF0C\u53EF\u4EE5\u7528\u534A\u900F\u660E\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        barStyle\uFF1A\u72B6\u6001\u680F\u4E2D\u56FE\u6807\u548C\u6587\u5B57\u7684\u989C\u8272\uFF0Cdark-content \u3001 light-content</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        hidden\uFF1A\u662F\u5426\u9690\u85CF\u72B6\u6001\u680F\uFF0C\u9690\u85CF\u7684\u8BDD\uFF0CApp\u5C31\u662F\u5168\u5C4F\u663E\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        translucent\uFF1A\u662F\u5426\u542F\u7528\u6C89\u6D78\u5F0F\u72B6\u6001\u680F\uFF0C\u662F\u7684\u8BDD\u9875\u9762\u5185\u5BB9\u53EF\u4EE5\u624E\u5230\u72B6\u6001\u680F\u4E0B\u65B9\uFF0C\u4E00\u822C\u548C\u534A\u900F\u660E\u80CC\u666F\u8272\u914D\u5408</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6253\u5305" tabindex="-1">\u6253\u5305 <a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx react-native bundle --platform ios --dev fase --entry-file index.js --bundle-output realease/index.ios.bundle</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">npx react-native bundle --platform android --dev fase --entry-file index.js --bundle-output realease/index.android.bundle</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,24),o=[e];function c(t,r,i,A,C,y){return n(),a("div",null,o)}var u=s(p,[["render",c]]);export{d as __pageData,u as default};
