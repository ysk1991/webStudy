const http = require('http');
const fs = require('fs');
// request 客户端传给node的
// respones node传给客户端的
let server = http.createServer((req,res)=>{
    console.log(req.url);   //用户请求的地址   /1.html  绝对路径
    fs.readFile(`www${req.url}`,(err,buffer)=>{
        if(err){
            res.writeHeader(404);
            res.write('Not Found');
            res.end();
        }else{
            res.write(buffer);
            res.end();
        }
    });
})
server.listen(8080);