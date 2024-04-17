import { createBrowserRouter } from "react-router-dom";

import { Home } from '../pages/Home'
import { Card } from '../pages/Card'
import { Confirm } from '../pages/Confirm'
import { App } from '../App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/card',
        element: <Card />,
      },
      {
        path: '/order/:orderId/confirm',
        element: <Confirm />,
      },
    ],
  },
])