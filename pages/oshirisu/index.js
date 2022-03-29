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
        console.log(res)
        if (res.errMsg === "chooseLocation:fail auth deny") {
          console.log("打开设置窗口");
          wx.showModal({
            title: '提示',
            content: '获取权限失败，点击确定获取权限',
            success(res) {
              if (res.confirm) {
                wx.openSetting({
                  success(res) {
                    console.log(res.authSetting)
                    // res.authSetting = {
                    //   "scope.userInfo": true,
                    //   "scope.userLocation": true
                    // }
                  }
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      }
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