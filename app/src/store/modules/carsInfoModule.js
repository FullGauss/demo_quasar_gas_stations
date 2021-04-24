import { getCarsInfo, getCarInfo } from "@/services/carsInfoServices";

export default {
    namespaced: true,
    state: {
        carsInfo: null,
        currentCarInfo: null
    },
    getters: {
        CARS_INFO(state) {
            return state.carsInfo;
        },
        CURRENT_CAR_INFO(state) {
            return state.currentCarInfo;
        },
    },
    mutations: {
        SET_CARS_INFO(state, info) {
            state.carsInfo = info;
        },
        SET_CURRENT_CAR_INFO(state, info) {
            state.currentCarInfo = info;
        }
    },
    actions: {
        async GET_CARS_INFO({ commit }) {
            try {
                const getCarsInfoInstance = await getCarsInfo();
                commit("SET_CARS_INFO", getCarsInfoInstance.data.data);

            } catch (error){
                console.log(error);
            }
        },
        async GET_CAR_INFO_BY_ID({ commit },  data) {
            try {
                const getCarInfoInstance = getCarInfo();

                const response = await getCarInfoInstance.execute(data);
                const getCarInfoResult = response.data.data;
                commit("SET_CURRENT_CAR_INFO", getCarInfoResult);

            } catch (error){
                console.log(error);
            }
        },
    },
};
