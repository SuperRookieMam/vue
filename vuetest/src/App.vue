<template>
  <div id="app">
    <login/>
  </div>
</template>

<script>
import Vue from 'vue'
import Login from './components/model/login/login'
import { Component } from 'vue-property-decorator'

  @Component({
    components: {
      Login
    }
  })
export default class Main extends Vue {
  }
</script>

<style>
  @import "../static/css/main/main.css";
</style>
