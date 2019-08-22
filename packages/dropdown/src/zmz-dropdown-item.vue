<template>
  <div  class="zmz-dropdown__item" @click="handleClick" v-on:mouseover="handleMouseover()" v-on:mouseout="handleMouseout()">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ZmzDropdownItem',
  inject:['rootDropdown'],
  props: {
  },
  data() {
    return {
    }
  },
  watch: {

  },
  methods: {
    handleClick(e) {
      this.rootDropdown.isdisplay = !this.rootDropdown.isdisplay
    },
    handleMouseover() {
      this.rootDropdown.focused = false
    },
    handleMouseout() {
      this.rootDropdown.focused = true
    }
  },
  mounted () {
  },
};
</script>
