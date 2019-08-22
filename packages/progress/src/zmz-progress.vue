<template>
  <div class="zmz-progress" :style='{"width":lineWidth,"height":lineHeight}'>
    <div class="zmz-progress__baseline" :style='{"width":lineWidth,"height":lineHeight,"border-radius":lineRadius,"background":lineBgColor}'>
      <div class="zmz-progress__speed" :style="{width: progresscomputed+'%','height':lineHeight,'border-radius':lineRadius,'background':lineColor}"></div>
    </div>
    <div class="zmz-progress__text">{{progresscomputed}}%</div>
  </div>
</template>
<script>
export default {
  name: 'ZmzProgress',
  props: {
    progressnum: {
      type: Number,
      default: 0
    },
    lineWidth:{
      type: String,
      default: ''
    },
    lineHeight:{
      type: String,
      default: ''
    },
    lineRadius:{
      type: String,
      default: ''
    },
    lineColor:{
      type: String,
      default: ''
    },
    lineBgColor:{
      type: String,
      default: ''
    }
  },
  computed:{
    progresscomputed(){
      var progressnum = this.progressnum
      if(progressnum>100){
        progressnum = 100
      }else if(progressnum<0){
        progressnum = 0
      }
      return progressnum
    }
  },
  data() {
    return {
      ActiveArr:[]
    }
  },
  watch: {
    'progresscomputed' (val) {
      this.$emit('handle-progress',val)
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
