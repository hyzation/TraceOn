// pages/sonofkami/explainDreams/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whatDream: '',
    dreamResult: [],
    dreamCode: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  getWhatDream(e) {
    this.setData({
      whatDream: e.detail.value,
    })
  },
  // 周公解梦
  searchDream(e) {
    let that = this;
    wx.request({
      url: 'http://api.tianapi.com/txapi/dream/index',
      method: 'GET',
      data: {
        key: '3d111995e28a1836c2c8c726fa6fd969',
        num: 2,
        word: that.data.whatDream,
      },
      success: function (res) {
        if (res.data.code == 250) {
          wx.showToast({
            title: '解不了',
            icon: "none",
            duration: 2000
          })
        } else if (res.data.code == 260) {
          wx.showToast({
            title: '解个P',
            icon: "none",
            duration: 2000
          })
        } else {
          that.setData({
            dreamResult: res.data.newslist
          })
        }
      },
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