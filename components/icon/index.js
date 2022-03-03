const app = getApp();
Component({
  properties: {
    isIndex: { // 是否主页            
      type: Boolean,
      value: false,
    },
    isInner: { //是否内部页面
      type: Boolean,
      value: false,
    },
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    goHome: (e) => {
      // 判断是否为主页面防止原地跳转
      if (!e.currentTarget.dataset.hi) {
        wx.redirectTo({
          url: "/pages/index/index"
        })
      }
    },
    goShare: function () {
    },
    goInfo: (e) => {
      if (e.currentTarget.dataset.hi) {
        wx.redirectTo({
          url: "/pages/info/info"
        })
      }
    }
  }
})