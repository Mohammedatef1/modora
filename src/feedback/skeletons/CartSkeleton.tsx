import ContentLoader from "react-content-loader"


const CartSkeleton = () => {
  const skeletonArray = Array(2).fill(0)
  return (
    <div className="flex flex-col gap-y-2">
      {skeletonArray.map((_, index) =>(
        <ContentLoader key={index} viewBox="0 0 400 160" className="w-full max-w-xl" backgroundColor="#dfdfdf" foregroundColor="#ecebeb" height={160} width={400}>
          <rect x="110" y="21" rx="4" ry="4" width="254" height="6" />
          <rect x="111" y="41" rx="3" ry="3" width="185" height="7" />
          <rect x="304" y="-46" rx="3" ry="3" width="350" height="6" />
          <rect x="371" y="-45" rx="3" ry="3" width="380" height="6" />
          <rect x="484" y="-45" rx="3" ry="3" width="201" height="6" />
          <circle cx="48" cy="48" r="48" />
        </ContentLoader>
      ))}
    </div>
  )
}

export default CartSkeleton