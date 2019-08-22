<template>
  <transition name="zmz-alert-fade">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: "ZmzTransition",
  props: {
    type: {
      type: String,
      default: "default"
    },
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    typeClass() {
      return `zmz-alert--${this.type}`;
    },
    iconClass() {
      //暂无对应图标
      return `zmz-icon--${this.type}`
      // return "zmz-icon-qzone";
    },
    isBoldTitle() {
      return this.description ? "is-bold" : "";
    },
    isBigIcon() {
      return this.description ? "is-big" : "";
    }
  },
  methods: {
  }
};
</script>
<style lang="less" type="text/less">
  .zmz-alert-fade-enter,
  .zmz-alert-fade-leave-active {
    opacity: 0;
  }
</style>
