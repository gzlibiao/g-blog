<template>
  <div class="feedback">
    <div class="input-ctl">
      <!-- <input class="input" /> -->
      <div class="material input__box">
        <input class="input__fill" placeholder="1" v-model="msg" />
        <label class="input__label">说点什么</label>
      </div>
      <button class="send" @click="send">发送</button>
    </div>

    <waterfall
      type="column"
      wrapHeight="auto"
      :minWidth="0"
      :cols="1"
      :list="message"
      @scroll-end="handleEnd"
    >
      <template #default="{ row }">
        <div class="card">
          <div class="msg">
            <span>{{ row.msg }}</span>
            <span class="time">{{ row.time }}</span>
          </div>
        </div>
      </template>
    </waterfall>

    <f-loading :show="loading" text="发送中"></f-loading>

    <div class="more" @click="more">更多</div>
  </div>
</template>
<script setup lange="ts">
  import axios from 'axios'
  import { FMessage } from 'fighting-design'
  import { ref, reactive, onMounted } from 'vue'
  import Waterfall from '../waterfall/src/waterfall.vue'

  const loading = ref(false)
  const msg = ref('')
  const message = reactive([])
  let size = 10
  const current = 1

  let total = 0

  const post = async (url, data) => {
    return await axios.post(url, JSON.stringify(data))
  }

  const fetchData = async () => {
    let res = await axios.get(
      `https://e2625ac1-6ce5-473a-8f15-04f5ae12964e.bspapp.com/gz/message?current=${current}&size=${size}`
    ).catch(()=>{})

    res = res?.data
    if (res?.status) {
      total = res?.result?.affectedDocs
      res?.result.data.forEach(
        (o) =>
          (o.time =
            new Date(o.create_time).toLocaleDateString() +
            ' ' +
            new Date(o.create_time).toLocaleTimeString())
      )
      message.length = 0
      message.unshift(...res?.result.data)
    }
  }

  const handleEnd = () => {
    console.log('end')
  }

  const send = async () => {
    const m = msg.value
    if (!m.trim()) {
      FMessage.warning('请先填写内容')
      return
    }
    loading.value = true
    msg.value = ''
    const res = await post(
      'https://e2625ac1-6ce5-473a-8f15-04f5ae12964e.bspapp.com/gz/message',
      { msg: m, type: 'add' }
    )
      .catch(() => {
        FMessage.error('错误')
      })
      .finally(() => {
        loading.value = false
      })
    if (res.data.status) {
      size = 0
      fetchData()
    }
  }

  const more = () => {
    console.log(total, size, 'totalsize')
    if (message.length % size !== 0) {
      FMessage.warning('没有更多了')
      return
    }

    size += 10
    fetchData()
  }

  onMounted(() => {
    fetchData()
  })
</script>

<style scope>
  .feedback {
    display: flex;
    flex-flow: column nowrap;
  }

  .msg {
    /* margin: 4px;
    padding: 2px; */
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    font-size: 14px;
    font-weight: 300;
  }

  .input-ctl {
    margin-left: auto;
    display: flex;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    font-size: 14px;

    --b-color: #f8f9fa;
    --btn-color: #eee;
  }
  .input-ctl:hover {
    --b-color: rgba(54, 74, 99, 0.3);
    --btn-color: rgba(54, 74, 99, 0.5);
  }

  .send {
    border: 1px solid var(--b-color);
    border-left: none;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 2px;
    line-height: 14px;
    color: var(--btn-color);
  }

  .feedback-item {
    border-bottom: 1px solid #eee;
  }

  .more {
    cursor: pointer;
    text-align: center;
  }

  .time {
    text-align: right;
    font-size: 12px;
    font-weight: 200;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    margin-bottom: 28px;
    border-radius: 15px;
    border: none;
    box-shadow: 0 1px 3px 0 rgba(54, 74, 99, 0.1);
    margin: 2px;
    padding: 2px;
  }
  .card:hover {
    box-shadow: 0 1px 3px 0 rgba(54, 74, 99, 0.3);
  }

  .material.input__box {
    position: relative;
  }

  .material .input__fill {
    outline: none;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    padding: 0 6px;
    font-size: 14px;
    border: 1px solid var(--b-color);
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
    color: #666;
  }

  .material .input__fill::placeholder {
    color: transparent;
  }

  .material .input__label {
    position: absolute;
    left: 10px;
    top: 0px;
    transition: transform 0.25s;
    font-size: 12px;
    font-weight: 400;
    padding: 0 6px;
    pointer-events: none;
    color: #999;
  }

  .material .input__fill:not(:placeholder-shown) ~ .input__label,
  .material .input__fill:focus ~ .input__label {
    text-shadow: 0 0 1px rgba(9, 9, 9, 0.1);
    transform: scale(0.75) translate(-20px, -20px);
    color: var(--b-color);
  }
</style>
