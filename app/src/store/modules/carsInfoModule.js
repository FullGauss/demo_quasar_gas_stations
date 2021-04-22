import { getCarsInfo } from "@/services/carsInfoServices";

export default {
    namespaced: true,
    state: {
        carsInfo: null,
    },
    getters: {
        CARS_INFO(state) {
            return state.carsInfo;
        },
    },
    mutations: {
        SET_CARS_INFO(state, info) {
            state.carsInfo = info;
        },
    },
    actions: {
        async GET_CAR_INFO({ commit }) {
            try {
                const getCarsInfoInstance = getCarsInfo();
                commit("SET_CARS_INFO", getCarsInfoInstance);

            } catch (error){
                console.log(error);
            }
        },
    },
};