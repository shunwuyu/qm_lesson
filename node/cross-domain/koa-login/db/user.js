const mongoose = require('./db')
const Schema = mongoose.Schema;

const ceshiSchema = new Schema({
  email: String,
  name: String,
  password: String
});

const UserModel = mongoose.model('User', ceshiSchema);

class Userdb {
  constructor () {

  }
// 查询
  query (obj = {}) {
     return new Promise((resolve, reject) => {
       UserModel.find(obj, (err, res) => {
         if(err) {
           reject(err)
         }
         resolve(res)
       })
     })
  }
queryEmail (em) {
  // console.log(em);
   return new Promise((resolve, reject) => {
    UserModel.find({email: em}, (err, res) => {
       if(err) {
         reject(err)
       }
       const len = res.length
       if(len >= 1){
         // 存在
         resolve(res)
       }else {
         // 不存在
         resolve(null)
       }
     })
   })
}
  save (obj) {
     const m = new UserModel(obj)
     return new Promise((resolve, reject)=> {
       m.save((err, res) => {
         if (err) {
           reject(err)
         }
         resolve(res)
         console.log(res)
       })
     })
     
  }
}
module.exports = new Userdb()