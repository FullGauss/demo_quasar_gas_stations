<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    ...mapActions({
      GET_CAR_INFO: "CARS_INFO_MODULE/GET_CAR_INFO",
    }),
  },
  mounted() {
    this.GET_CAR_INFO();
  }
}
</script>

<style>
</style>
