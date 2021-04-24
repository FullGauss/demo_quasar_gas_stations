<template>
    <div class="q-pa-md row">
    <q-card class="my-card col-12">
        <q-card-section>
            <div class="text-h6">Список автомобилей</div>
        </q-card-section>
        <q-card-section>
            <transition
                appear
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
            >
            <q-list v-if="stateCarsInfo" bordered separator>
                <q-item 
                    v-for="carInfo in stateCarsInfo" 
                    :key="carInfo.id" clickable v-ripple
                    :to="'/cars-info/update/'+carInfo.id"
                >
                    <q-item-section>
                        <q-item-label overline>{{carInfo.brand}}</q-item-label>
                        <q-item-label>{{carInfo.number}}</q-item-label>
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
            stateCarsInfo: "CARS_INFO_MODULE/CARS_INFO"
        }),
    },
    methods: {
        ...mapActions({
            getCarsInfo: "CARS_INFO_MODULE/GET_CARS_INFO",
        }),
        async loadCarsInfo(){
            this.visible = true;
            try{
                await this.getCarsInfo();
                this.visible = false;
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.loadCarsInfo();
    }
}
</script>
<style lang="scss">

</style>