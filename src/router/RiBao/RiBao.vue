<template>
	<div class="RiBao">
		<swiper :options="swiperOption" ref="mySwiper" class="news_swiper">
			<!-- slides -->
			<swiper-slide v-for="(item, index) in hotList">
				{{item.thumbnail}}
				<img :src="img_before+item.thumbnail" alt="" />
			</swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>//
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
			<div class="swiper-scrollbar" slot="scrollbar"></div>
		</swiper>
		<div class="" v-for="item in newsList">
			{{item}}
		</div>
	</div>
</template>

<script>
	import http from "@/http.js"
	import { mapState, mapActions } from "vuex"

	export default {
		name: 'RiBap',
		data() {
			return {
				img_before: 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=',
				swiperOption: {
					// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					// swiper configs 所有的配置同swiper官方api配置
					autoplay: 3000,
					direction: 'horizontal',
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					prevButton: '.swiper-button-prev', //上一张
					nextButton: '.swiper-button-next', //下一张
					scrollbar: '.swiper-scrollbar', //滚动条
					mousewheelControl: true,
					observeParents: true,
					// 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
					debugger: true,
				}
			}
		},

		mounted() {
			this.getNewsList();
			this.getHotList();
			this.swiper.slideTo(0, 1000, false)
		},

		computed: {
			...mapState('ribaoStore', [
				'newsList',
				'hotList'
			]),
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},

		methods: {
			...mapActions('ribaoStore', [
				'getNewsList',
				'getHotList',
			])
		},
	}
</script>

<style lang="scss">
	@import "./RiBao";
</style>