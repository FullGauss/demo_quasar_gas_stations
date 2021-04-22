import Vue from "vue";
import Router from "vue-router";
import MainView from "../views/MainView/MainView.vue";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "MainViewRoute",
        component: MainView
    },
];

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
