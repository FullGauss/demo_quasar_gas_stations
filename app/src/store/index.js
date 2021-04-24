import Vue from "vue";
import Vuex from "vuex";
import gasStationsModule from "./modules/gasStationsModule";
import carsInfoModule from "./modules/carsInfoModule";
import refuelingOperationsModule from "./modules/refuelingOperationsModule";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

    },
    actions: {

    },
    mutations: {
        
    },
    getters: {

    },

    modules: {
        GAS_STATIONS_MODULE: gasStationsModule,
        CARS_INFO_MODULE: carsInfoModule,
        REFUELING_OPERATIONS_MODULE: refuelingOperationsModule
    }
});
