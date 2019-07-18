<template>
	<section class="zmz-aside" v-if="type"  :class="{'zmz-aside-default':defaultStyle}">
		<slot></slot>
	</section>
	<div class="zmz-aside" v-else :class="{'zmz-aside-default':defaultStyle}">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'ZmzAside',
  props: {
    defaultStyle:{
      type: Boolean,
      default: false
    },
    type:{
      type: Boolean,
      default: false
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
.zmz-aside-default{
	min-height: 60px;
	width: 100%;
	background: #c6c7ca;
	box-sizing: border-box;
}
</style>

