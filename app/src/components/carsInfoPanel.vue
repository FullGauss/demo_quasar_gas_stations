<template>
    <div class="q-pa-md row">
    <q-card class="my-card col-12">
        <q-card-section>
            <div class="text-h6">Список автомобилей</div>
        </q-card-section>
        <q-card-section>
            <q-list v-if="stateCarsInfo" bordered separator>
                <q-item v-for="carInfo in stateCarsInfo" :key="carInfo.id" clickable v-ripple>
                    <q-item-section>
                        <q-item-label overline>{{carInfo.brand}}</q-item-label>
                        <q-item-label>{{carInfo.number}}</q-item-label>
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
            stateCarsInfo: "CARS_INFO_MODULE/CARS_INFO"
        }),
    },
    methods: {
        ...mapActions({
            getCarsInfo: "CARS_INFO_MODULE/GET_CAR_INFO",
        }),
    },
    mounted() {
        this.getCarsInfo();
    }
}
</script>
<style lang="scss">

</style>