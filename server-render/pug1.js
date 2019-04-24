const pug = require('pug');

// 文件  数据  回调函数
pug.renderFile('./template/1.pug',{
    pretty:true,
    title: 'aaa'，
    users:[
        {name:'a',age:1},
        {name:'b',age:2},

    ]
},(err,data)=>{
    if (err) {
        console.log('渲染失败')
    }else{
        console.log(data);
    }
})