<template>
	<el-container id="app">
  <el-aside width="220px">
  	<admin-aside></admin-aside>
  </el-aside>
  <el-container>
    <el-header>
    	<admin-header></admin-header>
    	<admin-tabs></admin-tabs>
    </el-header>
    <el-main>
    	<router-view />
    </el-main>
    <el-footer>©版权声明</el-footer>
  </el-container>
</el-container>


</template>

<script>
	import AdminAside from "@/components/Aside.vue"
	import AdminHeader from "@/components/Header.vue"
	import AdminTabs from "@/components/Tabs.vue"
	export default {
		data(){
			return{};
		},
		methods:{},
		components:{
			AdminAside,
			AdminHeader,
			AdminTabs
		},
	
	};
</script>

<style>
	html,
	body,
	#app {
		margin: 0;
		height: 100%;
		width: 100%;
		background-color: #f2f2f2;
	}
	
	.el-header{
		background-color: #FFFFFF;
		height: 100px !important;
	}
	.el-header .el-row{
		margin-bottom: 0px;
	}
	.el-aside{
		background-color: #20222A;
	}
	
	.el-footer{
		background-color: #FFFFFF;
		line-height: 60px;
	}
</style>