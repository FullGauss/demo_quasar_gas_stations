import api from "./index";

const getGasStations = () => api().get("/gas_stations");

const getGasStation = () => {
    const instance = api();

    return {
        instance,

        execute: function(id) {
            return this.instance.get(`/gas_stations/${id}`);
        }
    };
};

export { getGasStations, getGasStation };