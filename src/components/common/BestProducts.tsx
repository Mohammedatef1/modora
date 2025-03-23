import ArrowButton from "./ArrowButton"
import Tabs from "./Tabs"

const BestProducts = () => {
  return (
    <div className="bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col items-center">
        <h2 className="mb-8 text-3xl md:text-4xl font-bold text-center">Best Selling Products</h2>
        <Tabs tabs={['chair', 'beds', 'sofa', 'lamp']}/>
        <div className="swiperProducts mt-20 mb-15 w-full"></div>
        <ArrowButton label="View All"/>
      </div>
    </div>
  )
}

export default BestProducts