<template>
  <div id="app">
    <Nav />
    <Info :show="showInfo" />
    <vue2Dropzone 
      ref="myVueDropzone"
      id="dropzone" 
      @vdropzone-success="getResponse"
      :options="dropzoneOptions"
       />
    <TextArea v-if="textBox" text="Hello" />
    <Footer />
  </div>
</template>

<script>
  /* eslint-disable */
  import Nav from './components/Nav.vue'
  import Info from './components/Info.vue'
  import vue2Dropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'
  import TextArea from './components/TextArea'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      Nav,
      Info,
      vue2Dropzone,
      TextArea,
      Footer,
    },
    data() {
      return {
        text: '',
        textBox: false,
        showInfo: true,
        dropzoneOptions: {
          url: 'http://localhost:5001',
          thumbnailWidth: 200,
          maxFilesize: 0.5,
          maxFiles: 1,
        }
      }
    },
    methods: {
      getResponse(file, response) {
        this.text = response.data;
        this.showInfo = false;
        this.textBox = true;
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