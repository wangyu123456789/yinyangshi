import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入页面路由
import Main from '../pages/Main.vue'
import User from '../pages/User.vue'
import Work from '../pages/Work.vue'
import Project from '../pages/Project.vue'
import Share from '../pages/Share.vue'

Vue.use(VueRouter)

// 使用下面四行代码  把 错误进行拦截 并不处理
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: [
    { path: '/', redirect: 'login' },
    {
      path: '/login',
      name: 'login',
      component: Main,
      children: [
        { path: '/user', name: 'user', component: User },
        { path: '/work', name: 'work', component: Work },
        { path: '/project', name: 'project', component: Project },
        { path: '/share', name: 'share', component: Share },

      ],
    },
  ],
})

export default router
