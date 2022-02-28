const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/* 函数节流 */
function throttle(fn, interval) {
  let timer; // 维护一个 timer
  let delay = interval || 500; // 设置间隔时间，如果interval不传，则默认500ms
  return function () {
    let _this = this;
    let args = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(function () {
      fn.apply(_this, args);
      timer = null;
      // 在interval后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
    }, delay)
  }
}

/* 函数防抖 */
function debounce(fn, interval) {
  let timer; // 维护一个 timer
  let delay = interval || 1000; // 间隔时间，如果interval不传，则默认1000ms
  return function () {
    let that = this;
    let args = arguments; // 保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(that, args);  // 用apply指向调用debounce的对象，相当于this.fn(args);
    }, delay);
  };
}

module.exports = {
  formatTime,
  debounce,
  throttle,
  explainDreams: (data) => { //周公解梦接口
    return request('http://api.tianapi.com/txapi/dream/index', 'get', data, false)
  },
}
