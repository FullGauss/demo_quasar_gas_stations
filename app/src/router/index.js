import Vue from "vue";
import Router from "vue-router";
import MainView from "../views/MainView/MainView.vue";
import GasStationsView from "../views/GasStationsView/GasStationsView.vue";
import CarsInfoView from "../views/CarsInfoView/CarsInfoView.vue";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "MainViewRoute",
        component: MainView
    },
    {
        path: "/gas-stations",
        name: "GasStationsView",
        component: GasStationsView
    },
    {
        path: "/car-info",
        name: "CarsInfoView",
        component: CarsInfoView
    }
];

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
