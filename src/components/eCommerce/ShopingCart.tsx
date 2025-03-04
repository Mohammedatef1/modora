import { useAppSelector } from '@store/hooks';
import Logo from '../../assets/svg/cart.svg?react'

const ShoppingCart = () => {
  const items = useAppSelector(state => state.cart.items);
  const valuesArray = Object.values(items)
  let totalQuantity:number = 0
  if(valuesArray.length > 0) {
    totalQuantity = Object.values(items).reduce((previousValue, currentValue)=>{
      return previousValue + currentValue
    })
  }

  return ( 
  <div className='relative'>
    <Logo></Logo>
    <div className='p-1 bg-primary rounded-full aspect-square absolute -top-3 -right-3 flex items-center justify-center h-6 text-sm'>{totalQuantity}</div>
  </div> );
}
 
export default ShoppingCart;