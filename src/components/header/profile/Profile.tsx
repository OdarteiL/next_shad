import Avatar from "./Avatar"
import Cart from "./Cart"


const Profile = () => {
  return (
    <div className="flex items-center gap-4">
    <Cart />
    <Avatar />
    </div>
  )
}

export default Profile