import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { LedgerConnector } from '@web3-react/ledger-connector'

import CONSTANTS from 'server/constants'
import config from 'server/config'

export const injected = new InjectedConnector({
  supportedChainIds: [CONSTANTS.chainID.bsc],
})

export const network = new NetworkConnector({
  urls: {
    1: config.ETHEREUM_MAINNET,
    3: config.ETHEREUM_MAINNET,
    4: config.ETHEREUM_MAINNET,
    5: config.ETHEREUM_GOERLI,
    56: config.BINANCE_MAINNET,
    97: config.BINANCE_TESTNET,
  },
  defaultChainId: 56,
})

export const ledger = new LedgerConnector({
  chainId: CONSTANTS.chainID.bsc,
  url: config.BINANCE_MAINNET,
  pollingInterval: CONSTANTS.connection.POLLING_INTERVAL,
})
