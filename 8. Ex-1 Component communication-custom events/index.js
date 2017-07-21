Vue.component('coupon', {
  template: `
    <input @keyup.enter="checkCoupon"/>
  `,
  methods: {
    checkCoupon() {
      this.$emit('applied')
    }
  }
})

new Vue({
  el: '#vue-app',
  data: {
    validCoupon: false
  },
  methods: {
    onCouponApply() {
      alert('I was applied!!!');
      this.validCoupon = true
    }
  }
})
