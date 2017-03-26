<template>
  <div class="foot" style="background-color: #242729; padding: 15px;">
    <h1>Ini Footer</h1>
  </div>
</template>
<script>
export default {
  name: 'header',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.foot {
  margin-top: 100px;
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
