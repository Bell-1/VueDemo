class PageService {
	constructor() {
		this.pageUrl = {
			'Main': '/Main',
		}
		this.nowPage = 'Main';
	}

	viewPage(pageName) {
		let _url = this.pageUrl.pageName;
		if (_url) {
			this.nowPage = pageName;
			vm.$router.push(_url);
		} else {
			console.error('page is not found!');
		}
	}

}

module.export = new PageService();