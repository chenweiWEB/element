<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>请假条</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="请假人">
				<el-input v-model="formInline.user" placeholder="请假人"></el-input>
			</el-form-item><br />
			<el-form-item label="部      门">
				<el-select v-model="formInline.region" placeholder="部门">
					<el-option label="web前端" value="a"></el-option>
					<el-option label="UI设计师" value="b"></el-option>
					<el-option label="网页设计师" value="c"></el-option>
					<el-option label="Ps美工" value="d"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>

			</el-form-item>
		</el-form>
		<!--请假原因-->
		<h1 class="leave-name">请假原因</h1>
		<el-input class='leaves' type="textarea" autosize placeholder="请输入请假原因"></el-input>

		<!--请假时间-->
		<div class="block">
			<span class="demonstration">请假时间开始 </span>
			<el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" align="right" :picker-options="pickerOptions1">
			</el-date-picker>
			<span class="demonstration" style="margin: 0px 5px 0 50px;">请假时间结束 </span>
			<el-date-picker v-model="value3" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
			</el-date-picker>
		</div>

		</el-form-item>
		<!--备注-->
		<h1 class="leave-name">备注</h1>
		<el-input class='leaves' type="textarea" autosize placeholder="请输入备注内容"></el-input>
		<!--紧急联系方式-->
		<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="联系电话" prop="age" :rules="[
      { required: true, message: '联系电话不能为空'},
      { type: 'number', message: '联系电话必须为数字值'}
    ]">
				<el-input class='tels' type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
				<el-button @click="resetForm('numberValidateForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					region: '',
					region1: '',
				},
				value: '',
				numberValidateForm: {
					age: ''
				},
				pickerOptions1: {
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				value1: '',
				value2: '',
				value3: ''
			};

		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
	.box-card {
		/*margin-left: 50px;*/
		padding: 0px 50px;
	}
	
	h1 {
		font-size: 16px;
		font-weight: normal;
		color: #666;
	}
	
	.leaves {
		min-width: 100px;
		max-width: 424px;
		display: block;
		margin-bottom: 20px;
	}
	
	.tel {
		min-width: 100px;
		max-width: 424px;
	}
	
	.tels {
		max-width: 324px;
	}
</style>