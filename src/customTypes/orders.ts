import { TProduct } from "./product";

export type TOrderItem = {
  userId: string;
  orderList: TProduct[];
  subtotal: number;
  id: number
}