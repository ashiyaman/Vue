new Vue({
  el: '#vue-app',
  data: {
    languages : []
  },
  created() {
    //axios is send AJAX request
    axios.get('/skills').then( response =>
      this.languages = response.data
    )
  }
})
