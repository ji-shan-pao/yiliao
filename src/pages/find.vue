<template>
	<div class="Find">
		<Header msg='疾控发现'></Header>
		<Cell v-for='item of this.$store.state.find' :key='item.id' :data='item' :to="{name:'detail',params:{id:item._id},query:{collection:'find'}}"></Cell>
	</div>
</template>

<script>
	import Header from '../components/cell/de-cell.vue'
	import Cell from '../components/cell/find-cell.vue'
	export default {
		name: 'Find',
		props: {

		},
		components: {
			Header,
			Cell
		},
		mounted() {
			this.$store.dispatch(this.$types.UPDATA_FIND)
			
		},
		updated() {},
		methods: {}
	}
</script>

<style>

</style>
