<template>
    <div class="q-pa-md row">
    <q-card class="my-card col-12">
        <q-card-section>
            <div class="text-h6">Список автозаправок</div>
        </q-card-section>
        <q-card-section>
            <transition
                appear
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
            >
            <q-list v-if="stateGasStations" bordered separator>
                <q-item v-for="gasStation in stateGasStations" 
                    :key="gasStation.id" clickable v-ripple 
                    :to="'/gas-stations/update/'+gasStation.id"
                >
                    <q-item-section>
                        <q-item-label>{{gasStation.name}}</q-item-label>
                        <q-item-label caption>{{gasStation.address}}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
            </transition>
        </q-card-section>
        <q-inner-loading :showing="visible">
            <q-spinner
                color="primary"
                size="3em"
            />
        </q-inner-loading>
    </q-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data () {
        return {
            visible: false,
        }
    },
    computed: {
        ...mapGetters({
            stateGasStations: "GAS_STATIONS_MODULE/GAS_STATIONS"
        }),
    },
    methods: {
        ...mapActions({
            getGasStations: "GAS_STATIONS_MODULE/GET_GAS_STATIONS",
        }),
        async loadGasStations(){
            this.visible = true;
            try{
                await this.getGasStations();
                this.visible = false;
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.loadGasStations();
    }
}
</script>
<style lang="scss">

</style>