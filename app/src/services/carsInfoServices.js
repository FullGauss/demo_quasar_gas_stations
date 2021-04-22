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

export { getCarsInfo, getCarInfo };