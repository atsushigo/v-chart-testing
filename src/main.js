import Vue from 'vue'
import App from './App.vue'
import VCharts from 'v-charts'
import vuetify from '@/plugins/vuetify'
//import axios from 'axios'
import router from './router'

Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
	vuetify,
	router,
	render: h => h(App)
}).$mount('#app')