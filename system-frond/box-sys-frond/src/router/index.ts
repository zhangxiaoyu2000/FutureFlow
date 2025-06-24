import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import Home from '@/views/pages/home/home.vue';
import Login from '@/views/pages/login/login.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        name:'Login',
        component:Login
    }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router