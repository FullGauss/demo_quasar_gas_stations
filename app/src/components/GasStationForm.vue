<template>
    <div class="q-pa-md row">
    <q-card class="my-card col-12">
        <q-card-section>
            <q-form
                @submit="onSubmit"
                class="q-gutter-md"
            >
                <q-input 
                    outlined 
                    v-model="localGasStationData.name"
                    label="Название"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Пожалуйста, заполните название']"
                />
                <q-input 
                    outlined 
                    v-model="localGasStationData.address"
                    label="Адрес"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Пожалуйста, заполните адрес']"
                />
                <div>
                    <q-btn :label="crudName" type="submit" color="primary"/>
                </div>
            </q-form>
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
        onSubmit(){
            this.$emit('submitEventHandler')
        },
    },
}
</script>
<style lang="scss">

</style>