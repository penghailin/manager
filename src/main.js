import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//导入基础样式
import './assets/base.less'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//准备规则
import index from './components/index.vue'
import login from './components/login.vue'

const routes = [
  {path:'/index',component:index},
  {path:'/login',component:login}
];
const router = new VueRouter({
   routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
