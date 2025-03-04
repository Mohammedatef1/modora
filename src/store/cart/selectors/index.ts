import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

const getTotalCart = createSelector((state: RootState) => state.cart.items , (items) => {
  const totalCart  = Object.values(items).reduce((previousValue, currentValue)=>{
      return previousValue + currentValue
    }, 0)
  return totalCart;
})

export {getTotalCart}