<template lang="html">
<div class="CreateQuestion">

  <Heading></Heading>
  <form>
    <div class="form-group">
      <div class="post-answer row" style="padding: 20px;">
        <label for="title">Title : </label>
        <input v-model="title" type="text" name="title" value=""><br>
        <label for="details">Details : </label><br>
        <textarea v-model="details" class="form-control" rows="7" style="background-color: #fff"></textarea><br>
        <button v-on:click="postQuestion" type="button" name="button">Go Go Go</button>
      </div>
    </div>
  </form>
  <Foot></Foot>

</div>
</template>

<script>
import Heading from './Heading'
import Foot from './Foot'
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      details: ''
    }
  },
  components: {
    Heading,
    Foot
  },
  methods: {
    postQuestion() {
      axios.post('http://localhost:3000/api/questions', {
        poster: this.$parent.userMeta._id,
        title: this.title,
        details: this.details
      }).then( (res) => {
        this.$router.push(`/questions/${res.data._id}`)
      }).catch( (err) => {
        res.send(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
