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

const createGasStation = () => {
    const instance = api();

    return {
        instance,

        execute: function(data) {
            return this.instance.post('/gas_stations', data);
        }
    };
};

const updateGasStation = () => {
    const instance = api();

    return {
        instance,

        execute: function(data) {
            return this.instance.put('/gas_stations', data);
        }
    };
};

export { getGasStations, getGasStation, createGasStation, updateGasStation };