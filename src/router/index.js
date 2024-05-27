import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/login/LoginView.vue";
import EhsView from "../views/ehs/EhsView.vue";
import HrView from "../views/hr/HrView.vue";
import ItView from "../views/it/ItView.vue";
import TemplateView from "../views/template/template.vue";

const routes = [
    {
        path: "/template",
        name: "Template",
        component: TemplateView,
    },
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
    },
    {
        path: "/ehs",
        name: "EHS",
        component: EhsView,
    },
    {
        path: "/hr",
        name: "HR",
        component: HrView,
    },
    {
        path: "/it",
        name: "IT",
        component: ItView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
