import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//导入基础样式
import './assets/base.less'
//导入饿了吗ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import router from './router/router.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
