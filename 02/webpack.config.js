const path = require('path'); // 路径

console.log(__dirname); // 当前脚本所在的工作目录 : /Users/apple/Desktop/webStudy/02

module.exports = {
     mode:'production',  //生产模式
     entry:'./index.js',  //ndoejs里面 同级目录必须加 ./
     output:{
         path: path.resolve(__dirname, 'build'), // __dirname 一级目录  build 二级目录 
         filename: 'bundle.js',
     }
}