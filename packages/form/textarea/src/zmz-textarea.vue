<template>
  <div class="zmz-textarea">
    <textarea
      @input="handleInput"
      v-bind="$props"
      class="zmz-textarea__textarea"
      :class="{'zmz-limit__over': isOver}"
      :value="value"
      >
    </textarea>
    <span class="zmz-textarea__count" v-if="maxLen">
      {{isOver ? '已超出' : '还可以输入'}}<span class="zmz-textarea__num" :class="{'zmz-textarea__num--over': isOver}">{{num}}</span>个字
    </span>
  </div>
</template>
<script>
  export default{

    name: 'ZmzTextarea',

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
        isOver: false,
        num: this.maxLen,
        currentValue: ''
      }
    },
    methods: {
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('change', value);
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
