import { createRouter, createWebHistory } from 'vue-router'
import frontRouter from './frontpage'
import mineRouter from './mine'
import gameRouter from './games'

const routes = [
  frontRouter,
  mineRouter,
  gameRouter,
  {
    // 路由重定向
    path : '/:catchAll(.*)',
    redirect : '/frontpage'
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
