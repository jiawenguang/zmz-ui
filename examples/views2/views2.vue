<template>
  <zmz-container>
			<zmz-header  :default-style="true" class="zmz-page-header">
				<zmz-section class="zmz-width-standard">
					<div class="zmz-header-container">
						<div class="zmz-header-left zmz-lt"><img src=""></div>
						<div class="zmz-header-right zmz-rt">
							   <zmz-button class="zmz-demo_button" @click="zmzButton">=</zmz-button>
								 <zmz-nav class="zmz-demo_nav">
										 <ul class="zmz-nav_demo">
												 <li class="nav-item is-disabled">导航一1</li>
												 <li class="nav-item is-active"><router-link to="/two1/index3">导航二</router-link></li>
												 <li class="nav-item"><router-link to="/two1/index2">导航三</router-link></li>
												 <li class="nav-item"><router-link to="/two1">导航四</router-link></li>
												 <li class="nav-item">导航五</li>
												 <li class="nav-item">导航六</li>
										 </ul>
								 </zmz-nav>
						</div>
					</div>
				</zmz-section>
			</zmz-header>
			<zmz-main>
				<zmz-section class='zmz-width-standard'>
					 <div class="zmz-demo_section">
							<zmz-row>
								 <zmz-col :xs="24" :sm="6" :md="6" :lg="6"  class="zmz-demo_left">
								 </zmz-col>
								 <zmz-col :xs="24" :sm="18" :md="18" :lg="18" class="zmz-demo_right">
									   <router-view class="wc2"></router-view>
								 </zmz-col>
							</zmz-row>
					 </div>
				</zmz-section>
			</zmz-main>
  </zmz-container>
</template>

<script>
  export default {
    name: 'app',
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
