<template>
    <div class="q-pa-md row">
    <q-card class="my-card col-12">
        <q-card-section>
            <div class="q-gutter-md">
                 <q-input outlined v-model="localGasStationData.name" label="Название" />
                 <q-input outlined v-model="localGasStationData.address" label="Адрес" />
                 <q-btn color="white" text-color="black" :label="crudName" @click="buttonEvent"/>
            </div>
        </q-card-section>
    </q-card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props: {
        crudName: {
            type: String,
            default: "Создать"
        },
        // name: {
        //     type: String,
        //     default: null
        // },
        // address: {
        //     type: String,
        //     default: null
        // },
        gasStationData: {
            type: Object,
            default: () => {
                return {
                    id: null,
                    name: null,
                    address: null,
                }
            }
        }
    },
    computed: {
        localGasStationData(){
            return this.gasStationData;
        }
    },
    methods: {
        buttonEvent(){
            console.log("Click");
            this.$emit('buttonEventHandler')
        }
    },
}
</script>
<style lang="scss">

</style>