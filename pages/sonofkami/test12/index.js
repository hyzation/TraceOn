const app = getApp()

Page({
  data: {
    show: false,
    duration: 300,
    position: 'right',
    round: false,
    overlay: true,
    customStyle: '',
    overlayStyle: ''
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')


  },
  onShow() {

  },

  popup(e) {
    const position = e.currentTarget.dataset.position
    let customStyle = ''
    let duration = this.data.duration
    switch (position) {
      case 'top':
      case 'bottom':
        customStyle = 'height: 30%;'
        break
      case 'right':
        break
    }
    this.setData({
      position,
      show: true,
      customStyle,
      duration
    })
  },

  changeRound() {
    this.setData({ round: !this.data.round })
  },

  changeOverlay() {
    this.setData({ overlay: !this.data.overlay, show: true })
  },

  changeOverlayStyle(e) {
    let overlayStyle = ''
    const type = e.currentTarget.dataset.type
    switch (type) {
      case 'black':
        overlayStyle = 'background-color: rgba(0, 0, 0, 0.7)'
        break
      case 'white':
        overlayStyle = 'background-color: rgba(255, 255, 255, 0.7)'
        break
      case 'blur':
        overlayStyle = 'background-color: rgba(0, 0, 0, 0.7); filter: blur(4px);'
    }
    this.setData({ overlayStyle, show: true })

  },

  exit() {
    this.setData({ show: false })
    // wx.navigateBack()
  },

  goTo(e) {
    wx.navigateTo({ url: `../shareElement/index` })
  },

  onBeforeEnter(res) {
    console.log(res)
  },
  onEnter(res) {
    console.log(res)
  },
  onAfterEnter(res) {
    console.log(res)
  },
  onBeforeLeave(res) {
    console.log(res)
  },
  onLeave(res) {
    console.log(res)
  },
  onAfterLeave(res) {
    console.log(res)
  },

  onClickOverlay(res) {
    console.log(res)
  }
})
