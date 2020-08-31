<template>
  <div id="app">
    <Nav />
    <!-- Layout -->
    <div class="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto mt-2 md:mt-6 lg:mt-10 xl:mt-18">
        <!-- Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <!-- First Card -->
          <div v-if="showInfo" class="border-b border-gray-200 px-4 py-5 sm:px-6">
            <Info :show="showInfo" />
          </div>
          <!-- End First Card -->
          <!-- Main Card -->
          <div class="px-4 py-5 sm:p-6">
            <vue2Dropzone ref="myVueDropzone" id="dropzone" @vdropzone-success="getResponse"
              :options="dropzoneOptions" />
            <TextArea :text="text" />
            </div>
            <!-- End Main Card -->
            <!-- Last Card -->
            <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
              <Buttons @remove-file="removeFile" :showButton="showButton" />
            </div>
            <!-- End Last Card -->
          </div>
          <!-- End Card -->
        </div>
      </div>
      <!-- End Layout -->
    <!-- <Footer /> -->
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
  import Buttons from './components/Buttons.vue'

  export default {
    name: 'app',
    components: {
      Nav,
      Info,
      vue2Dropzone,
      TextArea,
      Buttons,
      Footer,
    },
    data() {
      return {
        text: '',
        showButton: false,
        showInfo: true,
        dropzoneOptions: {
          url: 'https://api.filetotext.io/use_aws',
          thumbnailWidth: 200,
          maxFilesize: 5,
          maxFiles: 1,
          uploadMultiple: false,
          addRemoveLinks: true,
        }
      }
    },
    methods: {
      getResponse(file, response) {
        this.text = response.data;
        this.showInfo = false;
        this.showButton = true;
      },
      removeFile() {
        this.$refs.myVueDropzone.dropzone.removeAllFiles();
        this.text = '';
      },
      newFile() {
        this.removeFile();
        this.showButton = false,
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
  #dropzone {
    margin: auto;
  }
</style>