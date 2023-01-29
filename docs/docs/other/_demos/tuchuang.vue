<template>
  <div class="container">
    <f-image width="200px" :src="photo.image" v-for="photo in state.photos" />

    <div class="ml-5">
      <f-up-load
        v-model:files="state.files"
        :multiple="true"
        :drag="true"
        :on-load="upload"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineComponent, ref, toRefs, reactive, onMounted } from 'vue'
  import { get, postBlob } from '../../../utils/request.js'
  const state = reactive({
    photos: [],
    files: []
  })

  // 圖床初始化
  function initPhotos() {
    get('https://www.helloimg.com/get-user-images/glib').then((res) => {
      state.photos = res
      console.log(state, 'res')
    })
  }

  onMounted(() => {
    initPhotos()
  })

  function upload(files) {
    // 'login-subject': 'glib',
    // password: '1qaz@WSX',
    // source: file
    const ress = Promise.all(
      files.map((file) => {
        const formData = new FormData()
        formData.append('login-subject', 'glib')
        formData.append('login-subject', '1qaz@WSX')
        formData.append('login-subject', file)
        return postBlob(
          'https://www.elloimg.com/newapi/2/upload/?format=json',
          formData
        )
      })
    )
    console.log(ress, 'ress')
    initPhotos()
  }
</script>

<style scoped>
  .ml-5 {
    margin-left: 50px;
  }
  .container {
    display: flex;
  }
</style>
