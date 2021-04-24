<template>
    <div>
        <div class="q-pa-md row">
            <div class="text-h5">Информация об автомобилях</div>
        </div>
        <CarsInfoPanel />
    </div>
</template>

<script>
import CarsInfoPanel from "@/components/carsInfoPanel";

export default {
    components: {
        CarsInfoPanel
    },
}
</script>
<style lang="scss" src="./CarsInfoView.scss"></style>