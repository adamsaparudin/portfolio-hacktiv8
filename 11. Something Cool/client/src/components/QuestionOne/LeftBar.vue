<template>
  <div class="container">
    <!-- <h1>{{ teks }}</h1>
    <button type="button" name="button" v-on:click="trigger1">Go</button> -->
          <h3>{{ questionOne.title }}</h3>
          <hr>
            <div class="mainbar">
                <div class="set-vote">
                    <ul>
                        <li><button v-on:click="voteQuestion(`http://localhost:3000/api/questions/${questionOne._id}/${$parent.$parent.userMeta._id}/upvote`)">Upvote</button></li>
                        <li>{{ questionOne.score }}</li>
                        <li><button v-on:click="voteQuestion(`http://localhost:3000/api/questions/${questionOne._id}/${$parent.$parent.userMeta._id}/downvote`)">Downvote</button></li>
                    </ul>
                </div>
                <div class="question-content">
                    <p>{{ questionOne.details }}</p>
                </div>
                <div class="clear"></div>
                <div class="meta-user">
                    <p>{{ questionOne.createdAt }}</p>
                    <img src="http://lorempixel.com/30/30/">
                    <span><a href="#">{{ questionOne.poster.username }}</a></span>
                </div>
                <div class="clear"></div>
                <h3>{{ questionOne.listAnswer.length }} Answers</h3>
                <hr>
            </div>

            <div class="mainbar" v-for="answerOne in questionOne.listAnswer">
                <div class="set-vote">
                    <ul>
                        <li><button v-on:click="voteAnswer(`http://localhost:3000/api/answer/${answerOne._id}/${$parent.$parent.userMeta._id}/upvote`)">Upvote</button></li>
                        <li>{{ answerOne.score }}</li>
                        <li><button v-on:click="voteAnswer(`http://localhost:3000/api/answer/${answerOne._id}/${$parent.$parent.userMeta._id}/downvote`)">Downvote</button></li>
                    </ul>
                </div>
                <div class="question-content">
                    <p>{{ answerOne.answer }}</p>
                </div>
                <div class="clear"></div>
                <div class="meta-user">
                    <p>{{ answerOne.createdAt }}</p>
                    <img src="http://lorempixel.com/30/30/">
                    <span><a href="#">{{ answerOne.poster.username }}</a></span>
                </div>
                <div class="clear"></div>
                <hr>
            </div>
            <div class="clear"></div>
    <h4>Your answer</h4>
    <div class="post-answer row">
      <div class="col-md-10" style="margin: 10px;">
        <textarea v-model="answer" class="form-control" rows="7" style="background-color: #fff"></textarea><br>

        <button type="button" v-on:click="postAnswer" name="button">Go Go Go</button>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'LeftBar',
    props: ['teks', 'questionOne'],
    data() {
      return {
        listQuestion: '',
        answer: ''
      }
    },
    methods: {
      trigger1() {
        this.$emit('trigger1')
      },
      voteQuestion(url) {
        axios.put(url, {})
        .then( (res) => {
          if(this.$parent.$parent.userMeta._id == undefined) {
            alert("please login first")
            return 0
          }
          if(res.data.score)
            this.questionOne.score = res.data.score
          else {
            console.log("Stupid Nigga");
          }
        })
        .catch( (error) => {
          console.log(error);
        })
      },
      voteAnswer(url) {
        axios.put(url, {})
        .then( (res) => {
          if(this.$parent.$parent.userMeta._id == undefined) {
            alert("please login first")
            return 0
          }
          if(res.data.score) {
            let ansInd = this.questionOne.listAnswer.findIndex(x => x._id == res.data._id)
            let index = this.questionOne.listAnswer[ansInd].listGiveScore.findIndex(x => x.user == this.$parent.$parent.userMeta._id)
            console.log(index);
            this.questionOne.listAnswer[ansInd].score = res.data.score
          }
          else {
            console.log("Stupid Nigga");
          }
        })
        .catch( (error) => {
          console.log(error);
        })
      },
      postAnswer() {
        if(this.$parent.$parent.userMeta._id == undefined) {
          alert("please login first")
          return 0
        }
        axios.post('http://localhost:3000/api/answer', {
          answer: this.answer,
          question: this.$route.params.id,
          poster: this.$parent.$parent.userMeta._id
        }).then( (res) => {
          console.log(res.data);
          window.location.href = `/questions/${res.data.question}`
        }).catch( (error) => {
          console.log(error);
        })
      }
    }
  };
</script>

<style>

  .meta-user img {
    float: right;
  }

  .meta-user p {
    font-size: 14px;
    margin: 0;
    padding: 0;
  }

  .meta-user span a {
    font-size: 14px;
  }

  .mainbar h3 {
    font-weight: 400;
    font-size: 16px;
  }

  .comment {
    padding: 0px 0px 0px 10px;
  }

  .comment p {
    font-size: 14px;
  }
  span {
    font-size: 20px;
    text-align: center;
  }
  p {
    font-size: 16px;
  }
</style>
