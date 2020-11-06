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
    <BottomButton />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { IAction } from 'types/IAction'

@Component({
  components: {
    ActionListHeader: () => import('@/components/Actions/ActionListHeader.vue'),
    ActionListItem: () => import('@/components/Actions/ActionListItem.vue'),
    BottomButton: () => import('@/components/Actions/BottomButton.vue'),
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
    {
      icon:
        'https://blog.kraken.com/wp-content/uploads/2019/11/k-dai-2400x1350.png',
      coin: 'DAI',
      type: 'hold',
      rate: 0.35,
    },
    {
      icon: 'https://s2.coinmarketcap.com/static/img/coins/200x200/5268.png',
      coin: 'EWT',
      type: 'sell',
      rate: 0.147,
    },
    {
      icon:
        'https://s2.coinmarketcap.com/static/img/coins/200x200/1637.png',
      coin: 'RLC',
      type: 'buy',
      rate: 0.1,
    },
    {
      icon: 'https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776',
      coin: 'DOT',
      type: 'sell',
      rate: 0.6,
    },
    {
      icon:
        'https://icodrops.com/wp-content/uploads/2017/10/aave_logo.jpg',
      coin: 'AAVE',
      type: 'hold',
      rate: 0.04,
    },
    {
      icon: 'https://s2.coinmarketcap.com/static/img/coins/200x200/5692.png',
      coin: 'COMP',
      type: 'hold',
      rate: 0.02,
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

<style lang="postcss" scoped>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 60px);
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
