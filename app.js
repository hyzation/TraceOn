// app.js
App({
  onLaunch() {
    let that = this
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    that.showstatus()
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
  },

  watch: function (method) {
    var obj = this.globalData;
    Object.defineProperty(obj, "showtest1", {
      configurable: true,
      enumerable: true,
      set: function (value) {
        this._name = value;
        console.log('是否会被执行2')
        method(value);
      },
      get: function () {
        // 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.name的时候，这里就会执行。
        console.log(this._name);
        return this._name
      }
    })
  },

  showstatus() {
    let that = this
    setTimeout(function () {
      that.globalData.showtest1 = true
    }, 4000)
  },

  globalData: {
    userInfo: null,
    showtest1: false,
  }
})
