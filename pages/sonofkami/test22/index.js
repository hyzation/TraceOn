// pages/sonofkami/test22/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rechargemoneylist: [{ xibei: 10, money: 1, isselected: false, },
    { xibei: 50, money: 5, isselected: false, },
    { xibei: 450, money: 45, rewardxibei: 45, isselected: false, },
    { xibei: 880, money: 88, rewardxibei: 88, isselected: false, },
    { xibei: 1980, money: 198, rewardxibei: 198, isselected: false, },
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let rechargemoneylist = this.data.rechargemoneylist
    let a =415
    if (rechargemoneylist.filter(item => item.money == a).length != 0) {
      console.log(111);
    }
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