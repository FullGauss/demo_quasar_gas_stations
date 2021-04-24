<template>
    <div>
        <div class="q-pa-md row">
            <div class="text-h5">Добавить новый автомобиль</div>
        </div>
        <CarInfoForm 
            :carInfoData="newCarInfo" 
            @buttonEventHandler="createCarInfo"
            crudName="Создать"
        />
    </div>
</template>

<script>
// import { mapActions } from "vuex";

import CarInfoForm from "@/components/CarInfoForm";

export default {
    data () {
        return {
            newCarInfo: {
                id: null,
                brand: null,
                number: null,
            }
        }
    },
    components: {
        CarInfoForm,
    },
    computed: {
       
    },
    methods: {
        createCarInfo(){
            console.log(this.newCarInfo)
        }
    },
    mounted() {
        
    }
}
</script>
<style lang="scss" src="./CreateCarInfoView.scss"></style>