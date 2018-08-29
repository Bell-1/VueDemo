<template>
	<div id="app" class="app">
		<el-container class="main-container">
			<el-header class="main-header">
				<div class="side-oprate" @click="changeSide">
					<i class="el-icon-menu"></i>
				</div>
				<el-menu class="" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-submenu class="" index="1">
						<template slot="title">用户：{{userInfo.name}}</template>
						<el-menu-item index="1-1" @click="viewPage('Vitae')">简历</el-menu-item>
						<el-menu-item index="1-2" @click="logout">退出登录</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-header>
			<el-container class="main-body" direction="vertical">
				<el-aside class="main-side-left no-scroll">
					<el-menu default-active="1-4-1" class="" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
						<el-menu-item index="1" @click="viewPage('HuarongRoad')">
							<i class="el-icon-tickets"></i>
							<span slot="title">华容道</span>
						</el-menu-item>
						<el-menu-item index="2" @click="viewPage('Echart')">
							<i class="el-icon-menu"></i>
							<span slot="title">图表</span>
						</el-menu-item>
						<el-menu-item index="3">
							<i class="el-icon-document"></i>
							<span slot="title" @click="viewPage('RiBao')">知乎日报</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<el-main class="router-view">
					<router-view/>
				</el-main>
			</el-container>
		</el-container>
		<div class="login-box" v-if="!isLogin">
			<el-form class="login-form" ref="form" :model="loginInfo" label-width="80px">
				<el-form-item label="用户名" prop="name" :rules="loginInfo.rules.name">
					<el-input type="tel" v-model="loginInfo.name"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="psd" :rules="loginInfo.rules.psd">
					<el-input type="password" v-model="loginInfo.psd" @:keyup.enter="login(loginInfo)"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="login(loginInfo)" :disabled="canLogin">登录</el-button>
					<el-button @click="loginReset">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	import { mapState, mapActions } from "vuex"
	import http from "./http.js"

	export default {
		name: 'App',
		data() {
			return {
				isCollapse: false,
				loginInfo: {
					name: '',
					psd: '',
					rules: {
						name: [{
								required: true,
								message: '用户名不能为空'
							},
							{
								min: 4,
								max: 32,
								message: '长度在 4 到 32 个字符'
							},
						],
						psd: [{
								required: true,
								message: '密码不能为空'
							},
							{
								min: 6,
								max: 32,
								message: '长度在 6 到 32 个字符',
								trigger: 'blur'
							}
						]
					}
				}
			}
		},
		created() {
			this.$store.dispatch('userStore/checkLogin').then(() => {
				this.$message.success('登录成功！')
			});
		},
		computed: {
			...mapState('userStore', {
				isLogin: state => state.isLogin,
				userInfo: state => state.userInfo
			}),
			canLogin() {
				return this.loginInfo.name === '' || this.loginInfo.name.length < 4 || this.loginInfo.name.length > 32 || this.loginInfo.psd.name === '' || this.loginInfo.psd.length < 6 || this.loginInfo.psd.length > 32;
			}
		},
		methods: {
			...mapActions('userStore', [
				'login',
				'logout'
			]),
			loginReset() {
				this.loginInfo.name = '';
				this.loginInfo.psd = '';
			},
			changeSide() {
				this.isCollapse = !this.isCollapse;
			},
			viewPage(page) {
				console.error(page)
				this.$router.push('/' + page)
			},
			handleSelect() {
				console.error('select')
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},

		}
	}
</script>

<style lang="scss" type="text/css">
	body {
		margin: 0;
		padding: 0;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		height: 100%;
		.main-container {
			.main-header {
				padding: 0;
				position: relative;
				.side-oprate {
					position: absolute;
					left: 0;
					top: 0;
					height: 60px;
					width: 64px;
					z-index: 2;
					color: white;
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
					/*border-right: 1px solid hsla(0, 0%, 100%, .15);*/
					transition: all .2s ease-in-out;
					&:hover {
						background: #00c1de;
					}
					i {
						font-size: 30px;
					}
				}
				.el-menu {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					background: rgb(84, 92, 100);
				}
			}
			.main-body {
				position: fixed;
				left: 0;
				right: 0;
				top: 60px;
				bottom: 0;
				flex-flow: row;
				.main-side-left {
					max-width: 200px;
					width: initial !important;
					height: 100%;
					.el-menu {
						height: 100%;
					}
				}
				.router-view {
					padding: 0;
					flex: 1;
					height: 100%;
					overflow: scroll;
					transition: all 0.3s;
					position: relative;
				}
			}
		}
		.login-box {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: white;
			display: flex;
			align-items: center;
			justify-content: center;
			.login-form {
				padding: 30px;
				width: 100%;
				max-width: 300px;
				border-radius: 10px;
				box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
				overflow: hidden;
			}
		}
	}
</style>