const Koa = require('koa');
var route = require('koa-route');
const app = new Koa();
var cors = require('koa-cors');
app.use(cors({
  origin: (ctx) => {
    if (ctx.url === '/cors') {
      return '*'
    }
    return 'http://127.0.0.1:62004'
  },
  maxAage: 5, //本次预检测请求的有效期
  allowMethods: ['GET', 'POST', 'DELETE'], //支持跨域请求的方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  crendentials: true
}));

app.use(route.get('/', function() {
  this.body = { msg: 'Hello World!' };
}));

app.use(route.post('/', function() {
  this.body = { msg: '非简单请求' };
}));

app.listen(3003, () => {
  console.log('项目运行在3003端口上');
})