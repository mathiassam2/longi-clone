import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/template",
        name: "Template",
        component: () => import("../views/template/template.vue"),
    },
    {
        path: "/",
        name: "Home",
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/login/LoginView.vue"),
    },
    {
        path: "/ehs",
        name: "EHS",
        component: () => import("../views/ehs/EhsView.vue"),
    },
    {
        path: "/hr",
        name: "HR",
        component: () => import("../views/hr/HrView.vue"),
    },
    {
        path: "/it",
        name: "IT",
        component: () => import("../views/it/ItView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
