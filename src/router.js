import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from './layouts/main/MainLayout.vue'

const HomePage = () => import('./pages/home/HomePage.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainLayout,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: HomePage
                },
            ],
        },
    ]
})

export default router
