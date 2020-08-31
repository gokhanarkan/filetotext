<template>
  <div v-if=show class="mb-2 w-3/4 m-auto text-center">
    <p>I needed a text scanner service really quick for a task.<br>
      The websites I came across were very dodgy.
      So I created this.<br>
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
