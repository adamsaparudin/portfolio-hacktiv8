<template>
  <div class="Question">
    <Heading></Heading>
      <LeftBar v-bind:teks="msg" @trigger1="getQuestions" v-bind:questions="questions"></LeftBar>
      <RightBar></RightBar>
    <div class="clear"></div>
    <Foot></Foot>
  </div>
</template>

<script>

  import Heading from './Heading';
  import Foot from './Foot';
  import LeftBar from './LeftBar';
  import RightBar from './RightBar';
  import axios from 'axios'

  export default {
    name: 'Question',
    components: {
      Heading,
      Foot,
      LeftBar,
      RightBar,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        questions: ''
      };
    },

    mounted: function() {
      this.getQuestions()
    },

    methods: {
      gantiTeks() {
        this.msg = "Tamvan Ganteng Sekalee..."
      },

      getQuestions() {
        axios.get('http://localhost:3000/api/questions')
          .then( (res) => {
            this.questions = res.data
            console.log(res.data);
          })
          .catch( (err) => {
            console.log(err);
          })
      }
    }
  };
</script>

<style scooped>

</style>
