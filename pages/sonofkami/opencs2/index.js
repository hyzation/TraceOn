// pages/sonofkami/opencs2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theValue: 0,  //tab页索引值
    currentTab: 0,  //tab初始页，默认0
    swiperboxheight: '100vh',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //  tab切换逻辑
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
        theValue: e.target.dataset.current,
        result: 0,
        actual_amount: '',
        period: '',
        period_money: '',
        swiperboxheight: '100vh',
      })
    }
  },

  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current,
      theValue: e.detail.current,
      result: 0,
      actual_amount: '',
      periods: '',
      span: '',
      amount_each: '',
      Interest: '',
      stage: [{ money: '', periods_num: '' }],
      swiperboxheight: '100vh',
    });
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
    console.log(222);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})