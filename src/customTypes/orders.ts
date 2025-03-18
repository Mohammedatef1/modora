import { TProduct } from "./product";

export type TOrderItem = {
  userId: number;
  orderList: TProduct[];
  total: number;
  id: number
}