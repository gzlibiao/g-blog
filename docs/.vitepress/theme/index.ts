import DefaultTheme from 'vitepress/theme'
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'
import './style/index.scss'
import Feedback from './components/Feedback.vue'
import TuChuang from './components/TuChuang.vue'
import ShiPing from './components/ShiPing.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('feedback',Feedback);
    app.component('tuchuang',TuChuang);
    app.component('shiping',ShiPing);
    app.use(FightingDesign)
  }
}
