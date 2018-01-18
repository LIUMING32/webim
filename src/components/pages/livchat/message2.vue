<template>
  <div class="hello" style="height:100%;">
		<view-box ref="viewBox">
	    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" slot="header" ></x-header>
	    <drawer>
		    <view-box>
	        <keep-alive>
	          <router-view></router-view>
	        </keep-alive>
	      </view-box>
		  </drawer>
	    <tabbar slot="bottom">
	      <tabbar-item selected link="/message" >
	      <!--<img class="logo" src="../../../assets/vux_logo.png" style="width: 16px;">-->
	        <span slot="label">消息</span>
	      </tabbar-item>
	      <tabbar-item show-dot link="/message/addresslist">
	        <!--<img class="logo" src="../../../assets/vux_logo.png" style="width: 16px;">-->
	        <span slot="label">通讯录</span>
	      </tabbar-item>
	    </tabbar>
	  <view-box>
  </div>
</template>

<script>
import { Tabbar, TabbarItem,Drawer,ViewBox,XHeader,TransferDom,} from 'vux'
export default {
  name: 'message',
  directives: {
    TransferDom
  },
  components: {
    Tabbar,
    TabbarItem,
    Drawer,
    ViewBox,
    XHeader,
  },
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

</style>
