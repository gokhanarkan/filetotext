<template>
  <div id="app">
    <Nav />
    <vue2Dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue2Dropzone>
    <Footer />
  </div>
</template>

<script>
  import Nav from './components/Nav.vue'
  import Footer from './components/Footer.vue'
  import vue2Dropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'

  export default {
    name: 'app',
    components: {
      Nav,
      Footer,
      vue2Dropzone
    },
    data() {
      return {
        dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: {
            "My-Awesome-Header": "header value"
          }
        },
        text: ''
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
    color: #2c3e50;
  }
</style>