// import { useAppSelector } from '@store/hooks';
import Wishlist from '../../assets/svg/wishlist.svg?react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderWishlist = () => {
  const navigate = useNavigate()

  const totalQuantity = 0

  const [isAnimated, setIsAnimated] = useState(false)
  useEffect(() =>{
    if (totalQuantity == 0) return;
    setIsAnimated(true);
    const delay = setTimeout(() => {
      setIsAnimated(false)
    }, 300)

    return () => clearTimeout(delay)
  }, [totalQuantity])
  

  return ( 
  <div className='flex items-center gap-x-2 cursor-pointer' onClick={() => {navigate('wishlist')}}>
    <div className='relative'>
      <Wishlist></Wishlist>
      { totalQuantity > 0 && <div className={` ${isAnimated? 'pulseAnimation' : ''} p-1 bg-primary rounded-full aspect-square absolute -top-3 -right-3 flex items-center justify-center h-6 text-sm`}>{totalQuantity}</div>}
    </div>
    <h3 className="font-semibold">Wishlist</h3>
  </div>
 );
}
 
export default HeaderWishlist;