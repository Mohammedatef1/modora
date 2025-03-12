import ContentLoader from "react-content-loader"

const ProductSkeleton = () => {
  const skeletonArray = Array(4).fill(0)
  return (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 p-6 md:p-12">
    {skeletonArray.map((_, index) => (
      <ContentLoader className="w-[150%] h-auto" key={index} viewBox="0 0 500 280" height={280} width={500} backgroundColor="#dfdfdf" foregroundColor="#ecebeb">
        <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
        <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
        <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
        <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
      </ContentLoader>
    ))}
  </div>
  )
}

export default ProductSkeleton