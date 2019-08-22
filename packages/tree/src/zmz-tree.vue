<template>
  <div class="zmz-tree">
        <zmz-tree-item v-for="(item,index) in data" :key="index" :data-item='item' @handle-item="handleItemClick"></zmz-tree-item>
  </div>
</template>
<script>
import ZmzTreeItem from './zmz-tree-item.vue'
export default {
  name: 'ZmzTree',
  components:{
    ZmzTreeItem
  },
  provide() {
    return {
      rootTree: this
    };
  },
  props: {
    data: {
      type: Array,
      default: ()=>{
        return []
      }
    },
    currentActivation:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ActiveArr:[]
    }
  },
  watch: {
    'ActiveArr' (val) {
      console.log(val)
    }
  },
  methods: {
    handleItemClick (index) {
      console.log(index)
    }
  },
  mounted () {
  },
};
</script>
<style lang="less" type="text/less">
  .zmz-tree__item{
    .zmz-tree__item--group{
      margin-left: 40px;
    }
    &.is-active{
      >.zmz-tree__item--content{
        color: #f15c5c;
        i{
          transform: rotateZ(90deg);
          transform-origin:center center;
        }
      }
    }
    .zmz-tree__item--content{
      i{
        width:14px;
        height: 14px;
        vertical-align: middle;
        display: inline-block;
        &.zmz-icon-seize{
          width:14px;
          height: 14px;
        }
      }
    }
  }
  .zmz-alert-fade-enter,
  .zmz-alert-fade-leave-active {
    opacity: 0;
  }
</style>
