// pages/sonofkami/opencs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //跳转到我的客户
  tomyclient(){
    wx.navigateTo({
      url: '../opencs2/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let restdays = that.getCurrentMonthDayNum() //调用本月天数方法
    var myDate = new Date();
    that.setData({
      progressone_w: 60,
      progresstwo_w: 20 ,
      currentmounth: myDate.getMonth()+1,
      restdays: restdays - myDate.getDate(),
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  // 计算当前月份天数并返回
  getCurrentMonthDayNum:function () {
    let today = new Date();
    let dayAllThisMonth = 31;
    if (today.getMonth() + 1 != 12) {
      let currentMonthStartDate = new Date(today.getFullYear() + "/" + (today.getMonth() + 1) + "/01"); // 本月1号的日期
      let nextMonthStartDate = new Date(today.getFullYear() + "/" + (today.getMonth() + 2) + "/01"); // 下个月1号的日期
      dayAllThisMonth = (nextMonthStartDate - currentMonthStartDate) / (24 * 3600 * 1000);
    }
    console.log(dayAllThisMonth);
    return dayAllThisMonth;
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