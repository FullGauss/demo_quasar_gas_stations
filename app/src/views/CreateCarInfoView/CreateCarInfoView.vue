<template>
    <div>
        <div class="q-pa-md row">
            <div class="text-h5">Добавить новый автомобиль</div>
        </div>
        <CarInfoForm 
            :carInfoData="newCarInfo"
            @submitEventHandler="createCarInfo"
            crudName="Создать"
        />
    </div>
</template>

<script>
import { mapActions } from "vuex";

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
        ...mapActions({
            createCarInfoInDb: "CARS_INFO_MODULE/CREATE_CAR_INFO",
        }),
        createCarInfo(){
            try{
                this.createCarInfoInDb(this.newCarInfo)
                this.$q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: 'Сохранено'
                })
            } catch(error){
                this.$q.notify({
                    color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: 'Ошибка'
                })
            }
        }
    },
    mounted() {
        
    }
}
</script>
<style lang="scss" src="./CreateCarInfoView.scss"></style>