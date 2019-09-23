<!--
 * @Description: 首页
 * @Author: Bell
 * @Date: 2019-07-24 10:53:55
 * @LastEditTime: 2019-09-06 10:02:32
 * @LastEditors: Please set LastEditors
 -->
<template>
	<div class="Home">
		<div class="city-and-search card">
			<el-cascader
				class="city-box"
				v-model="value"
				:options="citys"
				:filterable="true"
				@change="handleChangeAddress"
				placeholder="请选择地址"
			></el-cascader>
			<el-radio-group class="condition" v-model="condition">
				<el-radio :label="0">全部</el-radio>
				<el-radio :label="1">空房</el-radio>
				<el-radio :label="2">入住</el-radio>
				<el-radio :label="3">设备离线</el-radio>
				<el-radio :label="4">无设备</el-radio>
				<el-radio :label="5">授权7天内到期</el-radio>
			</el-radio-group>
		</div>
		<div class="container">
			<div class="fix-box">
				<el-tabs class="tabs" type="border-card" v-model="activeName" @tab-click="handleChangeTab">
					<el-tab-pane label="入住授权" name="入住授权">
						<check-in></check-in>
					</el-tab-pane>
					<el-tab-pane label="保捷授权" name="保捷授权"></el-tab-pane>
					<el-tab-pane label="新装授权" name="新装授权"></el-tab-pane>
					<el-tab-pane label="维修授权" name="维修授权"></el-tab-pane>
				</el-tabs>
			</div>
			<div class="room-source">
				<div class="block card" v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index">
					<div class="address">
						<el-tag type="info">4栋 4单元</el-tag>
					</div>
					<div class="rooms">
						<div class="room">
							<el-tag class="name">501</el-tag>
							<el-checkbox-group class="doors" v-model="checkList">
								<el-checkbox label="复选框 A" border></el-checkbox>
								<el-checkbox label="复选框 B" border></el-checkbox>
								<el-checkbox label="复选框 C" border></el-checkbox>
								<el-checkbox label="复选框 C" border></el-checkbox>
							</el-checkbox-group>
						</div>
						<div class="room">
							<el-tag class="name">501</el-tag>
							<el-checkbox-group class="doors" v-model="checkList">
								<el-checkbox label="复选框 A" border></el-checkbox>
								<el-checkbox label="复选框 B" border></el-checkbox>
								<el-checkbox label="复选框 C" border></el-checkbox>
							</el-checkbox-group>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CheckIn from "./CheckIn"

	export default {
		name: "Home",
		components: {
			CheckIn,
		},
		data() {
			return {
				value: ["浙江", "杭州", "西湖"],
				citys: [
					{
						value: "浙江",
						label: "浙江",
						children: [
							{
								value: "杭州",
								label: "杭州",
								children: [
									{
										value: "西湖",
										label: "西湖"
									}
								]
							}
						]
					}
				],
				checkList: [],
				condition: 0,
				activeName: '入住授权',
			};
		},
		mounted(){
			console.log(this.$http)
		},
		methods: {
			handleChangeAddress() {

			},
			handleChangeTab() {

			}
		}
	};
</script>
