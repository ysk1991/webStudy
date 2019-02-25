// 文件操作
const fs = require('fs');
// fs.writeFile(path,data,callback);
// fs.readFile(path,callback)
// fs.writeFileSync
// fs.readFileSync


// 写入文件
fs.writeFile('./a.txt','{a:1}',err=>{
    if(err){
        console.log('失败')
    }else{
        console.log('成功')
    }
})


// 读取文件
fs.readFile('./a.txt',(err,data)=>{
    if(err){
        console.log('失败',err);
    }else{
        console.log(data.toString());
    }
})