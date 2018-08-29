import axios from "axios"

class Http {
	constructor() {
		this.api = {
			//热门消息
			'rb_hot': this.genApi('get', '/api/3/news/hot', '/rb'),
			//主题日报列表查看
			'rb_themes': this.genApi('get', 'api/4/themes', '/rb'),
			'rb_hot': this.genApi('get', '/api/3/news/hot', '/rb'),
			'rb_hot': this.genApi('get', '/api/3/news/hot', '/rb'),
		};
	}

	genApi(method, url, baseUrl = '/api') {
		return {
			method: method.toUpperCase(),
			url,
			baseUrl,
		}
	}

	getApi(apiName) {
		if (apiName && this.api[apiName]) {
			return this.api[apiName]
		} else {
			return false
		}
	}

	initApi() {
		this.api
	}

	request(apiName, dataToSend = {}) {
		let api = this.getApi(apiName);
		return new Promise((resolve, reject) => {
			if (api) {
				axios.request({
					url: api.url,
					method: api.method,
					baseURL: api.baseUrl,
					data: dataToSend,
				}).then((res) => {
					console.error(res)
					if(res.data){
						resolve(res.data);
					}
				}).catch((res) => {
					console.error('error_apiName:' + apiName)
					console.error('error_res:' + res)
					reject();
				})
			} else {
				reject();
				console.error('apiName:' + apiName + ' not found')
			}
		})
	}
}

export default new Http();