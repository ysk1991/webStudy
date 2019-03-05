import New1 from './new1';
import New2 from './new2';
import news_header from "./news_header";
export default {
    template: `
        <div class="">
            新闻
            <router-view name="header"></router-view>
            <router-view></router-view>
        </div>
    `
} 


export let router = [
    {
        path: '1', // 子路由不要用绝对路径   ／1 是错的  
        name: 'new1',
        components: {
            header: news_header,    //  对应router-view的name 
            default: New1
        }
    },
    {
        path: '2',
        components: {
            header: news_header,
            default: New2
        }
    }
]