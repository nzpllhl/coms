import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入Element的按需组件
import Element from '../src/plugins/element.js'

// 导入全局css
import './assets/index/glone.css'

//引入axios
import Axios from 'axios'
Vue.prototype.$axios = Axios//配置axios挂在vue原型上
Axios.defaults.baseURL = 'http://localhost:3000/'//配置公共的URL

// 全局引入
// 引入Element
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  Element,
  render: h => h(App)
}).$mount('#app')
