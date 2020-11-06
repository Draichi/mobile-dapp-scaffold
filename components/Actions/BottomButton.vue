<template>
  <nuxt-link to="/signin">
    <div class="flex justify-center">
      <button
        class="bg-blue-400 w-full mx-6 shadow-lg rounded-lg py-2 text-white my-5"
      >
        Show more
      </button>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BottomButton extends Vue {}
</script>

<style lang="postcss">
</style>