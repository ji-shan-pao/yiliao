<template>
	<div class="user">
		<Header msg='个人中心'></Header>
		<div class="hui-list">
			<div class="imgbox">
				<img :src="user.data.icon" />
			</div>
			<div class="reg"><span>{{user.data.nikename}}</span></div>
			<div class="zhu" @click="logout">注销用户</div>
		</div>
		<div class="hui-wrap underline01" style="background-color:#fff;padding-bottom:5px;margin-bottom:20px">
			<table width="100%" style="margin-top:5px;">
				<tr>
					<td width="33%" align="center" class="rightline01">
						<a href="javascript:;" id="nav-home" style="position: relative;">
							<div class="hui-footer-text" style="width:50px;">积分</div>
							<div class="dot_text" >{{user.data.fans}}</div>
						</a>
					</td>
					<td width="34%" align="center" class="rightline01">
						<a href="javascript:;" id="nav-my" style="position: relative;">
							<div class="hui-footer-text" style="width:50px">余额</div>
							<div class="dot_text" >{{user.data.follow}}</div>
						</a>
					</td>
					<td width="33%" align="center">
						<a href="javascript:;" id="nav-my" style="position: relative;">
							<div class="hui-footer-text" style="width:50px">关注</div>
							<div class="dot_text" >{{user.data.fans}}</div>
						</a>
					</td>
				</tr>
			</table>
		</div>
		<UserCell msg='我的医生'></UserCell>
		<UserCell msg='健康档案'></UserCell>
		<UserCell msg='家庭成员'></UserCell>
		<UserCell msg='积分查询'></UserCell>
		<UserCell msg='支付查询'></UserCell>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '../components/cell/de-cell.vue'
	import Footer from '../layouts/footer.vue'
	import UserCell from '../components/cell/user-cell.vue'
	import axios from 'axios'
	 import {mapState} from 'vuex'
	export default {
		name: 'user',
		beforeRouteEnter(to, from, next) {
			axios.get('/api/user')
				.then(res => {
						if (res.data.err === 0) {
							next(vm => {
								vm.$store.commit(vm.$types.UPDATA_USER, res.data)
							})
						} else {
							next('/login')
						}

					}

				)
		},
		props: {},
		computed:mapState(['user']),
		components: {
			Footer,
			Header,
			UserCell
		},
		mounted() {
		},
		updated() {},
		methods: {
			logout() {
				window.localStorage.removeItem('user');
				 this.$store.commit(this.$types.UPDATA_USER,{err:1,msg:'登录失败','token':'',data:{}})
				this.$router.push('/login');
			}
		}
	}
</script>

<style scoped>
	.underline01 {
		border-bottom: 1px solid #E4E3E6;
	}

	.hui-footer-text {
		text-align: center;
		font-size: 13px;
		height: 18px;
		line-height: 18px;
		padding-top: 2px;
		color: #000;
	}

	.hui-list {
		width: 100%;
		height: 2.85rem;
		background: #64BEE0;
		padding: 30px 0;
		position: relative;
	}

	.imgbox {
		width: 100%;
		text-align: center;
	}

	.imgbox img {
		height: 2.5rem;
		width: 2.5rem;
		margin: 0px;
		border-radius: 50%;
	}

	.reg {
		width: 100%;
		text-align: center;
		height: 1rem;
		font-size: 18px;
		line-height: 24px;
		color: #fff;

	}

	.zhu {
		width: 50px;
		height: 25px;
		position: absolute;
		top: 9px;
		right: 10px;
		font-size: 12px;
		color: #fff;
	}

	.zhu:hover {
		color: #002B36;
	}
</style>
