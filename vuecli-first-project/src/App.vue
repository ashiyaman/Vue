<template>
  <div id="app">
    <message>Hello There!</message>

    <counter></counter>
  </div>
</template>

<script>
import Message from './components/Message.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'app',
  components: { Message, Counter },
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
