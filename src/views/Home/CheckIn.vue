<!--
 * @Description: In User Settings Edit
 * @Author: Bell
 * @Date: 2019-09-03 14:06:27
 * @LastEditTime: 2019-09-03 15:27:16
 * @LastEditors: Please set LastEditors
 -->
<template>
	<div class="check-in">
		<el-form label-width="" :model="formData">
			<el-form-item label="房间名">
				<el-input v-model="formData.roomName" placeholder="房间名"></el-input>
			</el-form-item>
			<el-form-item label="入住人">
				<el-input v-model="formData.userName" placeholder="姓名"></el-input>
				<el-input v-model="formData.userPhone" placeholder="手机号"></el-input>
			</el-form-item>
			<el-form-item label="授权期限">
				<el-date-picker
					v-model="date"
					type="datetimerange"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
				></el-date-picker>
			</el-form-item>
			<el-form-item label="开门方式"></el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'CheckIn',
		data() {
			return {
				formData: {
					roomName: '',
					username: '',
					userPhone: ''
				},
				date: {}
			};
		},
		methods: {}
	};
</script>
