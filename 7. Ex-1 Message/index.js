Vue.component('message', {
  //props ->  to explicitly declare properties
  props: ['title', 'body'],
  data() {
    return {
      showMessage : true
    }
  },
  template: `
    <article v-show="showMessage">
      <div>
        {{ title }}
        <button type="button" @click="showMessage = false">x</button>
      </div>
      <p>{{ body }}</p>
    </article>
  `
})

new Vue({
  el: '#vue-app',
  data: {

  }
})
