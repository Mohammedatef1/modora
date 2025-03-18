import { TProduct } from "./product";

export type TOrder = {
  userId: number;
  orderItems: TProduct[];
  total: number;
  id: number
}