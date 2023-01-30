<template>
  <div class="container">
    <f-image
      fit="cover"
      width="100px"
      :src="photo.image"
      v-for="photo in state.photos"
      class="photo-item"
      @click="preview(photo)"
    />

    <f-image-preview
      v-model:visible="state.visiblePreview"
      :img-list="state.listImg"
    />

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
    files: [],
    visiblePreview: false
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

  function preview(photo) {
    state.listImg = [photo.image]
    state.visiblePreview = true
  }

  function upload(files) {
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
    initPhotos()
  }
</script>

<style scoped>
  .ml-5 {
    margin-left: 50px;
  }
  .photo-item {
    margin-right: 10px;
    cursor: pointer;
    padding: 0;
  }

  .container {
    display: flex;
  }
</style>
