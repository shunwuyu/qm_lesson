const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    // this.ctx.body = 'hi, egg';
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    };
    // this.ctx.body = 'hi, egg';
    await this.ctx.render('news/list.tpl', dataList);
  }
  async item() {
    const id = this.ctx.params.id || null;
    console.log('---------------------',id);
    await this.ctx.render('news/item.tpl', id);
  }
}

module.exports = NewsController;
