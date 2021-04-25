import { getGasStations, getGasStation, createGasStation, updateGasStation } from "@/services/gasStationsServices";
import router from "../../router/index";

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
        async GET_GAS_STATION_BY_ID({ commit }, data) {
            try {
                const getGasStationInstance = getGasStation();

                const response = await getGasStationInstance.execute(data);
                const getGasStationResult = response.data.data;
                commit("SET_CURRENT_GAS_STATION", getGasStationResult);

            } catch (error){
                console.log(error);
            }
        },
        async CREATE_GAS_STATION({ commit }, data) {
            try {
                const createGasStationInstance = createGasStation();

                const response = await createGasStationInstance.execute(data);
                const createGasStationResult = response.data.data;
                commit("SET_CURRENT_GAS_STATION", createGasStationResult);
                router.push({ name: "UpdateGasStationView", params: { id: createGasStationResult.id } });

            } catch (error){
                console.log(error);
            }
        },
        async UPDATE_GAS_STATION({ commit }, data) {
            try {
                const updateGasStationInstance = updateGasStation();

                const response = await updateGasStationInstance.execute(data);
                const updateGasStationResult = response.data.data;
                console.log(updateGasStationResult)
                commit("SET_CURRENT_GAS_STATION", updateGasStationResult);

            } catch (error){
                console.log(error);
            }
        },
    },
};
