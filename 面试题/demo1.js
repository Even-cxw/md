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

}



/**
 * @desc 写节流防抖函数
 * @params {Function, timer}
 * 1. 节流函数 「立刻执行」 - throttle
 * 2. 防抖函数 「延迟执行」 - debounce
 */

function throttle(Fun, timer) {

}

function debounce(Fun, timer) {

}


