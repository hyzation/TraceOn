// pages/sonofkami/test7/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['1', '2', '3', '4', '5', '6'],//下拉列表的数据
    index: 0,//选择的下拉列表下标

    itemList: [{
      id: 1,
      name: '五险一金',
      isSelected: false,
    },
    {
      id: 2,
      name: '包吃包住',
      isSelected: false,
    },
    {
      id: 3,
      name: '朝九晚五',
      isSelected: false,
    },
    ],
    items: [
      { value: '0', name: '待联系' },
      { value: '1', name: '已联系上' },
      { value: '2', name: '未联系上' },
    ],
  },

  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
    console.log(this.data.selectData[this.data.index]);
    console.log(e);
  },


  // 多选
  itemSelected: function (e) {
    let index = e.currentTarget.dataset.index;
    let item = this.data.itemList[index];
    item.isSelected = !item.isSelected;
    this.setData({
      itemList: this.data.itemList,
    });
    console.log(this.data.itemList);
  },

  // 单选
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items,
      constatus: e.detail.value,
    })
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