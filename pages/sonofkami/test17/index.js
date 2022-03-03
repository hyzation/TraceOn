// pages/sonofkami/test17/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 云函数
  getcloud(e) {
    let id = 10732
    // // 调用云函数
    // wx.cloud.callFunction({
    //   // 云函数名称
    //   name: 'wx_qrcode',
    //   // 传给云函数的参数
    //   data: {
    //     url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxb54ff4bf4ab174d0&secret=866c74ee0841838ac361497e48fa5b27',
    //   }
    // }).then(res => {
    //   console.log(res)
    // })
    //   .catch(console.error)

    wx.cloud.callFunction({
      name: "wx_qrcode",
      data: {
        page: 'pages/oshirisu/index',
        scene: id,
        // thumbs_up_task_id: 111,
        env_version: "develop"
      },
      success: res => {
        console.log(res)
        this.setData({
          src2: res.result.tempFileURL,
        })
        // wx.previewImage({
        //   urls: [res.result.fileID],
        // })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})