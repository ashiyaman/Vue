new Vue({
  el: '#vue-app',
  data: {
    btnTitle: 'Title from Vue',
    className: 'color-red',
    isLoading: false,
    isEnabled: false
  },
  methods: {
    toggleClass() {
      this.isLoading = true
    },
    buttonEnable() {
      this.isEnabled = true
    }
  }
})
