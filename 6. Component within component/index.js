Vue.component('task-list', {
  template: `
    <ul>
      <task v-for="task in tasks">{{ task.description }}</task>
    </ul>
  `,
  //we need to wrap everything in a single root element
  //hence ul
  data() {
    return {
      tasks: [
        {description: 'Go to store', completed: true},
        {description: 'Pay bills', completed: false},
        {description: 'Complete vue tutorial', completed: false},
        {description: 'Meeting with NGO', completed: false},
        {description: 'Buy tickets', completed: false},
        {description: 'Complete application', completed: true}
      ]
    }
  }
})

Vue.component('task', {
  template: '<li><slot></slot></li>'
})

new Vue({
  el: '#vue-app',
  data: {

  }
})
