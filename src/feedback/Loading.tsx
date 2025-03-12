import { TLoading } from "src/customTypes/shared";
import CategorySkeleton from "./skeletons/CategorySkeleton";
import CartSkeleton from "./skeletons/CartSkeleton";
import ProductSkeleton from "./skeletons/ProductSkeleton";

interface LoadingProps {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof loadingSkeleton;
}

const loadingSkeleton = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton
} 


const Loading = ({error, loading, children, type = "category"}: LoadingProps) => {
  
  if (loading === 'pending'){
    const Skeleton = loadingSkeleton[type]
    return(
      <Skeleton/>
    )
  }
  
  if (loading === 'rejected'){
    return(
      <p>{error}</p>
    )
  }

  return (
    <>{children}</>
  )
}

export default Loading