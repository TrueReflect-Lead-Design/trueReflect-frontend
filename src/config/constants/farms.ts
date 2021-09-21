import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'TRT',
    decimals: 6,
    lpAddresses: {
      97: '',
      43114: '0x7dc7be6a61eeB77ABe0f053465e2ea7dD9F9EE21', 
    },
    tokenSymbol: 'TRT',
    tokenAddresses: {
      97: '',
      43114: '0x70B907f3F7231bE122100dac51C1995e6804E346',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },

  {
    pid: 1,
    risk: 5,
    lpSymbol: 'TRT-AVAX LP',
    decimals: 6,
    lpAddresses: {
      97: '',
      43114: '0x7bB90AC513Afb34b3BF07AB7cD5d7B51f92bB11d',
    },
    tokenSymbol: 'TRT',
    tokenAddresses: {
      97: '',
      43114: '0x70B907f3F7231bE122100dac51C1995e6804E346',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'AVAX-DAI.e LP',
    decimals: 18,
    lpAddresses: {
      97: '',
      43114: '0xba09679ab223c6bdaf44d45ba2d7279959289ab0',
    },
    tokenSymbol: 'AVAX',
    tokenAddresses: {
      97: '',
      43114: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  {
    pid: 3,
    risk: 3,
    decimals: 6,
    lpSymbol: 'TRT-DAI.e LP',
    lpAddresses: {
      97: '',
      43114: '0x7dc7be6a61eeB77ABe0f053465e2ea7dD9F9EE21',
    },
    tokenSymbol: 'TRT',
    tokenAddresses: {
      97: '',
      43114: '0x70B907f3F7231bE122100dac51C1995e6804E346',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

]

export default farms
