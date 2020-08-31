<template>
  <vue2Dropzone ref="myVueDropzone" id="dropzone" @vdropzone-success="getResponse" :options="dropzoneOptions" />
</template>

<script>
  /* eslint-disable */
  import vue2Dropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'
  export default {
    name: 'Dropzone',
    components: {
      vue2Dropzone
    },
    methods: {
      getResponse(file, response) {
        this.$emit('get-response', response.data);
      },
      removeFile() {
        this.$refs.myVueDropzone.dropzone.removeAllFiles();
        this.$emit('get-response', '')
      },
    },
    data() {
      return {
        dropzoneOptions: {
          url: 'https://api.filetotext.io/use_aws',
          thumbnailWidth: 200,
          maxFilesize: 5,
          maxFiles: 1,
          uploadMultiple: false,
          addRemoveLinks: true,
        }
      }
    }
  }
</script>