<template>
  <div class="zmz-select">
    <div class="zmz-select__input" @click="handleSelect">
      <input type="text" class="zmz-select__input--input" readonly="readonly" :placeholder="placeholder">
    </div>
      <div class="zmz-select__option" v-if="isdisplay">
        <div class="zmz-option__horn"></div>
        <slot></slot>
      </div>
  </div>
</template>
<script>
  export default{
    name: 'ZmzSelect',
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
