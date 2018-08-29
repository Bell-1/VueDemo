<template>
	<div class="main">
		<div class="header">
			<div class="head-img" @click="toTest">

			</div>
			<div class="name">
				<!--{{userName}}-->
			</div>
		</div>
		<div class="block active introduction">
			<div class="info"></div>
		</div>
		<div class="block skill" :class="{active: viewCount > 1}">

		</div>
		<div class="block c" :class="{active: viewCount > 2}">

		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'Main',
		data() {
			return {
				viewCount: 1,
				canScroll: true,
			}
		},
		methods: {
			created: function() {},
			mounted: function() {
				window.addEventListener('mousewheel', this.scrollChange);
			},
			scrollChange: function(e) {
				let self = this;
				if(self.canScroll) {
					if(e.wheelDelta > 0) {
						//滚轮向上
						self.canScroll = false;
						if(self.viewCount < 3) {
							++self.viewCount
						}
					}
					if(e.wheelDelta < 0) {
						//滚轮向下
						self.canScroll = false;
						if(self.viewCount > 1) {
							--self.viewCount
						}
					}
					setTimeout(function() {
						self.canScroll = true;
					}, 1200)
				}
			},
			toTest: function() {
				let self = this;
				self.$router.push("HuarongRoad")
			}
		},
		computed: {
//			...mapState({
//				count: state => state.Loading.count,
//				userName: state => state.userStore.userName
//			})
		}
	}
</script>

<style lang="scss" type="text/css" scoped="">
	.main {
		position: relative;
		.header {
			position: absolute;
			top: 25px;
			left: 25px;
			padding: 15px 25px;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			background: rgba(255, 255, 255, 0.1);
			box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
			border-radius: 0 40px;
			z-index: 100;
			.head-img {
				width: 50px;
				height: 50px;
				border-radius: 25px;
				background: red;
			}
			.name {
				color: black;
				font-size: 18px;
				font-weight: 900;
				margin-left: 20px;
			}
		}
		.block {
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			transition: all 1s;
			transform: rotateY(100vh);
			&.active {
				transform: rotateY(0);
			}
		}
		.introduction {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #42B983;
			.info {
				width: 500px;
				height: 250px;
				padding: 15px;
				border-radius: 10px;
				transition: all 0.2s;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
				&:hover {
					box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
				}
			}
		}
		.skill {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #2C3E50;
		}
		.c {
			background: antiquewhite;
		}
	}
</style>