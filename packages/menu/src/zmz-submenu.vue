<template>
	<li class="zmz-submenu" :class="{
            'is-active': active,
            'is-opened': opened,
            'is-disabled': disabled
          }"
					:data-active="active"
					@mouseenter="handleMouseenter"
					@mouseleave="handleMouseleave"
					@focus="handleMouseenter"
					>
		<div class="submenu-title" ref="submenu-title" 
		@click="handleClick"
		@mouseenter="handleTitleMouseenter"
		@mouseleave="handleTitleMouseleave"
		:style="[paddingStyle, titleStyle, { backgroundColor }]"
		><slot name="title"></slot></div>
		<transition name = "fade">
				<ul class="submenu-content" :style="[ titleStyle, { backgroundColor }]" :class="{'submenu-bottom':direction=='bottom','submenu-left':direction=='left','submenu-right':direction=='right'}" v-show="opened">
					<slot></slot>
				</ul>
		</transition>
	</li>
</template>

<script>
  import menuMixin from './zmz-menu-mixin';
  import Emitter from '../../public/emitter';

  export default {
    name: 'ZmzSubmenu',

    componentName: 'ZmzSubmenu',

    mixins: [ Emitter,menuMixin],
    props: {
      index: {
        type: String,
        required: true
      },
      showTimeout: {
        type: Number,
        default: 300
      },
			direction:{
				type: String,
				default: 'right'
			},
      hideTimeout: {
        type: Number,
        default: 300
      },
      popperClass: String,
      disabled: Boolean,
      popperAppendToBody: {
        type: Boolean,
        default: undefined
      }
    },

    data() {
      return {
        popperJS: null,
        timeout: null,
        items: {},
        submenus: {},
        mouseInChild: false
      };
    },
    watch: {
      opened(val) {
        if (this.isMenuPopup) {
          this.$nextTick(_ => {
            // this.updatePopper();
          });
        }
      }
    },
    computed: {
      // popper option
      appendToBody() {
        return this.popperAppendToBody === undefined
          ? this.isFirstLevel
          : this.popperAppendToBody;
      },
      menuTransitionName() {
        return this.rootMenu.collapse ? 'el-zoom-in-left' : 'el-zoom-in-top';
      },
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.index) > -1;
      },
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
      isMenuPopup() {
        return this.rootMenu.isMenuPopup;
      },
      titleStyle() {
        // if (this.mode !== 'horizontal') {
        //   return {
        //     color: this.textColor
        //   };
        // }
        return {
          borderBottomColor: this.active
            ? (this.rootMenu.activeTextColor ? this.activeTextColor : '')
            : 'transparent',
          color: this.active
            ? this.activeTextColor
            : this.textColor
        };
      },
      isFirstLevel() {
        let isFirstLevel = true;
        let parent = this.$parent;
        while (parent && parent !== this.rootMenu) {
          if (['ZmzSubmenu', 'ZmzMenuGroup'].indexOf(parent.$options.componentName) > -1) {
            isFirstLevel = false;
            break;
          } else {
            parent = parent.$parent;
          }
        }
        return isFirstLevel;
      }
    },
    methods: {
      handleCollapseToggle(value) {
        if (value) {
          this.initPopper();
        } else {
          this.doDestroy();
        }
      },
      addItem(item) {
        this.$set(this.items, item.index, item);
      },
      removeItem(item) {
        delete this.items[item.index];
      },
      addSubmenu(item) {
        this.$set(this.submenus, item.index, item);
      },
      removeSubmenu(item) {
        delete this.submenus[item.index];
      },
      handleClick() {
        const { rootMenu, disabled } = this;
        if (
          (rootMenu.menuTrigger === 'hover' && rootMenu.mode === 'horizontal') ||
          (rootMenu.collapse && rootMenu.mode === 'vertical') ||
          disabled
        ) {
          return;
        }
        this.dispatch('ZmzMenu', 'submenu-click', this);
      },
      handleMouseenter(event) {
        if (!('ActiveXObject' in window) && event.type === 'focus' && !event.relatedTarget) {
          return;
        }
        const { rootMenu, disabled } = this;
        if (
          (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal') ||
          (!rootMenu.collapse && rootMenu.mode === 'vertical') ||
          disabled
        ) {
          return;
        }
        this.dispatch('ZmzSubmenu', 'mouse-enter-child');
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.rootMenu.openMenu(this.index, this.indexPath);
        }, this.showTimeout);
      },
      handleMouseleave() {
        const {rootMenu} = this;
        if (
          (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal') ||
          (!rootMenu.collapse && rootMenu.mode === 'vertical')
        ) {
          return;
        }
        this.dispatch('ZmzSubmenu', 'mouse-leave-child');
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          !this.mouseInChild && this.rootMenu.closeMenu(this.index);
        }, this.hideTimeout);
      },
      handleTitleMouseenter() {
        if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
        const title = this.$refs['submenu-title'];
        title && (title.style.backgroundColor = this.rootMenu.hoverBackground);
      },
      handleTitleMouseleave() {
        if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
        const title = this.$refs['submenu-title'];
        title && (title.style.backgroundColor = this.rootMenu.backgroundColor || '');
      },
      updatePlacement() {
        this.currentPlacement = this.mode === 'horizontal' && this.isFirstLevel
          ? 'bottom-start'
          : 'right-start';
      },
      initPopper() {
        this.referenceElm = this.$el;
        this.popperElm = this.$refs.menu;
        this.updatePlacement();
      }
    },
    created() {
      this.$on('toggle-collapse', this.handleCollapseToggle);
      this.$on('mouse-enter-child', () => {
        this.mouseInChild = true;
        clearTimeout(this.timeout);
      });
      this.$on('mouse-leave-child', () => {
        this.mouseInChild = false;
        clearTimeout(this.timeout);
      });
    },
    mounted() {
      this.parentMenu.addSubmenu(this);
      this.rootMenu.addSubmenu(this);
      this.initPopper();
    },
    beforeDestroy() {
      this.parentMenu.removeSubmenu(this);
      this.rootMenu.removeSubmenu(this);
    },
  };
</script>

<style>
.fade-enter,.fade-leave-to {
	opacity: 0;
	height: 0;
}
.fade-enter-active ,.fade-leave-active {
	
	transition: opacity,height .3s;
}
</style>
