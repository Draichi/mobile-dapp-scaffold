<template>
  <div>
    <div class="grid grid-cols-3 text-center mt-3 rounded py-1 bg-gray-400">
      <div class="flex items-center justify-evenly">
        <img :src="actionItem.icon" alt="" class="h-8 w-8 rounded-full" />
        <h4>{{ actionItem.coin }}</h4>
      </div>
      <div
        class="flex items-center justify-center border-l-2 border-r-2 border-gray-500"
        :class="{
          buy: actionItem.type === 'buy',
          sell: actionItem.type === 'sell',
        }"
      >
        <h4 class="capitalize">{{ actionItem.type }}</h4>
      </div>
      <div
        v-if="actionItem.type === 'hold'"
        class="flex items-center justify-center my-1"
        style="height: 40px"
      >
        -
      </div>
      <div v-else class="flex items-center justify-evenly">
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
          data: [this.actionItem.rate, 1 - this.actionItem.rate],
          borderColor: ['#36a2eb'], // #fd5d93 pink option
          borderWidth: 2,
          backgroundColor: [
            'rgba(54, 162, 235, 0.1)',
          ],
        },
      ],
    }
  }
}
</script>

<style lang="postcss" scoped>
.sell {
  background: #f3aeae;
  color: #4e1919;
}
.buy {
  background: #b7ff99;
  color: #2b4e19;
}
</style>
