<template>
  <div id="homePage" class="mainDiv">
    <div class="left-div">
      <a href="javascript:" @click="getdata">点击测试</a>
    </div>
    <div class="right-div">
      <div class="right-top"></div>
      <div>{{data}}</div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class HomePage extends Vue {
  name= ''
  passWord =''
  data={}
  getdata () {
    this.$store.commit('data')
    this.data = this.$store.state.data
  }
}
</script>
<style>
  @import "../../../static/source/css/homepage/homePage.css";
</style>
