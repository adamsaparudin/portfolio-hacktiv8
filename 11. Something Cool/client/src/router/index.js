import Vue from 'vue';
import Router from 'vue-router';
import Question from '@/components/Questions';
import QuestionOne from '@/components/QuestionOne/QuestionOne'
import CreateQuestion from '@/components/CreateQuestion'
import Login from '@/components/Login'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Question',
      component: Question,
    },
    {
      path: '/questions',
      name: 'Question',
      component: Question,
    },
    {
      path: '/create',
      name: 'CreateQuestion',
      component: CreateQuestion
    },
    {
      path: '/questions/:id',
      name: 'Question One',
      component: QuestionOne,
    },
  ],
});
