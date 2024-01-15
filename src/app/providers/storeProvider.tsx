import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

interface IStoreProvider {
  children: ReactNode
}

export const StoreProvider = ({ children }: IStoreProvider) => <Provider store={store}>{children}</Provider>
