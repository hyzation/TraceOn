// pages/obelisk/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [
      {
        latitude: '',
        longitude: '',
        title: '',
        width: 20,
        height: 30
      }
    ]
  },

  getmap(e) {
    var that = this
    //获取当前的地理位置、速度
    wx.chooseLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        let lon = res.longitude
        let lai = res.latitude
        //赋值经纬度
        // that.setData({
        //   markers: [
        //     {
        //       latitude: res.latitude,
        //       longitude: res.longitude,
        //       title: res.address,
        //       width: 20,
        //       height: 30
        //     }
        //   ]
        // })
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude: lai,//要去的纬度-地址
          longitude: lon,//要去的经度-地址
        })
      }
    })
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