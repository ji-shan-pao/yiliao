<template>
	<div class="footer">
		<table width="100%">
			<tr>
				<td width="33%" align="center">
					<router-link to='/home' tag="a">
						<div class="iconfont icon-shouye shouye"></div>
						<div class="hui-footer-text" style="width:50px">首页</div>
					</router-link>
				</td>
				<td width="34%" align="center">
					<router-link to='/find' tag="a">
						<div class="iconfont icon-u138 faxian" style="font-size: 22px;"></div>
						<div class="hui-footer-text" style="width:50px">发现</div>
					</router-link>
				</td>
				<td width="33%" align="center">
					<router-link to='/user' tag="a">
						<div class="iconfont icon-xiazai4 wode"></div>
						<div class="hui-footer-text" style="width:50px">我的</div>
					</router-link>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
	// 引入iconfont
	import '../assets/iconfont/iconfont.css'
	export default {
		name: 'Footer',
		props: {

		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.footer {
		width: 100%;
		height: 44px;
		background: #FCFCFC;
		padding: 5px 0px;
		bottom: 0px;
		left: 0px;
		position: fixed;
		overflow: hidden;
		z-index: 10;
		box-shadow: 1px -1px 3px #D1D1D1;
		display: flex;
	}

	.footer a {
		display: block;
		/*width:20%;*/
	}
	.footer a:hover{
		color: orange;
	}

	.iconfont {
		font-family: "hui-font";
		text-align: center;
		height: 26px;
		line-height: 26px;
	}

	.hui-footer-text {
		text-align: center;
		font-size: 13px;
		height: 18px;
		line-height: 18px;
		padding-top: 2px;
	}

	.hui-footer-active * {
		color: #3388FF;
	}

	.hui-fooer-line {
		height: 60px;
	}

	#footer-logo {
		position: fixed;
		z-index: 11;
		left: 50%;
		bottom: 5px;
		height: 60px;
		width: 60px;
		border-radius: 60px;
		background: #3388FF;
		text-align: center;
		transform: translateX(-50%);
		line-height: 60px;
		color: #FFF;
		font-size: 20px;
		border: 3px solid #FFF;
	}

	#footer-logo img {
		width: 100%;
	}
	.shouye{
		font-size: 23px;
	}
	.faxian{
		font-size: 20px;
	}
	.wode{
		font-size: 20px;
	}
</style>
