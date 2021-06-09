// pages/sonofkami/test5/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    word: ' IAMHIGHESTINTHEROOMIAMHIGHESTINTHEROOMIAMHIGHESTINTHEROOM',
    animation1: {},
    animation2: {},
    itemwidth: '',
    size: 15,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.createSelectorQuery().selectAll('.npl-intro').boundingClientRect(function (rect) {
      console.log(rect[0].height)
      console.log(rect[0].width)
      that.setData({
        itemwidth: rect[0].width,
      })
    }).exec()
  },

  touch: function () {
    var that = this;
    var length = this.data.itemwidth;//文字长度
    var boxwidth = 331;// 外盒宽度
    var distence = length - boxwidth
    let animation1 = wx.createAnimation({
      timingFunction: 'ease'
    });

    // setInterval(function () {
    animation1.translateX(-distence * 0.5).step({ duration: 1000 })
    animation1.translateX(0).step({ duration: 1000 })
    that.setData({
      animation1: animation1.export()
    });
    // }, 2000)

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