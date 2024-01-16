import './app.scss'
import { GamePage } from 'pages/game'
import { Layout } from 'widgets/layout'
import { StoreProvider } from '../providers/storeProvider'

export const App = () => (
  <StoreProvider>
    <Layout>
      <GamePage />
    </Layout>
  </StoreProvider>
)
