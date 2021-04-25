<template>
    <div>
        <div class="q-pa-md row">
            <div class="text-h5">Добавить новую автозаправку</div>
        </div>
        <GasStationForm 
            :gasStationData="newGasStation" 
            @submitEventHandler="createGasStationInfo"
            crudName="Создать"
        />
    </div>
</template>

<script>
import { mapActions } from "vuex";

import GasStationForm from "@/components/GasStationForm";

export default {
    data () {
        return {
            newGasStation: {
                id: null,
                name: null,
                address: null,
            }
        }
    },
    components: {
        GasStationForm,
    },
    computed: {
       
    },
    methods: {
        ...mapActions({
            createGasStationInDb: "GAS_STATIONS_MODULE/CREATE_GAS_STATION",
        }),
        createGasStationInfo(){
            console.log(this.newGasStation);
            try{
                this.createGasStationInDb(this.newGasStation);
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
<style lang="scss" src="./CreateGasStationView.scss"></style>