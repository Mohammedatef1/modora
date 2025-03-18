import Heading from "@components/common/Heading"
import { useAppSelector } from "@store/hooks"
import { capitalizeFirstLetter } from "src/utils"

const Profile = () => {
  const {user} = useAppSelector(state => state.auth)

  return (
    <>
      <Heading title="Account details"/>
      <ul style={{ listStyleType: 'disc' }} className="ps-10">
        <li><span className="font-semibold">First name: </span>{capitalizeFirstLetter(user?.firstName || "")}</li>
        <li><span className="font-semibold">Last name: </span>{capitalizeFirstLetter(user?.lastName || "")}</li>
        <li><span className="font-semibold">Email: </span>{user?.email}</li>
      </ul>
    </>
  )
}

export default Profile