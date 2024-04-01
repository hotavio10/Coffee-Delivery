import { Home } from '../pages/Home'
import { Card } from '../pages/Card'
import { Confirm } from '../pages/Confirm'
import { App } from '../App'
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/card',
        element: <Card />,
      },
      {
        path: '/confirm',
        element: <Confirm />,
      },
    ],
  },
])