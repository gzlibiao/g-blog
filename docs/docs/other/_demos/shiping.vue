<template>
  <div class="container">
    <f-page-header title="视频" :on-back="goBack" v-show="state !== 0" />

    <div class="search" v-show="state.status === 0">
      <f-input
        v-model="value"
        type="text"
        :on-search="search"
        search
        placeholder="请输入...."
      />
    </div>

    <div v-for="item in state.infos" :key="item" class="item">
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
          alt="fds"
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

    <div
      v-if="state.currentVideo.chapterList && state.status === 2"
      style="display: flex; flex-flow: row wrap"
    >
      <span
        class="card_num"
        v-for="item in state.currentVideo.chapterList"
        @click="play(item.chapterPath)"
      >
        {{ item.title }}
      </span>
    </div>

    <div v-if="state.status === 3">
      <div id="myVideo">
        <div id="dplayer" :ref="player" class="dplayer video-box"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import 'video.js/dist/video-js.css'
  import Hls from 'hls.js'
  import DPlayer from 'dplayer'

  import {
    defineComponent,
    ref,
    toRefs,
    reactive,
    onMounted,
    nextTick,
    onBeforeUnmount
  } from 'vue'

  import { get, postBlob } from '../../../utils/request.js'
  const value = ref('')
  const player = ref()
  let dp = null

  let videoInfo = {
    img: '',
    url: ''
  }

  const state = reactive({
    infos: [], // 搜索到的视频信息
    currentVideo: {}, // 当前查看的视频信息
    status: 0, // 状态
    playSrc: '' // 播放地址
  })

  // 销毁
  onBeforeUnmount(() => {
    if (dp) {
      dp.dispose() // dispose()会直接删除Dom元素
    }
  })
  onMounted(() => {})

  // 操作回退
  function goBack() {
    if (state.status > 0) {
      state.status--
    }
  }

  // 加载视频
  function loadVideo(videoInfo) {
    dp = new DPlayer({
      element: player.value,
      loop: false,
      video: {
        url: videoInfo.url,
        type: 'customHls',
        customType: {
          customHls: function (video, player) {
            const hls = new Hls()
            hls.loadSource(video.src)
            hls.attachMedia(video)
          }
        }
      }
    })
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
    // state.playSrc =
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
  function play(playSrc) {
    videoInfo.url = playSrc
    state.status = 3
    nextTick(() => {
      loadVideo(videoInfo)
    })
  }
</script>

<style scoped>
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

  .card_num {
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
    width: 80px;
    color: #333;
    font-size: 12px;
  }

  .search {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 30px;
    margin: auto;
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
