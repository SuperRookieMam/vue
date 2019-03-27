<template>
  <router-view></router-view>
</template>

<script>
import Vue from 'vue'
import Login from './module/login/login'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    Login
  }
})
export default class Main extends Vue {
  loginIn =true
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
