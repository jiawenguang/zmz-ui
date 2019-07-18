<template>
	<header class="zmz-header" v-if="type" :class="{ 'zmz-header-default': defaultStyle }"><slot></slot></header>
	<div class="zmz-header" v-else :class="{ 'zmz-header-default': defaultStyle }"><slot></slot></div>
</template>
<script>
export default {
	name: 'ZmzHeader',
	props: {
		defaultStyle: {
			type: Boolean,
			default: false
		},
		type: {
			type: Boolean,
			default: false
		},
		size: String,
		round: Boolean,
		loading: Boolean,
		disabled: Boolean,
		icon: String,
		autofocus: Boolean,
		plain: Boolean,
		active: Boolean
	},
	methods: {
		handleClick(evt) {
			this.$emit('click', evt);
		}
	}
};
</script>

<style>
.zmz-header-default {
	min-height: 60px;
	width: 100%;
	background: #cfd1d6;
	box-sizing: border-box;
}
</style>
