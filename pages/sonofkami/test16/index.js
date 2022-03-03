const app = getApp()

Page({
  data: {
    src2: '',
  },
  onLoad: function (options) {
    var that = this;
    var scene = decodeURIComponent(options.scene)

    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxb54ff4bf4ab174d0&secret=866c74ee0841838ac361497e48fa5b27',
      data: {
        // scene: '000',
        // page: "pages/ketang/group/group"
      },
      method: "GET",
      // responseType: 'arraybuffer',  //设置响应类型
      success(res) {
        console.log(res.data.access_token)
        let token = res.data.access_token
        wx.request({
          url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + token,
          data: {
            "page": "pages/oshirisu/index",
            "scene": "a=1&b=2",
            "check_path": true,
            "env_version": "develop"
          },
          method: "POST",
          responseType: 'arraybuffer',
          success(res) {
            let src2 = wx.arrayBufferToBase64(res.data);
            that.setData({
              src2
            })
            // console.log(src2);
          },
          fail(e) {
            console.log(e)
          }
        })
      },
      fail(e) {
        console.log(e)
      }
    })

    // 生成页面的二维码
    // wx.request({
    //   url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN',
    //   data: {
    //     scene: '000',
    //     page: "pages/ketang/group/group"
    //   },
    //   method: "POST",
    //   responseType: 'arraybuffer',  //设置响应类型
    //   success(res) {
    //     console.log(res)
    //     var src2 = wx.arrayBufferToBase64(res.data);  //对数据进行转换操作
    //     console.log(src2);
    //     that.setData({
    //       src2
    //     })
    //   },
    //   fail(e) {
    //     console.log(e)
    //   }
    // })


  },

})