<template>
    <div class="q-pa-md row">
    <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    >
        <div v-if="stateRefuelingOperations" class="col-12">
            <q-table
                title="Список операций"
                :data="safeRefuelingOperations"
                :columns="columns"
                row-key="name"
            />
        </div>
    </transition>
    <q-inner-loading :showing="!stateRefuelingOperations">
        <q-spinner
            color="primary"
            size="3em"
        />
    </q-inner-loading>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data(){
        return {
            columns: [
                { 
                    name: 'station_name', 
                    label: 'Название автозаправки', 
                    required: true,
                    align: 'left',
                    field: 'station_name', 
                    sortable: true 
                },
                { 
                    name: 'station_address', 
                    label: 'Адрес автозаправки', 
                    align: 'left',
                    field: 'station_address', 
                    sortable: true 
                },
                { 
                    name: 'car_brand', 
                    label: 'Модель автомобиля', 
                    align: 'left',
                    field: 'car_brand', 
                    sortable: true 
                },
                { 
                    name: 'car_number', 
                    label: 'Номер автомобиля', 
                    align: 'left',
                    field: 'car_number', 
                    sortable: true 
                },
                { 
                    name: 'fuel_capacity', 
                    label: 'Кол-во топлива (л)', 
                    align: 'left',
                    field: 'fuel_capacity', 
                    sortable: true 
                },
            ],
        }
    },
    computed: {
        ...mapGetters({
            stateRefuelingOperations: "REFUELING_OPERATIONS_MODULE/REFUELING_OPERATIONS"
        }),
        safeRefuelingOperations(){
            return this.stateRefuelingOperations || [];
        }
    },
    methods: {
        ...mapActions({
            getRefuelingOperations: "REFUELING_OPERATIONS_MODULE/GET_REFUELING_OPERATIONS",
        }),
    },
    mounted() {
        this.getRefuelingOperations();
    }
}
</script>
<style lang="scss">
.q-table th{
    font-weight: bold;
}
</style>