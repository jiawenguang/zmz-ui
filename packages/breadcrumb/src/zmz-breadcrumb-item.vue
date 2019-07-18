<template>
  <span class="zmz-breadcrumb__item">
    <span class="zmz-breadcrumb__text"><slot></slot></span>
    <i :class="segmenterIcon" class="zmz-breadcrumb__icon" v-if="segmenterIcon"></i>
    <i class="zmz-breadcrumb__icon" v-else>{{ segmenter }}</i>
  </span>
</template>
<script>
export default {
  name: 'ZmzBreadcrumbItem',
  inject: ['zmzBreadcrumb'],
  props: {
    description: {
      type: String
    }
  },
  data() {
    return {
      segmenter: '',
      segmenterIcon: ''
    };
  },
  computed: {},
  methods: {},
  mounted() {
    this.segmenter = this.zmzBreadcrumb.segmenter;
    this.segmenterIcon = this.zmzBreadcrumb.segmenterIcon;
    console.log(this.zmzBreadcrumb);
  }
};
</script>
