
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { CardContextProvider } from './contexts/CardProvider'

export function App() {
  return (
    <CardContextProvider>
      <Header />
      <Outlet />
    </CardContextProvider>
  )
}