<template>
	<div class="login">
		<Header msg='用户登陆'></Header>
		<div class="hui-wrap">
			<div class="hui-list">
				<div class="imgbox">
					<img src="/images/temp01.jpg" />
				</div>
				<router-link to='/reg' class="reg" tag="div">
					<span>去注册</span>
				</router-link>
			</div>
			<InputCell type='text' label='用户名' v-model='username'></InputCell>
			<InputCell type='password' label='密码' v-model='password'></InputCell>
			<BtnCell msg='确认登陆' @click='login'></BtnCell>
			<div class="erro">{{erroMsg}}</div>
		</div>
	</div>
</template>

<script>
	import Header from '../components/cell/de-cell.vue'
	import InputCell from '../components/Input.vue'
	import BtnCell from '../components/Button.vue'
	export default {
		name: 'login',
		props: {},
		data() {
			return {
				username: '',
				password: '',
				erroMsg: ''
			}
		},
		components: {
			Header,
			InputCell,
			BtnCell
		},
		mounted() {},
		updated() {},
		methods: {
			login() {
				this.$axios({
					url: '/api/login',
					data: {
						username: this.username,
						password: this.password
					},
					method: 'post'
				}).then(res => {
					if (res.data.err === 0) {
						// 1.种token
						window.localStorage.setItem('user', JSON.stringify(res.data))
						this.$store.commit(this.$types.UPDATA_USER,res.data)
						// 2.跳转到之前,没有之前跳转到user
						if (this.$route.query.p) {
							this.$router.push(this.$route.query.p)
						} else {
							this.$router.push('/user')
						}
					} else {
						this.errorMess = res.data.msg
					}
				})
			}
		}
	}
</script>

<style scoped>
	.hui-list {
		width: 100%;
		height: 2.85rem;
		background: #6BACFF;
		padding: 30px 0;
		margin-bottom: 15px;

	}

	.imgbox {
		width: 100%;
		text-align: center;
	}

	.imgbox img {
		width: 2rem;
		margin: 0px;
		border-radius: 50%;
	}
	.reg {
		width: 100%;
		text-align: center;
		height: 1rem;
		font-size: 22px;
		line-height: 1rem;
		color: #fff;
		font-weight: bolder;
	}

	.reg:hover {
		color: #00193A;
	}

	.erro {
		width: 100%;
		height: 2rem;
		font-size: 25px;
		text-align: center;
		line-height: 2rem;
		color: red;
		border-radius: 30px;
	}
</style>
