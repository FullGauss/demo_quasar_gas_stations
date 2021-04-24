<template>
    <div>
        <div class="q-pa-md row">
            <div class="text-h5">Добавить новую автозаправку</div>
        </div>
        <GasStationForm 
            :gasStationData="newGasStation" 
            @buttonEventHandler="createGasStationInfo"
            crudName="Создать"
        />
    </div>
</template>

<script>
// import { mapActions } from "vuex";

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
        createGasStationInfo(){
            console.log(this.newGasStation)
        }
    },
    mounted() {
        
    }
}
</script>
<style lang="scss" src="./CreateGasStationView.scss"></style>