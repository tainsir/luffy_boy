import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入axios
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//要把axios放到一个全局变量中
//把axios赋给了$http这个变量
Vue.prototype.$http=axios
Vue.prototype.$url='http://127.0.0.1:8000/'
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
