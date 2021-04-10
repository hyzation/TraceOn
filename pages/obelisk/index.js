// pages/obelisk/index.js
var QQMapWX = require('../../static/qqmap-wx-jssdk.min.js');
const demo = new QQMapWX({
  key: '72MBZ-PNZWQ-BBZ5V-GAEO6-BACNV-WGBTP' // 必填
});
// demo.search({
//   keyword: '厕所',
//   success: function (res) {
//     console.log(res.status, res.message);
//     console.log(res);
//   },
//   fail: function (res) {
//     console.log(res.status, res.message);
//   },
//   complete: function (res) {
//     console.log(res.status, res.message);
//   }
// });

Page({


  /**
   * 页面的初始数据
   */
  data: {
    longitude: null,
    latitude: null,
    distance: '',
    markers: [],
    quicklon: 0,
    quicklai: 0,
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //页面加载时获取当前位置
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res);
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  },

  // 获取地图
  getTheMap() {
    this.getTheToilet()
  },

  //点击地图上图标后触发事件
  bindmarkertap(e){
    console.log(e);
    console.log(this.data.markers);
    var _this = this
    this.data.markers.forEach(item => {
      // console.log(Number(item.markerId))
      // console.log(e.detail.markerId)
      if(Number(item.markerId) == e.detail.markerId){
        _this.setData({
          quicklon: Number(item.longitude),
          quicklai: Number(item.latitude)
        })
      }
    })
    demo.direction({
      mode: 'walking',//可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行），不填默认：'driving',可不填
      //from参数不填默认当前地址
      //from: e.detail.value.start,
      to: {
        longitude: _this.data.quicklon,
        latitude: _this.data.quicklai,
      }, 
      success: function (res) {
        console.log(res);
        var ret = res;
        var coors = ret.result.routes[0].polyline, pl = [];
        //坐标解压（返回的点串坐标，通过前向差分进行压缩）
        var kr = 1000000;
        for (var i = 2; i < coors.length; i++) {
          coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
        }
        //将解压后的坐标放入点串数组pl中
        for (var i = 0; i < coors.length; i += 2) {
          pl.push({ latitude: coors[i], longitude: coors[i + 1] })
        }
        console.log(pl)
        //设置polyline属性，将路线显示出来,将解压坐标第一个数据作为起点
        _this.setData({
          latitude:pl[0].latitude,
          longitude:pl[0].longitude,
          polyline: [{
            points: pl,
            color: '#62a1c9',
            width: 4
          }]
        })
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
        _this.setData({
          distance: res.result.routes[0].distance,
        })
      }
    });
  },
  // 点击地图位置后触发事件
  // getMapPosition(e){
  //   console.log(e);
  //   var _this = this
  //   demo.direction({
  //     mode: 'walking',//可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行），不填默认：'driving',可不填
  //     //from参数不填默认当前地址
  //     //from: e.detail.value.start,
  //     to: {
  //       longitude: e.detail.longitude,
  //       latitude: e.detail.latitude,
  //     }, 
  //     success: function (res) {
  //       console.log(res);
  //       var ret = res;
  //       var coors = ret.result.routes[0].polyline, pl = [];
  //       //坐标解压（返回的点串坐标，通过前向差分进行压缩）
  //       var kr = 1000000;
  //       for (var i = 2; i < coors.length; i++) {
  //         coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
  //       }
  //       //将解压后的坐标放入点串数组pl中
  //       for (var i = 0; i < coors.length; i += 2) {
  //         pl.push({ latitude: coors[i], longitude: coors[i + 1] })
  //       }
  //       console.log(pl)
  //       //设置polyline属性，将路线显示出来,将解压坐标第一个数据作为起点
  //       _this.setData({
  //         latitude:pl[0].latitude,
  //         longitude:pl[0].longitude,
  //         polyline: [{
  //           points: pl,
  //           color: '#62a1c9',
  //           width: 4
  //         }]
  //       })
  //     },
  //     fail: function (error) {
  //       console.error(error);
  //     },
  //     complete: function (res) {
  //       console.log(res);
  //       _this.setData({
  //         distance: res.result.routes[0].distance,
  //       })
  //     }
  //   });
  // },

  // 厕所位置
  getTheToilet() {
    var _this = this;
    // var demo = new QQMapWX({
    //   key: '72MBZ-PNZWQ-BBZ5V-GAEO6-BACNV-WGBTP' // 必填
    // });
    demo.search({
      keyword: '厕所',
      success: function (res) {
        console.log(res);
        var mks = []  //这里存放所有搜索到的地址信息的数组
        for (let i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            //title: res.data[i].title,
            title: "香格里拉" + [i] + "号",
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "../../imgs/icon/toilet.png", //图标路径
            width: 20,
            height: 20,
            markerId:90000000 + [i]
          })
        }
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks
        })
        console.log(_this.data.markers);
      },
      // fail: function (res) {
      //   console.log(res.status, res.message);
      // },
      // complete: function (res) {
      //   console.log(res.status, res.message);
      // }
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})