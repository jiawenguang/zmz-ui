<template>
  <div class="zmz-label">
    <div class="zmz-label__label" :style="{width:labelWidth}">{{label}}</div>
    <div class="zmz-label__input" :style="{'margin-left':labelWidth}"><slot></slot></div>
  </div>
</template>
<script>
export default {
  name: 'ZmzLabel',
  props: {
    label:{
      type: String,
      default: ''
    },
    labelWidth:{
      type: String,
      default: '80px'
    }
  },
  data() {
    return {
      isGroup:true
    };
  },
  methods: {
  },
  watch: {
  },
  created() {
  },
  computed: {
  },
  mounted() {
  }
};
</script>
