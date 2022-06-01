import * as echarts from '../../../static/ec-canvas/echarts';

// const app = getApp();

function getOption(xData, data_cur, data_his) {
  var option = {
    backgroundColor: "#f5f4f3",
    color: ["#37A2DA", "#f2960d", "#67E0E3", "#9FE6B8"],
    title: {
      // text: '实时运行速度',
      textStyle: {
        fontWeight: '500',
        fontSize: 15,
        color: '#000'
      },
      x: 'center',
      y: '0'
    },
    // legend: {
    //   data: ['今日', '昨日'],
    //   right: 10
    // },
    grid: {
      top: '10%',
      left: '1%',
      right: '7%',
      bottom: '60rpx',
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xData || [],
      // axisLabel: {
      //   interval: 11,
      //   formatter: function (value, index) {
      //     return value.substring(0, 2) * 1;
      //   },
      //   textStyle: {
      //     fontsize: '10px'
      //   }
      // }
    },
    yAxis: {
      x: 'center',
      name: '￥',
      type: 'value',
      min: 10000,
      max: 20000
    },
    series: [{
      name: '',
      zIndex: 2,
      type: 'line',
      smooth: true,
      symbolSize: 0,
      data: data_cur || []
    }],
    dataZoom: [
      {
        type: 'slider',//有单独的滑动条，用户在滑动条上进行缩放或漫游。inside是直接可以是在内部拖动显示
        show: true,//是否显示 组件。如果设置为 false，不会显示，但是数据过滤的功能还存在。
        start: 0,//数据窗口范围的起始百分比0-100
        end: data_cur.length > 20 ? '50' : '100',//数据窗口范围的结束百分比0-100
        xAxisIndex: [0],// 此处表示控制第一个xAxis，设置 dataZoom-slider 组件控制的 x轴 可是已数组[0,2]表示控制第一，三个；xAxisIndex: 2 ，表示控制第二个。yAxisIndex属性同理
        bottom: 10 //距离底部的距离
      },
    ]
  };
  return option;
}

var chartLine = null;



Page({
  data: {
    ecLine:
    {
      onInit: function (canvas, width, height) {
        //初始化echarts元素，绑定到全局变量，方便更改数据
        chartLine = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(chartLine);

        //可以先不setOption，等数据加载好后赋值，
        //不过那样没setOption前，echats元素是一片空白，体验不好，所有我先set。
        // var xData = [1, 2, 3, 4, 5, 6, 7, 8, 9];  // x轴数据 自己写
        // var option = getOption(xData);
        // chartLine.setOption(option);
        return chartLine
      }
    },
    showadd: false,
    duration: 300,
    position: 'right',
    round: true,
    overlay: true,
    customStyle: '',
    overlayStyle: 'background-color: rgba(39, 35, 35, 0.7); filter: blur(40px);',
  },

  clickon(e) {
    chartLine.on('click', function (params) {
      // 控制台打印数据的名称
      console.log(params.name);
    });
  },



  onReady: function () {
    let _this = this
    // var xData = [0];
    // var data_cur = [100];
    // // var data_his = [67, 66, 78, 65, 66, 65, 54, 67, 66, 78, 65, 66, 65, 54, 67, 66, 78, 65, 66, 65, 54, 67, 66, 78];
    // this.setData({
    //   xData,
    //   data_cur,
    //   // data_his
    // })
    this.getList()
    setTimeout(_this.oninit, 1000);
  },

  // 渲染数据
  oninit(e) {
    console.log(chartLine);

    //ajax请求好数据后，调用获取option函数，传一些数据，
    //然后用全局变量echarts元素chartLine 来 setOption即可。
    // 三个参数： x轴数据，第一条线数据，第二条数据。 随意，echarts就跟正常用随便写就行
    // 随便写几个假数据

    var option = getOption(this.data.xAxis, this.data.note);
    chartLine.setOption(option);
  },

  // 获取云函数数据
  getList() {
    let db = wx.cloud.database()
    db.collection('fickgov')
      .get()
      .then(res => {
        console.log(res.data);
        let note = []
        let xAxis = []
        for (var i of res.data) {
          note.push(i.note)
          xAxis.push(i.xAxis)
        }
        console.log(note, xAxis);
        this.setData({
          note,
          xAxis
        })
      })
      .catch(err => {
        console.log('获取信息失败')
      })
  },

  // 新增提交
  adddata(e) {
    let notevalue = e.detail.value.note
    let xAxisvalue = e.detail.value.xAxis
    console.log(typeof notevalue, typeof xAxisvalue);
    if (notevalue && xAxisvalue && notevalue >= 1000) {
      wx.cloud.database().collection('fickgov')
        .add({
          data: {
            note: notevalue,
            xAxis: xAxisvalue,
          }
        })
        .then(res => {
          wx.showToast({
            title: '添加成功',
            icon: 'none',
          })
          this.setData({
            notevalue: null,
            xAxisvalue: null,
            showadd: false,
          })
          //添加后，刷新数据
          this.getList()
        })
        .catch(err => {
          console.log('添加失败')
        })
    } else {
      wx.showToast({
        title: '请正确填写',
        icon: 'none',
      })
    }
  },

  // 新增弹窗
  addpage(e) {
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
    console.log(position, customStyle, duration);
    this.setData({
      position,
      showadd: true,
      customStyle,
      duration
    })
  },

  // 编辑
  editpage(e) {
    wx.showToast({
      title: '正在开发...',
      icon: 'none',
    })
  },

  // 删除
  delpage(e) {
    wx.showToast({
      title: '正在开发...',
      icon: 'none',
    })
  },


})

