<template>
	
	<el-input-number v-model="num1" :disabled="true"  @change="handleChange" :min="1" :max="10" label="描述文字" ></el-input-number>
</template>

<script>
	
	export default{
		data(){
			return{
				num1:1
			}
		},
		methods:{
			handleChange(val){
				console.log(val)
			}
		}
	}
</script>

<style>
</style>