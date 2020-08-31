<template>
  <nav class="bg-indigo-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 text-white">
        <div class="flex items-center">
          <img class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
            src="../assets/convert-white.svg" alt="">
          <span class="font-semibold text-xl tracking-tight"><a href="/">filetotext.io</a></span>
          <div class="flex">
            <a href="https://github.com/gokhj/filetotext.io" target="_blank"
              class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:text-white hover:bg-indigo-500 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out">Github
              Repo</a>
            <a href="https://github.com/gokhj/api.filetotext.io" target="_blank"
              class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:text-white hover:bg-indigo-500 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out">Backend
              API</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Nav'
  }
</script>