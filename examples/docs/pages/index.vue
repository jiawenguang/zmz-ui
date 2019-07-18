<template>
  <zmz-section class='zmz-width-standard'>
  	 <div class="zmz-demo--section">
  			<zmz-row>
  				 <zmz-col :xs="24" :sm="6" :md="6" :lg="6"  class="zmz-demo--left">
								 <div class="side-nav">
								   <div v-for="item in (Object.values(data[1].docs['0'].children['0'].children))" class="group-container">
								     <p class="side-nav-title">{{item.meta.title}}</p>
								     <div class="side-nav-items" v-for="itemson in item.children" v-if="item.children">
											 
								       <p  class="side-nav-group" v-if="itemson.meta.nolink">{{itemson.meta.title}}</p>
								       <router-link :class="$route.name===itemson.name ? 'active' : ''"  v-else :to="{path: itemson.path}">{{itemson.meta.title}}</router-link>
								       <div v-for="itemgrandson in itemson.children">
								         <router-link :to="{path: itemgrandson.path}" :class="$route.name===itemgrandson.name ? 'active' : ''" class="slid-nav-component">{{itemgrandson.meta.title}}</router-link>
								       </div>
								     </div>
								   </div>
								 </div>
  				 </zmz-col>
  				 <zmz-col :xs="24" :sm="18" :md="18" :lg="18" class="zmz-demo--right">
							 <router-view></router-view>
  				 </zmz-col>
  			</zmz-row>
  	 </div>
  </zmz-section>
</template>

<script>
  import navConf from '../../nav.config.json'
  export default {
    name: 'app',
    data () {
      return {
        init: false,
        data: navConf
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
      console.log(this.data[1].docs['0'].children['0'].children)
      var a = Object.values(this.data)
      console.log(a[0])
      console.log(Object.values(this.data))
    },
    components: {
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../assets/less/index.less";
  .side-nav{
   display: inline-block;
   margin: 32px 0;
   padding: 0;
   color: #3F536E;
   background-color: #fff;
   z-index: 99;
   .group-container{
     margin-bottom: 32px;
   }
   .side-nav-title{
     padding: 0 24px 8px;
     color: #8DABC4;
     font-size: 12px;
     font-weight: bold;
     letter-spacing: 1px;
     text-transform: uppercase;
   }
   .side-nav-items{
     font-size: 14px;
     font-weight: normal;
     line-height: 1.8;
     a{
       display: block;
       position: relative;
       padding: 8px 24px;
       color: #3F536E;
       font-weight: normal;
       line-height: 1.5;
       cursor: pointer;
     }
     .side-nav-group{
       display: block;
       position: relative;
       padding: 6px 0 6px 24px;
       color: #2C405A;
       font-weight: bold;
     }
     .slid-nav-component{
       display: block;
       position: relative;
       padding: 6px 24px 6px 32px;
       color: #616367;
       font-size: 14px;
     }
     .active{
       color: #3FAAF5;
     }
   }
 }
</style>
