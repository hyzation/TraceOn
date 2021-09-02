// pages/sonofkami/test1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [{
      texteatn: '',
      sssss: ''
    }],
  },


  inputBlur(event) {
    var nowId = event.currentTarget.dataset.id; //获取当前索引
    console.log("失去聚焦的input的id------" + nowId)
    var val = event.detail.value; //获取输入的值
    console.log("失去聚焦的input的值------" + val)
    var oldVal = this.data.lists;
    oldVal[nowId].texteatn = val; //修改对应索引值的内容
    console.log("-----------------" + JSON.stringify(oldVal))
    this.setData({
      lists: oldVal
    })
    console.log("lists-----------------" + JSON.stringify(oldVal))
  },
  input(event) {
    var nowId = event.currentTarget.dataset.id; //获取当前索引
    console.log("失去聚焦的input的id------" + nowId)
    var val = event.detail.value; //获取输入的值
    console.log("失去聚焦的input的值------" + val)
    var oldVal = this.data.lists;
    oldVal[nowId].sssss = val; //修改对应索引值的内容
    console.log("-----------------" + JSON.stringify(oldVal))
    this.setData({
      lists: oldVal
    })
    console.log("lists-----------------" + JSON.stringify(oldVal))
  },
  /** 添加属性输入框 */
  addList: function () {
    var that = this
    setTimeout(function () {
      //要延时执行的代码
      console.log('数组中最后一个元素的值----' + that.data.lists[that.data.lists.length - 1].texteatn)
      if (that.data.lists[that.data.lists.length - 1].texteatn != '' && that.data.lists[that.data.lists.length - 1].texteatn != null) {
        var lists = that.data.lists;
        var newData = {
          texteatn: ''
        };
        lists.push(newData); //实质是添加lists数组内容，使for循环多一次
        that.setData({
          lists: lists,
        })
        console.log("lists-------" + that.data.lists.length)
        console.log(that.data.lists);
      } else {
        console.log("属性内容不能为空，请在输入框中填写案例属性")
        wx.showModal({
          title: '提示',
          content: '属性内容不能为空，请在输入框中填写案例属性',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    }, 100)
  },

  /** 删除属性输入框 */
  delList: function (event) {
    //获取数据绑定的data-id的数据
    console.log("input最大id------------" + event.currentTarget.dataset.id.maxDuration)
    console.log("lists-------" + this.data.lists.length)
    if (this.data.lists.length < 2) {
      wx.showToast({
        title: '删不了',
        icon: 'none',
      })
      return
    }
    const nowIndex = event.currentTarget.dataset.id;
    console.log('nowIndex--------' + nowIndex)
    let lists = this.data.lists;
    lists.splice(nowIndex, 1);
    this.setData({
      lists
    })
    // let lists = this.data.lists;
    // lists.pop(); //实质是删除lists数组内容，使for循环少一次
    // this.setData({
    //   lists: lists,
    // })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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