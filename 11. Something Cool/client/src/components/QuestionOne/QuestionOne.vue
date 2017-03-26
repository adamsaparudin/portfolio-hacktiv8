<template>
  <div class="Question">
    <Heading></Heading>
    <div class="row">
      <LeftBar v-bind:teks="msg" v-bind:questionOne="questionOne"></LeftBar>
      <RightBar></RightBar>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>

  import Heading from '../Heading';
  import Foot from '../Foot';
  import LeftBar from './LeftBar';
  import RightBar from '../RightBar';
  import axios from 'axios'

  export default {
    name: 'QuestionOne',
    components: {
      Heading,
      Foot,
      LeftBar,
      RightBar,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        questionOne: '',
      };
    },

    mounted: function() {
      this.getQuestionOne()
    },

    methods: {
      gantiTeks() {
        this.msg = "Tamvan Ganteng Sekalee..."
      },

      getQuestionOne() {
        axios.get('http://localhost:3000/api/questions/' + this.$route.params.id)
          .then( (res) => {
            this.questionOne = res.data
          }).catch( (err) => {
            console.log(err);
          })
      },
    }
  };
</script>

<style scooped>

</style>
