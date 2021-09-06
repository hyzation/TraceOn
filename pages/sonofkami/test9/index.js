// pages/sonofkami/test9/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 20,
      info: '你稍等会覅四idfh斯蒂芬和i速发货i收到回复i收到回复isdfhi是否hi收到发hi收到覅但是'
    },
    {
      id: 21,
      info: '你稍等会覅四idfh斯蒂芬和i速发货i收到回复i收到回复isdfhi是否hi收到发hi收到覅但是'
    },
    {
      id: 22,
      info: '你稍等会覅四idfh斯蒂芬和i速发货i收到回复i收到回复isdfhi是否hi收到发hi收到覅但是'
    },
    {
      id: 23,
      info: '你稍等会覅四idfh斯蒂芬和i速发货i收到回复i收到回复isdfhi是否hi收到发hi收到覅但是'
    },
    {
      id: 24,
      info: '你稍等会覅四idfh斯蒂芬和i速发货i收到回复i收到回复isdfhi是否hi收到发hi收到覅但是'
    },
    {
      id: 25,
      info: '你稍等会覅四idfh斯蒂芬和i速发货i收到回复i收到回复isdfhi是否hi收到发hi收到覅但是'
    }
    ],
    position: 'center',
    duration: 300,
    show: false,
    overlay: false,
    contact: {},
  },
  showNext(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      show: true,
      contact: this.data.list[index]
    })
  },

  showPrev() {
    this.setData({
      show: false
    })
  },

  onBeforeEnter(res) {
    console.log(res)
  },
  onEnter(res) {
    console.log(res)
  },
  onAfterEnter(res) {
    console.log(res)
  },
  onBeforeLeave(res) {
    console.log(res)
  },
  onLeave(res) {
    console.log(res)
  },
  onAfterLeave(res) {
    console.log(res)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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