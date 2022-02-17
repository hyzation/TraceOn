// pages/sonofkami/test13/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: '',
    options: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  canvasDraw() {
    let options = [
      {
        type: 'rect',
        width: 750,
        height: 1334,
        top: 0,
        left: 0,
        background: '#fff'
      },
      {
        type: 'image',
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2699863970,3643884691&fm=26&gp=0.jpg',
        width: 750,
        height: 994,
        round: false,
        top: 0,
        left: 0,
      },
      {
        type: 'image',
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg',
        width: 100,
        height: 100,
        round: true,
        top: 950,
        left: 30,
        borderRadius: 50
      },
      {
        type: 'image',
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1776601493,3966748998&fm=26&gp=0.jpg',
        width: 214,
        height: 214,
        left: 506,
        top: 1065,
      },
      {
        type: 'text',
        content: '张三',
        fontSize: 28,
        color: '#666',
        fontFamily: 'PingFangSC-Regular',
        top: 1069,
        left: 30,
      },
      {
        type: 'text',
        content: '推荐你开通权益会员，享受12项特权，还有权益大礼包领取',
        fontSize: 24,
        color: '#666',
        fontFamily: 'PingFangSC-Regular',
        top: 1115,
        left: 30,
        maxWidth: 446,
        lineHeight: 33
      },
      {
        type: 'rect',
        width: 446,
        height: 50,
        background: '#F4F4F4',
        round: true,
        borderRadius: 25,
        top: 1220,
        left: 30,
      },
      {
        type: 'text',
        content: '长按图片，之别小程序二维码>>',
        left: 80,
        top: 1229,
        fontSize: 24,
        color: '#616161',
        fontFamily: 'PingFangSC-Regular',
      },
    ]
    this.setData({
      options: options
    })
  },
  canvasChange(e) {
    console.log(e)
    this.setData({
      imageSrc: e.detail.data.tempFilePath
    })
  },
  imagBindLongTap(e) {
    wx.saveImageToPhotosAlbum({
      filePath: e.currentTarget.dataset.url,
      success(res) {
        wx.showToast({
          title: '保存图片成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail(err) {
        if (err.errMsg == 'saveImageToPhotosAlbum:fail auth deny') {
          util.toast('失败！请到设置打开访问相册的权限')
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