// pages/sonofkami/gyroscope/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.demo()
  },

  demo() {
    let self = this;
    // 陀螺仪
    // wx.startGyroscope({
    //   interval: 'interval',
    //   success(data){
    //     console.log(data)
    //   },
    //   fail(err){
    //     console.log(err)
    //   }
    // });
    // wx.onGyroscopeChange((result) => {
    //   console.log('陀螺仪：',-(result.y * 100).toFixed(2))// 测转动的速度值。而不是角度值。速度越大，值越大。速度为0，值为0；
    //   var xVal = -(result.y * 100).toFixed(2);
    //   var yVal = (result.x * 100).toFixed(2);
    //   self.setData({
    //     x: xVal > 40 ? 40 : (xVal < -40 ? -40 : xVal),
    //     y: yVal > 40 ? 40 : (yVal < -40 ? -40 : yVal),
    //   })
    // })

    // 设备方向
    wx.startDeviceMotionListening({
      interval: 'ui',
    });
    wx.onDeviceMotionChange((result) => {
      // console.log('设备方向：', result); //alpha,beta,gamma
      console.log(result.alpha, result.beta, result.gamma, );
      // var xVal = -(result.gamma).toFixed(2) / 5;
      // var yVal = -(result.beta - 30).toFixed(2) / 5;
      // self.setData({
      //   x: xVal > 10 ? 10 : (xVal < -10 ? -10 : xVal),
      //   y: yVal > 10 ? 10 : (yVal < -10 ? -10 : yVal),
      // })
      self.setData({
        x: -(result.gamma).toFixed(2) / 2,
        y: -(result.beta).toFixed(2) / 2,
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.setData({
      isOnAccelerometerChange: false
    })
    wx.stopAccelerometer({})
    wx.stopGyroscope({})
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})