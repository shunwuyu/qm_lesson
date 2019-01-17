const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();

const router = new Router();
// router.get('/api', (ctx) => {
//   ctx.body = { msg: 'Hello World!' };
// });
router.get('/', (ctx) => {
  ctx.body = { msg: 'Hello World!' };
});
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('项目运行在3000端口上');
})