import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import NewApplication from "../views/NewApplication.vue";
import NotSubmitted from "../views/NotSubmitted.vue";
import InProcess from "../views/InProcess.vue";
import Completed from "../views/Completed.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Login,
        },
        {
            path: "/Index",
            component: Index,
        },
        {
            path: "/NewApplication",
            component: NewApplication,
        },
        {
            path: "/NotSubmitted",
            component: NotSubmitted,
        },
        {
            path: "/InProcess",
            component: InProcess,
        },
        {
            path: "/Completed",
            component: Completed,
        },
    ],
});

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("token");
    // clear white edge
    document.querySelector("body").setAttribute("style", "margin:0;padding:0");

    if (token || to.path === "/") {
        next();
    } else {
        next("/");
    }
});

export default router;
