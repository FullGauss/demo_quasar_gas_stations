<template>
    <div class="q-pa-md row">
    <q-card class="my-card col-12">
        <q-card-section>
            <div class="text-h6">Список автозаправок</div>
        </q-card-section>
        <q-card-section>
            <q-list v-if="stateGasStations" bordered separator>
                <q-item v-for="gasStation in stateGasStations" :key="gasStation.id" clickable v-ripple>
                    <q-item-section>
                        <q-item-label>{{gasStation.name}}</q-item-label>
                        <q-item-label caption>{{gasStation.address}}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
    </q-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            stateGasStations: "GAS_STATIONS_MODULE/GAS_STATIONS"
        }),
    },
    methods: {
        ...mapActions({
            getGasStations: "GAS_STATIONS_MODULE/GET_GAS_STATIONS",
        }),
    },
    mounted() {
        this.getGasStations();
    }
}
</script>
<style lang="scss">

</style>