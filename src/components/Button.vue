<template>
	<div class="BtnCell">
		<button type="button" class="hui-button hui-button-large hui-primary" @click="$emit('click')">{{des}}</button>
	</div>
</template>

<script>
	export default {
		name: 'BtnCell',
		data() {
			return {
				des: this.msg
			}
		},
		props: ['msg'],
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.BtnCell {
		padding: 15px 8px;
	}

	.hui-button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border-radius: 3px;
		border: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: block;
		font-size: 15px;
		height: 42px;
		line-height: 42px;
		outline: 0;
		overflow: hidden;
		position: relative;
		text-align: center;
		color: #656B79;
		background-color: #F6F8F9;
		box-shadow: 0 0 1px #B8BBBF;
		padding: 0px 16px;
	}

	.hui-button * {
		color: inherit;
	}

	.hui-button:active {
		background: #C8C8C8;
	}

	.hui-button-large {
		width: 100%;
	}

	.hui-primary {
		background: #3388FF !important;
		color: #FFFFFF !important;
	}

	.hui-primary:active {
		background: #0066CC !important;
	}
</style>
