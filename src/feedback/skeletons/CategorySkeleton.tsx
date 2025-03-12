import ContentLoader from "react-content-loader"

const CategorySkeleton = () => {
  const skeletonArray = Array(4).fill(0)
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 p-6 md:p-12">
      {skeletonArray.map((_, index) => (
        <ContentLoader 
          className="w-full h-auto"
          key={index}
          speed={2}
          width={248}
          height={292}
          viewBox="0 0 248 292"
          backgroundColor="#dfdfdf"
          foregroundColor="#ecebeb"
        >
          <rect x="63" y="262" rx="3" ry="3" width="146" height="10" /> 
          <circle cx="125" cy="124" r="118" />
        </ContentLoader>
      ))}
    </div>
  )
}

export default CategorySkeleton