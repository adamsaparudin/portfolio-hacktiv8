<template>
  <div class="full-width">
          <header>
              <div class="left">
                  <div class="logo"><img src="../assets/so-logo.png" width="160px"></div>
                  <div class="menu">
                  <nav>
                      <ul>
                          <li><router-link to="/questions">Questions</router-link></li>
                          <li><input type="text" placeholder="Search..."></li>
                      </ul>
                  </nav>
                  </div>
              </div>

              <div class="right" v-if="$parent.$parent.userMeta._id == null">
                  <router-link to="/login">Login</router-link>
                  <a href="#" class="button-signup">Sign Up</a>
              </div>
              <div class="right" v-else>
                <a href="#">{{ $parent.$parent.userMeta.username }}</a>
                <button v-on:click="logoutUser">Logout</button>
              </div>


          </header>
      </div>
</template>
<script>
import RightHead from './RightHead'

export default {
  components: {
    RightHead
  },
  name: 'heading',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    logoutUser() {
      localStorage.clear();
      window.location.href = "/"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  position: relative;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
