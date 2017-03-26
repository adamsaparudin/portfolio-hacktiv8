<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import jwt from 'jwt-decode'

export default {
  name: 'app',
  data() {
    return {
      userMeta: ''
    }
  },
  methods: {
    setUserMeta() {
      if(localStorage.getItem("Token") != null)
        this.userMeta = jwt(localStorage.getItem("Token"))._doc
    }
  },
  mounted() {
    this.setUserMeta()
  }
};
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
