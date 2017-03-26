<template>
  <div class="col-md-9" id="left">
    <!-- <h1>{{ teks }}</h1>
    <button type="button" name="button" v-on:click="trigger1">Go</button> -->

    <div class="container">
        <div class="mainbar">
            <h1>Top Questions</h1>
            <div class="question-one" v-for="question in questions">
                <div class="votes">
                    <ul>
                        <li>
                            <span>{{ question.score }}</span>
                            <div>votes</div>
                        </li>
                        <li>
                            <span>{{ question.listAnswer.length }}</span>
                            <div>answers</div>
                        </li>
                        <li>
                            <span>2</span>
                            <div>views</div>
                        </li>
                    </ul>
                </div>
                <div class="meta-question">
                    <router-link :to="'/questions/' + question._id"><h2>{{ question.title }}</h2></router-link>
                    <div class="meta-user"><span>asked 36 secs ago</span> <a href="#">{{ question.poster.username }}</a></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios';

  export default {
    name: 'LeftBar',
    props: ['teks', 'questions'],
    data() {
      return {
        listQuestion: '',
      }
    },
    methods: {
        trigger1() {
          this.$emit('trigger1')
        }
    }
  };
</script>

<style>
.meta-question h2 {
  font-weight: 400;
  font-size: 18px;
  color: #2598f7;
}
  #left {
    background-color: lightgreen;
  }
  span {
    font-size: 20px;
    text-align: center;
  }
</style>
