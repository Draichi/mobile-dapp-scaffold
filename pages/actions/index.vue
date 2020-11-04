<template>
  <div class="container overflow-x-hidden">
    <div>
      <h1 class="title">Actions</h1>
    </div>
    <div class="coins-list">
      <ActionListHeader />
      <ActionListItem
        v-for="(actionItem, i) in actionList"
        :key="`action-item-${i}`"
        :actionItem="actionItem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { IAction } from 'types/IAction'

@Component({
  components: {
    ActionListHeader: () => import('@/components/Actions/ActionListHeader.vue'),
    ActionListItem: () => import('@/components/Actions/ActionListItem.vue'),
  },
})
export default class Index extends Vue {
  actionList: IAction[] = [
    {
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
      coin: 'ETH',
      type: 'buy',
      rate: 0.235,
    },
    {
      icon: 'https://www.altbags.com/wp-content/uploads/2020/08/Chainlink.jpg',
      coin: 'LINK',
      type: 'sell',
      rate: 0.4,
    },
  ]
  actionList_ = {
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
