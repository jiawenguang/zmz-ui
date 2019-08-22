<template>
  <div class="zmz-option__group">
    <div class="zmz-option__lable">
      <span v-if="label">{{label}}</span>
      <div class="zmz-option__list">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default{

    name: 'ZmzOptionGroup',

    props: {
      label: {
        type: String,
        default: ''
      },
    },
    data () {
      return {
        isdisplay: false,
        num: this.maxLen,
        currentValue: ''
      }
    },
    methods: {
      handleSelect() {
        this.isdisplay = !this.isdisplay
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.currentValue = value
        if (this.currentValue.length <= this.maxLen) {
          this.isOver = false
          this.num = this.maxLen - this.currentValue.length
        } else {
          if (this.isCut) {
            this.currentValue = this.currentValue.substring(0, this.maxLen)
            this.num = this.currentValue.length - this.maxLen
            return
          }
          this.isOver = true
          this.num = this.currentValue.length - this.maxLen
          this.$emit('overText', this.currentValue)
        }
      }
    },
    watch: {
    }
  }
</script>
