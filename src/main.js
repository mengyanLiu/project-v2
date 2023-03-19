import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css' 
// import '../src/element-ui/element'
// import axios from 'axios'
import router from '@/router'
import service from './service'

Vue.use(ElementUI)
// Vue.prototype.axios=axios//挂载到原型，可以到全局使用
Vue.prototype.service=service//挂载到原型，可以到全局使用
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


