<template>
  <nuxt-link to="/signin">
    <div class="graph-tile shadow-lg cursor-pointer">
      <div id="my-earings-chart" class="flex justify-center items-center">
        <font-awesome-icon icon="plus-circle" aria-hidden="true" class="text-5xl text-gray-500" />
      </div>
      <h2 class="title">Custom</h2>
      <h5 class="title">Create Set</h5>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class AddNewChartTile extends Vue {}
</script>

<style lang="postcss" scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 1.5em;
  @apply pl-2 pt-2;
  color: #35495e;
  letter-spacing: 1px;
}
.graph-tile {
  @apply inline-block w-2/4 mx-2 rounded-2xl;
}

#my-earings-chart {
  width: 80% !important;
  margin: auto;
  height: 23vh;
}
</style>