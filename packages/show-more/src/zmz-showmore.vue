<template>
  <div class="zmz-showmore" :class="{'zmz-showmore--line':display=='line','zmz-showmore--block':display=='block',}">
    <p class="zmz-showmore__text">{{ text | filterText(textLen) }}</p>
    <a @click="showMore" class="zmz-showmore__btn" v-if="textLen !== -1 && textLen < text.length">{{ showText }}</a>
    <a @click="showMore" class="zmz-showmore__btn" v-if="textLen !== -1 && textLen === text.length && allowFold">{{ hiddenText }}</a>
  </div>
</template>

<script>
export default {
  name: 'ZmzShowmore',
  props: {
    len: {
      type: Number,
      default: -1
    },
    text: {
      type: String,
      default: ''
    },
    showText: {
      type: String,
      default: '显示更多'
    },
    hiddenText: {
      type: String,
      default: '收起'
    },
    allowFold: Boolean,
    display: {
      type: String,
      default: 'line'
    }
  },
  data() {
    return {
      textLen: this.len
    };
  },
  methods: {
    showMore() {
      this.textLen = this.textLen === this.text.length ? this.len : this.text.length;
    }
  },
  filters: {
    filterText(value, textLen) {
      if (textLen !== -1 && textLen < value.length) {
        return value.substring(0, textLen) + '...';
      }
      return value;
    }
  }
};
</script>
