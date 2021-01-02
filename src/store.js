import { createStore, createLogger } from 'vuex'
import home from './scenes/Home/duck'
import appTopBar from './components/AppTopBar/duck'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    home,
    appTopBar,
  },
  plugins: [createLogger()],
  strict: debug,
})
