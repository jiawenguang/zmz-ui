<template>
	<section class="zmz-section"  v-if="type" :class="{'zmz-section-default':defaultStyle}">
		<slot></slot>
	</section>
	<div class="zmz-section" v-else :class="{'zmz-section-default':defaultStyle}">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'ZmzSection',
  props: {
    defaultStyle:{
      type: Boolean,
      default: false
    },
    type:{
      type: Boolean,
      default: false
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
.zmz-section-default{
	min-height: 60px;
	width: 100%;
	box-sizing: border-box;
}
.zmz-section{
/* 	padding-left: 7.5px;
	padding-right: 7.5px; */
	margin-left:auto ;
	margin-right:auto ;
}
</style>

