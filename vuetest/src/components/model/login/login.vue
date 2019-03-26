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
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
// import { namespace } from 'vuex-class'
@Component
export default class Login extends Vue {
  name= ''
  passWord =''
}
</script>
<style>
  @import "../../../../static/css/login/login.css";
</style>
