<template>
  <f-main>
    <f-text center>
      <f-avatar
        :size="160"
        round
        src="https://www.helloimg.com/images/2022/10/04/ZUXPTT.jpg"
      />
    </f-text>

    <f-divider margin="32px" color="rgb(224, 224, 224)"></f-divider>

    <f-text
      >🎃
      不要惧怕写出不完美的代码，只要在后续迭代过程中“见招拆招”，代码就会变得越来越完善，框架也会变得越来越健壮。</f-text
    >

    <f-divider margin="32px" color="rgb(224, 224, 224)"></f-divider>
    <f-text bold>内容</f-text>
    <f-text>⚡ 记录 JavaScript 的各种方法</f-text>
    <f-text>🌲 Vue2 和 Vue3 的一些使用</f-text>
    <f-text>📌 TypeScript 基础</f-text>
    <f-text>🔨 java 相关</f-text>
    <f-text>🏆 前端面试题</f-text>

    <feedback />
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
