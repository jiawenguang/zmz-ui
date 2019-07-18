<template>
	<button
		class="zmz-button"
		@click="handleClick"
		:disabled="disabled"
		:autofocus="autofocus"
		:class="[{
			'zmz-button--success': type == 'success',
			'zmz-button--warning': type == 'warning',
			'zmz-button--error': type == 'error',
			'zmz-button--confirm': type == 'confirm',
			'zmz-button--default': type=='default',
			'zmz-button--info': type=='info',
			'zmz-button--size-medium':size=='medium',
			'zmz-button--size-small':size=='small',
			'is-round': round,
			'is-plain': plain,
			'is-disabled': disabled,
			'is-active': active
		}]"
	>
		<i :class="icon" v-if="icon!=''"></i>
		<span v-if="($slots.default&&$slots.default.length<=1)||$slots.default==undefined">
			<slot></slot>
		</span>
		<template v-else>
			<slot></slot>
		</template>
	</button>
</template>

<script>
export default {
	name: 'ZmzButton',
	props: {
		type: {
			type: String,
			default:'default'
		},
		size: {
			type: String,
			default:'default'
		},
		round: {
			type: Boolean,
			default:false
		},
		loading: {
			type: Boolean,
			default:false
		},
		disabled: {
			type: Boolean,
			default:false
		},
		icon:{
			type: String,
			default: ''
		},
		autofocus: {
			type: Boolean,
			default:false
		},
		plain: {
			type: Boolean,
			default:false
		},
		active: {
			type: Boolean,
			default:false
		},
	},
	methods: {
		handleClick(evt) {
			this.$emit('click', evt);
		}
	},
	mounted() {
		// console.log(this.$slots.default)
	},
};
</script>

<style>

</style>
