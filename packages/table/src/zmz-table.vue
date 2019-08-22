<template>
  <div class="zmz-table">
    <div class="zmz-table__thead--box">
      <table class="zmz-table__thead" cellspacing="0" cellpadding="0" border="0">
        <colgroup>
          <col :name="'zmz-table_'+index+'_header--colgroup'" :width="item.data.attrs.width" v-for="(item,index) in $slots.default" v-if="item.tag=='zmz-table-th'">
        </colgroup>
        <thead>
            <tr>
              <th v-for="(item,index) in $slots.default" v-if="item.tag=='zmz-table-th'"><span>{{item.data.attrs.title}}</span></th>
            </tr>
        </thead>
      </table>
    </div>
    <div class="zmz-table__tbody--box">
        <table class="zmz-table__tbody" cellspacing="0" cellpadding="0" border="0">
          <colgroup>
            <col :name="'zmz-table_'+index+'_header--colgroup'" :width="item.data.attrs.width" v-for="(item,index) in $slots.default" v-if="item.tag=='zmz-table-th'">
          </colgroup>
          <tbody>
              <tr  v-for="(item,index) in data">
                <td v-for="(items,index) in item"><div class="zmz-table__tbody_td">{{items}}</div></td>
              </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ZmzTable',
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
