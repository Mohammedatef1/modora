interface BestSellingItemProps {
  active?: boolean;
  name: string;
}

const BestSellingItem = ({active = false, name} : BestSellingItemProps) => {
  return (
    <div className={`py-2 px-5 rounded-3xl cursor-pointer text-base md:text-lg ${active ? 'bg-white ' : 'bg-transparent'}`}>
      {name}
    </div>
  )
}

export default BestSellingItem