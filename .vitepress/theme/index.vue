<template>
  <f-main>
    <f-text center>
      <f-avatar
        :size="160"
        round
        src="https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo2"
      />
    </f-text>

    <f-divider margin="32px" color="rgb(224, 224, 224)"></f-divider>

    <f-text center
      >🎃 对于可控的事情保持警惕 , 对于不可控的事情保持乐观。
    </f-text>

    <f-divider margin="32px" color="rgb(224, 224, 224)"></f-divider>

    <f-text bold>内容</f-text>
    <f-text>⚡ 记录开发中碰到的东西</f-text>
    <f-text>🌲 Vue 的周边生态</f-text>
    <f-text>📌 React 相关</f-text>
    <f-text>🔨 java 相关</f-text>
    <f-text>🏆 面试 相关</f-text>

    <f-divider margin="32px" color="rgb(224, 224, 224)"></f-divider>

    <f-text bold>个性标签</f-text>

    <iframe
      id="myTag"
      src="https://gtols.netlify.app/#/tag"
      height="350"
      class="iframe"
      frameborder="0"
    />
    <iframe
      id="myRemark"
      src="https://hfymark.netlify.app/.netlify/functions/comment"
      class="iframeMark"
      frameborder="0"
    />
    <!-- height="500" -->
    <!-- <div style="height: 350px; width: 100%" /> -->
  </f-main>
</template>

<script setup>
  import { onMounted } from 'vue'
  function restry(iframe) {
    var retryCount = 0 // 初始化重试次数
    var maxRetries = 30 // 最大重试次数
    var timeoutDuration = 5000 // 超时时间，单位毫秒
    function retryIframeLoad() {
      if (retryCount < maxRetries) {
        console.log('重试加载...')
        const src = iframe.src // 先清空 src，防止重复加载相同内容
        iframe.src = '' // 先清空 src，防止重复加载相同内容
        setTimeout(function () {
          iframe.src = src // 重新加载iframe内容
        }, 100) // 设置小的延迟，以确保 iframe src 被清空后再重新加载
        retryCount++
      } else {
        console.log('加载失败，超出最大重试次数！')
      }
    }
    // 检测 iframe 是否加载成功
    iframe.onload = function () {
      console.log('Iframe 加载成功!')
    }
    // 检测超时
    setTimeout(function () {
      if (!iframe.contentWindow || !iframe.contentDocument) {
        console.log('Iframe 加载超时，开始重试...')
        retryIframeLoad()
      }
    }, timeoutDuration) // 设置超时时间
  }
  onMounted(() => {
    var iframe1 = document.getElementById('myTag')
    var iframe2 = document.getElementById('myRemark')
    restry(iframe1)
    restry(iframe2)
  })
</script>
<style scoped>
  .iframe {
    width: 100%;
    /* position: absolute;
    right: 0;
    left: 0; */
    /* height: 400px; */
    /* @media (min-width: 1024px) {
        position: static;
      } */
  }
  .iframeMark {
    /* height: 100vh; */
    /* margin-top: 30px; */
    /* width: 100%;
    position: absolute;
    left: 0;
    right: 0; */
    margin-top: 100px;
    width: 100%;
    height: 500px;
  }

  .f-main {
    max-width: 620px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 40px;
    padding-bottom: 0;
    padding-bottom: 350px;

    @media (min-width: 1024px) {
      padding-bottom: 40px;
    }
  }

  .f-button-default {
    margin-left: 15px;
  }

  .f-text {
    display: block;
    line-height: 40px;
  }
</style>
