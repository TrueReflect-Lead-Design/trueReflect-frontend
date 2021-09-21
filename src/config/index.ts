import BigNumber from 'bignumber.js/bignumber'

 enum ChainId {
  MAINNET = 43114,
  TESTNET = 97
}

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://cchain.explorer.avax.network/',
  [ChainId.TESTNET]: 'https://testnet.bscscan.com',
}
export const CAKE_PER_BLOCK = new BigNumber(0)
export const BLOCKS_PER_YEAR = new BigNumber(60*60*24*365*1000000000000)
export const BSC_BLOCK_TIME = 1
export const BASE_URL = 'https://pancakeswap.finance'
export const CAKE_POOL_PID = 3
