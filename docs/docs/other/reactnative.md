# 环境搭建

```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

## 安装脚手架

```
npm install -g react-native-cli
```

## 创建项目

```
npx react-native init myReact
```

## 的另一种创建方式

```
npm install -g create-react-native-app
1.安装好环境

2.npm install -g create-react-native-app

3.create-react-native-app Demo

4 在 Demo 下创建一个 android 目录，在 android studio 中创建一个本地的工程，将工程复制到 Demo 的 android 目录下

5 修改 package.json 文件，npm install(按照官方文档保留，通过自己创建的 react native 工程，package.json 中的文件会生成更多)

6 配置 maven
在你的 app 中 build.gradle 文件中添加 React Native 依赖:

dependencies {
...
compile "com.facebook.react:react-native:+" // From node_modules.
}

7 在项目的 build.gradle 文件中为 React Native 添加一个 maven 依赖的入口，必须写在 "allprojects" 代码块中:


allprojects {
repositories {
...
maven {
// All of React Native (JS, Android binaries) is installed from npm
url "$rootDir/../node_modules/react-native/android"
}
}
...
}
在 sync 的时候，出现了错误，一个是原生的 minSdkVersion 与 RN 的不一致
第二个是需要在清单文件中

<use-sdk tools:overrideLibrary="com.facebook.react">
```

### 链接到 mumu 模拟器

adb connect 127.0.0.1:7555

### 夜神 模拟器

connect 127.0.0.1:62001

### 项目跑起来

yarn android or npx react-native run-android

### 低于 0.67 版本的 React Native 需要 JDK 1.8 版本（官方也称 8 版本）。

# 组件篇

## RN 基础组件 1 —— Text

```

import { Text } from 'react-native'

<Text></Text>

常用属性：

        numberOfLines：显示的行数，溢出部分会隐藏

        ellipsizeMode： tail / head / middle / clip

常用事件：

        onPress：点击

        onLongPress：长按

注意：RN 中容器（如 View）中不能放置文本，文本字符串只能放在 Text 中
```

## 二、RN 基础组件 2 —— View 和 ScrollView

```
import { View } from 'react-native'

<View></View>

说明：

①View 默认没有高度，要靠内容撑起来

②View 可以任意指定高度，也可以指定高度为 100%，从而撑满屏幕

③View 中内容溢出了，不能滚动！如果希望滚动，请使用 ScrollView

import { ScrollView } from 'react-native'

<ScrollView ></ScrollView >

说明：

①ScrollView 默认有高度，撑满父容器

②ScrollView 不能任意指定高度

③ScrollView 中内容溢出了，自动滚动！—— 默认是竖直滚动

④ScrollView 默认是竖直滚动，想水平滚动，指定属性 horizontal={true}

⑤ScrollView 可以实现“滚动到顶部”动画效果：

        import  {useRef}  from  'react'

        function XzGoTop(){

                let sv = useRef()

                function goTop(){  sv.current.scrollTo({y: 0})  }

                return (<ScrollView ref={sv}></ScrollView>)

        }

总结：

React 官方为函数式组件提供了三个 Hook：

①useState( )

②useEffect( )

③useRef( )
```

## 三、RN 基础组件 3 —— Image 和 ImageBackground

```
import { Image } from 'react-native'

 <Image />

说明：

① 本地图片：需要在打包时一起编译到手机 APP 中，可以使用 require()或 import 进行导入；可以不指定尺寸

        <Image source={require('./xx/xx.png')}/>

② 远程图片：不能使用 require 或 import 导入，只能使用选项对象指定地址： { uri: '远程服务器上的地址' }；必须手工指定图片尺寸，否则不显示（默认尺寸为 0）—— 为了避免页面重绘

        <Image style={width:x, height:y} source={{uri: 'http://xxx/x.png'}}/>

③ 图片的 resizeMode 属性指定如何缩放图片：

                center：图片不缩不放，直接显示在Image区域中央

                cover：覆盖，图片进行等比例缩放，保证最小边可以覆盖Image区域，大边可能溢出

                contain：包含，图片进行等比例缩放，保证所有边都在Image区域，可能出现空白

                stretch：拉伸，图片进行不等比例缩放，保证完美覆盖Image区域

                repeat：重复/平铺，图片进行等比例缩放，保证所有边都在Image区域，空白区域继续平铺

④ 如果希望获得服务器端图片的默认尺寸，可以使用 Image.getSize() 方法

        Image.getSize(uri,  (w, h)=>{ } )

行业小知识：

URI： Unified Resource Identifier， 统一的资源识别符号 URI = URL + URN

URL： Unified Resource Locator，统一的资源定位符，例如：http://www.baidu.com/img/logo.png

URN: Unified Resource Naming，统一的资源命名符，例如： mailto:xx@tedu.cn

<a href="mailto:admin@tedu.cn">联系管理员</a>

<a href="tel: 13501234567">给我打电话吧</a>

<a href="javascript:window.close()">关闭页面</a>

import { ImageBackground } from 'react-native'

<ImageBackground>内容</ImageBackground>

说明：

①RN 的样式体系中没有 backgroundImage 相关的属性，想使用背景图片，就用 ImageBackground

②ImageBackground 和 Image 的属性完全一样 —— 只是 ImageBackground 内部可以放置内容

③ 可以使用 blurRadius 属性控制图片或背景图片的“模糊半径”

四、RN 基础组件 4 —— Button 和 TouchableOpacity

import { Button } from 'react-native'

 <Button />

说明：

①Button 没有 innerHTML 部分，是一个单标记标签

②Button 有两个必需的属性： title——指定按钮上方的文字、onPress——单击事件

③Button 没有 onLongPress 事件、也没有 style 属性 —— 不能指定样式

④Button 只有一个样式相关的属性：color，指定按钮的背景颜色

注意：因为 Button 的限制太多，项目开发中一般使用 TouchableOpacity 组件代替

import { TouchableOpacity } from 'react-native'

<TouchableOpacity>子组件</TouchableOpacity>

说明：

① 翻译：触摸时能够发生透明度改变的组件，该组件内可以放置任何其它组件，实现“触摸变透明”

② 有一个 activeOpacity 的属性，可以指定当触摸时透明度值：0~1 小数

五、RN 基础组件 5 —— TextInput

import { TextInput } from 'react-native'

 <TextInput />

说明：

① 输入框默认没有外观效果，需要的话手工添加 style

② 想获得输入框中内容，只能使用“受控组件”方式——输入框的 value 属性无法获得用户的输入

        <TextInput value={uname} onChangeText={(val)={}}/>

③ 监听输入框内容改变不用 onChange 事件，使用 onChangeText，形参就是用户的输入

④TextInput 默认是单行文本输入框；声明 secureTextEntry={true} 属性变为单行密码输入框；声明 multiline={true} numberOfLines={3} 两个属性变为多行文本输入框

一、RN 基础组件 6 —— ActivityIndicator

import { ActivityIndicator } from 'react-native'

 <ActivityIndicator />

说明：

①Activity：活动/进程 Indicator：指示器

② 常用属性：

                size:  small | large | 数字

                color:  颜色

                animating:  true(显示) | false(不显示但仍占用布局空间)

二、RN 基础组件 7 —— StatusBar

import { StatusBar } from 'react-native'

 <StatusBar />

说明：

①Status：状态 Bar：条/栏

② 常用属性：

        backgroundColor: 状态栏背景色，可以用半透明色

        barStyle：状态栏中图标和文字的颜色，dark-content 、 light-content

        hidden：是否隐藏状态栏，隐藏的话，App就是全屏显示

        translucent：是否启用沉浸式状态栏，是的话页面内容可以扎到状态栏下方，一般和半透明背景色配合

————————————————
```

## 打包

```
npx react-native bundle --platform ios --dev fase --entry-file index.js --bundle-output realease/index.ios.bundle

npx react-native bundle --platform android --dev fase --entry-file index.js --bundle-output realease/index.android.bundle
```
