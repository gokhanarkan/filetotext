<template>
  <div id="app">
    <Nav />
    <!-- Layout -->
    <div class="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto mt-2 md:mt-6 lg:mt-10 xl:mt-18">
        <!-- Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div v-if="showInfo" class="border-b border-gray-200 px-4 py-5 sm:px-6">
            <Info :show="showInfo" />
          </div>
          <div class="px-4 py-5 sm:p-6">
            <Dropzone ref="dropzone" @get-response="getResponse" />
            <TextArea :text="text" />
            </div>
            <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
              <Buttons @remove-file="removeFiles" :showButton="showButton" />
            </div>
          </div>
          <!-- End Card -->
        </div>
      </div>
      <!-- End Layout -->
  </div>
</template>

<script>
  /* eslint-disable */
  import Nav from './components/Nav.vue'
  import Info from './components/Info.vue'
  import Dropzone from './components/Dropzone.vue'
  import TextArea from './components/TextArea'
  import Buttons from './components/Buttons.vue'

  export default {
    name: 'app',
    components: {
      Nav,
      Info,
      Dropzone,
      TextArea,
      Buttons,
    },
    data() {
      return {
        text: '',
        showButton: false,
        showInfo: true,
      }
    },
    methods: {
      getResponse(data) {
        this.text = data;
        this.showInfo = false;
        this.showButton = true;
      },
      removeFiles() {
        this.$refs.dropzone.removeFile();
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