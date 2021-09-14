/**
 * @desc vue源码有一种函数，
 * @params {String, data}
 * 写个函数名dilution('a.b.c.name'),将'Even'返回
 */
 let data = {
  a: {
    b: {
      c:{
        name:'Even'
      }
    }
  }
}

dilution('a.b.c.name',data)
function dilution(str, data) {
  var obj = data;
  let arr = str.split('.')
  // [a,b,c,name]
  arr.forEach(item => {
    obj = dilution1(item, obj)
  })
  console.log(obj)
}
function dilution1(key, data) {
  return data[key]
}


/**
 * @desc 写节流防抖函数
 * @params {Function, timer}
 * 1. 节流函数 「立刻执行」 - throttle
 * 2. 防抖函数 「延迟执行」 - debounce
 */

 var timer02
function throttle(Fun, timeout) {
  let nowCall = !timer02;
  setTimeout(() => {
    timer02 = null;
  }, timeout);
  if (nowCall) Fun()
}

var timer01
function debounce(Fun, timeout) {
  if (timer01) clearTimeout(timer01)
  var timer01 = setTimeout(() => {
    Fun()
  }, timeout);
}


