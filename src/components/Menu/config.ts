import { MenuEntry } from 'uikit'

const config: MenuEntry[] = [
  {
    label: 'Staking',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange Mesrise',
        href: 'https://impossible-swap-v1.netlify.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://impossible-swap-v1.netlify.app/#/pool',
      },
    ],
  },
  {
    label: 'Projects',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Apply for IDO',
    icon: 'PoolIcon',
    href: '/pools',
  },
]

export default config
