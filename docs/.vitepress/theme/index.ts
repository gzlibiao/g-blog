import DefaultTheme from 'vitepress/theme'
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'
import './style/index.scss'
import Feedback from './components/Feedback.vue'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('feedback',Feedback);
    app.use(FightingDesign)
  }
}
