import './app.scss'
import { GamePage } from 'pages/game'
import { Layout } from 'widgets/layout'
import { StoreProvider } from '../providers/storeProvider'

const App = () => (
  <StoreProvider>
    <Layout>
      <GamePage />
    </Layout>
  </StoreProvider>
)

export default App
