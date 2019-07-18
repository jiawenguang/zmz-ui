<template>
  <article class="zmz-article" v-if="type" :class="{ 'zmz-article-default': defaultStyle }"><slot></slot></article>
  <div class="zmz-article" v-else :class="{ 'zmz-article-default': defaultStyle }"><slot></slot></div>
</template>

<script>
export default {
  name: 'ZmzArticle',
  props: {
    type: {
      type: Boolean,
      default: false
    },
    defaultStyle: {
      type: Boolean,
      default: false
    },
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
</style>
