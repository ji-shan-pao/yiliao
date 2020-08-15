<template>
	<div class="Header">
		<table cellspacing="0" cellpadding="0" width="100%" class="underline01">
			<tbody>
				<tr>
					<td width="45" align="right"><img src="/images/header/logo_60.jpg" width="30" style="margin: 5px;"></td>
					<td>
						<div id="hui-header-sreach"><input type="search" id="searchKey" placeholder="搜索：地区 / 科室 / 医生">
						</div>
					</td>
					<td width="50" align="center">
						<div style="padding-bottom: 5px;"><span class="iconfont icon-sousuo" style="font-size: 24px; margin-left: 3px; color: rgb(253, 149, 3);"></span></div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import '../assets/iconfont/iconfont.css'
	export default {
		name: 'Header',
		props: {

		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.underline01 {
		border-bottom: 1px solid #E4E3E6;
		background: #fff;
	}

	#hui-header-sreach {
		margin-left: 10px;
	}

	#hui-header-sreach input {
		width: 100%;
		height: 32px;
		line-height: 32px;
		padding-left: 10px;
		font-size: 15px;
		border-radius: 4px;
		background-color: #f6f6f6;
	}
	.Header{
		position:fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 9999;
	}
</style>
