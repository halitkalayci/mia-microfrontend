<template>
  <div class="container">
    <div>Name: remote-vue</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
  <Counter />
</template>

<script lang="ts">
  import Counter from "./Counter.vue";

  export default {
    components: {
      Counter
    }
  }
</script>
