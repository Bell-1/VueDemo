<template>
	<div class>
		<img class="logo" src="@/assets/images/logo.png" alt />
		<el-menu
			cass="menu"
			:default-active="menuActive"
			mode="horizontal"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
			:router="true"
		>
			<el-menu-item index="/app/home">首页</el-menu-item>
			<el-menu-item index="/app/housingSourceManage">房源管理</el-menu-item>
			<el-menu-item index="/app/personalManage">人员管理</el-menu-item>
			<el-menu-item index="/app/deviceManage">设备统计</el-menu-item>
			<el-submenu index>
				<template slot="title">操作日志</template>
				<el-menu-item index="/app/authLog">授权日志</el-menu-item>
				<el-menu-item index="/app/openLog">开门日志</el-menu-item>
				<el-menu-item index="/app/loginLog">登陆日志</el-menu-item>
			</el-submenu>
		</el-menu>
		<div class="user">
			<el-dropdown @command="handleUserOperate">
				<span class="dropdown pointer">
					欢迎：Bell
					<i class="el-icon-arrow-down"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="personalCenter">个人中心</el-dropdown-item>
					<el-dropdown-item command="logout">退出登陆</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<div class="notify news">
				<i class="el-icon-chat-dot-round"></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		computed: {
			menuActive() {
				return this.$route.path;
			}
		},
		methods: {
			/**
			 * @description: 头部右侧下拉 选择事件
			 * @param {type} 选中项的command
			 * @return: void
			 */
			handleUserOperate(command) {
				this[command] && this[command]();
			},
			/**
			 * @description: 查看个人中心
			 * @return: void
			 */
			personalCenter() {
				this.$router.push("/app/personalCenter");
			},
			/**
			 * @description: 退出登陆
			 * @return: void
			 */
			logout() {
				this.$router.push("/login");
			}
		}
	};
</script>

<style lang="scss">
	.el-header {
		padding: 0;
		position: sticky;
		top: 0;
		z-index: 100;
		.logo {
			position: absolute;
			left: 0;
			top: 0;

			height: 100%;
			z-index: 1;
		}

		.el-menu {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.user {
			position: absolute;
			right: 30px;
			top: 0;
			height: 100%;
			display: flex;
			align-items: center;
			color: white;

			.dropdown {
				color: white;
			}

			.notify {
				position: relative;
				margin-left: 20px;
				font-size: 18px;
				cursor: pointer;

				&:hover {
					color: gold;
				}

				&.news {
					&::after {
						position: absolute;
						right: -3px;
						top: -3px;
						width: 6px;
						height: 6px;
						content: "";
						background: red;
						border-radius: 50%;
					}
				}
			}
		}
	}
</style>