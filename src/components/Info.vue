<template>
  <div v-if=show class="mb-8">
    <p>Ever needed to export the text on an image? Because I did.</p>
    <p>When I search file to text ocr on google, I get really dodgy websites.</p>
    <p>Hence, I created this web application; where you can upload a file and get the text.</p>
    <p>Blazingly fast and open source.</p>
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