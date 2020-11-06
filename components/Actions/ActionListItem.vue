<template>
  <div>
    <div class="grid grid-cols-3 text-center mt-3 rounded py-1 bg-gray-400">
      <div class="flex items-center justify-evenly">
        <img :src="actionItem.icon" alt="" class="h-8 w-8 rounded-full" />
        <h4>{{ actionItem.coin }}</h4>
      </div>
      <div
        class="flex items-center justify-center border-l-2 border-r-2 border-gray-500"
      >
        <h4 class="capitalize">{{ actionItem.type }}</h4>
      </div>
      <div class="flex items-center justify-evenly">
        <div class="py-1">
          <DoughtChart
            :data="portfolioData"
            :width="40"
            :height="40"
            :options="options"
          />
        </div>
        <h4>{{ actionItem.rate * 100 }}%</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IAction } from '~/types/IAction'

@Component({
  components: {
    DoughtChart: () => import('@/components/Charts/DoughtChart'),
  },
})
export default class ActionListItem extends Vue {
  @Prop({ default: {} as IAction })
  actionItem!: IAction

  options = {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  }
  get portfolioData() {
    return {
      datasets: [
        {
          data: [1 - this.actionItem.rate, this.actionItem.rate],
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
  }
}
</script>

<style lang="postcss"></style>
