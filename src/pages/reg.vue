<template>
	<div class="login">
		<Header msg='用户登陆'></Header>
		<div class="hui-wrap">
			<div class="hui-list">
				<div class="imgbox" >
					<div class="tou" @click="upload">
						<img src="../../public/images/user/haoh_ios_x5.png" />
					</div>
					 <input type="file"  id="icon" style="display: none;">
				</div>
				
				<div class="reg"><span>点击图片上传头像</span></div>
			</div>
			<InputCell type='text' label='用户名' v-model='username'></InputCell>
			<InputCell type='password' label='密码' v-model='password'></InputCell>
			<InputCell type='text' label='昵称' v-model='nikename'></InputCell>
			<BtnCell msg='确认注册' @click='reg'></BtnCell>
			<div class="erro">{{errmsg}}</div>
		</div>
	</div>
</template>

<script>
	import Header from '../components/cell/de-cell.vue'
	import InputCell from '../components/Input.vue'
	import BtnCell from '../components/Button.vue'
	import { Uploader } from 'vant';
	export default {
		name: 'reg',
		props: {

		},
		data() {
			return {
				username: '',
				password: '',
				nikename: '',
				errmsg:'',
				fileList: [],
			}
		},
		components: {
			Header,
			InputCell,
			BtnCell
		},
		mounted() {
			
		},
		updated() {},
		methods: {
			reg() {
				let formData = new FormData();
				formData.append('username', this.username);
				formData.append('password', this.password);
				formData.append('nikename', this.nikename);
				let iconInputFile = document.getElementById('icon');
				formData.append('icon',iconInputFile.files[0]);//取出input file的文件体

				this.$axios({
					url: '/api/reg',
					method: 'post',
					data: formData
				}).then(
					res => {
						if (res.data.err === 0) {
							this.$router.push('/login')
						} else {
							this.errmsg = res.data.msg
						}
					}
				)
			},
			upload(){
			      let iconInputFile = document.getElementById('icon');
			      iconInputFile.click();//模拟input File 点击
			    }
		},
		 
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
		width: 2.5rem;
		margin: 0px;
		background:#fff;
		border: 1px dashed black;
	}

	.reg {
		width: 100%;
		text-align: center;
		height: 20px;
		font-size: 16px;
		line-height:30px;
		color:#fff;
	}

	.erro {
		width: 100%;
		height: 1.5rem;
		font-size: 25px;
		text-align: center;
		line-height: 1.5rem;
		color: red;
		border-radius: 30px;
		margin-top: 15px;
	}
</style>
