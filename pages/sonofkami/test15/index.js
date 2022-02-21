// pages/sonofkami/test15/index.js
import drawQrcode from '../../../utils/weapp.qrcode.esm.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    qrcodeimg: '',  //生成的二维码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.drawQrcode() // 生成二维码
  },

  // 生成二维码
  drawQrcode(e) {
    const query = wx.createSelectorQuery()
    let that = this
    query.select('#myQrcode')
      .fields({
        node: true,
        size: true
      })
      .exec(async (res) => {
        var canvas = res[0].node
        var img = canvas.createImage();
        img.src = "/imgs/logo.png"
        img.onload = function () {
          // img.onload完成后才能调用 drawQrcode方法
          var options = {
            canvas: canvas,
            canvasId: 'myQrcode',
            width: 260,
            padding: 30,
            paddingColor: '#fff',
            background: '#fff',
            foreground: '#000000',
            text: __config.invitepath + '?invite_code=' + e,
            image: {
              imageResource: img,
              width: 50, // 建议不要设置过大，以免影响扫码
              height: 50, // 建议不要设置过大，以免影响扫码
              round: true // Logo图片是否为圆形
            }
          }
          drawQrcode(options)

          // 获取临时路径（得到之后，想干嘛就干嘛了）
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 260,
            height: 260,
            destWidth: 600,
            destHeight: 600,
            canvasId: 'myQrcode',
            canvas: canvas,
            success(res) {
              console.log('二维码临时路径为：', res.tempFilePath)
              that.setData({
                qrcodeimg: res.tempFilePath,
              })
            },
            fail(res) {
              console.error(res)
            }
          })

        };
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