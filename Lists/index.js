var app = new Vue({
  el: '#vue-app',
  data: {
    newName: '',
    names: ['Rafeeq', 'Ashiya', 'Zainab']
  },

  // ******************* Vue Way ************************/
  methods: {
    addName() {
      this.names.push(this.newName)
      this.newName = ''
    }
  }

  /*
  //Once everything is ready
  mounted() {
    // ****************** JS Way ******************
    document.querySelector('#button').addEventListener('click', () => {
      let name = document.querySelector('#input')
      this.names.push(name.value)
      name.value = ''
    })
  }*/
})
