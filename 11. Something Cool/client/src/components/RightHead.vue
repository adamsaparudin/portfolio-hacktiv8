<template lang="html">
  <div  class="right-head">
    <ul v-if="token == null" class="nav navbar-nav navbar-right">
      <li><a href="/login">Login</a></li>
    </ul>
    <ul v-else class="nav navbar-nav navbar-right">
      <li><a href="/">User</a></li>
      <li><a href="/questions/create">Ask Questions</a></li>
      <li><a href="/logout">Logout</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem("Token")
    }
  }
}
</script>

<style lang="css">
</style>
