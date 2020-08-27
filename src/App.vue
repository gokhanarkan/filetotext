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
    <TextArea v-if="textBox" :text="text" />
          <button 
          v-if="textBox"
        class="bg-transparent hover:bg-gray-400 text-black-400 font-semibold hover:text-white 
              py-2 px-4 border border-gray-500 hover:border-transparent
              rounded mt-4 ml-4 absolute left-0"
        @click=newFile
      >
        Upload a new file
      </button>
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
          url: 'https://api.filetotext.io/',
          thumbnailWidth: 200,
          maxFilesize: 5,
          maxFiles: 1,
        }
      }
    },
    methods: {
      getResponse(file, response) {
        this.text = response.data;
        this.showInfo = false;
        this.textBox = true;
      },
      removeFile() {
        this.$refs.myVueDropzone.dropzone.removeFile(this.$refs.myVueDropzone.dropzone.files[0])
      },
      newFile() {
        this.removeFile();
        this.textBox = false,
        this.text = '';
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