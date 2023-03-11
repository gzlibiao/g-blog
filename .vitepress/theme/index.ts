import DefaultTheme from 'vitepress/theme'
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'
import './style/index.scss'

import Feedback from './components/Feedback.vue'
import TuChuang from './components/TuChuang.vue'
import VideoContainer from './components/video/index.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('feedback',Feedback);
    app.component('tuchuang',TuChuang);
    app.component('video-container',VideoContainer);
    app.use(FightingDesign)
  }
}

