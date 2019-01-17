const Router = require('koa-router');

const User = require('../db/user')
const home = new Router();

home.get('/', async (ctx) => {
  let title = '首页'
  ctx.cookies.set('username', 'lisa', {
    domain: 'localhost',
    path: '/',
    maxAge: 1000*60*60*10,
    // expires: new Date('2019-07-06'),
    httpOnly: true,
    overwrite: false
  })
  await ctx.render('index', {
    title
  })
})

const login = new Router()

login.get('/', async (ctx) => {
  let title = "登录"
  await ctx.render('login', {
      title
  })
}).post('/', async (ctx) => {
  const data = ctx.request.body
  let queryres = await User.queryEmail(data.email)
  console.log(queryres)
  if (queryres) {
      if(queryres[0].password === data.password) {
          ctx.body = {
              'code': 1,
              'data': queryres[0],
              'mesg': '登录成功'
          }
      }else {
          ctx.body = {
              'code': 0,
              'data': {},
              'mesg': '密码错误'
          }
      }
  }else {
      ctx.body = {
          'code': 0,
          'data': {},
          'mesg': '没有该用户，去注册吧'
      }
  }
})



const register = new Router()
register.get('/', async (ctx) => {
  let title = '注册'
  await ctx.render('register', {
    title
  })
}).post('/', async (ctx) => {
  // console.log(ctx.request.body);
  const data = ctx.request.body
  let queryres = await User.queryEmail(data.email)
  console.log(queryres);
  if (queryres) {
    ctx.body = {
      'code': 0,
      'data': {},
      'mesg': '该邮箱已经存在哦'
    }
  } else {
    await User.save(data)
    ctx.body = {
      'code': 1,
      'data': {},
      'mesg': '保存成功'
    }
  }
});

let router = new Router()
router.use('/', home.routes(), home.allowedMethods());
router.use('/register', register.routes(), 
register.allowedMethods());
router.use('/login', login.routes(), login.allowedMethods())
module.exports = router