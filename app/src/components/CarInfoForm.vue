<template>
    <div class="q-pa-md row">
    <q-card class="my-card col-12">
        <q-card-section>
            <div class="q-gutter-md">
                 <q-input outlined v-model="localCarInfoData.brand" label="Марка автомобиля" />
                 <q-input outlined v-model="localCarInfoData.number" label="Номер автомобиля" />
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
        carInfoData: {
            type: Object,
            default: () => {
                return {
                    id: null,
                    brand: null,
                    number: null,
                }
            }
        }
    },
    computed: {
        localCarInfoData(){
            return this.carInfoData;
        }
    },
    methods: {
        buttonEvent(){
            this.$emit('buttonEventHandler')
        }
    },
}
</script>
<style lang="scss">

</style>