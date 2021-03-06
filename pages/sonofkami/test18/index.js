// pages/sonofkami/test18/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    freshStatus: 'more', // 当前刷新的状态
    showRefresh: false,  // 是否显示下拉刷新组件
    test: 'ddddddddddddddddddddddddddddddddddddddddddddd',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.test()
  },

  test(e) {
    this.setData({
      g: 1,
    }, () => {
      console.log(11);
    })
  },

  // 触摸开始
  touchStart(e) {
    this.setData({
      startY: e.changedTouches[0].pageY,
    })
  },
  // 触摸移动
  touchMove(e) {
    let endY = e.changedTouches[0].pageY;
    let startY = this.data.startY;
    let dis = endY - startY;
    // 判断是否下拉
    // if (dis <= 0) {
    //   return;
    // }
    console.log(dis);
    let offsetTop = e.currentTarget.offsetTop;
    if (dis > 80) {
      this.setData({
        showRefresh: true,
        freshStatus: 'more',
      })
    }
  },
  // 触摸结束
  touchEnd(e) {
    if (this.data.freshStatus == 'more') {
      // 延迟 500 毫秒，显示 “刷新中”，防止请求速度过快不显示
      setTimeout(() => {
        this.getList(); // 获取最新列表数据
      }, 1000);
    } else {
      this.setData({
        showRefresh: false
      })
    }
  },

  getList(e) {
    console.log(111);
    this.setData({
      showRefresh: false
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