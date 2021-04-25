import Vue from 'vue'
// import { Notify } from "/node_modules/quasar-framework/dist/quasar.mat.esm.js"
import './styles/quasar.scss'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, Notify } from 'quasar'

Vue.use(Quasar, {
  config: {},
  plugins: {
    Notify
  }
 })