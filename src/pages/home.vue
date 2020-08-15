<template>
	<div class="home">
		<Header></Header>
		<Banner :data='this.$store.state.banner'></Banner>
		<Cell v-for='(item) of this.$store.state.home' :key='item._id' :data='item' :to="{name:'detail',params:{id:item._id},query:{collection:'home'}}"></Cell>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '../layouts/header.vue'
	import Footer from '../layouts/footer.vue'
	import Banner from '../components/banner/banner.vue'
	import Cell from '../components/cell/home-cell.vue'

	export default {
		name: 'home',
		props: {

		},
		components: {
			Header,
			Footer,
			Banner,
			Cell
		},
		mounted() {
			// home请求数据
			this.$store.dispatch(this.$types.UPDATA_HOME);
			// banner
			this.$store.dispatch(this.$types.UPDATA_BANNER);
		},
		updated() {},
		methods: {
			
		}
	}
</script>

<style>

</style>
