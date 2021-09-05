<template>
  <div class="col textArea">
    <div class="box border rounded flex flex-col shadow bg-white">
      <div class="box__title bg-indigo-300 px-3 py-2 border-b">
        <h3 class="text-sm text-grey-darker font-medium text-left text-white">
          Output
        </h3>
      </div>
      <textarea
        class="text-grey-darkest flex-1 p-2 m-1 bg-transparent textArea"
        v-model="text"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    text: String,
  },
};
</script>

<style scoped>
.textArea {
  min-height: 200px;
  width: 100%;
  text-align: left;
  margin: auto;
  margin-top: 0.5rem;
}
</style>
