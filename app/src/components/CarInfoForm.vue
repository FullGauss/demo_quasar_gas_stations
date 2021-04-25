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
                    v-model="localCarInfoData.brand" 
                    label="Марка автомобиля"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Пожалуйста, заполните марку']"
                />
                <q-input
                    outlined 
                    v-model="localCarInfoData.number" 
                    label="Номер автомобиля"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Пожалуйста, заполните номер']"
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
        onSubmit(){
            this.$emit('submitEventHandler')
        },
    },
}
</script>
<style lang="scss">

</style>