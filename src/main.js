// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from "vuex"
import Element from "element-ui"
import vueAwesomeSwiper from "vue-awesome-swiper"
import App from './App'
import router from './router'
import store from "./store"
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import '../static/html.css'

import http from "@/http.js"

Vue.use(Element)
Vue.use(vueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$http = http;

/* eslint-disable no-new */
window.vmApp = new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})