<template>
	<div class="de-cell">
		<header class="hui-header">
			<div class="back iconfont icon-zuojiantou"   @click="$router.go(-1)"></div>
			<h1>{{des}}</h1>
			<router-link to='/home' tag="a">
				<div style="width: 44px;height: 44px;line-height: 44px;flex-shrink: 0;">
					<span class="iconfont icon-shouye" style="color:#fff;font-size:22px;"></span>
				</div>
			</router-link>
		</header>
	</div>
</template>

<script>
	import '../../assets/iconfont/iconfont.css'
	export default {
		name: 'de-cell',
		data(){
			return{
				des:this.msg
			}
		},
		props:['msg'],
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
.hui-header{display:flex; width:100%; height:44px; text-align:center; top:0px; left:0px; position:fixed; z-index:19; background:#3388FF;}
.hui-header h1{font-size:18px; height:44px; line-height:44px; overflow:hidden; width:100%; padding:0px 38px 0px 38px; text-align:center; font-weight:400; white-space:nowrap; text-overflow:ellipsis; color:#FFF;}
.hui-header + .hui-wrap{padding-top:44px;}
.back{width:44px; height:44px; line-height:44px; text-align:center; flex-shrink:0;}
.back:before{font-size:18px; color:#FFFFFF;}
</style>
