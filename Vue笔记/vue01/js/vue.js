// 组件构造器
let extend = Vue.extend({
  template: '<div>我是extend挂在的组件</div>',
})
new extend().$mount('#extend');

// 第一个挂载点
new Vue({
  data() {
    return {
      name: 'Even'
    }
  },
  created() {
    console.log('我是created组件')
  }
}).$mount('#app01')

// 第二个挂载点
new Vue({
  data() {
    return {
      name: 'Levi'
    }
  },
  mounted() {
    console.log('我是mounted组件=this.$el', this.$el);
  },
}).$mount('#app02')