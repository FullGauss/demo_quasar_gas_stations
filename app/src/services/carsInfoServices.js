import api from "./index";

const getCarsInfo = () => api().get("/cars_info");

const getCarInfo = () => {
    const instance = api();

    return {
        instance,

        execute: function(id) {
            return this.instance.get(`/cars_info/${id}`);
        }
    };
};
const createCarInfo = () => {
    const instance = api();

    return {
        instance,

        execute: function(data) {
            return this.instance.post('/cars_info', data);
        }
    };
};
const updateCarInfo = () => {
    const instance = api();

    return {
        instance,

        execute: function(data) {
            return this.instance.put('/cars_info', data);
        }
    };
};

export { getCarsInfo, getCarInfo, createCarInfo, updateCarInfo };