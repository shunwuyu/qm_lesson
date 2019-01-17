// 云函数入口文件
const AppId = '1253981631';
const SecretId = "AKIDgSSXel5agp19KWvzGVgzMkAZyNnD8KtU";
const SecretKey = "qhYTOk79EUoAYxNoeaeHviWVVcnzEl9r";
const cloud = require('wx-server-sdk')
const fs = require('fs');  //module.exports
const path = require('path');
const { ImageClient } = require('image-node-sdk');
cloud.init()

let imageClient = new ImageClient({AppId, SecretId, SecretKey});
// 云函数入口函数
exports.main = async (event, context) => {
  return await imageClient.imgPornDetect({
    formData: {
      // node 文件系统 fs rwd+, path 提供路径对象
      image: fs.createReadStream(path.join(__dirname, './test.png'))
    },
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
}