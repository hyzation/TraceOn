// pages/sonofkami/test21/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 0, //得分
    countdown: 60,  //倒计时
    showstart: true,
    randomp: Math.floor(Math.random() * 100) + '%', //随机位置
    ani: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  // 开始
  start(e) {
    this.setData({
      showstart: false,
    })
    this.againTime()
    this.startani()
  },

  // 倒计时
  againTime() {
    let time = this.data.countdown;
    clearInterval(timing);
    let timing = setInterval(() => {
      if (time == 0) {
        clearInterval(timing)
      } else {
        time--;
        this.setData({
          countdown: time,
        })
      }
    }, 1000)
  },

  startani: function () {
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });

    this.animation = animation
    var next = true;

    setInterval(function () {

      // 你要执行动画链(详见文档)
      this.animation.translate(0, -400).step()

      // 你要执行动画链(详见文档)
      this.animation.translate(0, 0).step()
      // -----------------------

      // 导出动画
      this.setData({
        ani: animation.export()
      })

      let num = Math.floor(Math.random() * 100)
      this.setData({
        randomp: num + '%',
      })

    }.bind(this), 1700)


  },

  // 得分
  scoooooore(e) {
    this.setData({
      score: this.data.score + 1,
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})