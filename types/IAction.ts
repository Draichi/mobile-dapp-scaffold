export interface IAction {
  icon: string
  coin: string
  type: 'buy' | 'sell' | 'hold'
  rate: number
}
