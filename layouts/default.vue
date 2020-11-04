<template>
  <div class="layout-container">
    <main>
      <Nuxt />
    </main>
    <client-only>
      <NavigationMenu />
    </client-only>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    NavigationMenu: () => import('@/components/UI/NavigationMenu.vue'),
  },
})
export default class Default extends Vue {}
</script>

<style lang="postcss">
.layout-container {
  @apply mx-auto bg-gray-300;
  max-width: 512px;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1em;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
