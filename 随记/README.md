### 2021/01/06
+ document.scrollingElement.scrollTop = 0;
+ window.scrollTo(0,0);

+ document.scrollingElement.scrollTop = 0;
+ window.scrollTo(0,0)
+ document.addEventListener('focusout', ()=> {})
+ document.addEventListener('focusout', ()=> {})
### 2021/01/07
// 新的学习方法 return Boolean
+ document.querySelector('.dialog').contains(e.target)
+ includes() 方法用于判断一个[字符串/数组]是否包含在另一个字符串中，根据情况返true 或 false。

### 2021/01/11
+ document.body  获取body标签 <body>
+ document.documentElement 获取根节点 <html>
+ scrollHeight:滚动条所有的高度，包括溢出部分的高度
+ scrollTop：滚动条滚动的距离
+ clientHeight(clientWidth): 课件区域的高度

### 2021/01/12
+ /\s/ 正则代表**空格**、**换行**
+ **+** 正则表示出现一次或者多次
+ digit: 数字
+ 立刻执行函数: 创建独立的作用域，减少变量的全局暴露
  > 1. 应用场景：有些变量判断只需要执行一次的时候，可以使用立刻执行函数。
+ Element.classList : 返回一个元素的类属性的实时**DOMTokenList**集合。
+ Vue 定义组件大小写，使用组件带-

### 2021/01/13
+ vm.$destroy() :完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。**不会清除dom**
+ parentNode : Element方法获取父元素。
+ removeChild() : Element方法删除元素。
+ document.body.style : 获取的是内联样式，
+ document.body.currentStyle : 获取的所有样式 **IE浏览器**
+ window.getComputedStyle(element, '')[styleName] **谷歌浏览器**
  > window == document.defaultView : **所有CSS属性的值**

### 2021/01/14
+ el.getAttribute('key') ： 获取元素属性值

### 2021/01/22
+ el.getBoundingClientRect(): 取某个元素相对于视窗的位置集合
+ wave : 波浪
+ MouseEvent: 交互时发生的事件 (mouse:老鼠)

### 2021/01/25
+ css属性： pointer-event: none =>dom02
+ mousedown, mousemove, mouseup : 鼠标事件，