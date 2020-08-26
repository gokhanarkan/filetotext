<template>
  <div class="col mt-8">
    <div class="box border rounded flex flex-col shadow bg-white">
      <div class="box__title bg-gray-400 px-3 py-2 border-b">
        <h3 class="text-sm text-grey-darker font-medium text-left">Output</h3>
      </div>
      <textarea class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" v-model="text" />
      </div>
      <button 
        class="bg-transparent hover:bg-gray-400 text-black-400 font-semibold hover:text-white 
              py-2 px-4 border border-gray-500 hover:border-transparent
              rounded mt-4 ml-4 absolute left-0"
        @click=newFile
      >
        Upload a new file
      </button>
    </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    text: String
  },
  methods: {
    newFile() {
      location.href='/'
    }
  }
}
</script>

<style>

</style>