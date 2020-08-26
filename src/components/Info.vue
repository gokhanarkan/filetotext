<template>
  <div v-if=show class="mb-8">
    <p>I needed a text scanner service really quick for a task.</p>
    <p>The websites I came across on Google were really dodgy.</p>
    <p>So I created this along with a public API.</p>
    <p>This app is open source, I don't save your files anywhere.</p>
    <p>Surely, Amazon does though!</p>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    show: Boolean
  }
}
</script>

<style>

</style>