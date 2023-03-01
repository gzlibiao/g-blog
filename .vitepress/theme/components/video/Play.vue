<template>
  <div>
      <videoPlay v-bind="options"/>
  </div>
</template>

<script lang="ts" setup>

  import 'vue3-video-play/dist/style.css'
  import { videoPlay } from 'vue3-video-play'
  import {reactive} from 'vue';
  
  const props=defineProps(['title','url']);
  console.log(props,'props')
  const options = reactive({
    width: '100%', //播放器高度
    height: '100%', //播放器高度
    color: "#409eff", //主题色
    title: props.title||'gplay', //视频名称
    type:'m3u8',
    src: props.url||"https://vip.lz-cdn4.com/20220321/2_bc21aa56/index.m3u8", //视频源
    muted: false, //静音
    webFullScreen: false,
    speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
    autoPlay: false, //自动播放
    loop: false, //循环播放
    mirror: false, //镜像画面
    ligthOff: false,  //关灯模式
    volume: 0.3, //默认音量大小
    control: true, //是否显示控制
    controlBtns:['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] //显示所有按钮,
  })

</script>

<style lang="scss" scoped>

</style>