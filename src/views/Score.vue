<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>请假单</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<el-table :data="leaves" style="width: 100%">
			<el-table-column type="index" width="50"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="partment" label="部门"></el-table-column>
			<el-table-column label="时间">
				<template slot-scope="scope">
					{{timeFrmate(scope.row.start)}} 到 {{timeFrmate(scope.row.end)}}
				</template>
			</el-table-column>
			
			<el-table-column prop="leave_desc" label="事由"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="open">同意</el-button>
					<el-button size="mini" type="danger" @click="dialogVisible=true;">驳回</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[10, 20, 30, 40]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>

		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
			<span></span>
			<span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>

	</el-card>
</template>

<script>
	import axios from 'axios';
	import qs from 'qs';
	export default {
		data() {
			return {
				dialogVisible: false,
				size: 10,
				total: 0,
				page: 1,
				time:0,
				
				leaves: []
			};
		},
		methods: {
			timeFrmate(timestamp) {
				let time = new Date(timestamp * 1000);
				let y = time.getFullYear();
				let M = time.getMonth() + 1;
				let d = time.getDate();
				let h = time.getHours();
				let m = time.getMinutes();
				let s = time.getSeconds();
				h = h < 10 ? ('0' + h) : h;
				m = m < 10 ? ('0' + h) : m;
				s = s < 10 ? ('0' + h) : s;
				return y + '-' + M + '-' + d + ' ' + h + ':' + m + ":" + s
			},
			handleSizeChange(s) {
				this.size = s;
				this.page = 1;
				this.getLeaveList(1);

			},
			handleCurrentChange(p) {
				this.page = p;
				this.getLeaveList(p);
			},
			getLeaveList(page) {
				const url = "http://192.168.255.30:8888/index.php/Index/Index/getLeaveList";
				axios.post(url, qs.stringify({
					page: page,
					size: this.size
				})).then(res => {
					this.leaves = res.data.list;
					this.total = res.data.total;
				}).catch(err => {
					
				});

			},
			created() {
				this.getLeaveList(1);
			},
			open() {
				this.$confirm('是否同意请假', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					
					this.$message({
						type: 'success',
						message: '请假成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '请假已取消'
					});
				});
			}
		}

	}
</script>

<style>
	.el-pagination {
		margin-top: 20px;
		text-align: center;
	}
	
</style>