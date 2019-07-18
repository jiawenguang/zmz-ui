<template>
  <li :class="{'zmz-menu-groupitem':$slots.title,'zmz-menu-menuitem':isClass,'zmz-menu-menuitem-down':isDown}">
		  <template v-if="$slots.title">
				<div class="item-groupchild-title"  @click="groupClick"><slot name="title"></slot></div>
				<ul class="item-groupchild" v-show="isShow"><slot></slot></ul>
			</template>
  </li>
</template>

<script>
export default {
  name: 'ZmzMenuGroupchild',
  props: {
		itemGroup:{
      type: Number,
      required: false
    },
		rank:{
		  type: Boolean,
		  required: false
		},
    menuFixed:{
      type: Boolean,
      required: false
    },
		menuRollFixed:{
		  type: [Number, Boolean],
		  required: false,
		},
    menuPosition: {
		  type: String,
		  required: false,
		},
    options: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      isShow: false,
      currentOption: '',
			isClass:false,
			isDown:false
    }
  },
  methods: {
    handleToggleMenu(flag) {
      this.isShow = flag === false ? false : !this.isShow;
    },
		groupClick(){
			this.isShow = !this.isShow;
			this.isDown = !this.isDown;
		},
    hideMenu() {
      if (this.isShow === false) return;
      this.handleToggleMenu(false);
    },
    handleSelect(opts) {
      this.changeValue(opts.value);
      this.currentOption = opts;
    },
    changeValue(value) {
      this.$emit('input', value);
    },
		menuRollFixedEvent(){
			if(this.menuPosition&&this.menuRollFixed&&this.menuFixed){
				console.error('警告:zmz-menu-fixed不能和zmz-menu-位置共同使用')
				return ;
			}else{
				if(typeof this.menuRollFixed==='boolean'&&this.menuRollFixed===true){
						var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,clientHeight = '';
						if(this.$refs.zmzMenu) {
								if(typeof this.menuRollFixed==='number'){
										clientHeight = this.menuRollFixed;
								}else if(typeof this.menuRollFixed==='boolean'){
										clientHeight = this.$refs.zmzMenu.clientHeight;
								}
								if(clientHeight&&scrollTop > clientHeight) {
									this.$refs.zmzMenu.classList.add("zmz-menu-rollAnimated");
								} else {
									this.$refs.zmzMenu.classList.remove("zmz-menu-rollAnimated");
								}
						}
				}
			}
		},
		ranks(){
			if(this.rank.indexOf('-')>-1){
				this.isClass = true;
			}else{
				this.isClass = false;
			}
		}
  },
  mounted() {
		this.ranks();
		document.addEventListener('scroll', this.menuRollFixedEvent);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideMenu);
		document.removeEventListener('scroll', this.menuRollFixedEvent);
  }
}
</script>

<style>
.zmz-menu-groupchild{
	width: 100%;
	background: #fff;
}
.zmz-menu-menuitem .item-groupchild-title{
	 height: auto;
	 line-height: inherit;
	 padding: 0;
	 font-size: 14px;
}
.item-groupchild .zmz-menu-menuitem.zmz-menu-menuitem-down{
	height: auto;
	padding: 0;
}
.item-groupchild-title{
	color: #000000;
	height: 56px;
	line-height: 56px;
	font-size: 16px;
}
.item-groupchild-body{
	color: #000000;
}
.zmz-groupchild-btn .item-groupchild-title{
	height: 50px;
	line-height: 50px;
}

</style>


