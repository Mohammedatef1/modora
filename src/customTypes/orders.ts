import { TProduct } from "./product";

export type TOrderItem = {
  userId: number;
  orderList: TProduct[];
  subtotal: number;
  id: number
}