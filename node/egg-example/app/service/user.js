const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.ctx.db.query('select * from user where uid=?', uid);
    return {
      name: user.user_name,
      age: user.age,
      picture
    }
  }
}

module.exports = UserService;