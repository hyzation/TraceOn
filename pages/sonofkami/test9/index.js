import * as echarts from '../../../static/ec-canvas/echarts';

// const app = getApp();

function getOption(xData, data_cur, data_his) {
  var option = {
    backgroundColor: "#f5f4f3",
    color: ["#37A2DA", "#f2960d", "#67E0E3", "#9FE6B8"],
    title: {
      text: '实时运行速度',
      textStyle: {
        fontWeight: '500',
        fontSize: 15,
        color: '#000'
      },
      x: 'center',
      y: '0'
    },
    legend: {
      data: ['今日', '昨日'],
      right: 10
    },
    grid: {
      top: '15%',
      left: '1%',
      right: '3%',
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
      name: 'km/h',
      type: 'value',
      min: 0,
      max: 120
    },
    series: [{
      name: '今日',
      zIndex: 2,
      type: 'line',
      smooth: true,
      symbolSize: 0,
      data: data_cur || []
    }, {
      name: '昨日',
      zIndex: 1,
      type: 'line',
      smooth: true,
      symbolSize: 0,
      data: data_his || []
    }]
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
    }
  },

  onReady: function () {
    let _this = this
    var xData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    var data_cur = [55, 67, 66, 78, 55, 67, 66, 78, 55, 67, 66, 78, 55, 67, 66, 78, 55, 67, 66, 78, 65, 66, 65, 54];
    var data_his = [67, 66, 78, 65, 66, 65, 54, 67, 66, 78, 65, 66, 65, 54, 67, 66, 78, 65, 66, 65, 54, 67, 66, 78];
    this.setData({
      xData,
      data_cur,
      data_his
    })
    setTimeout(_this.oninit, 1000);
  },

  oninit(e) {
    console.log(chartLine);
    //ajax请求好数据后，调用获取option函数，传一些数据，
    //然后用全局变量echarts元素chartLine 来 setOption即可。
    // 三个参数： x轴数据，第一条线数据，第二条数据。 随意，echarts就跟正常用随便写就行
    // 随便写几个假数据

    var option = getOption(this.data.xData, this.data.data_cur, this.data.data_his);
    chartLine.setOption(option);
  },


})

