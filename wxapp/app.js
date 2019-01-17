//app.js
App({
  onLaunch: function () {
    // console.log('应用起动了');
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bca9240e6742c1bf8220bbd/kicamp/video#!method=get',
      success: (response) => {
        Object.assign(this.globalData, response.data);
      }
    })
  },
  // 全局的数据 App.js 是全局的，
  // 用户的登录状态
  globalData: {
  }
})