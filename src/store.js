import Vue from "vue"
import Vuex from "vuex"
import userStore from "./store/userStore.js"
import ribaoStore from "./store/ribaoStore.js"

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state: {
		input1: 11
	},
	mutations: {

	},
	actions: {},
	modules: {
		userStore, //用户
		ribaoStore //知乎日报
	},
})

export default store;