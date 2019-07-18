<template>
	<section class="zmz-main" v-if="type" :class="{'zmz-main-default':defaultStyle}">
		<slot></slot>
	</section>
	<div class="zmz-main" v-else :class="{'zmz-main-default':defaultStyle}">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'ZmzMain',
  props: {
    type:{
      type: Boolean,
      default: false
    },
    defaultStyle:{
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
.zmz-main-default{
	min-height: 60px;
	width: 100%;
	background: #bbbdc1;
	box-sizing: border-box;
}
</style>

