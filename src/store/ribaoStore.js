import http from "@/http.js"

let ribaoStore = {
	namespaced: true,
	state: {
		newsList: [],
		hotList: [],
	},

	mutations: {
		setNewsList(state, data) {
			state.newsList = data;
		},
		setHotList(state, data) {
			console.error(state, data)
			state.hotList = data;
		}
	},

	actions: {
		getNewsList({ state, commit }, dataToSend = {}) {
			return new Promise(function (resolve, reject) {
				http.request("rb_themes", dataToSend).then(function (res) {
					if (res.recent) {
						commit('setNewsList', res.recent)
					}
					resolve();
				}).catch(function (data) {
					reject();
				})
			})
		},

		getHotList({ state, commit }, dataToSend = {}) {
			return new Promise(function (resolve, reject) {
				http.request("rb_hot", dataToSend).then(function (res) {
					if (res.recent) {
						commit('setHotList', res.recent)
					}
					resolve();
				}).catch(function (data) {
					reject();
				})
			})
		}
	}
}

export default ribaoStore;