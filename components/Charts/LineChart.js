import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartData: Object,
  },
  mounted() {
    const ctx = document.getElementById('line-chart').getContext('2d')
    const gradient = ctx.createLinearGradient(0, 150, 0, 50)
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
    this.renderChart(this.chartData, {
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
    })
  },
}
