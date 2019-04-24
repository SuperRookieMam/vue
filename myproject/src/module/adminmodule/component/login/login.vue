<template>
  <div id="login" class="loginDiv">
    <div class="inner">
      <div class="inner-div">
        <label class="inner-div-label">账号:</label>
        <input class="inner-div-input" type="text" v-model="name"/>
      </div>
      <div class="inner-div">
        <label class="inner-div-label">密码:</label>
        <input class="inner-div-input" type="text" v-model="passWord"/>
      </div>
      <div class="inner-div">
        <input type="button" value="登陆" @click="toHomePage"/>
        <input type="button" value="取消"/>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  name= ''
  passWord =''
  toHomePage () {
    this.$router.push({ name: 'hompage' })
  }
}
</script>
<style>
  @import "../../../../../static/source/css/login/login.css";
</style>
