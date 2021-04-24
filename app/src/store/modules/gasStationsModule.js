import { getGasStations } from "@/services/gasStationsServices";

export default {
    namespaced: true,
    state: {
        gasStations: null,
    },
    getters: {
        GAS_STATIONS(state) {
            return state.gasStations;
        },
    },
    mutations: {
        SET_GAS_STATIONS(state, info) {
            state.gasStations = info;
        },
    },
    actions: {
        async GET_GAS_STATIONS({ commit }) {
            try {
                const getGasStationsInstance = await getGasStations();
                commit("SET_GAS_STATIONS", getGasStationsInstance.data.data);

            } catch (error){
                console.log(error);
            }
        },
    },
};
