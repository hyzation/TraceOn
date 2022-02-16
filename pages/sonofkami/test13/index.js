// pages/sonofkami/test13/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.drawAndShareImage()
  },

  drawAndShareImage() {
    var query = wx.createSelectorQuery();
    query.select('#myCanvas')
      .fields({ node: true })
      .exec((res) => {
        const canvas = res[0].node
        const context = canvas.getContext('2d')
        canvas.width = 700;
        canvas.height = 700;
        context.rect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#fff";
        context.fill();
        var myImage = new Image();
        myImage.src = "./2.png";  //背景图片 你自己本地的图片或者在线图片
        myImage.crossOrigin = 'Anonymous';
        myImage.onload = function () {
          context.drawImage(myImage, 0, 0, 700, 700);
          context.font = "60px Courier New";
          context.fillText("我是文字", 350, 450);
          var myImage2 = new Image();
          myImage2.src = "./1.png";  //你自己本地的图片或者在线图片
          myImage2.crossOrigin = 'Anonymous';
          myImage2.onload = function () {
            context.drawImage(myImage2, 175, 175, 225, 225);
            var base64 = canvas.toDataURL("image/png"); //"image/png" 这里注意一下
            var img = document.getElementById('avatar');
            // document.getElementById('avatar').src = base64;
            img.setAttribute('src', base64);
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