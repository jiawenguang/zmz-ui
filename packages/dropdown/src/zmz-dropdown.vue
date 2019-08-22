<template>
  <div class="zmz-dropdown" :class="{'zmz-dropdown--open':isdisplay}">
    <div class="zmz-dropdown__title" @click="handleDropdown" v-bind="$attrs" tabindex="0" hidefocus="true" @focus="handleFocus" @blur="handleBlur"><span>{{title}}</span> <i class="zmz-icon--arrow-bottom"></i></div>
    <div class="zmz-dropdown__list" v-show="isdisplay">
      <div class="zmz-dropdown__horn"></div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ZmzDropdown',
  props: {
    title: {
      type: String,
      default: ""
    },
    dropdown:{
      type: Boolean,
      default: false
    }
  },
  provide() {
    return {
      rootDropdown: this
    };
  },
  data() {
    return {
      isdisplay:this.dropdown,
      focused:false
    }
  },
  watch: {
    isdisplay (val) {
      this.isdisplay = val
    }
  },
  methods: {
    handleBlur () {
      if(!this.focused) return;
      this.isdisplay = false
    },
    handleFocus () {
      if(this.focused) return;
      this.focused = true
      this.isdisplay = true
    },
    handleDropdown () {
      this.focused = true
      this.isdisplay = true
    },
  },
  mounted () {
  },
};
</script>
<style lang="less" type="text/less">
</style>
