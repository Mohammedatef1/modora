import { useAppSelector } from '@store/hooks';
import Logo from '../../assets/svg/cart.svg?react'
import { getTotalCartQuantity } from '@store/cart/selectors';

const ShoppingCart = () => {

  const totalQuantity = useAppSelector(getTotalCartQuantity)
  

  return ( 
  <div className='relative'>
    <Logo></Logo>
    <div className='p-1 bg-primary rounded-full aspect-square absolute -top-3 -right-3 flex items-center justify-center h-6 text-sm'>{totalQuantity}</div>
  </div> );
}
 
export default ShoppingCart;