// pages/sonofkami/rateCal/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theValue: 0,
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    chosen: '',
    actual_amount: '',
    amount_each: '',
    periods: '',
    span: '',
    period: '', // 任意一期
    period_money: '', // 任意一期还款额
    result: 0,
    IRR: '',
    year_rate: '',
    compound_rate: '',
    exceed: 0,
    isred: 0,
    showDialog: true,//显示使用说明弹窗
  },

  // 开始计算
  startToCal(e) {
    let arr = []
    let Span = e.detail.value.span === '' ? '1' : e.detail.value.span
    let actual_amount = e.detail.value.actual_amount
    let amount_each = e.detail.value.amount_each
    let periods = e.detail.value.periods
    let period = e.detail.value.period
    let period_money = e.detail.value.period_money

    // 等额本息
    if (this.data.theValue == 0) {
      //principalinterest是每期还款数*总分期数；
      let principalinterest = e.detail.value.periods * e.detail.value.amount_each;
      if (principalinterest < e.detail.value.actual_amount) {
        wx.showToast({
          title: '请输入正确的每期还款额和期数',
          icon: "none",
          duration: 2000
        })
        return
      }
      arr.push(-e.detail.value.actual_amount);
      for (let i = 0; i < e.detail.value.periods; i++) {
        arr.push(e.detail.value.amount_each);
      }
      console.log(arr); //arr数组中:第0个是负实际到账金额，剩下是总分期数的每期还款额；

      // 下面是三个计算结果必要参数，如无误将进入ifNaN()方法
      let irr = Math.round(this.irr(arr) * 10000) / 100
      console.log(irr);
      let yearrate = Math.round((this.irr(arr) * 10000 * 12) / Span) / 100;
      console.log(yearrate);
      let compoundrate = Math.round((Math.pow(this.irr(arr) + 1, 12 / Span) - 1) * 10000) / 100
      console.log(compoundrate);
      // 调用ifNaN()方法
      this.ifNaN(irr, yearrate, compoundrate)
    }

    // 等额本息
    if (this.data.theValue == 1) {
      let irr =
        Math.round(
          ((period_money - actual_amount / periods) /
            (actual_amount -
              (actual_amount / periods) * (period - 1))) *
          10000
        ) / 100;
      let yearrate =
        Math.round(
          (((period_money - actual_amount / periods) /
            (actual_amount -
              (actual_amount / periods) * (period - 1))) *
            10000 *
            12) /
          Span
        ) / 100;
      let compoundrate =
        Math.round(
          (Math.pow(
            (period_money - actual_amount / periods) /
            (actual_amount -
              (actual_amount / periods) *
              (period - 1)) +
            1,
            12 / Span
          ) -
            1) *
          10000
        ) / 100;
      this.ifNaN(irr, yearrate, compoundrate);
    }

    // 先息后本
    if (this.data.theValue == 2) {

    }

    // 每期收入
    if (this.data.theValue == 3) {

    }


  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /**
     * 获取当前设备的宽高
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },

  // 使用说明弹窗
  openInstructions(e) {
    console.log(e);
    this.setData({
      showDialog: true,
    })
  },
  //  tab切换逻辑
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
        theValue: e.target.dataset.current,
        result: 0
      })
    }
  },
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current,
      theValue: e.detail.current,
      result: 0
    });
  },


  //清空利率计算器表单
  formReset(e) {
    console.log(e)
    this.setData({
      chosen: '',
      result: 0
    })
  },


  // 计算结果
  ifNaN(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      wx.showToast({
        title: '请输入正确数值',
        icon: "error",
        duration: 1000
      })
      this.setData({
        result: ''
      })
    } else {
      this.turnRed(b)
      this.setData({
        IRR: a + '%',
        year_rate: b + '%',
        compound_rate: c + '%',
        result: 1,
      })
    }
    console.log(this.data.IRR, this.data.year_rate, this.data.compound_rate,);
  },

  // 显示红字
  turnRed(i) {
    let _this = this
    console.log(i)
    if (i > 36) {
      _this.setData({
        exceed: 1,
        isred: 1,
      })
    } else {
      _this.setData({
        exceed: 0,
        isred: 0,
      })
    }
  },

  // irr计算
  irr(cashFlows, estimatedResult) {
    var result = 'isNAN'
    if (cashFlows != null && cashFlows.length > 0) {
      if (cashFlows[0] !== 0) {
        var noOfCashFlows = cashFlows.length
        var sumCashFlows = 0

        var noOfNegativeCashFlows = 0
        var noOfPositiveCashFlows = 0
        for (var i = 0; i < noOfCashFlows; i++) {
          sumCashFlows += cashFlows[i]
          if (cashFlows[i] > 0) {
            noOfPositiveCashFlows++
          } else {
            if (cashFlows[i] < 0) {
              noOfNegativeCashFlows++
            }
          }
        }

        if (noOfNegativeCashFlows > 0 && noOfPositiveCashFlows > 0) {
          var irrGuess = 0.1
          if (!isNaN(estimatedResult)) {
            irrGuess = estimatedResult
            if (irrGuess <= 0) {
              irrGuess = 0.5
            }
          }
          var irr = 0
          if (sumCashFlows < 0) {
            irr = -irrGuess
          } else {
            irr = irrGuess
          }
          var minDistance = 1e-15
          var cashFlowStart = cashFlows[0]
          var maxIteration = 100
          var wasHi = false
          var cashValue = 0
          for (let i = 0; i <= maxIteration; i++) {
            cashValue = cashFlowStart
            for (var j = 1; j < noOfCashFlows; j++) {
              cashValue += cashFlows[j] / Math.pow(1 + irr, j)
            }
            if (Math.abs(cashValue) < 0.01) {
              result = irr
              break
            }
            if (cashValue > 0) {
              if (wasHi) {
                irrGuess /= 2
              }
              irr += irrGuess
              if (wasHi) {
                irrGuess -= minDistance
                wasHi = false
              }
            } else {
              irrGuess /= 2
              irr -= irrGuess
              wasHi = true
            }
            if (irrGuess <= minDistance) {
              result = irr
              break
            }
          }
        }
      }
    }
    return result
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