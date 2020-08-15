<template>
	<div class="detail2">
		<Header msg='新闻详情'></Header>
		<div class="report_xq_k">
			<div class="xq_bt">
				<h1>{{detail2.title}}</h1>
				<p class="date">{{detail2.time}}</p>
			</div>
			<div class="text">
				<p>{{detail2.des1}}</p>
				<img :src="detail2.image1" alt="">
				<p>{{detail2.des2}}</p>
				<img :src="detail2.image2" alt="">
				<p>{{detail2.des3}}</p>
			</div>
		</div>
		<div class="mianzesm">
			<h2>免责声明</h2>
			<p> 用户在本平台发表的观点仅代表个人观点，不代表平台任何观点，本平台不承担任何法律连带责任：
				本平台发表的信息均为传递、参考之用，不构成投资，实际应用等行为建议。如有侵权，我们将立即整改或者删除相应内容。
				<br>
				联系邮箱puange@outlook.com</p>
		</div>
	</div>
</template>

<script>
	import Header from '../components/cell/de-cell.vue'
	export default {
		
		name: 'detail2',
		data(){
			return{
				detail2:[],
			}
		},
		props: {
			data: {
				type: Array,
				default:function(){
					return [];
				}
			}
		},
		components: {Header},
		mounted() {
			let id=this.$route.params.id;
			let coll=this.$route.query.collection;
			this.$axios({
				url:`/api/goods/${coll}/${id}`
			}).then(res=>{
				this.detail2=res.data.data;
			})
		},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.report_xq_k {
		padding: .8rem 2%;
		background: #fff;
	}

	.report_xq_k>h1 {
		font-size: .28rem;

	}

	.report_xq_k .report_toux {
		padding: .1rem 0;
	}

	.report_xq_k .report_toux img {
		width: .6rem;
		height: .6rem;
		border: #BEBEBE solid 1px;
		border-radius: 50%;
		float: left;
		margin-right: .12rem;
	}

	.report_xq_k .report_toux p {
		font-size: .24rem;
		line-height: .28rem;
	}

	.report_xq_k .report_toux span {
		font-size: .2rem;
		color: #828282;
	}

	.report_xq_k .text {
		padding: .2rem 0;
	}

	.report_xq_k .text {
		text-align: justify;
		line-height: .5rem;
	}

	.report_xq_k .text img {
		text-align: center;
		max-width: 100%;
	}

	.mianzesm {
		border-top: solid 2px #f3f3f3;
		color: #b4b4b4;
		background: #fff;
		line-height: .4rem;
		padding: .2rem;
	}
</style>
