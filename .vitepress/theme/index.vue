<template>
  <f-main>
    <f-text center>
      <f-avatar
        :size="160"
        round
        src="https://www.Helloimg.com/images/2022/10/04/ZUXPTT.jpg"
      />
    </f-text>

    <f-divider margin="32px" color="rgb(224, 224, 224)"></f-divider>

    <f-text>🎃
      不要惧怕写出不完美的代码，只要在后续迭代过程中“见招拆招”，代码就会变得越来越完善。
    </f-text>

    <f-divider margin="32px" color="rgb(224, 224, 224)"></f-divider>

    <f-text bold>内容</f-text>
    <f-text>⚡ 记录开发中碰到的东西</f-text>
    <f-text>🌲 Vue 的周边生态</f-text>
    <f-text>📌 TypeScript 相关</f-text>
    <f-text>🔨 java 相关</f-text>
    <f-text>🏆 面试 相关</f-text>

    <f-divider margin="32px" color="rgb(224, 224, 224)"></f-divider>

    <f-text bold>个性标签</f-text>

    <iframe src="https://gtols.netlify.app/#/tag" height="350" width="100%" frameborder="0"/>

    <!-- <feedback /> -->
  </f-main>
</template>

<style scoped>
  .f-main {
    max-width: 620px;
    margin: 40px auto;
    box-sizing: border-box;
    padding: 40px;
    padding-bottom: 0;
  }

  .f-button-default {
    margin-left: 15px;
  }

  .f-text {
    display: block;
    line-height: 40px;
  }
</style>
