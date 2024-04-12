import { OrderInfo } from "../../pages/Card"

export interface Item {
  id: string
  quantity: number
}

export interface Order extends OrderInfo {
  id: number
  items: Item[]
}

interface CardState {
  card: Item[]
  orders: Order[]
}
export function cardReducer(state: CardState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.card.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.item.quantity
        } else {
          draft.cart.push(action.payload.item)
        }
      })

      case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemToRemoveId = draft.card.findIndex(
          (item) => item.id === action.payload.itemId,
        )
        draft.card.splice(itemToRemoveId, 1)
      })
    }}