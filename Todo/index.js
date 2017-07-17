Vue.component('todo-item', {
  props: ['item'],
  template: '<li>{{ item }} <button v-on:click="$emit(\'delete\')">Delete</button></li>'
})

var app = new Vue({
  el: '#main',
  data: {
    newTodoText: '',
    todos: [
      'learn JS',
      'learn Vue',
      'complete CS50',
      'complete YDKJS',
    ]
  },
  methods: {
    addTodo: function() {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  }
})
