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
:root {
  --color: red;
  --bg-color: #e2e8f0;
}
.layout-container {
  @apply antialiased mx-auto;
  max-width: 512px;
  margin-bottom: 60px;
  background: var(--bg-color);
  font-family: 'Source Sans Pro', 'Segoe UI', Roboto, 'Helvetica Neue',
    sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
