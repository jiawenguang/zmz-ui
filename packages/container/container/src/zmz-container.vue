<template>
	<div class="zmz-container">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'ZmzContainer',
  props: {
    type:{
      type: Boolean,
      default: true
    },
    size: String,
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
.zmz-container {
	width: 100%;
}
</style>

