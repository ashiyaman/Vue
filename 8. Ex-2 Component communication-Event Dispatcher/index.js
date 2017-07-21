//creating a shared instance
window.Event = new Vue()

Vue.component('coupon', {
  template: `
    <input @keyup.enter="checkCoupon"/>
  `,
  methods: {
    checkCoupon() {
      //component emits an event globally
      Event.$emit('applied')
    }
  }
})

new Vue({
  el: '#vue-app',
  data: {
    validCoupon: false
  },
  created() {
    //listen to events using $on
    Event.$on('applied', () =>
      this.validCoupon = true
    )
  }
})
