import Vue from "vue";
import Router from "vue-router";

const Container = () => import('@/views/Container.vue');
const Login = () => import('@/views/Login/Login.vue');
const Home = () => import('@/views/Home/Home.vue')

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{ path: '/', redirect: '/login' },
		{ path: '/login', name: 'Login', component: Login },
		{
			path: '/app',
			name: '',
			component: Container,
			children: [
				{ path: 'home', name: 'Home', component: Home },
			]
		},
	]
});