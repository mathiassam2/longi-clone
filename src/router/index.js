import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/login/LoginView.vue";
import EhsView from "../views/ehs/EhsView.vue";
import HrView from "../views/hr/HrView.vue";
import ItView from "../views/it/ItView.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "About",
        component: AboutView,
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
