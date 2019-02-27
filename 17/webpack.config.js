const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports={
    mode:'development',
    // entry:{     //入口可以单入口 可以多入口 多入口就是json  一般使用单入口
    //     index:'./src/js/1.js',
    //     admin: './src/js/2.js'
    // },
    entry: {  
        index: './src/js/1.js', 
    },
    output:{
        path:path.resolve(__dirname,'build'),
        // filename:'[name].min.js'            //双入口 名字是占位符
        filename: 'bundle.min.js'
    },
    module:{
        // import只认识js  要认识其他scss sass 文件 图片 都需要loader 没有loader，webpack就是一坨屎
        // loader：loader从后面开始执行 顺序是反的 css先到cssloader 再到styleloader
        // css-loder让webpack认识css 变成字符串  style-loader 创建style标签塞进body
        rules:[     
            {
                test:/\.css$/,
                use: ['style-loader','css-loader','postcss-loader']      
            }
        ]
    },
    // postcss-loader没法单独工作 需要autoprefixer协助
    // 帮助webpack增强功能
    // plugin:[
         
    // ]
}