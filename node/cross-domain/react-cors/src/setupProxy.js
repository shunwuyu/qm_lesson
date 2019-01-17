const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
    "target": 'http://localhost:3000/',
    "changeOrigin": true,
    "pathRewrite": {
      '^/api' : '',     // 重写请求，比如
    },
  }));
};