<template>
	<el-menu default-active="0" class="el-menu-vertical-demo" @select='select' @open="open" @close="close" background-color="#20222A" text-color="#fff" active-text-color="#ffd04b">
				<el-submenu :index="i+''" v-for='(item,i) in nav'>
					<template slot="title">
						<i :class="item.icon"></i>
						<span v-text="item.title"></span>
					</template>
					<el-menu-item-group>
						<el-menu-item :index="sub.path" v-for='(sub,j) in nav[i].sub' v-text='sub.title'></el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
</template>

<script>
	export default{
		data() {
			return {
				nav:[{
					title: 'basic',
					icon:'el-icon-location',
					sub: [{
						title: 'layout布局',
						path: '/layout'
					}, {
						title: 'Container 容器',
						path: '/container'
					},{
						title: 'button 按钮',
						path: '/button'
					},{
						title: 'Tabs 切换',
						path: '/tabs'
					}]
				}, {
					title: 'form',
					icon:'el-icon-location',
					sub: [{
						title:'number 计数器',
						path:'/number'
					},{
						title:'select 下拉菜单',
						path:'/select'
					},{
						title:'cacsder 级联选择器',
						path:'/cacsder'
					},{
						title:'switch 开关',
						path:'/switch'
					},{
						title:'slider 滑块',
						path:'/slider'
					},{
						title:'timepicker 时间选择器',
						path:'/timepicker'
					}]
				}, {
					title: 'Data',
					icon:'el-icon-location',
					sub: [{
						title:'请假单',
						path:'/leave'
					},{
						title:'missing 请假条',
						path:'/missing'
					},{
						title:'待处理',
						path:'/leaves'
					}]
				}]
			};

		},
		methods: {
			open(key, keyPath) {
				console.log(key, keyPath);
			},
			close(key, keyPath) {
				console.log(key, keyPath);
			},
			select( index, indexPath){
				console.log(index);
				console.log(indexPath);
				this.$router.push(index);
			}
		},
	}
</script>

<style>
	
</style>