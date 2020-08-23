import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

// 设置全局的css样式
import './styles/styles.css'
import './styles/icon.css'
// 导入全局的Element组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


// 设置全局组件
import Header from './components/Header.vue'
Vue.component('breadcrumb', Header)


// ********   axios  ********************* */
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
