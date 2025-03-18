import { TProduct } from "@customTypes/product";

const capitalizeFirstLetter = (...names : string[]) => {
  return names.map(name => name.charAt(0).toLocaleUpperCase() + name.slice(1)).join(" ")
}

const getTotalCart = (products : TProduct[]) => {
  const cartSubTotal = products.reduce((previousValue, el) => {
    const price = el.price;
    const quantity = el.quantity || 1;
    if(quantity && typeof quantity == "number"){
      return previousValue + price * quantity
    }
    return previousValue
  }, 0)
  return cartSubTotal
}

export {capitalizeFirstLetter, getTotalCart}