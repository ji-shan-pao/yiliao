<template>
	<div class="user-cell">
		<li>
			<div class="hui-list-icons">
				<img src="/images/user/nav_icon03.png" />
			</div>
			<div class="hui-list-text">
				{{des}}
			</div>
		</li>
	</div>
</template>

<script>
	export default {
		name: 'user-cell',
		data(){
			return{
				des:this.msg,
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
	.user-cell {
		padding: 0px;
		border: 1px solid #E4E3E6;
		border-left: 0;
		border-right: 0;
		background: #FFFFFF;
	}

	.user-cell li {
		position: relative;
		display: flex;
		width: 100%;
		overflow: hidden;
		height: 50px;
	}

	.user-cell li>a,
	.user-cell>a {
		display: flex;
		width: 100%;
		height: 50px;
		overflow: hidden;
	}

	.user-cell li:active,
	.user-cell>a:active {
		background-color: #ECECEC;
	}

	.hui-list-text {
		line-height: 49px;
		height: 49px;
		width: 100%;
		margin: 0px 12px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: flex;
		justify-content: space-between;
	}

	.hui-list-text-content {
		width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.hui-list-icons {
		margin: 13px 0px;
		width: 40px;
		text-align: center;
		flex-shrink: 0;
		font-size: 25px;
		text-align: center;
		line-height: 22px;
		color: #3388FF;
	}

	.hui-list-icons img {
		width: 22px;
		margin-left: 12px;
	}

</style>
