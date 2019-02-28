const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports={
    mode:'development',     //热更新必备 development
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
                use: ['style-loader','css-loader','postcss-loader']         //这三个一般一起用
            },
            // {
            //     test:/\.(jpg|png|gif)$/i,
            //     use: {
            //         loader:'file-loader',        //处理大文件
            //         options:{
            //             outputPath:'images/'
            //         }
            //     }    
            // },
            {
                test:/\.(jpg|png|gif)$/i,
                use: {
                    loader:'url-loader',            //一般用这个  大小文件都可以处理 小文件可以base64 大文件可以处理
                    options:{
                        outputPath:'images/',
                        limit:502*1024              //小于502*1024转为base64
                    }
                }    
            },
            {
                test:/\.less$/i,
                use: ['style-loader','css-loader','less-loader']         //这三个一般一起用  
            },
            {
                test:/\.jsx$/i,
                exclude:/node_module/,  //除了这个文件不编译   
                use: {
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.js$/i,
                use: 'eslint-loader',         //这三个一般一起用  
                exclude:/node_module/,  //除了这个文件不编译   
                 
            },
        ], 
    },
    devtool:'source-map',       //页面js报错的时候 点击报错的js可以看到原始文件  而不是编译后的文件 调试十分方便
    // postcss-loader没法单独工作 需要autoprefixer协助
    // 帮助webpack增强功能
    // plugin:[
         
    // ]
}