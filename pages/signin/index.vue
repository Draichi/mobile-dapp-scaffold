<template>
  <div class="main flex flex-col justify-center items-center w-full">
    <div class="mx-4">
      <h2 class="text-5xl">Sign in to the wait list</h2>
    </div>
    <div class="px-10 w-full">
      <input class="w-full" type="text" placeholder="john.doe@mail.com" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {}
</script>

<style lang="postcss" scoped>
.main {
  margin: auto;
  width: 100%;
  min-height: calc(100vh - 60px);
}
input {
  @apply bg-gray-300;
  border: none;
  border-bottom: 2px solid var(--color);
  outline: none;
}
</style>
