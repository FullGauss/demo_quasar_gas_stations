import { getRefuelingOperations } from "@/services/refuelingOperationsServices";

export default {
    namespaced: true,
    state: {
        refuelingOperations: null,
    },
    getters: {
        REFUELING_OPERATIONS(state) {
            return state.refuelingOperations;
        },
    },
    mutations: {
        SET_REFUELING_OPERATIONS(state, info) {
            state.refuelingOperations = info;
        },
    },
    actions: {
        async GET_REFUELING_OPERATIONS({ commit }) {
            try {
                const getRefuelingOperationsInstance = await getRefuelingOperations();
                commit("SET_REFUELING_OPERATIONS", getRefuelingOperationsInstance.data.data);

            } catch (error){
                console.log(error);
            }
        },
    },
};