<template>
  <label class="zmz-checkbox" @click="headleCheckbox" :class="{ 'is-checked': model }">
    <i></i>
    <input class="zmz-checkbox__input" v-model="model" type="checkbox" ref="input" :value="dataValue">
    <span>
      <slot></slot>
    </span>
  </label>
</template>
<script>
  export default {
    name: "ZmzCheckbox",
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
      headleCheckbox(e) {
        this.$emit("close");
      }
    }
  };
</script>
