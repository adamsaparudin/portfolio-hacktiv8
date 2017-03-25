<template lang="html">
  <div class="Login">
    <Heading></Heading>

      <div class="form-login">
        <form>
          <div class="form-group">
            <label for="username">Username :
              <input type="text" name="username" v-model="username">
            </label>

            <br>
            <label for="password">Password :
              <input type="password" name="password" v-model="password">
            </label>
            <br>
            <button type="button" v-on:click="LoginCoy" name="button"> Login </button>
          </div>
        </form>
      </div>
    <div class="clear"></div>
    <Foot></Foot>
  </div>
</template>

<script>

import Heading from './Heading';
import Foot from './Foot';
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    Heading,
    Foot
  },
  methods: {
    LoginCoy() {
      axios.post('http://localhost:3000/api/login', {
        username: this.username,
        password: this.password
      }).then( (response) => {
        // IDEA: If wrong password execute function to show shit bar
        if(response.data == "User not found") {
          console.log("Username or password error");
        } else {
          localStorage.setItem("Token", response.data)
          window.location.href = "/"
        }
      }).catch( (error) => {

      })
    }
  }
}
</script>

<style lang="css">

.form-login {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  padding: 10px;
}

label {
  margin-top: 20px;
}

</style>
