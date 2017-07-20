Vue.component('task', {
  template: '<li><slot></slot></li>',
  //for regular vue instance, dat can be an object
  //but for components, data should be a function that returns an object
  //coz it is not linked to any single instance
  data() {
    return {
      message: 'Hi'
    }
  }
})

//vue instance
new Vue({
  el: '#vue-app',
  data: {

  }
})
