import { getGasStations, getGasStation } from "@/services/gasStationsServices";

export default {
    namespaced: true,
    state: {
        gasStations: null,
        currentGasStation: null
    },
    getters: {
        GAS_STATIONS(state) {
            return state.gasStations;
        },
        CURRENT_GAS_STATION(state) {
            return state.currentGasStation;
        },
    },
    mutations: {
        SET_GAS_STATIONS(state, info) {
            state.gasStations = info;
        },
        SET_CURRENT_GAS_STATION(state, info) {
            state.currentGasStation = info;
        }
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
        async GET_GAS_STATION_BY_ID({ commit },  data) {
            try {
                const getGasStationInstance = getGasStation();

                const response = await getGasStationInstance.execute(data);
                const getGasStationsResult = response.data.data;
                commit("SET_CURRENT_GAS_STATION", getGasStationsResult);

            } catch (error){
                console.log(error);
            }
        },
    },
};
