<template>
	<div class="zmz-pagination" :class="{'is-background':background}" v-if="hiddenPaging&&page>1?true:false">
		<ul class="zmz-pages">
			<li class="pages-item prev-page" :class="{ disabled: current == 1 }" @click="setCurrent(current - 1)">
				<button type="button" disabled="disabled" v-if="current == 1">«</button>
				<template v-else>«</template>
			</li>
			<li class="pages-item prev-page" :class="{ disabled: current == 1 }" @click="setCurrent(1)">
				<button type="button" disabled="disabled" v-if="current == 1">首页</button>
				<template v-else>首页</template>
			</li>
			<li class="pages-item" v-for="p in grouplist" :class="{ active: current == p.val }" @click="setCurrent(p.val)">{{ p.text }}</li>
			<li class="pages-item next-page" :class="{ disabled: current == page }" @click="setCurrent(page)">
				<button type="button" disabled="disabled" v-if="current == page">尾页</button>
				<template v-else>尾页</template>
			</li>
			<li class="pages-item next-page" :class="{ disabled: current == page }" @click="setCurrent(current + 1)">
				<button type="button" disabled="disabled" v-if="current == page">»</button>
				<template v-else>»</template>
			</li>
		</ul>
	</div>
</template>

<script type="es6">
export default{
name:"ZmzPagination",
  data(){
    return {
      current: this.currentPage
    }
  },
   props: {
      total: {
        type: Number,
        default: 0
      },
      pageNum: {
        type: Number,
        default: 10
      },
      currentPage: {// 当前页码
        type: Number,
        default: 1
      },
      pageFolding: {// 分页条数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      },
			hiddenPaging:{
				type:Boolean,
				default:true
			},
			background: {// 数据总条数
        type: Boolean,
        default: false
      },
    },
    computed: {
      page: function () { // 总页数
        return Math.ceil(this.total / this.pageNum);
      },
      grouplist: function () { // 获取分页页码
        var len = this.page, temp = [], list = [], count = Math.floor(this.pageFolding / 2), center = this.current;
        if (len <= this.pageFolding) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          }
          ;
          return temp;
        }
        while (len--) {
          temp.push(this.page - len);
        }
        ;
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pageFolding);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pageFolding) {
          if((this.current > count + 1)){
						if(list[0].val - 1==1){
							list.unshift({text: 1, val: 1});
						}else{
							list.unshift({text: '...', val: list[0].val - 1});
							list.unshift({text: 1, val: 1});
						}
					}
					if((this.current <= this.page+count)){
						if(list[list.length - 1].val + 1<=this.page){
							if(list[list.length - 1].val + 1==this.page){
								list.push({text: this.page, val: this.page});
							}else{
								list.push({text: '...', val: list[list.length - 1].val + 1});
								list.push({text: this.page, val: this.page});
							}
						}
					}
        }
        return list;
      }
    },
  methods: {
    setCurrent: function (idx) {
      if (this.current != idx && idx > 0 && idx < this.page + 1) {
        this.current = idx;
        this.$emit('pagechange', this.current);
      }
    }
  }
}
</script>

<style lang="less">
</style>
