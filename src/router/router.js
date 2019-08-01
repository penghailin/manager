//导入Vue
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//准备规则
import index from '../views/index.vue'
import login from '../views/login.vue'

const routes = [
  {path:'/index',component:index},
  {path:'/login',component:login}
];
//实例化路由
const router = new VueRouter({
   routes
});
//当要访问某个页面之前触发
//to:要去的页面
//from:从哪里来
 router.beforeEach((to, from, next)=>{
  if(to.path.indexOf('index')!= -1){
    //判断是否有登录
    if(window.localStorage.getItem('token')!= null){
      //如果有登录就放行
      next();
    }else{
      //提示登录
      //Vue.prototype.$message.warning('请先登录!')
      //否则打回登陆页面
      router.push('/login')
    }
  }else{
    //如果访问的你不是index
  //允许访问
  next(); 
  }
  
})
export default router;