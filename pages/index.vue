<template>
  <div class="container overflow-x-hidden">
    <div>
      <h1 class="title">Earnings</h1>
    </div>
    <div class="graphs">
      <LineChartTile
        v-for="(chartTile, i) in chartTiles"
        :key="`chart-tile-${i}`"
        :graph-data="chartTile.graphData"
        :background-color="chartTile.backgroundColor"
      />
      <AddNewChartTile/>
    </div>
    <div class="bottom-tile">
      <h1 class="title">Portfolio</h1>
      <div class="px-16">
        <DoughtChart :data="portfolioData" :options="options" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    LineChartTile: () => import('@/components/Earnings/LineChartTile.vue'),
    AddNewChartTile: () => import('@/components/Earnings/AddNewChartTile.vue'),
    DoughtChart: () => import('@/components/Charts/DoughtChart'),
  },
})
export default class Index extends Vue {
  options = {
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 15
      }
    },
  }
  portfolioData = {
    labels: ['BTC', 'LINIK', 'AAVE', 'EWT', 'REN', 'MKR', 'DAI'],
    datasets: [
      {
        data: [40, 20, 12, 39, 51, 42, 55],
        borderColor: [
          'rgb(253, 93, 147)',
          'rgb(54, 162, 235)',
          'rgb(204, 101, 254)',
          'rgb(255, 206, 86)',
          'rgb(93, 164, 253)',
          'rgb(118, 253, 93)',
          'rgb(132, 93, 253)',
          'rgb(32, 6, 243)',
        ],
        borderWidth: 0,
        backgroundColor: [
          'rgba(253, 93, 147,0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(204, 101, 254, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(93, 164, 253,0.5)',
          'rgba(118, 253, 93,0.5)',
          'rgba(132, 93, 253,0.5)',
          'rgba(32, 6, 243,0.5)',
        ],
      },
    ],
  }
  chartTiles = [
    {
      graphData: {
        title: 'AI',
        performance: 3.5,
        labels: ['', '', '', ''],
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
        title: 'Hold',
        performance: 0.5,
        labels: ['', '', '', ''],
        datasets: [
          {
            label: 'GitHub Commits',
            data: [20, 31, 20, 17],
          },
        ],
      },
      backgroundColor: 'red',
    },
  ]
}
</script>

<style lang="postcss" scoped>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 60px);
  justify-content: center;
}

.bottom-tile {
  @apply bg-white mt-4;
  border-radius: 3.5em 3.5em 0 0;
  background: linear-gradient(to bottom, #fff, var(--bg-color));
  & h1 {
    padding: 1em 0 0 1em;
  }
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
