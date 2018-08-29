<template>
	<div class="vitae">
		<div class="top">
			<div class="person">
				<div class="name">
					{{contact.name}}
				</div>
				<div class="job">
					{{contact.job}}
				</div>
			</div>
			<div class="contact">
				<div v-for="item in contact.info">{{item}}</div>
			</div>
		</div>
		<div class="block">
			<div class="title-row">
				<div class="title">
					专业技能
				</div>
			</div>
			<div class="content">
				<div class="left"> </div>
				<div class="right">
					<div class="list">
						<div class="list-item sign" v-for="(item,index) in skill">{{index + 1}}.{{item}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="block">
			<div class="title-row">
				<div class="title">
					专业技能
				</div>
			</div>
			<div class="content" v-for="item in jobs">
				<div class="left">{{item.time}}</div>
				<div class="right">
					<div class="title">
						<div class="theme-color">{{item.company}}</div>
					</div>
					<div class="duty">{{item.jobContent}}</div>
					<div class="duty">{{item.technologyStack}}</div>
					<div class="list sign" v-for="project in item.project">
						<div class="list-item list-title">
							<div class="name">{{project.name}}</div>
							<div class="describe"></div>
						</div>
						<div class="list-item">{{project.describe}}</div>
						<div class="list-item" v-for="listItem in project.list">
							<div class="list-item-title">{{listItem.title}}</div>
							<div class="list-item-content">{{listItem.content}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="block">
			<div class="title-row">
				<div class="title">
					开源贡献
				</div>
			</div>
			<div class="content">
				<div class="left"></div>
				<div class="right">
					<div class="title">
						<div class="theme-color">sjERP</div>
					</div>
					<div class="duty">神记ERP是一款基于SaaS的经营管理软件（ERP、进销存、CRM、生产管理），适用于财务、销售与采购、供应链管理、仓储库存、微商城经营等。业务流程的每一环节都可沟通协作，真正实现一站式管理销售、采购、库存账目等需求。语言：php（thinkphp）+angularjs/vue</div>
					<div class="list">
						<div class="list-item">
							<div class="list-item-title">地址：</div>
							<div class="list-item-content pointer" @click="viewSj">https://github.com/co8bit/sjERP</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Vitae',
		data() {
			return {
				contact: {
					name: '贝云江',
					job: '前端开发',
					info: [
						'mobile: 153 7299 9761',
						'email: 15372999761@163.com',
						'QQ: 214392937',
					]
				},
				skill: [
					'精通ES6、css3和html5，熟练手写符合W3C标准的代码，高精度还原原型和UI设计图，掌握面向对象编程思想',
					'熟练使用angular1.x、ionic、mui,小程序等框架',
					'熟悉vue全家桶（vue2.0, webpack, vue-router, vuex, element-ui, vux）',
					'熟悉webpack、gulp等打包工具',
					'熟悉Nodejs、less、sass、git、github、sourcetree等技术和团队协作开发工具',
				],
				jobs: [{
					company: '杭州跃迁科技有限公司',
					time: '2016.6-至今',
					jobContent: '根据设计师提供的UI图纸，实现显示和动态交互体验效果，根据产品原型实现功能交互，通过AJAX与后端提供接口进行数据交互并渲染到页面。所有的产品都是基于设计图，所有没有用其他的css库。',
					technologyStack: 'HTML5 、CSS3、ES5、ES6、JQuery、Angular、ionic、mui、小程序',
					project: [{
						name: '柠檬记账（小程序）',
						describe: '是一款记录社交场景中收支的社交化记账软件，它是基于熟人的社交场景下，频繁重复的算账、记账，转账等麻烦的账本应用。柠檬记账依托于微信小程序，以社交圈子为核心，用户可以通过微信邀请小伙伴一起来记账，实现了多人共享记账，随时记录消费情况，智能账单累计。',
						list: [{
							title: '框架:',
							content: '微信小程序框架',
						}, {
							title: '工作内容:',
							content: '负责前端开发架构和开发。主要使用微信小程序API和组件，自定义组件进行开发，使用wx.request和后台进行数据交互，',
						}, {
							title: '技术：',
							content: '使用微信登录，微信支付进行登录和付费，使用ECharts图表库'
						}],
						time: '',
					}, {
						name: '抓哈哈（在线抓娃娃安卓版）',
						describe: '全新概念的线上抓娃娃机，将传统的线下抓娃娃机移植到线上，用户足不出户就能身临其境地体验大而全的娃娃机游乐场。',
						list: [{
							title: '框架:',
							content: 'mui, jquery',
						}, {
							title: '工作内容:',
							content: '负责前端开发架构和开发。使用Hbuilder编辑器打包成Android和IOS安装包。',
						}, {
							title: '技术：',
							content: '使用websocket实时操作娃娃机，使用声网SDK进行实时视频，同步观看游戏过程，使用微信登录，微信支付进行登录和付费'
						}],
					}, {
						name: '微信商城（书城）',
						describe: '在之前的微商城的基础上修改了页面结构，主要功能差不多。',
						list: [{
							title: '框架:',
							content: 'ionic',
						}, {
							title: '工作内容:',
							content: '负责前端开发架构和开发。',
						}, {
							title: '技术:',
							content: '使用微信支付',
						}],
					}, {
						name: '微信商城（关联进销存）',
						describe: '该微信商城关联了神记进销存用的库存信息，此时的神记进销存就相当于微信商城的后台管理系统，有订单会实时同步至神记进销存的订单中。',
						list: [{
							title: '框架:',
							content: 'ionic',
						}, {
							title: '工作内容:',
							content: '负责前端开发架构和开发。',
						}, {
							title: '技术:',
							content: '使用微信支付',
						}],
						frame: '使用ionic框架开发的单页面应用，使用MVC设计模型.',
						advantage: '也因为是单页面应用，所以页面内的跳转和数据交互较快。',
						shortcoming: '因为是单页面应用，所以打开速度不是很快。',
						time: '',
					}, {
						name: '易企记（神記进销存的扩展功能）',
						describe: '企业的内部财务管理系统，通过权限管理老板、财务和员工功能，记录并统计公司的收入与支出，方便员工的报销，实时查看报销进度',
						list: [{
							title: '框架:',
							content: 'angular1.x',
						}],
						time: '',
					}, {
						name: '神记进销存官网',
						describe: '神记进销存官网是神记进销存官方展示性的网站，一些介绍性的页面，登录与注册页面。 登录后跳转至神记进销存APP页面。',
						list: [{
							title: '框架:',
							content: '没有使用框架',
						}],
					}, {
						name: '神记进销存',
						describe: '神記进销存是企业内管理与企业间协同的一体化商业管理平台。针对中小微企业与批发商行业，以店仓分离与网上订货为切入的进销存管理SaaS系统，致力于打通“新零售”的线上线下一体化管理。',
						list: [{
							title: '框架:',
							content: 'angular1.x',
						}],
					}]
				}]
			}
		},
		methods: {
			viewSj() {
				window.open('https://github.com/co8bit/sjERP')
			}
		}
	}
</script>

<style lang="scss" type="text/css">
	@import "./vitae";
</style>