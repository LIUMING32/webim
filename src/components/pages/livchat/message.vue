<template>
  <div class="hello" >
	    <drawer>
		    <view-box>
		      <router-view></router-view>
	      </view-box>
		  </drawer>
	    <tabbar>
	      <tabbar-item selected link="/message" >
	      <!--<img class="logo" src="../../../assets/vux_logo.png" style="width: 16px;">-->
	        <span slot="label">消息</span>
	      </tabbar-item>
	      <tabbar-item show-dot link="/message/addresslist">
	        <!--<img class="logo" src="../../../assets/vux_logo.png" style="width: 16px;">-->
	        <span slot="label">通讯录</span>
	      </tabbar-item>
	    </tabbar>
	    
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


</style>
