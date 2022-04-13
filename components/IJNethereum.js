import Web3 from 'web3'
import { Web3ReactProvider } from '@web3-react/core'

export default function App({ children }) {
  function getLibrary(provider) {
    return new Web3(provider)
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  )
}
