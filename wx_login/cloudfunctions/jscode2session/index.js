// 云函数入口文件
const cloud = require('wx-server-sdk')
const queryString = require('querystring')
const request = require('request');

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let { code } = event;
  console.log(code);
  let id = 'wxf440ec69475cbdbf';
  let secretKey = 'b8d5fc8dab3468f299f57459e0d4c4ea';
  const data = {
    appid: id,
    secret: secretKey,
    js_code: code,
    grant_type: 'authorization_code'
  }
  // ?a=1&b=2
  let url = `https://api.weixin.qq.com/sns/jscode2session?${queryString.stringify(data)}`
  console.log(url);
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        reject(error)
      } else {
        try {
          console.log(body);
          const r = JSON.parse(body);
          resolve(r);
        } catch(e) {
          reject(e)
        }
      }
    });
  })
  // 在session前， 后端， 操作小程序登录， 当然要小程序同意，

}