// pages/oshirisu/index.js
const BGM = wx.getBackgroundAudioManager()
const app = getApp()

Page({
  properties: {
  },


  /**
   * 页面的初始数据
   */
  data: {
    on: false,
    display: 'inline-block',
    showhaga: false,
    showtext: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 周公解梦
  explainDreamsPage() {
    wx.navigateTo({
      url: '../sonofkami/explainDreams/index',
    })
  },

  // 神之怒BGM
  // startbgm() {
  //   BGM.src = "http://m701.music.126.net/20210331154919/45ae22f4b810c9e658f303f1c5b398c3/jdyyaac/065c/005b/045b/1620e83a93715b41a470313d79ec8166.m4a"
  //   BGM.title = 'yugioh'   // 标题为必选项
  //   this.setData({ on: !this.data.on })
  //   if (this.data.on) {
  //     BGM.play()
  //     this.setData({ display: 'none', showhaga: true, showtext: false, })
  //   } else {
  //     BGM.pause()
  //   }
  // },
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