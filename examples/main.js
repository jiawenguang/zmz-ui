// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import store from './vuex/store'
import VVUI from '../packages/index'
import '../packages/theme-default/lib/index.css'
import VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// language
import language from './language/index'

Vue.component('demo-block', demoBlock)
Vue.use(VVUI)
Vue.config.productionTip = false
Vue.use(VueQuillEditor)
/* eslint-disable no-new */
Vue.prototype.$language = language[localStorage.getItem('js')]
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(language)
  localStorage.setItem('js', 'en-US')
  next()
})
new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')
