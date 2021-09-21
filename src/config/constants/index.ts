import farmsConfig from './farms'


export const PendingToken = 'pendingToken'
export const TokenPerBlock = 'tokenPerSecond'
export const TOKEN = 'TRT'

const communityFarms = farmsConfig.filter((farm) => farm.isCommunity).map((farm) => farm.tokenSymbol)

export { farmsConfig, communityFarms }
export { default as poolsConfig } from './pools'
export { default as ifosConfig } from './ifo'
