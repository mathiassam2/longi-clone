import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/login/LoginView.vue";

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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
