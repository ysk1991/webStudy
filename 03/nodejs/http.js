// 系统模块 node自带
const http = require('http');

//自动创建一个服务器
let server = http.createServer(()=>{
    console.log('这是一个请求');
});    
// 监听 等待别人来连接他
server.listen(8080);
