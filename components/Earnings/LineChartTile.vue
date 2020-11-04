<template>
  <div :class="['graph-tile', classObject]">
    <LineChart id="my-earings-chart" class="py-10" :data="graphData" />
    <h2 class="title">My earnings</h2>
    <h5 class="title">3,04%</h5>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    LineChart: () => import('@/components/Charts/LineChart'),
  },
})
export default class LineChartTile extends Vue {
  @Prop(Object)
  graphData!: object
  @Prop(String)
  backgroundColor!: string
  get classObject(): object {
    return {
      'bg-red-500': this.backgroundColor === 'red',
      'bg-blue-500': this.backgroundColor === 'blue',
    }
  }
}
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
