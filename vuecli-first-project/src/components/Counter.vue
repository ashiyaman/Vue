<template>
  <div>
    <h2>The count is: {{ count }}</h2>

    <!-- Even if we change the text (from 'the count is' to anything) the data ie.the count value will not change -->
    <!-- This is hot reloading -->
    <button @click="count += 1">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  }
}
</script>
