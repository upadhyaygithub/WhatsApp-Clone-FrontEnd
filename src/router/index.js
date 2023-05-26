import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        component: LoginView,

    },
    {
        path: '/home',
        component: HomeView,

    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;