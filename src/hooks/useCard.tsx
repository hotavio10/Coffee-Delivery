import { useContext } from 'react'

import { CardContext } from '../contexts/CardProvider'

export function useCart() {
  return useContext(CardContext)
}