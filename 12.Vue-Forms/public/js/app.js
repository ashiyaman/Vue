class Form {
  constructor(data) {
    for (let field in data) {
      this[field] = data[field];
    }

    errors : new Errors()
  }
}

class Errors {
  constructor() {
    this.errors = {}
  }

  get(field) {
    if(this.errors[field]) {
      return this.errors[field][0]
    }
  }

  has(field) {
    return this.errors.hasOwnProperty(field)
  }

  record(errors) {
    this.errors = errors
  }

  clear(field) {
    delete this.errors[field]
  }

  any() {
    return Object.keys(this.errors).length > 0
  }
}

new Vue({
  el: '#vue-app',
  data: {
    form: new Form({
      name: '',
      description: '',
    })

  },

  methods: {
    onSubmit() {
      axios.post('/projects',this.$data)
        .then (response => this.onSuccess(response))
        .catch(errors => this.form.errors.record(errors.response.data))
    },
    onSuccess(response) {
      alert(response.data.message)
      this.name = ''
      this.description = ''
    }
  }
})
