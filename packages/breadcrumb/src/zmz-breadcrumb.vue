<template>
  <div class="zmz-breadcrumb">
       <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'ZmzBreadcrumb',
  componentName: 'ZmzBreadcrumb',
  props: {
    segmenter: {
      type: String,
      default: '/'
    },
    segmenterIcon:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  provide(){
    return {
      zmzBreadcrumb : this
    } 
  }
};
</script>
