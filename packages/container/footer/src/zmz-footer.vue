<template>
  <footer class="zmz-footer" v-if="type" :class="{ 'zmz-footer-default': defaultStyle }"><slot></slot></footer>
  <div class="zmz-footer" v-else :class="{ 'zmz-footer-default': defaultStyle }"><slot></slot></div>
</template>

<script>
export default {
  name: 'ZmzFooter',
  props: {
    type: {
      type: Boolean,
      default: false
    },
    defaultStyle: {
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
.zmz-footer-default {
  min-height: 60px;
  width: 100%;
  background: #cfd1d6;
  box-sizing: border-box;
}
</style>
