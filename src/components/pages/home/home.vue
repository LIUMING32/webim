<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../../../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <tabbar style="position: fixed;">
      <tabbar-item selected >
      <!--<img class="logo" src="../../../assets/vux_logo.png" style="width: 16px;">-->
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/message">
        <!--<img class="logo" src="../../../assets/vux_logo.png" style="width: 16px;">-->
        <span slot="label">聊天</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem,Icon} from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Icon 
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
