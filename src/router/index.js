import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from "./Main/Main"
import Test from "./Test/Test"
import HuarongRoad from "./HuarongRoad/HuarongRoad"
import Login from "./Login/Login"
import Vitae from "./Vitae/Vitae"
import Echart from "./Echart/Echart"
import RiBao from "./RiBao/RiBao"

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Main',
			component: Main
		}, {
			path: '/Echart',
			name: 'Echart',
			component: Echart
		}, {
			path: '/Vitae',
			name: 'Vitae',
			component: Vitae
		}, {
			path: '/HuarongRoad',
			name: 'HuarongRoad',
			component: HuarongRoad
		},
		{
			path: '/RiBao',
			name: 'RiBao',
			component: RiBao
		}

	]
})