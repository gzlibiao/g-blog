<template>
  <div class="container">

    <f-page-header title="视频" :on-back="goBack" v-show="state.status !== 0" />
    
    <div class="search" v-show="state.status === 0">
      <f-input
        v-model="state.value"
        type="text"
        :on-search="search"
        search
        placeholder="请输入..."
      />
    </div>

    <input type="file" @change="chooseFileAndPlay"/>

    <div
      v-show="state.status === 1"
      v-for="item in state.infos"
      :key="item"
      class="item"
    >
      <div>
        <f-image
          lazy
          alt="加载中"
          width="200px"
          :src="item.cover"
          height="200px"
          fit="cover"
        />
      </div>
      <div
        style="
          display: flex;
          padding-left: 10px;
          flex-flow: column nowrap;
          font-size: 12px;
        "
      >
        <span @click="goPlay(item.videoId)" class="title">
          {{ item.title }}
        </span>
        <span>{{ item.descs }}</span>
      </div>
    </div>

    <div v-if="state.status === 2" class="item">
      <div>
        <f-image
          lazy
          alt=""
          width="200px"
          height="200px"
          :src="state.currentVideo.cover"
          fit="cover"
        />
      </div>
      <div
        style="
          display: flex;
          padding-left: 10px;
          flex-flow: column nowrap;
          font-size: 12px;
        "
      >
        <span>{{ state.currentVideo.title }}</span>
        <span>{{ state.currentVideo.descs }}</span>
      </div>
    </div>

    <div v-if="state.status === 3">
      <!-- <Play :url="state.url" :title="state.title"/> -->
    </div>

    <div
      v-if="state.currentVideo.chapterList && state.status >= 2"
      style="display: flex; flex-flow: row wrap"
    >
      <span
        class="card-num"
        v-for="item in state.currentVideo.chapterList"
        @click="play(item.chapterPath,item.title)"
      >
        <span @click="goDownload(item.chapterPath)">
          ^
        </span>
        {{ item.title }}
      </span>
    </div>

  </div>
</template>

<script lang="ts" setup>

  import { ref, reactive, nextTick } from 'vue'
  import { get, postBlob } from '../../../utils/request.js'
  // import Play from './Play.vue'

  const state = reactive({
    infos: [], // 根据关键字搜索到的影片
    currentVideo: {}, // 当前查看的视频信息
    status: 0, // 状态
    playSrc: '' ,// 播放地址
    url:''&&'https://vip.lz-cdn4.com/20220321/9_f3e6f975/index.m3u8',// 播放地址
    title:'',// 标题
    value:''// 搜索关键字
  })

  function blobToDataURI(blob, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function (e) {
        callback(e.target.result);
    }
  }

  function chooseFileAndPlay(){
    const file=event.target.files[0];
    blobToDataURI(file,(url)=>{
      console.log(file,'file',url)
      state.status=3;
      state.url=url;
    })
  }

  // 下载
  function goDownload(url){
    console.log(url,'download')
    // window.open(url,"_blank")

    //支持a标签download的浏览器
    const link = document.createElement("a"); //创建a标签
    link.download = url.split('/').pop(); //a标签添加属性
    link.style.display = "none";
    link.href = url;
    document.body.appendChild(link);
    link.click(); //执行下载
    document.body.removeChild(link); //释放标签
  }

  // 操作回退
  function goBack() {
    if (state.status > 0) {
      state.status--
    }
  }

  // 搜索
  function search({ value }) {
    state.infos = []

    state.status = 1

    get(`https://api.pingcc.cn/video/search/title/${value}/1/10`)
      .then((res) => {
        state.infos = res.data
      })
      .catch((err) => {})
  }

  // 去播放
  function goPlay(videoId) {
    get(`https://api.pingcc.cn/videoChapter/search/${videoId}`)
      .then((res) => {
        if (res.code === 0) {
          state.currentVideo = res.data
          state.status = 2
        }
      })
      .catch((err) => {})
  }

  // 开始播放
  function play(playSrc,title) {
    console.log(playSrc,'play',title);
    state.url = playSrc
    state.title = title
    state.status = 3
  }
</script>

<style lang='scss' scoped>
  .item {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
  }

  .container {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
  }

  .card-num {
    cursor: pointer;
    display: inline-block;
    width: 80px;
    color: #333;
    flex-grow:1;
    background-color:#f8f9fa;
    margin:1px;
    text-align: center;
    font-size: 12px;
    &:hover{
      background-color:#c6fdd5;
    }
  }

  .search {
    // position: absolute;
    // left: 0;
    // right: 0;
    // top: 0;
    // bottom: 0;
    // height: 30px;
    // margin: auto;
  }

  .video-box {
    width: 100%;
    max-height: 500px;
  }

  .title {
    border-bottom: 1px solid #333;
    cursor: pointer;
    font-size: 1.2em;
  }
</style>
