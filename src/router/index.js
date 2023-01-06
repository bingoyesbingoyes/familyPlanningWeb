import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import AppCount from "../views/AppCount.vue";
import BusinessList from "../views/BusinessList.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Login,
        },
        {
            path: "/flowUserMobile/appCount",
            component: AppCount,
        },
        {
            path: "/flowUserMobile/bussinessList",
            component: BusinessList,
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
