<template>
	<el-tabs v-model="activeName" @tab-click="handleClick">
		<el-tab-pane :label="item.label" :name="item.path" v-for="(item,index) in tabs" closable></el-tab-pane>

	</el-tabs>

</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
					label: '首页',
					path:'/home'
				}, {
					label: '布局',
					path:'/layout'
				}, {
					label: '容器',
					path:'/container'
				}, {
					label: '按钮',
					path:'/button'
				}],
				activeName: 'second'
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	};
</script>

<style>

</style>