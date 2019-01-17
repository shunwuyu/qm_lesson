const Koa = require('koa')
const app = new Koa()
const path = require('path')
const router =  require('./router')
const statics =  require('koa-static')
const bodyparser = require('koa-bodyparser')
const views = require('koa-views');
const session = require('koa-session');
const staticPath = './static'

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use(bodyparser())

app.use(statics(
  path.join(__dirname, staticPath)
))

app.use(views(path.join(__dirname, './views'), {
  extendsion: 'ejs'
}));

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('localhost:3000')
})