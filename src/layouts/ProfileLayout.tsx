import { NavLink, Outlet } from "react-router-dom"

const ProfileLayout = () => {
  return (
    <div className="flex gap-x-3 items-start">
      <div className="side-bar w-96 hidden md:flex flex-col border border-gray-200 rounded-md divide-y-2 divide-gray-200">
        <NavLink className="px-4 py-2 side-bar-link" to="/profile" end >Profile Details</NavLink>
        <NavLink className="px-4 py-2 side-bar-link" to="/profile/orders">Orders</NavLink>
      </div>
      <div className="flex-1"><Outlet/></div>
    </div>
  )
}

export default ProfileLayout