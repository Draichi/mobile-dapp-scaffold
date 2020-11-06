<template>
  <div class="main">
    <div>
      <h2>Sign in to the wait list</h2>
    </div>
    <div>
      <input type="text" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {}
</script>

<style lang="postcss">
.main {
  margin: auto;
  min-height: 100vh;
}
</style>
