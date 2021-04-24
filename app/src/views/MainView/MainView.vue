<template>
    <div>
        <div class="q-pa-md row">
            <div class="text-h5">Главная</div>
        </div>
        <GasStationsPanel />
        <CarsInfoPanel />
        <RefuelingOperationsPanel />
    </div>
</template>

<script>
import GasStationsPanel from "@/components/gasStationsPanel";
import CarsInfoPanel from "@/components/carsInfoPanel";
import RefuelingOperationsPanel from "@/components/refuelingOperations";

export default {
    components: {
        GasStationsPanel,
        CarsInfoPanel,
        RefuelingOperationsPanel
    },
}
</script>
<style lang="scss" src="./MainView.scss"></style>