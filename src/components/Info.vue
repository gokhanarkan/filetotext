<template>
  <div v-if=show class="mb-2 w-3/4 m-auto text-left">
    <p>I needed a text scanner service really quick for a task.<br>
      The websites I came across on Google were really dodgy.
      So I created this along with a public API.<br>
    This app is open source, I don't save your files anywhere.</p>
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