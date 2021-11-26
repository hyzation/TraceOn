// pages/sonofkami/test5/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    h: wx.getSystemInfoSync().windowHeight - 1 //窗口高度 必须-1px 否则某些情况会显示滚动条
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取随机颜色
    function num() {
      let num = new String()
      for (let i = 0; i < 6; i++) {
        num += Math.floor(Math.random() * 10)
      }
      return '#' + num
    }
    // 获取随机颜色数组
    let arr = new Array()
    for (let i = 0; i < 20; i++) {
      arr.push(num())
    }
    // 视图传值
    this.setData({
      list: arr
    })
  },

  scrollToLower(e) {
    console.log(e);
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