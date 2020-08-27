<template>
  <footer class="footer">
    <section class="bg-indigo-400 w-full text-center border-t border-grey p-4 pin-b footer">
        <p class="text-white">If you want to support, why not <a href="https://www.buymeacoffee.com/gogo" target="_blank" class="underline" rel="noreferrer noopener">buy me a coffee?</a></p>
</section>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style scoped>
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
  .footer {
    font-size: 0.8rem;
    padding:0;
  }
}
</style>