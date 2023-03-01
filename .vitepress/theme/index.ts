import DefaultTheme from 'vitepress/theme'
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'
import './style/index.scss'

// import vue3videoPlay from 'vue3-video-play' // 引入组件
// import 'vue3-video-play/dist/style.css' // 引入css

import Feedback from './components/Feedback.vue'
import TuChuang from './components/TuChuang.vue'
import ShiPing from './components/ShiPing.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.use(vue3videoPlay)
    app.component('feedback',Feedback);
    app.component('tuchuang',TuChuang);
    app.component('shiping',ShiPing);
    app.use(FightingDesign)
  }
}

