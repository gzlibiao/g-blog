import DefaultTheme from 'vitepress/theme'
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'
import './style/index.scss'
import Music from '../plugins/music'
import type { defineComponent } from 'vue'

import Chartbed from './components/Chartbed/index.vue'
import PlayVideo from './components/PlayVideo/index.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: ReturnType<typeof defineComponent>) {
    app.component('Chartbed', Chartbed)
    app.component('Play', PlayVideo)
    app.use(FightingDesign)
    app.use(Music)
  }
}
