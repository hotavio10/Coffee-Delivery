import { createContext, ReactNode, useEffect, useReducer } from 'react'


import { OrderInfo } from '../pages/Card'
import { useNavigate } from 'react-router-dom'
import { Item, Order } from '../reducer/cart/reducer'

interface CardContextType {
  card: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  incrementItemQuantity: (itemId: Item['id']) => void
  checkout: (order: OrderInfo) => void
}

export const CardContext = createContext({} as CardContextType)

interface CardContextProviderProps {
  children: ReactNode
}

export function CardContextProvider({ children }: CardContextProviderProps) {
  const [cardState, dispatch] = useReducer(
    cardReducer,
    {
      card: [],
      orders: [],
    },
    (cardState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cardState
    },
  )
  const navigate = useNavigate()

  const { card, orders } = cardState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate))
  }

  function incrementItemQuantity(itemId: Item['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  useEffect(() => {
    if (cardState) {
      const stateJSON = JSON.stringify(cardState)

      localStorage.setItem('@coffee-delivery:card-state-1.0.0', stateJSON)
    }
  }, [cardState])

  return (
    <CardContext.Provider
      value={{
        addItem,
        card,
        orders,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
        checkout,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}