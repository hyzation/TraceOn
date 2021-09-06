// pages/components/cardbag/index.js
var getcards = require('./cards')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    clickstatus: {
      type: 'string',
      value: '',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached: function () {
      console.log(getcards.cardlist);
      console.log(this.data.clickstatus);
      this.setData({
        list: getcards.cardlist,
      })
    },
    detached: function () {
      console.log(this.data.clickstatus);
    },
  },



  /**
   * 组件的方法列表
   */
  methods: {
    check(e) {
      this.triggerEvent("closeson", false)
    },
  }
})
