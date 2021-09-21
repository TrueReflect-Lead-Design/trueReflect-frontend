import { MenuEntry } from '@pancakeswap-libs/uikit'


const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.truereflect.finance/#/swap'
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.truereflect.finance/#/pool'
      }
    ]
  },
  {
    label: 'Staking',
    icon: 'FarmIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Farms',
        href: '/farms'
      },
      {
        label: 'Pools',
        href: '/pools'
      }
    ]
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'True Reflect Token',
        href: 'https://cchain.explorer.avax.network/address/0x70b907f3f7231be122100dac51c1995e6804e346/',
      },      
      {
        label: 'MasterChef',
        href: 'https://cchain.explorer.avax.network/address/0x882c0bf397D50D8cA7dc041DD94f1b6A7150a07a/',
      },      
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@truereflect-lead-design/s/true-reflect-documents/',
      },
    ]
  },
]

export default config
