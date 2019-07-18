<template>
  <zmz-section>
		<search-box></search-box>
    <zmz-card>
    	 <div slot="title">
    		 <span class="header-title">用户信息</span>
    	 </div>
    	 <div class="zmz-userinfo">
          <div class="zmz-info__author">
            <span class="zmz-info--img"></span>
            <div class="zmz-info--nickname">
              <h3>{{userinfo.jwg_nickname}}</h3>
              <p v-if="userinfo.jwg_describe">{{userinfo.jwg_describe}}</p>
              <p v-else>似乎好像说点什么</p>
            </div>
          </div>
          <div class="zmz-info__tab">
            <ul>
              <li><span>发布文章</span><p>{{release}}</p></li>
              <li><span>关注</span><p>0</p></li>
              <li><span>回答</span><p>0</p></li>
            </ul>
          </div>
          <div class="zmz-info-author"></div>
    	 </div>
    </zmz-card>
		<zmz-card>
			 <div slot="title">
				 <span class="header-title">跳转按钮</span>
			 </div>
			 <div>
				 <div class="card-item"><router-link to="/demo">页面一</router-link></div>
				 <div class="card-item"><router-link to="/demo/two">页面二</router-link></div>
				 <div class="card-item"><router-link to="/demo/three">页面一</router-link></div>
				 <div class="card-item"><router-link to="/demo/four">页面一</router-link></div>
			 </div>
		</zmz-card>
		<zmz-card>
			 <div slot="title">
				 <span class="header-title">最新动态</span>
				 <span class="header-button">操作按钮</span>
			 </div>
			 <div>
				 <div class="card-item">操作列表一</div>
				 <div class="card-item">操作列表二</div>
				 <div class="card-item">操作列表三</div>
				 <div class="card-item">操作列表四</div>
				 <div class="card-item">操作列表五</div>
			 </div>
		</zmz-card>
  </zmz-section>
</template>

<script>
  import SearchBox from './searchComponent'
  import { GetUserinfo } from '../../../api/api.js'
  export default {
    name: 'app',
    data () {
      return {
        userinfo: {},
        release: 0
      }
    },
    watch: {
      $route () {
      }
    },
    methods: {
      getuserinfo () {
        var that = this
        let pages = {'id': 'a937a6e6fd89aa969c554a667fd3b919c5e886c2'}
        GetUserinfo(pages).then(function (res) {
          console.log(res)
          if (res.data.code === 1) {
            that.userinfo = res.data.data.userinfo
            that.release = res.data.data.release
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted () {
      //  这里模拟数据请求
      this.getuserinfo()
    },
    components: {
      SearchBox
    }
  }
</script>

<style lang="less" type="text/less">
</style>
