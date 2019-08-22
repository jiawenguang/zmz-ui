<template>
  <div class="zmz-option__li">
    <slot></slot>
  </div>
</template>
<script>
  export default{

    name: 'ZmzOption',
    props: {
      placeholder: {
        type: String,
        default: '请输入内容'
      },
      rows: {
        type: Number,
        default: 4
      },
      maxLen: {
        type: Number,
        default: 20
      },
      isCut: {
        type: Boolean,
        default: false
      },
      value: {
        type: [String, Number],
        default: ''
      }
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
