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
    markers: [  //地图markers
      {
        latitude: '',
        longitude: '',
        title: '',
        width: 20,
        height: 30
      }
    ],
    whatafuk: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 地图
  getmap(e) {
    var that = this
    //获取当前的地理位置、速度
    wx.chooseLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        console.log(res);
        let lon = res.longitude
        let lai = res.latitude
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude: lai,//要去的纬度-地址
          longitude: lon,//要去的经度-地址
        })
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  // 测试红米navigateback
  testnaviback(e) {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
      },
      fail: (res2) => {
        console.log(res2);
        wx.navigateBack({
          delta: 1
        })
      }

    })
  },

  // 测试wx.getUserProfile弹两次
  getlogin(e) {
    app.getlogin()
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