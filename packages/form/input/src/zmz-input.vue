<template>
  <div class="zmz-input" :class="{ 'zmz-input--clearbtn': clearbtn, 'zmz-input--showPassword': showPassword }" :data-title="showClear" 
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <input
      :type="type"
      class="zmz-input__input"
      @change="handleChange"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      v-bind="$attrs"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
      :class="{ 'is-hover': hover, 'is-disabled': disabled, 'is-focus': focuss, 'is-blur': blurs }"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="value"
      ref="input"
    />
    <span class="zmz-input__clearbtn" v-show="showClear" @click="clearInput"><i class="zmz-icon-close-f"></i></span>
    <span :class="{ 'zmz-input__showPassword': isShowPassword, 'zmz-input__hidePassword': !isShowPassword }" v-if="isShowPassword" @click="ShowPassword"></span>
  </div>
</template>
<script>
export default {
  name: 'ZmzInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    focuss: {
      type: Boolean,
      default: false
    },
    clearbtn: {
      type: Boolean,
      default: false
    },
    blurs: {
      type: Boolean,
      default: false
    },
    value: '',
    showPassword: {
      type: Boolean,
      default: false
    },
    label:""
  },
  data() {
    return {
      isClearBtn: false,
      isShowPassword: false,
      hovering: false,
      focused: false,
      isComposing: false,
      passwordVisible: false
    };
  },
  methods: {
    handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionEnd(event) {
      this.isComposing = false;
      this.handleInput(event);
    },
    focus() {
      this.getInput().focus();
    },
    blur() {
      this.getInput().blur();
    },
    ShowPassword() {
      this.type = 'password';
    },
    clearInput() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clearInput');
    },
    handleChange(event) {
      this.$emit('change', event.target.value);
    },
    handleInput(event) {
      if (this.isComposing) return;
      
      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === this.nativeInputValue) return;
      
      this.$emit('input', event.target.value);
      this.$nextTick(this.setNativeInputValue);
    },
    select() {
      this.getInput().select();
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    resizeTextarea() {
      if (this.$isServer) return;
      const { autosize, type } = this;
      if (type !== 'textarea') return;
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        };
        return;
      }
      const minRows = autosize.minRows;
      const maxRows = autosize.maxRows;
    
      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
  },
  watch: {
    value(val) {
      this.$nextTick(this.resizeTextarea);
    },
    nativeInputValue() {
      this.setNativeInputValue();
    }
  },
  created() {
    this.$on('inputSelect', this.select);
  },
  computed: {
    showClear() {
      return this.clearbtn&&
          (this.focused||this.hovering)&&this.nativeInputValue;
    },
     nativeInputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value);
    },
  },
  mounted() {
    this.$emit('input', this.value);
    this.setNativeInputValue();
    this.resizeTextarea();
    console.log(this)
    console.log(this.label)
    if(this.zmzLabel){
      this.label = this.zmzLabel.label;
      console.log(this.label)
    }
  }
};
</script>
