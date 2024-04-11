import { createContext } from "react";

interface CardContextType {

  card: Item[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  incrementItemQuantity: (itemId: Item['id']) => void

}

export const CardContext = createContext({} as CardContextType)


return (
  <CardContext.Provider
    value={{
      addItem,
      card,
      decrementItemQuantity,
      incrementItemQuantity,
      removeItem,
    }}
  >
    {children}
  </CardContext.Provider>
)