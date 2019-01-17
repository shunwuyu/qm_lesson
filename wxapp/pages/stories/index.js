const app = getApp()

Page({
  data: {
    stories: [],
    currentVid: null,
    currentVideo: null
  },
  // 生命周期
  onLoad(options) {
    this.setData({
      video_src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      stories: app.globalData.stories
    })
  },
  play(event) {
    
    if (this.data.currentVid !== null) {
      this.data.currentVideo.pause();
    }  
    const vid = event.target.dataset.vid
    // console.log(vid);
    const currentVideo = wx.createVideoContext(`${vid}`)
    console.log(currentVideo);
    setTimeout(() => {
      console.log('sss');
      currentVideo.play()
    },10000)
   
    this.setData({
      currentVideo,
      currentVid: vid
    })
  }
});