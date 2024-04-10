import { useContext } from 'react'

import { CardContext } from '../contexts/CardProvider'

export function useCard() {
  return useContext(CardContext)
}