import Vue  from "vue";
import Router from 'vue-router';
import User from '@/user.vue';
import News from '@/news.vue';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name: 'user',
            component: User
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
    ]
})