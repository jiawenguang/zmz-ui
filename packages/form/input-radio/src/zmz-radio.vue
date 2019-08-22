<template>
  <label class="zmz-radio" @click="headleRadio" :class="{ 'is-checked': model === dataValue }">
    <i></i>
    <input class="zmz-radio__input" :name="name" v-model="model" type="radio" ref="input" :value="dataValue">
    <span>
      <slot></slot>
    </span>
  </label>
</template>
<script>
  export default {
    name: "ZmzRadio",
    props: {
      value: '',
      name: String,
      dataValue: ''
    },
    data() {
      return {};
    },
    computed: {
      model: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      },
    },
    watch: {
    },
    mounted() {
    },
    methods: {

      handleInput(event) {
        if (this.isComposing) return;
        if (event.target.value === this.nativeInputValue) return;
        this.$emit('input', event.target.value);
        this.$nextTick(this.setNativeInputValue);
      },
      headleRadio(e) {
        this.$emit("close");
      }
    }
  };
</script>
