import { Dispatch, SetStateAction } from 'react'

interface tabsProps {
  tabs: string[],
  setActiveTab: Dispatch<SetStateAction<string>>,
  activeTab: string
}

const Tabs = ({tabs, setActiveTab, activeTab} : tabsProps) => {
  return (
    <div className="p-1.5 bg-light-gray-200 rounded-3xl w-fit">
      <div className="flex items-center overflow-hidden">
        {tabs.map((tab, index) => (
          <button key={index} className={`py-2 px-5 rounded-3xl text-base md:text-lg transition-colors ${activeTab === tab ? 'bg-white ' : 'bg-transparent'}`}  onClick={() => setActiveTab(tab)}>
            {tab}
          </button>))}
      </div>
    </div>
  )
}

export default Tabs