import { Link } from "react-router-dom";

interface FooterColProps {
  title: string;
  items?: TFooterItem[]
}

export type TFooterItem = {
  name: string;
  link: string;
  icon?: React.FunctionComponent
}

const FooterCol: React.FC<FooterColProps> = ({items, title}) => {
  return (
    <div className="flex flex-col gap-y-1.5 md:gap-y-4">
      <h4 className="mb-0.5 md:mb-1 text-primary text-base lg:text-lg">{title}</h4>
      {items?.map((item, index) => (
        <Link to={item.link} key={index} className="flex items-center gap-x-2">
          {item.icon && <span className="size-5 flex justify-center"><item.icon /></span>}
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default FooterCol