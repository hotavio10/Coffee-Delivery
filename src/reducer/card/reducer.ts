import { produce } from "immer"
import { ActionTypes, Actions } from "./actions"
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
          draft.card.push(action.payload.item)
        }
      })

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemToRemoveId = draft.card.findIndex(
          (item) => item.id === action.payload.itemId,
        )
        draft.card.splice(itemToRemoveId, 1)
      })

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.card.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToIncrement?.id) {
          itemToIncrement.quantity += 1
        }
      })

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.card.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1
        }
      })


    case ActionTypes.CHECKOUT_CARD:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.card,
          ...action.payload.order,
        }
        draft.orders.push(newOrder)
        draft.card = []

        action.payload.callback(`/order/${newOrder.id}/confirm`)
      })

    default:
      return state
  }
}