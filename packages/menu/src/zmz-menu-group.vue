<template>
  <li class="zmz-menu-group">
		<div class="zmz-menu-group_title" :style="[paddingStyle, titleStyle, { backgroundColor }]"><slot name="title"></slot></div>
		<ul>
				<slot></slot>
		</ul>
  </li>
</template>

<script>
import MenuMixin from './zmz-menu-mixin';
import Emitter from '../../public/emitter';
export default {
	name: 'ZmzMenuGroup',
	mixins: [Emitter,MenuMixin],
	componentName: 'ZmzMenuGroup',
  props: {
  },
  data() {
    return {
      popperJS: null,
      timeout: null,
      items: {},
      submenus: {},
      mouseInChild: false,
    }
  },
	computed: {
	  // popper option
	  active() {
	    let isActive = false;
	    const submenus = this.submenus;
	    const items = this.items;
	    Object.keys(items).forEach(index => {
	      if (items[index].active) {
	        isActive = true;
	      }
	    });
	
	    Object.keys(submenus).forEach(index => {
	      if (submenus[index].active) {
	        isActive = true;
	      }
	    });
	    return isActive;
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
	  isMenuPopup() {
	    return this.rootMenu.isMenuPopup;
	  },
	  titleStyle() {
	    if (this.mode !== 'horizontal') {
	      return {
	        color: this.textColor
	      };
	    }
	    return {
	      borderBottomColor: this.active
	        ? (this.rootMenu.activeTextColor ? this.activeTextColor : '')
	        : 'transparent',
	      color: this.active
	        ? this.activeTextColor
	        : this.textColor
	    };
	  },
	},
  methods: {
  },
  mounted() {
  },
  beforeDestroy() {
  }
}
</script>

<style>
.zmz-menu-group{
	background: #fff;
}

</style>


