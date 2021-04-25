import { getCarsInfo, getCarInfo, createCarInfo, updateCarInfo } from "@/services/carsInfoServices";
import router from "../../router/index";

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
        async CREATE_CAR_INFO({ commit },  data) {
            try {
                const createCarInfoInstance = createCarInfo();

                const response = await createCarInfoInstance.execute(data);
                const createCarInfoResult = response.data.data;
                commit("SET_CURRENT_CAR_INFO", createCarInfoResult);
                router.push({ name: "UpdateCarInfoView", params: { id: createCarInfoResult.id } });

            } catch (error){
                console.log(error);
            }
        },
        async UPDATE_CAR_INFO({ commit },  data) {
            try {
                const updateCarInfoInstance = updateCarInfo();

                const response = await updateCarInfoInstance.execute(data);
                const updateCarInfoResult = response.data.data;
                commit("SET_CURRENT_CAR_INFO", updateCarInfoResult);

            } catch (error){
                console.log(error);
            }
        },
    },
};
