import Vue from 'vue'
import { Line, mixins } from 'vue-chartjs'
import { Component, Prop } from 'vue-property-decorator'
const { reactiveProp } = mixins

@Component({
  extends: Line,
  mixins: [reactiveProp],
})
export default class LineChart extends Vue {
  @Prop()
  chartData: any

  @Prop({ default: () => {} })
  options!: object

  mounted() {
    const canvasElmt = document.getElementById('line-chart') as HTMLCanvasElement
    const ctx = canvasElmt.getContext('2d')!
    const gradient = ctx.createLinearGradient(0, 150, 0, 0)
    gradient.addColorStop(1, 'rgba(76, 211, 150, 0.3)')
    gradient.addColorStop(0.5, 'rgba(53, 183, 125, 0.05)')
    gradient.addColorStop(0, 'rgba(119,52,169,0.01)')
    this.chartData.datasets[0].backgroundColor = gradient
    this.chartData.datasets[0].pointStyle = 'line'
    this.chartData.datasets[0].fill = true
    this.chartData.datasets[0].borderColor = '#42b883'
    this.chartData.datasets[0].borderWidth = 2
    this.chartData.datasets[0].borderDash = []
    this.chartData.datasets[0].borderDashOffset = 0.0
    this.chartData.datasets[0].pointBackgroundColor = '#42b883'
    this.chartData.datasets[0].pointBorderColor = 'rgba(255,255,255,0)'
    this.chartData.datasets[0].pointHoverBackgroundColor = '#42b883'
    this.chartData.datasets[0].pointBorderWidth = 20
    this.chartData.datasets[0].pointHoverRadius = 4
    this.chartData.datasets[0].pointHoverBorderWidth = 15
    this.chartData.datasets[0].pointRadius = 4
    this.renderChart(this.chartData, this.options)
  }
  public renderChart!: (chartData: any, options: any) => void
}