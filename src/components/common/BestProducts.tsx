import Tabs from "./Tabs"

const BestProducts = () => {
  return (
    <div className="bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="mb-8 text-3xl md:text-4xl font-bold text-center">Best Selling Products</h2>
        <div className="flex items-center flex-col">
          <Tabs/>
        </div>
      </div>
    </div>
  )
}

export default BestProducts