<template>
	<div class="zmz-card" :class="{ 'zmz-card--always': boxShadow == 'always', 'zmz-card--hover': boxShadow == 'hover', 'zmz-card--never': boxShadow == 'never' }">
		<div class="zmz-card__header" v-if="$slots.title"><slot name="title"></slot></div>
		<div class="zmz-card__body">
			<template v-if="$slots.body">
				<slot name="body"></slot>
			</template>
			<slot v-else></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ZmzCard',
	props: {
		boxShadow: { 
			type: String, 
			default: 'always' ,
		}
	},
	components: {},
	computed: {
	},
	methods: {

	},
	mounted() {

	}
};
</script>
<style>
</style>
