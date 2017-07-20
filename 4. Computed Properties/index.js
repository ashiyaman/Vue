new Vue({
  el: '#vue-app',
  data: {
    tasks: [
      {description: 'Go to store', completed: true},
      {description: 'Pay bills', completed: false},
      {description: 'Complete vue tutorial', completed: false},
      {description: 'Meeting with NGO', completed: false},
      {description: 'Buy tickets', completed: false},
      {description: 'Complete application', completed: true}
    ]
  },
  //If we want to do some manipulation before rendering to DOM
  computed: {
    incompleteTasks() {
      return this.tasks.filter(task => !task.completed)
    }
  },
  methods: {
    updateTask(task) {
      task.completed = true
    }
  }
})
