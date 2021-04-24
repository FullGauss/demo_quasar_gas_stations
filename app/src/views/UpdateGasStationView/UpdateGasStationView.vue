<template>
    <div>
        <div class="q-pa-md row">
            <div class="text-h5">Информация о заправке</div>
        </div>
        <GasStationForm v-if="currentStateGasStation" 
            :gasStationData="currentStateGasStation" 
            @buttonEventHandler="updateGasStationInfo"
            crudName="Сохранить"
            />
        <q-inner-loading :showing="visible">
            <q-spinner
                color="primary"
                size="3em"
            />
        </q-inner-loading>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import GasStationForm from "@/components/GasStationForm";

export default {
    data () {
        return {
            visible: false,
        }
    },
    components: {
        GasStationForm,
    },
    computed: {
        ...mapGetters({
            currentStateGasStation: "GAS_STATIONS_MODULE/CURRENT_GAS_STATION"
        }),

    },
    methods: {
        ...mapActions({
            getGasStationById: "GAS_STATIONS_MODULE/GET_GAS_STATION_BY_ID",
        }),
        async loadGasStationById(id){
            this.visible = true;
            try{
                await this.getGasStationById(id);
                this.visible = false;
            } catch (error) {
                console.log(error)
            }
        },
        updateGasStationInfo(){
            console.log(this.currentStateGasStation)
        }
    },
    mounted() {
        const id = this.$route.params.id;
        this.loadGasStationById(id);
    }
}
</script>
<style lang="scss" src="./UpdateGasStationView.scss"></style>