<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <group >
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <group >
      <x-input title="密码" type="text" placeholder="" v-model="password" :min="6" :max="16" @on-change="change"></x-input>
      <x-input title="确认密码" v-model="password2" type="text" placeholder="" :equal-with="password"></x-input>
    </group>
		<box gap="10px 10px">
			<x-button type="primary" >{{regist}}</x-button>
		</box>
    
  
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell,Box } from 'vux'

export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    Box
  },
  data () {
    return {
    	msg:'WEBIM',
    	regist:'注册',
      password: '',
      password2: '',
    }
  },
  methods: {
    getValid1 () {
      this.valid1 = this.$refs.input01.valid
    },
    getValid2 () {
      this.valid2 = this.$refs.input02.valid
    },
    change (val) {
      console.log('on change', val)
    },
    onBlur (val) {
      console.log('on blur', val)
    },
    onFocus (val, $event) {
      console.log('on focus', val, $event)
    },
    onEnter (val) {
      console.log('click enter!', val)
    },
    onAlert:function(){
    	alert("huijia!")
    }
  }
}
</script>
<style scoped>
html body{background: #fbf9fe;}
h1{ text-align: center;color:#1aab19;}
.red {
  color: red;
}
.green {
  color: green;
}
</style>