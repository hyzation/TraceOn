const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',  //手机号
    verifycode: '',  //手机验证码
    countdown: 60, //倒计时的初始值
    showcountdown: false, //控制显示倒计时
    info: {}, //要传的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      info: options,
    })
  },

  // 手机号值绑定
  bindinputphone(e) {
    this.setData({
      phone: e.detail.value,
    })
  },

  // 验证码值绑定
  bindinputcode(e) {
    this.setData({
      verifycode: e.detail.value,
    })
  },

  // 获取验证码
  getcode(e) {
    if (this.data.showcountdown == true) {
      return false
    }
    var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/; 0
    if (!myreg.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
      })
      return
    }
    this.countdown()  //倒计时
    app.api.sendVerifyCode({
      mobile: this.data.phone,
      event: 'auth',
    }).then(res => {
      console.log(res);
    })
    this.setData({
      showcountdown: true,
    })
  },

  //倒计时
  countdown(e) {
    let that = this
    let t = setInterval(() => {
      that.setData({
        countdown: that.data.countdown - 1,
      })
      if (that.data.countdown == 0) {
        clearInterval(t)
        this.setData({
          showcountdown: false,
          countdown: 60,
        })
      }
    }, 1000);
  },

  // 确认提交
  submit(e) {
    let code = this.data.verifycode
    let info = this.data.info
    if (this.data.verifycode.length != 4) {
      wx.showToast({
        title: '请输入正确的验证码',
        icon: 'none',
      })
      return
    } else {
      console.log(info);
      console.log(code);
      app.api.addaccount({
        type: info.type,
        name: info.name,
        account: info.account,
        is_company: info.is_company,
        collection_code: info.collection_code,
        verify_code: code,
      }).then(res => {
        wx.navigateTo({
          url: '/pages/my/withdrawal',
        })
      })
    }
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