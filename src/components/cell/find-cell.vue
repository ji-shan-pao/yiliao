<template>
	<div class="find-cell">
		<router-link :to="{name:'detail2',params:{id:to.params.id},query:{collection:to.query.collection}}" tag='li'>
			<div class="bt">
					<img :src="data.touimg">
					<p>{{this.data.name}}<span>{{data.solo}}</span></p>
			</div>
			<div class="text">
					<p>{{data.des}}<span>全部>></span>
					</p>
					<div class="img">
						<img :src="data.ltimg1" alt="">
						<img :src="data.ltimg2" alt="">
						<img :src="data.ltimg3" alt="">
					</div>
			</div>
			<div class="tb_img">
				<div>
					<img src="/images/findcell/zhan.png" alt="">
					<span>分享</span>
				</div>
				<div>
					<img src="/images/findcell/zhan1.png" alt="">
					<span>评论</span>
				</div>
				<div>
					<img src="/images/findcell/zhan2.png" alt="">
					<span>{{data.fab}}</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'find-cell',
		data() {
			return {

			}
		},
		props: {
			data: {
				type:Object,
			},
			to:{
				type:Object,
			}

		},
		components: {},
		mounted() {
			
		},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.find-cell {
		background: #fff;
		padding: .2rem 0;
	}

	.find-cell li {
		border-bottom: solid 1px #f3f3f3;
		padding: 2%;
	}

	.find-cell .bt a {
		display: flex;
	}

	.find-cell .bt img {
		display: inline-block;
		width: .6rem;
		height: .6rem;
		overflow: hidden;
		border-radius: 50%;
	}

	.find-cell .bt p {
		display: inline-block;
		color: #394038;
		font-size: .28rem;
		line-height: .32rem;
		margin-left: .2rem;
	}

	.find-cell .bt p span {
		font-size: .2rem;
		color: #828282;
		display: block;

	}

	.find-cell .text {
		padding: .1rem 0;
	}

	.find-cell .text a {
		color: #394038;
	}


	.find-cell .text p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		text-align: justify;
	}

	.find-cell .text p span {
		color: #24c516;
	}

	.find-cell .text .img {
		padding: .1rem 0;
	}

	.find-cell .text .img img {
		width: 2rem;
		height:78px ;
		float: left;
	}

	.find-cell .tb_img {
		display: flex;
		padding: 0.1rem .4rem 0;
		justify-content: space-between;
	}

	.find-cell .tb_img>div {
		width: 1.5rem;
		height: 0.5rem;
	}

	.find-cell .tb_img>div span {
		display: block;
		width: 0.5rem;
		height: 0.5rem;
		float: left;
		line-height: 0.5rem;
		text-align: center;
		margin-right: 0.3rem;

	}

	.find-cell .tb_img>div img {
		width: .5rem;
		display: block;
		float: left;
	}
</style>
