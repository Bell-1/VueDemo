<template>
	<div class="huarong-road">
		<el-form ref="form" label-width="80px">
			<el-form-item label="棋盘大小">
				<el-input type="number" v-model="size" placeholder="3" maxlength="8" minlength="3" @change="changeSize"></el-input>
			</el-form-item>
		</el-form>
		<div class="btn-row">
			<button @click="init">{{gameStart ? '重置' : '开始'}}</button>
		</div>
		<div class="container">
			<div class="row" v-for="(row, rowIndex) in list">
				<div class="block" :class="{none: block === 0}" v-for="(block, bIndex) in row" @click="changeBlock(rowIndex,bIndex)">{{block > 0 ? block : ''}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HuarongRoad',
		data() {
			return {
				size: 3,
				list: [],
				gameStart: false,
			}
		},
		methods: {
			init() {
				let self = this,
					size = self.size,
					initArr = [],
					list = [];
				self.gameStart = true;
				let num = 1;
				for (let i = 0; i < size * size; i++) {
					initArr.push(i);
				}
				for (let row = 0; row < size; row++) {
					for (let col = 0; col < size; col++) {
						let tempNum = Math.floor(Math.random() * initArr.length);
						if (!list[row]) {
							list[row] = [];
						}
						list[row][col] = initArr[tempNum];
						initArr.splice(tempNum, 1);
						self.list = list;
					}
				}

			},
			changeSize() {
				let self = this;
				if (self.size > 10) {
					self.size = 10
				}
				if (self.size < 2) {
					self.size = 2
				}
				self.init();
			},
			changeBlock(rIndex, bIndex) {
				let self = this,
					size = self.size,
					list = self.list,
					item = list[rIndex][bIndex],
					up, down, left, right;
				if (!self.gameStart) {
					return
				}
				if (rIndex > 0) { //说明有上块
					up = list[rIndex - 1][bIndex];
					if (up === 0) {
						list[rIndex - 1][bIndex] = item;
						list[rIndex][bIndex] = 0;
						this.$forceUpdate()
						self.judge()
						return
					}
				}
				if (rIndex < size - 1) {
					//说明有下块
					down = list[rIndex + 1][bIndex];
					if (down === 0) {
						list[rIndex + 1][bIndex] = item;
						list[rIndex][bIndex] = 0;
						this.$forceUpdate()
						self.judge()
						return
					}
				}
				if (bIndex > 0) {
					//说明有左块
					left = list[rIndex][bIndex - 1];
					if (left === 0) {
						list[rIndex][bIndex - 1] = item;
						list[rIndex][bIndex] = 0;
						this.$forceUpdate()
						self.judge()
						return
					}
				}
				if (bIndex < size - 1) {
					//说明有右块
					right = list[rIndex][bIndex + 1];
					if (right === 0) {
						list[rIndex][bIndex + 1] = item;
						list[rIndex][bIndex] = 0;
						this.$forceUpdate();
						self.judge()
						return
					}
				}

			},
			judge() {
				let self = this,
					list = self.list,
					lastRow = list[list.length - 1],
					lastItem = lastRow[lastRow.length - 1],
					pass = true,
					testList = [];
				if (lastItem === 0 && list[0][0] === 1) {
					//最后一个是空的才判断 且第一个是0裁判的
					for (let row of list) {
						testList = testList.concat(row);
					}
					for (let i = 0; i < testList.length - 2; i++) {
						if (i + 1 !== testList[i]) {
							return
						}
					}
					self.gameStart = false;
					setTimeout(function () {
						alert('挑战成功！');
					}, 100)
				}
			},
			testFun(a){
				return a*100
			}
		},
		watch: {},
		mounted: function () {
			let self = this;
		},
	}
</script>

<style lang="scss" type="text/css" scoped="scoped">
	.huarong-road {
		min-height: 100%;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		.input-row {
			display: flex;
			align-items: center;
			justify-content: center;
			.title {
				display: flex;
				align-items: center;
				justify-content: flex-end;
			}
			input {
				margin-left: 5px;
			}
		}
		.btn-row {
			margin: 50px;
			button {
				width: 150px;
				height: 50px;
				border: none;
				outline: none;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 20px;
				font-weight: 900;
				cursor: pointer;
				border-radius: 25px;
				box-shadow: 1px 2px 10px #42B983;
				background: #42B983;
				color: white;
			}
		}
		.container {
			/*width: 400px;
			height: 400px;*/
			background: #FAEBD7;
			border-top: 1px solid #42B983;
			border-left: 1px solid #42B983;
			.row {
				display: flex;
				align-items: center;
				justify-content: center;
				.block {
					width: 100px;
					height: 100px;
					background: aliceblue;
					border-right: 1px solid #42B983;
					border-bottom: 1px solid #42B983;
					transition: all 0.1s;
					display: flex;
					align-items: center;
					justify-content: center;
					font-family: '幼圆';
					font-size: 30px;
					font-weight: 900;
					/*box-shadow: 0 0 3px rgba(0,0,0,0.5) inset;*/
					&:not(.none) {
						background: #FAEBD7;
					}
				}
			}
		}
	}
</style>