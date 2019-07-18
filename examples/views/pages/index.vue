<template>
	<zmz-main>
		<search-box></search-box>
		<zmz-section class="zmz-mb-20">
			<div class="zmz-demo--1__notice">
				<zmz-alert type="default" show-icon :closable="false" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……">
					带有 icon 和辅助性文字介绍
				</zmz-alert>
			</div>
		</zmz-section>
		<zmz-section class="zmz-mb-20" v-for="(item,index) in buglist" :key="index">
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
</template>
<script>
  import SearchBox from './component/searchComponent'
  import { GetBugList } from '../../api/api.js'
  export default{
    data () {
      return {
        current: this.currentPage,
        buglist: [],
        total: 0
      }
    },
    computed: {
    },
    mounted () {
      this.getBugList()
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
      pagechange: function (idx) {
        console.log(idx)
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
