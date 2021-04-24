<template>
    <div>
        <div class="q-pa-md row">
            <div class="text-h5">Информация об автомобиле</div>
        </div>
        <CarInfoForm v-if="currentStateCarInfo" 
            :carInfoData="currentStateCarInfo" 
            @buttonEventHandler="updateCarInfo"
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

import CarInfoForm from "@/components/CarInfoForm";

export default {
    data () {
        return {
            visible: false,
        }
    },
    components: {
        CarInfoForm,
    },
    computed: {
        ...mapGetters({
            currentStateCarInfo: "CARS_INFO_MODULE/CURRENT_CAR_INFO"
        }),

    },
    methods: {
        ...mapActions({
            getCarInfoById: "CARS_INFO_MODULE/GET_CAR_INFO_BY_ID",
        }),
        async loadCarInfoById(id){
            this.visible = true;
            try{
                await this.getCarInfoById(id);
                this.visible = false;
            } catch (error) {
                console.log(error)
            }
        },
        updateCarInfo(){
            console.log(this.currentStateCarInfo)
        }
    },
    mounted() {
        const id = this.$route.params.id;
        this.loadCarInfoById(id);
    }
}
</script>
<style lang="scss" src="./UpdateCarInfoView.scss"></style>