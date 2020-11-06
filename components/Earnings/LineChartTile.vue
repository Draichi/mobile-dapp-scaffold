<template>
  <div class="graph-tile shadow-lg" :style="classObject">
    <LineChart
      id="my-earings-chart"
      class="py-10"
      :chartData="graphData"
      :options="options"
    />
    <h2 class="title">{{ graphData.title }}</h2>
    <h5 class="title">{{ graphData.performance }}%</h5>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface IGraphData {
  title: string
  performance: number
}

@Component({
  components: {
    LineChart: () => import('@/components/Charts/LineChartType.ts'),
  },
})
export default class LineChartTile extends Vue {
  @Prop({ default: {} as IGraphData })
  graphData!: IGraphData
  @Prop(String)
  backgroundColor!: string
  get classObject(): object {
    return {
      background: this.backgroundColor === 'red' ? '#bbda92' : '#b192da',
    }
  }

  options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest',
    },
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,0,0,0.0)',
            zeroLineColor: 'rgba(225,78,202,0.1)',
          },
          ticks: {
            beginAtZero: true,
            display: false,
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
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
