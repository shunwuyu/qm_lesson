const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
var router = new Router();

router.get('/', async (ctx) => {
  const data = {uid: '1000'};
  const callback = ctx.request.query.callback || null;
  ctx.body = `${callback}(${JSON.stringify(data)})`;
}); 

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3002, () => {
  console.log('项目运行在3002端口上');
})