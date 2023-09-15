import {createRouter, createWebHistory} from 'vue-router'

const MainLayout = () => import ("../views/layouts/MainLayout.vue");

const DashboardPage = () => import ("../views/pages/DashboardPage/DashboardPage.vue");
const ChatPage = () => import ("../views/pages/ChatPage/ChatPage.vue");
const MatchPage = () => import ("../views/pages/MatchPage/MatchPage.vue");
const LabelPage = () => import ("../views/pages/LabelPage/LabelPage.vue");

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "dashboard",
            component: MainLayout,
            children: [
                {
                    path: "/dashboard",
                    component: DashboardPage,
                },
                {
                    path: "/chat",
                    component: ChatPage,
                },
                {
                    path: "/match",
                    component: MatchPage,
                },
                {
                    path: "/label",
                    component: LabelPage,
                },
            ],
        },
        { path: "/:pathMatch(.*)*", redirect: "dashboard" },
    ]
})

export default router
