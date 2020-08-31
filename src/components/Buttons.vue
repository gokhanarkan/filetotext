<template>
    <div>
        <!-- Contact Me Button -->
        <span class="inline-flex rounded-md shadow-sm m-2">
            <button onClick="window.location.href='mailto:gokhan@hey.com'" type="button"
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:border-indigo-500 focus:shadow-outline-indigo transition ease-in-out duration-150">
                <svg class="-ml-0.5 mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact me
            </button>
        </span>
        <!-- Buy me a coffee button -->
        <span class="inline-flex rounded-md shadow-sm m-2">
            <button onClick="window.location.href='https://www.buymeacoffee.com/gogo'" type="button"
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:border-indigo-500 focus:shadow-outline-indigo transition ease-in-out duration-150">
                <img src="../assets/coffee-cup.svg" class="-ml-0.5 mr-2 h-4 w-4" viewBox="0 0 20 20"
                    fill="currentColor" />
                Buy me a coffee
            </button>
        </span>
        <!-- Upload a new file button -->
        <span v-if="showButton" class="inline-flex rounded-md shadow-sm m-2">
            <button @click="deleteFiles" type="button"
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:border-indigo-500 focus:shadow-outline-indigo transition ease-in-out duration-150">
                <svg viewBox="0 0 20 20" fill="currentColor" class="-ml-0.5 mr-2 h-4 w-4">
                    <path
                        d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z">
                    </path>
                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                </svg>
                Upload a new file
            </button>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Buttons",
        props: {
            showButton: Boolean
        },
        methods: {
            deleteFiles() {
                this.$emit('remove-file')
            }
        }
    }
</script>

<style>

</style>