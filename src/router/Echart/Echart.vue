<template>
	<div class="Echart">
		<div class="chart" id="barChart"></div>
		<div class="chart" id="lineChart"></div>
	</div>
</template>

<script>
	import echarts from "echarts"

	export default {
		name: 'Echart',
		data() {
			return {
				barChart: null,
				lineChart: null,
				timeLine: [],
				sales: [],
				barTimer: null,
			}
		},
		mounted() {
			this.initBar('bar', 'barChart');
			this.initBar('line', 'lineChart');
			this.updateBarChart();
		},
		computed: {

		},
		methods: {
			initBar(type, dom) {
				// 基于准备好的dom，初始化echarts实例
				this[dom] = echarts.init(document.getElementById(dom));
				// 绘制图表
				this[dom].setOption({
					title: {
						text: type
					},
					tooltip: {
						show: true,
					},
					toolbox: {
						// y: 'bottom',
						feature: {
							magicType: {
								type: ['stack', 'tiled']
							},
							dataView: {},
							saveAsImage: {
								pixelRatio: 2
							}
						}
					},
					xAxis: {
						data: this.timeLine,
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: type,
						data: this.sales,
						itemStyle: {
							normal: {
								color: 'rgb(255, 70, 131)'
							}
						},
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgb(255, 158, 68)'
								}, {
									offset: 1,
									color: 'rgb(255, 70, 131)'
								}])
							}
						},
					}]
				});
				this.barTimer = null;
			},

			updateBarChart() {
				var time,
					data;
				this.timeLine = [];
				this.sales = [];
				for (let i = 0; i < 300; i++) {
					time = new Date().getTime();
					data = parseInt(Math.random() * 1500 + 600);
					this.timeLine.push(time);
					this.sales.push(data);
				}
				this['barChart'].setOption({
					xAxis: {
						data: this.timeLine.splice(0, 50),
					},
					series: [{
						data: this.sales.splice(0, 50),
					}]
				});
				this['lineChart'].setOption({
					xAxis: {
						data: this.timeLine,
					},
					series: [{
						data: this.sales,
					}]
				});
				this.barTimer = setTimeout(() => {
					this.updateBarChart();
				}, 5000)
			}
		},
	}
</script>

<style lang="scss" type="text/css">
	@import "./Echart"
</style>