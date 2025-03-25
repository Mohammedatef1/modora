import { useAppDispatch } from "@store/hooks";
import { setActiveTab } from "@store/tabs/tabsSlice";

interface TabItemProps {
  active?: boolean;
  name: string;
}

const TabItem = ({active = false, name} : TabItemProps) => {
  const dispatch = useAppDispatch()

  const clickHandler = () => {
    dispatch(setActiveTab(name))
  }

  return (
    <button className={`py-2 px-5 rounded-3xl text-base md:text-lg transition-colors ${active ? 'bg-white ' : 'bg-transparent'}`}  onClick={clickHandler}>
      {name}
    </button>
  )
}

export default TabItem