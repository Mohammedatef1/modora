import { Link } from "react-router-dom";
import FooterCol, { TFooterItem } from "./FooterCol";
import facebook from "@assets/svg/facebook.svg?react"
import twitter from "@assets/svg/twitter.svg?react"
import instagram from "@assets/svg/instagram.svg?react"
import MaxWidthWrapper from "./MaxWidthWrapper";

const servicesItems : TFooterItem[] = [
  {
    name: 'Email Marketing',
    link: '',
  },
  {
    name: 'Campaigns',
    link: '',
  },
  {
    name: 'Branding',
    link: '',
  }
]

const furnitureItems : TFooterItem[] = [
  {
    name: 'Beds',
    link: '/categories/products/beds',
  },
  {
    name: 'Chairs',
    link: '/categories/products/chairs',
  },
  {
    name: 'All',
    link: '/categories',
  }
]

const followUsItems : TFooterItem[] = [
  {
    name: 'Facebook',
    link: '',
    Icon: facebook

  },
  {
    name: 'Twitter',
    link: '',
    Icon: twitter
  },
  {
    name: 'Instagram',
    link: '',
    Icon: instagram
  }
]

const Footer = () => {
  return ( 
  <footer className="bg-light-gray-100">
    <MaxWidthWrapper fullPadding className="text-sm md:text-base">
      <div className="my-10 md:my-16 lg:my-28 grid md:grid-cols-5 grid-cols-2 gap-x-3 gap-y-7 md:justify-items-center lg:justify-items-start">
        <div className="col-span-2">
          <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-7">Modora</h2>
          <p className="max-w-xs">The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.</p>
        </div>

        <FooterCol title="Services" items={servicesItems} />
        <FooterCol title="Furniture" items={furnitureItems} />
        <FooterCol title="Follow Us" items={followUsItems} />

      </div>
      <div className="mb-4 md:mb-8 lg:mb-12 flex flex-col md:flex-row md:justify-between gap-y-3 items-center">
        <p className="opacity-60">Copyright © 2025</p>
        <div className="flex items-center gap-x-2 md:gap-x-6">
          <Link className="hover:underline" to="">Terms & Conditions</Link>
          <Link className="hover:underline" to="">Privacy Policy</Link>
        </div>
      </div>
    </MaxWidthWrapper>
  </footer> );
}
 
export default Footer;