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

export function reducer() {}