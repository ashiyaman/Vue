<template>
  <div class="notification">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hello There!'
      }
    }
  }
</script>

<style>
  .notification {
    background-color: green;
  }
</style>
