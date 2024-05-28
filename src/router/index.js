// router.js
import { createRouter, createWebHistory } from "vue-router";
import pages from "./pages.json";

// Dynamically generate routes from pages.json
const routes = pages.map(page => ({
    path: page.webpath,
    name: page.componentName,
    component: () => import(`../${page.componentPath}`),
}));

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
