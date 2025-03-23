import BestSellingItem from './BestSellingItem'

const Tabs = () => {
  return (
    <div className="p-1.5 bg-dark-gray rounded-3xl w-fit">
      <div className="flex items-center overflow-hidden">
        <BestSellingItem active name="Chair"/>
        <BestSellingItem name="Chair"/>
        <BestSellingItem name="Chair"/>
      </div>
    </div>
  )
}

export default Tabs