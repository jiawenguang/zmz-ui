<template>
  <li class="zmz-menu-item" 
	@click="handleClick"
	@mouseenter="onMouseEnter"
	@focus="onMouseEnter"
	@blur="onMouseLeave"
	@mouseleave="onMouseLeave"
	:style="[paddingStyle, itemStyle, { backgroundColor }]"
	:class="{
	  'is-active': active,
	  'is-disabled': disabled
	 }">
		<slot></slot>
  </li>
</template>

<script>
  import Menu from './zmz-menu-mixin';
  import Emitter from '../../public/emitter';

  export default {
    name: 'ZmzMenuItem',

    componentName: 'ZmzMenuItem',

    mixins: [ Emitter,Menu],
    props: {
      index: {
        default: null,
        validator: val => typeof val === 'string' || val === null
      },
      route: [String, Object],
      disabled: Boolean
    },
    computed: {
      active() {
        return this.index === this.rootMenu.activeIndex;
      },
      hoverBackground() {
        return this.rootMenu.hoverBackground;
      },
      backgroundColor() {
        return this.rootMenu.backgroundColor || '';
      },
      activeTextColor() {
        return this.rootMenu.activeTextColor || '';
      },
      textColor() {
        return this.rootMenu.textColor || '';
      },
      mode() {
        return this.rootMenu.mode;
      },
      itemStyle() {
        const style = {
          color: this.active ? this.activeTextColor : this.textColor
        };
        if (this.mode === 'horizontal' && !this.isNested) {
          style.borderBottomColor = this.active
            ? (this.rootMenu.activeTextColor ? this.activeTextColor : '')
            : 'transparent';
        }
        return style;
      },
      isNested() {
        return this.parentMenu !== this.rootMenu;
      }
    },
    methods: {
      onMouseEnter() {
        if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
        this.$el.style.backgroundColor = this.hoverBackground;
      },
      onMouseLeave() {
        if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
        this.$el.style.backgroundColor = this.backgroundColor;
      },
      handleClick() {
        if (!this.disabled) {
          this.dispatch('ZmzMenu', 'item-click', this);
          this.$emit('click', this);
        }
      }
    },
    mounted() {
      this.parentMenu.addItem(this);
      this.rootMenu.addItem(this);
    },
    beforeDestroy() {
      this.parentMenu.removeItem(this);
      this.rootMenu.removeItem(this);
    }
  };
</script>



<style>

</style>


