<template>
  <div id="app">
    <Nav />
    <!-- Layout -->
    <div class="max-w-7xl mx-auto my-auto px-4 py-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto md:mt-6 lg:mt-10 xl:mt-18">
        <!-- Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div v-if="showInfo" class="border-b border-gray-200 px-4 py-5 sm:px-6">
            <Info :show="showInfo" />
          </div>
          <div class="px-4 py-5 sm:p-6 sm:pb-2 mb-10">
            <Dropzone ref="dropzone" @get-response="getResponse" />
            <TextArea :text="text" />
            <span v-if="showButton" class="inline-flex rounded-md shadow-sm mt-2 float-right">
            <button v-clipboard:copy="text" type="button"
                class="inline-flex items-center px-2 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:border-indigo-500 focus:shadow-outline-indigo transition ease-in-out duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="-ml-0.5 mr-2 h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copy Text
            </button>
            </span>
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
        this.showButton = false;
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