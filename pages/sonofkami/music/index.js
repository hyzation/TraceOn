// pages/sonofkami/music/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyprice: '', //买入价格
    steamprice: '',  //steam价格
    discount: '', //折扣
    discountList: [], //缓存中的折扣数组
  },



  buyprice(e) {
    console.log(e.detail.value);
    this.setData({
      buyprice: e.detail.value
    })
  },

  steamprice(e) {
    console.log(e.detail.value);
    this.setData({
      steamprice: e.detail.value
    })
  },

  // 点击获取折扣
  getresult(e) {
    let that = this
    if (this.data.buyprice == '' || this.data.steamprice == '') {
      wx.showToast({
        title: '???',
        icon: 'none',
      })
      return
    }
    let a = Number(this.data.buyprice)
    let b = Number(this.data.steamprice)
    let c = (a / (b * 0.8696)).toFixed(3)
    console.log(c);
    // if(){
    //   return
    // }
    this.setData({
      discount: c,
    })
    // 获取缓存的折扣记录，没有则创建新数组
    let d = wx.getStorageSync('discount') || []
    console.log(d);
    d.push({
      id: d.length,
      value: c,
    })
    wx.setStorage({
      key: 'discount',
      data: d,
    }).then(res => {
      let e = wx.getStorageSync('discount')
      that.setData({
        discountList: e.reverse(),
      })
    })

  },
  // 删除所有缓存记录
  deleteAll(e) {
    let that = this
    console.log(this.data.discountList);
    if (this.data.discountList.length < 1) {
      wx.showToast({
        title: '!!!',
        icon: 'none',
      })
      return
    }
    wx.showModal({
      title: '提示',
      content: '确认删除所有记录？',
      success(res) {
        if (res.confirm) {
          wx.clearStorage({
            success: (res) => {
              that.setData({
                discountList: [],
              })
              wx.showToast({
                title: '没了',
                icon: 'none',
              })
            },
          })
          console.log('用户点击确定')
        } else if (res.cancel) { }
      }
    })
  },

  //删除单条记录
  deletesingle(e) {
    let f = e.currentTarget.dataset.type
    let g = wx.getStorageSync('discount')
    console.log(f);
    console.log(g);
    g.forEach((item, index) => {
      if (item.id == f) {
        g.splice(index, 1)
      }
    })
    console.log(g);
    wx.setStorageSync('discount', g)
    this.setData({
      discountList: g.reverse(),
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let e = wx.getStorageSync('discount')
    if (e.length > 0) {
      this.setData({
        discountList: e.reverse(),
      })
    }
  },

    // 开始聊天
    letschat() {
      wx.request({
        url: 'https://api.openai.com/v1/completions',
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        data: {
          "prompt": 'can u speak english',
          "max_tokens": 2048,
          "model": "text-davinci-003",
          "temperature": 0,
        },
        success(res) {
          console.log(res.data)
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