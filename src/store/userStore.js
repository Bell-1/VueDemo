import Vue from "vue"

let userStore = {
	namespaced: true,
	state: {
		userInfo: {},
		loginInfo: {
			name: '',
			pad: ''
		},
		isLogin: false,
	},

	mutations: {
		login(state, data) {
			state.isLogin = true;
			state.userInfo = data;
			localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
			if (window.vmApp && window.vmApp.$message) {
				vmApp.$message.success('登录成功！')
			}
		},
		logout(state) {
			state.isLogin = false;
			state.userInfo = {};
			localStorage.removeItem('userInfo');
			if (window.vmApp && window.vmApp.$message) {
				vmApp.$message.success('已退出登录！')
			}
		}
	},

	actions: {
		login({ state, commit }, data) {
			return new Promise((resolve, reject) => {
				let pass = true;
				if (data.name.length < 4 || data.name.length > 32) {
					vm.$message.warning('用户名长度在 4 到 32 个字符')
					pass = false;
				}
				if (pass && data.psd.length < 6 || data.psd.length > 32) {
					vm.$message.warning('密码长度在 6 到 32 个字符')
					pass = false;
				}
				if (pass) {
					commit('login', data);
					resolve();
				} else {
					reject()
				}
			})
		},
		logout({ state, commit }) {
			return new Promise((resolve, reject) => {
				commit('logout');
				resolve();
			})
		},
		checkLogin({ state, commit, dispatch }) {
			let self = this,
				userInfo = localStorage.getItem('userInfo');
			return new Promise((resolve, reject) => {
				if (userInfo) {
					userInfo = JSON.parse(userInfo)
					commit('login', userInfo);
					resolve();
				} else {
					reject();
				}
			})
		}
	}
}

export default userStore;