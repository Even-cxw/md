/**
 * @desc vue源码有一种函数，
 * @params {String, data}
 * 写个函数名dilution('a.b.c.name'),将'Even'返回
 */
 var data = {
  a: {
    b: {
      c:{
        name:'Even'
      }
    }
  }
}

let aaaa = dilution('a.b.c.name',data);
console.log(aaaa)

function dilution(str, data) {
  var arr = str.split('.')
  var obj=data;
  arr.forEach(function(val,index){
    obj = obj[val] 
  })
  return obj
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


