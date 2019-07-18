<template>
	<section class="zmz-nav"  v-if="type" :class="{'zmz-nav_horizontal':direction=='horizontal','zmz-nav_vertical':direction=='vertical'}">
		<slot></slot>
	</section>
	<div class="zmz-nav" v-else :class="{'zmz-nav_horizontal':direction=='horizontal','zmz-nav_vertical':direction=='vertical'}">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'ZmzNav',
  props: {
    type:{
      type: Boolean,
      default: false
    },
    direction: {
		type: String,
		default: 'horizontal'
	},
    round: Boolean,
    loading: Boolean,
    disabled: Boolean,
	icon: String,
	autofocus:Boolean,
	plain:Boolean,
	active:Boolean
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style>

</style>

