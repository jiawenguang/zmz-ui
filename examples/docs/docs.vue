<template>
  <zmz-container>
  			<zmz-header  :default-style="true" class="zmz-page-header">
  				<zmz-section class="zmz-width-standard">
  					<div class="zmz-header-container">
  						<div class="zmz-header-left zmz-lt"><router-link to="{name:'index'}"><img src="../assets/img/banner.png"></router-link></div>
  						<div class="zmz-header-right zmz-rt">
  							   <zmz-button class="zmz-demo--button" @click="zmzButton">=</zmz-button>
  								 <zmz-nav class="zmz-demo--nav">
  										 <ul class="zmz-nav__demo">
  												 <li class="nav-item is-disabled">网站首页</li>
  												 <li class="nav-item is-active"><router-link to="/demo">产品管理</router-link></li>
  												 <li class="nav-item"><router-link to="/news">消息中心</router-link></li>
  												 <li class="nav-item"><router-link to="/about">新闻动态</router-link></li>
  												 <li class="nav-item">关于网站</li>
  										 </ul>
  								 </zmz-nav>
  						</div>
  					</div>
  				</zmz-section>
  			</zmz-header>
  			<zmz-main>
  				<router-view class="wc2"></router-view>
  			</zmz-main>
  </zmz-container>
</template>

<script>
  export default {
    name: 'docs',
    data () {
      return {
        init: false,
        isIndex: true
      }
    },
    watch: {
      $route () {
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    methods: {
      zmzButton () {
      }
    },
    components: {
    }
  }
</script>

<style lang="less" type="text/less">
  .zmz-header.zmz-page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
  }
	.zmz-header-container{
	  height: 80px;
		.zmz-header-left{
			a{
				display: block;
			 img{
				 height: 80px;
				 vertical-align:middle;
			 }
			}
		}
	}
  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
