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

  // 周公解梦
  explainDreamsPage() {
    wx.navigateTo({
      url: '../sonofkami/explainDreams/index',
    })
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

// 什么给吧
whatdahell(e) {
  this.setData({
    whatafuk: !this.data.whatafuk
  })
},

// 音乐
openMusic(e) {
  wx.navigateTo({
    url: '../sonofkami/music/index',
  })
},

// 打开草稿
opencs(e) {
  wx.navigateTo({
    url: '../sonofkami/opencs/index',
  })
},

// 打开草稿2
opencs2(e) {
  wx.navigateTo({
    url: '../sonofkami/opencs2/index',
  })
},

//测试一号
test1(e) {
  wx.navigateTo({
    url: '../sonofkami/test1/index',
  })
},

//测试二号
test2(e) {
  wx.navigateTo({
    url: '../sonofkami/test2/index',
  })
},

//测试三号
test3(e) {
  wx.navigateTo({
    url: '../sonofkami/test3/index',
  })
},

//测试四号
test4(e) {
  wx.navigateTo({
    url: '../sonofkami/test4/index',
  })
},

//测试五号
test5(e) {
  wx.navigateTo({
    url: '../sonofkami/test5/index',
  })
},

//测试六号
test6(e) {
  wx.navigateTo({
    url: '../sonofkami/test6/index',
  })
},
//测试七号
test7(e) {
  wx.navigateTo({
    url: '../sonofkami/test7/index',
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