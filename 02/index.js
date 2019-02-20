// mod1 假设是比较重要的  所以需要同步引入
// mod2 假设是不重要 而且体积大 所以异步引入
import a from './mod1';     //非常常用!  使用export default 输出 就用这种方式引入 
alert(a)

import('./mod2').then(mod2=>{
    alert(mod2.qq);
},err=>{
    alert('mod2就加载失败');
});
console.log(mod1);