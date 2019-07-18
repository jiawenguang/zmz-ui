<template>
  <zmz-section class='zmz-width-standard'>
  	 <div class="zmz-demo--1__section">
  			<zmz-row :gutter="20">
  				 <zmz-col :xs="24" :sm="24" :md="24" :lg="24" >
              <zmz-main class="zmz-demo--search">
              	<search-box></search-box>
                <zmz-aside>
                    <div class="zmz-demo--search__result">
                        <div class="zmz-demo--search__result__title">搜索结果</div>
                    </div>
                </zmz-aside>
              	<zmz-section v-for="(item,index) in buglist" :key="index">
              		<div class="zmz-media" @click="content(item.b_ar_id)">
              			<div class="zmz-media__top">
              				<div class="zmz-media__img" v-show="false"><i class="zmz-icon-add"></i></div>
              				<div class="zmz-media__body">
              					<div class="zmz-media__body-title">{{item.b_ar_title}}</div>
              					<div class="zmz-media__body-content">{{item.b_ar_content|delHtmlTag}}</div>
              				</div>
              			</div>
              			<div class="zmz-media__bottom">
              				<div class="zmz-media__bottom-left">
              					<span>作者：{{item.b_ar_author}}</span>
              					<span>发表时间{{item.addtime}}</span>
              				</div>
              				<div class="zmz-media__bottom-right">
              					<span>浏览：1024</span>
              					<span>评论：1024</span>
              				</div>
              			</div>
              		</div>
              	</zmz-section>
              	<zmz-section>
              		<zmz-pagination  :total="total" :background="true" @pagechange="pagechange"></zmz-pagination>
              	</zmz-section>
              </zmz-main>
  				 </zmz-col>
  			</zmz-row>
  	 </div>
  </zmz-section>
</template>

<script>
  import SearchBox from './component/searchComponent'
  import { GetBugList, Search, Shieldedwords } from '../../api/api.js'
  export default{
    data () {
      return {
        current: this.currentPage,
        buglist: [],
        total: 0,
        keyword: ''
      }
    },
    computed: {
    },
    mounted () {
      this.getBugList()
      this.$root.eventHub.$on('searchInput', (keyword) => {
        console.log(keyword)
        this.keyword = keyword
        this.getSearch()
      })
    },
    filters: {
      delHtmlTag (value) {
        var s = ''
        if (value.length === 0) return ''
        s = value.replace(/&amp;/g, '&')
        s = s.replace(/&lt;/g, '<')
        s = s.replace(/&gt;/g, '>')
        s = s.replace(/&nbsp;/g, ' ')
        s = s.replace(/&#39;/g, '\'')
        s = s.replace(/&quot;/g, '"')
        s = s.replace(/<br\/>/g, '\n')
        return s.replace(/<[^>]+>/g, '')
        // 正则去掉所有的html标记
      }
    },
    methods: {
      getSearch () {
        var that = this
        Shieldedwords({}).then(function (res) {
          console.log(res)
          if (res.data.code === 1) {
            var newstr = []
            for (var i = 0; i < res.data.data.length; i++) {
              newstr.push(res.data.data[i].s_name)
            }
            var newstrs = that.keyword.replace(new RegExp(newstr.join('|'), 'g'), '*')
            if (newstrs === that.keyword) {
              let pages = {'keyword': that.keyword}
              Search(pages).then(function (res) {
                console.log(res)
                if (res.data.code === 1) {
                  that.buglist = res.data.data.buglist
                  that.total = res.data.data.total
                } else {
                  that.$message(res.data.msg)
                }
              }).catch((err) => {
                console.log(err)
              })
            } else {
              that.$message.error('输入内容存在非法字符请重新输入')
            }
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      pagechange: function (idx) {
        this.getBugList(idx)
      },
      getBugList (page) {
        var that = this
        let pages = {page: page}
        GetBugList(pages).then(function (res) {
          console.log(res)
          if (res.data.code === 1) {
            that.buglist = res.data.data.buglist
            that.total = res.data.data.total
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      content (id) {
        this.$router.push({
          path: '/bug/details',
          query: {
            id: id
          }
        })
      }
    },
    components: {
      SearchBox
    },
    beforeDestroy () {
      this.$root.eventHub.$off('searchInput')
    }
  }
</script>

<style lang="less" type="text/less">
	.zmz-media{
		padding: 20px;
		box-shadow: 0 4px 30px 0 rgba(223,225,230,.5);
		border: 1px solid #f4f5f9;
	}
	.zmz-media__top{
		display: flex;
	}
	.zmz-media__img{
		width: 100px;
		height: 100px;
		border: 1px solid #fff;
		text-align: center;
		line-height: 100px;
		background: #f7f7f7;
		margin-right: 20px;
	}
	.zmz-media__body{
		flex: 1;
	}
	.zmz-media__body-title{
		margin-bottom: 20px;
	}
	.zmz-media__bottom-right i{
		font-size: 16px;
	}
	.zmz-media__bottom{
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}
</style>
