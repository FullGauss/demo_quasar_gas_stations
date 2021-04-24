import Vue from "vue";
import Router from "vue-router";
import MainView from "../views/MainView/MainView.vue";
import GasStationsView from "../views/GasStationsView/GasStationsView.vue";
import CarsInfoView from "../views/CarsInfoView/CarsInfoView.vue";
import UpdateGasStationView from "../views/UpdateGasStationView/UpdateGasStationView.vue";
import UpdateCarInfoView from "../views/UpdateCarInfoView/UpdateCarInfoView.vue";
import CreateGasStationView from "../views/CreateGasStationView/CreateGasStationView.vue";
import CreateCarInfoView from "../views/CreateCarInfoView/CreateCarInfoView.vue";

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
        path: "/gas-stations/update/:id",
        name: "UpdateGasStationView",
        component: UpdateGasStationView
    },
    {
        path: "/gas-stations/create",
        name: "CreateGasStationView",
        component: CreateGasStationView
    },
    {
        path: "/cars-info",
        name: "CarsInfoView",
        component: CarsInfoView
    },
    {
        path: "/cars-info/update/:id",
        name: "UpdateCarInfoView",
        component: UpdateCarInfoView
    },
    {
        path: "/cars-info/create",
        name: "CreateCarInfoView",
        component: CreateCarInfoView
    },
];

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
