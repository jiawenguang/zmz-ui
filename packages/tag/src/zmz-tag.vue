<template>
  <transition name="zmz-zoom-in-center">
    <div class="zmz-tag" :class="'zmz-tag--'+color">
      <span class="zmz-tag__text"><slot></slot></span>
      <i class="zmz-icon-close zmz-tag__close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
  export default{
    name: 'ZmzTag',
    props: {
      closable: Boolean,
      color: {
        type: String,
        default: 'default'
      }
    },
    data () {
      return {
        isclosed: false
      }
    },
    methods: {
      hiddenTag () {
        this.isclosed = true
        this.$emit('close')
      }
    }
  }
</script>
