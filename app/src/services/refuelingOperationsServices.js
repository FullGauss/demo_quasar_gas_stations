import api from "./index";

const getRefuelingOperations = () => api().get("/refueling_operations");

export { getRefuelingOperations };