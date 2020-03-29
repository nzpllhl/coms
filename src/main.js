import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入Element的按需组件
import Element from './plugins/element.js'

//导入阿里字体图标库样式
import './assets/fonts/iconfont.css'

// 导入全局css
import './assets/index/glone.css'

//引入axios
import axios from 'axios'
//Vue.use(axios);
axios.defaults.baseURL = 'http://localhost:3000/'//配置公共的URL
// 增加请求拦截,要求每次请求挂载Authorization的一个字段，值为token令牌
// 目的是看登录的这个人携带的字段有没有，或者合不合法
// axios.interceptors.request.use(config => {
//   console.log(config);
//config.herders.Authorization = sessionStorage.getItem('token')
//   return config
// })
Vue.prototype.$http = axios//配置axios挂在vue原型上

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
