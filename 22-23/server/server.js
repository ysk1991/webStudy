const Koa = require('koa');
const static = require('koa-static');

let server = new Koa();

server.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin','*');
    await next();
})

server.listen(8081);
server.use(static('./static'));