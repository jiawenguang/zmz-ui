<template>
  <div  class="zmz-tree__item" :class="{'is-active':dataItem.selected}" >
    <div class="zmz-tree__item--content" @click="handleItemClick(dataItem)">
      <i :class="dataItem.children?'zmz-icon--arrow-right':'zmz-icon-seize'"></i>
      <span class="">{{dataItem.name}}</span>
    </div>
    <zmz-transition name="zmz-alert-fade">
      <div class="zmz-tree__item--group" v-if="dataItem.children" v-show="dataItem.selected">
        <zmz-tree-item v-for="(item, index) in dataItem.children" :dataItem="item" :key="index"></zmz-tree-item>
      </div>
    </zmz-transition>
  </div>
</template>
<script>
import ZmzTransition from '../../public/transition/zmz-transition'
export default {
  name: 'ZmzTreeItem',
  componentName: 'ZmzTransition',
  inject:['rootTree'],
  props: {
    dataItem: {
      type: Object,
    },
    isdisplay:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      itemActiveArr:[]
    }
  },
  watch: {

  },
  methods: {
    handleItemClick (dataItem) {
      console.log(this)
      console.log(dataItem)
      dataItem.selected = !dataItem.selected
      this.rootTree.$emit('handle-item',dataItem)
      this.rootTree.ActiveArr.push(dataItem)
    },
  },
  mounted () {
    console.log()
  },
  components: {
    ZmzTransition
  }
};
</script>
