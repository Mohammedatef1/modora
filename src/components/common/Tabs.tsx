import { useAppSelector } from '@store/hooks'
import TabItem from './TabItem'

interface tabsProps {
  tabs: string[]
}

const Tabs = ({tabs} : tabsProps) => {
  const {activeTab}  = useAppSelector(state => state.tabs)
  return (
    <div className="p-1.5 bg-dark-gray rounded-3xl w-fit">
      <div className="flex items-center overflow-hidden">
        {tabs.map(tab => (<TabItem key={tab} active={activeTab.toLowerCase() === tab.toLowerCase()} name={tab} />))}
      </div>
    </div>
  )
}

export default Tabs