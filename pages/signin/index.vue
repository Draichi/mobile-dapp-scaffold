<template>
  <div class="container overflow-x-hidden">
    <div>
      <h1 class="title">Sign in</h1>
    </div>
    <div class="graphs">
      <LineChartTile
        v-for="(chartTile, i) in chartTiles"
        :key="`chart-tile-${i}`"
        :graph-data="chartTile.graphData"
        :background-color="chartTile.backgroundColor"
      />
    </div>
    <div>
      <h1 class="title">Portfolio</h1>
      <div class="p-16">
        <DoughtChart :data="portfolioData" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    LineChartTile: () => import('@/components/Earnings/LineChartTile.vue'),
    DoughtChart: () => import('@/components/Charts/DoughtChart'),
  },
})
export default class Index extends Vue {
  portfolioData = {
    labels: ['January', 'February', 'March', 'April', 'lucsa', 'draichi'],
    datasets: [
      {
        label: 'GitHub Commits',
        data: [40, 20, 12, 39, 51, 42],
        borderColor: ['#fd5d93', '#36a2eb', '#cc65fe', '#ffce56'], // #fd5d93 pink option
        borderWidth: 2,
        backgroundColor: [
          'rgba(253, 93, 147,0.1)',
          'rgba(54, 162, 235, 0.1)',
          'rgba(204, 101, 254, 0.1)',
          'rgba(255, 206, 86, 0.1)',
        ],
      },
    ],
  }
  chartTiles = [
    {
      graphData: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
          {
            label: 'GitHub Commits',
            data: [40, 60, 20, 39],
          },
        ],
      },
      backgroundColor: 'blue',
    },
    {
      graphData: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
          {
            label: 'GitHub Commits',
            data: [20, 90, 20, 39],
          },
        ],
      },
      backgroundColor: 'red',
    },
  ]
}
</script>

<style lang="postcss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
}

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
.graphs {
  @apply p-2;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
