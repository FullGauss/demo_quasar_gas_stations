<template>
    <div>
        <div class="q-pa-md row">
            <div class="text-h5">Информация о заправках</div>
        </div>
        <GasStationsPanel />
    </div>
</template>

<script>
import GasStationsPanel from "@/components/gasStationsPanel";

export default {
    components: {
        GasStationsPanel,
    },
}
</script>
<style lang="scss" src="./GasStationsView.scss"></style>