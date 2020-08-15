<template>
	<div class="Input">
		<div class="hui-form-items">
			<div class="hui-form-items-title">{{label}}</div>
			<input :type="type" class="hui-input hui-input-clear" :value='value' @input="$emit('input',$event.target.value)">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Input',

		props: ['label', 'value', 'type'],
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.Input {
		background: #FFFFFF;
	}
	.hui-form-items{padding:15px 10px; border-bottom:1px solid #F3F4F5; position:relative; display:-webkit-flex; display:flex;}
	.hui-form-items-title{width:22%; line-height:22px; height:22px; flex-shrink:0;color: gray;font-size: 16px;}
	.hui-form-items .hui-input{width:100% !important;}
	.hui-form-items .hui-form-radios{width:75% !important; padding:0px !important;}
	.hui-form-items .hui-form-textarea{width:75% !important;}
	.hui-input{height:22px;font-size: 16px; line-height:22px; border:none; -webkit-appearance:none; -moz-appearance:none; appearance:none; border-radius:0; border:0; background:#FFF; width:100%; display:block; padding:0px;}
	#hui-input-clear{width:52px; height:52px; position:absolute; z-index:1; line-height:52px; text-align:center; right:0px; top:0px; color:#999999; background:#FFF;}
	
</style>
