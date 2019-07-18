<template>
  <zmz-section class='zmz-width-standard'>
  	 <div class="zmz-demo--1__section">
  			<zmz-row :gutter="20">
  				 <zmz-col :xs="24" :sm="18" :md="18" :lg="18" >
							 <div class="zmz-demo--1__left">    
							 	 <router-view name="index"></router-view>
								 <router-view></router-view>
							 </div>	
  				 </zmz-col>
					 <zmz-col :xs="24" :sm="6" :md="6" :lg="6"  >
					 		<div class="zmz-demo--1__right">    
								 <right-list></right-list>
							</div>	 
					 </zmz-col>
  			</zmz-row>
  	 </div>
  </zmz-section>
</template>

<script>
  import RightList from './component/rightComponent'
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
    components: {
      RightList
    }
  }
</script>

<style lang="less" type="text/less">
 
</style>
