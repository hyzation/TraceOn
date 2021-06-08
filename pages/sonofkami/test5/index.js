// pages/sonofkami/test5/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    word: 'I AM HIGHEST IN THE ROOM',
    animation1: {},
    animation2: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  touch: function () {
    console.log(123);
    var windowWidth = wx.getSystemInfoSync().windowWidth
    let animation1 = wx.createAnimation({
      translateX: "-20rpx 0",
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    });
    animation1.translateX(-windowWidth * 0.5).step({ duration: 1000 });
    this.setData({
      animation1: animation1.export()
    });
    // let animation2 = wx.createAnimation({
    //   transformOrigin: "50% 50%",
    //   duration: 1000,
    //   timingFunction: "ease",
    //   delay: 0
    // });
    // animation2.opacity(1.0).step({ duration: 1000 });
    // this.setData({
    //   animation2: animation2.export()
    // });
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