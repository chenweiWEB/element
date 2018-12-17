<template>
	<el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2" @change="handleChange">
	</el-cascader>
</template>

<script>
	export default{
		data(){
			return{
				options:[],
				selectedOptions2:[],
			}
		},
		methods: {
			handleChange(val) {
				console.log(val);
			}
		},
		created(){
			this.options=require("../assets/region.json")
		}
	}
</script>

<style>

</style>