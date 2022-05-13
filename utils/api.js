const request = (url, method, data, showLoading) => {
  let _url = url
  // console.log(_url);  //康康地址
  let tktk = wx.getStorageSync('thetoken')
  return new Promise((resolve, reject) => {
    if (showLoading) {
      wx.showLoading({
        title: '加载中',
      })
    }
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'app-id': wx.getAccountInfoSync().miniProgram.appId,
        'third-session': getApp().globalData.thirdSession != null ? getApp().globalData.thirdSession : '',
        'Authorization': 'Bearer ' + tktk
      },
      success(res) {
        if (res.statusCode == 200) {
          resolve(res.data)
        } else if (res.statusCode == 404) {
          wx.showModal({
            title: '提示',
            content: '接口请求出错，请检查手机网络',
            success(res) {
            }
          })
          reject()
        } else {
          console.log(res)
          wx.showModal({
            title: '提示',
            content: res.errMsg + ':' + res.data.message + res.data.msg,
            success(res) {
            }
          })
          reject()
        }
      },
      fail(error) {
        console.log(error)
        wx.showModal({
          title: '提示',
          content: '接口请求出错：' + error.errMsg,
          success(res) {

          }
        })
        reject(error)
      },
      complete(res) {
        if (showLoading) {
          wx.hideLoading()
        }
      }
    })
  })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function (callback) {
  var Promise = this.constructor;
  return this.then(
    function (value) {
      Promise.resolve(callback()).then(
        function () {
          return value;
        }
      );
    },
    function (reason) {
      Promise.resolve(callback()).then(
        function () {
          throw reason;
        }
      );
    }
  );
}

module.exports = {
  request,
  // 接口地址
  searchDream: (data) => { //周公解梦
    return request('https://api.tianapi.com/txapi/dream/index', 'GET', data, true)
  },
  exchangerate: (data) => { //汇率
    return request('https://open.er-api.com/v6/latest/CNY', 'GET', data, true)
  },
}