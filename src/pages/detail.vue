<template>
	<div class="detail">
		<Header msg='咨询医生'></Header>
		<div class="hui-list">
			<div class="imgbox"><img :src="this.$store.state.detail.img" /></div>
		</div>
		<div class="cell">
			<span>姓名:</span>
			<span>{{this.$store.state.detail.name}}</span>
		</div>
		<div class="cell">
			<span>职位：</span>
			<span>{{this.$store.state.detail.grade}}</span>
		</div>
		<div class="cellone">
			<span class="shan1">擅长方向：</span>
			{{this.$store.state.detail.des}}
		</div>
		<div class="one">个人简介</div>
		<div class="des">{{this.$store.state.detail.jian}}</div>
	</div>
</template>

<script>
	import Header from '../components/cell/de-cell.vue'
	export default {
		name: '',
		props: {

		},
		data() {
			return {
				
			}
		},
		components: {
			Header
		},
		mounted() {
			let collname = this.$route.query.collection;
			let id = this.$route.params.id;
			this.$store.dispatch(this.$types.UPDATA_DETAIL,{collname,id})
		},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.hui-list {
		width: 6.4rem;
		height: 3.8rem;
		margin-bottom: 15px;
	}

	.imgbox {
		width: 6.4rem;
		height: 100%;
		margin: 0 auto;
		
	}

	.imgbox img {
		width: 100%;
		height: 100%;
		display: block;
	}

	.cell {
		width: 6.15rem;
		height: .6rem;
		background: ;
		padding-left: 15px;
		background: #fff;
		text-overflow: ellipsis;
	}

	.cellone {
		width: 6.15rem;
		height: .6rem;
		background: ;
		padding-left: 15px;
		background: #fff;
		padding-left: 15px;
		color: lightslategray;
		line-height: 20px;
		padding-bottom: 8px;
	}

	.cell span {
		font-size: 14px;
		color: lightslategray;
		line-height: .6rem;

	}

	.one {
		margin-top: 10px;
		width: 6.1rem;
		height: .6rem;
		background: #fff;
		line-height: .6rem;
		font-size: 16px;
		color:#000FFF;
		padding-left: 15px;
	}

	.des {
		width:100%;
		background: #fff;
		font-size: 14px;
		line-height: 25px;
		text-indent: 20px;
		padding: 10px;
		box-sizing: border-box;
	}
</style>
