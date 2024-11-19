import Logo from "./Logo"
import Navmenu from "./Navmenu"

import Profile from "./profile/Profile"



const Nav = () => {
  return (
    <nav className="w-full md:max-w-6xl md:mx-auto ">
        <div className="w-full p-8 ">
            <div className="flex justify-between bg-gray-600 p-2 rounded-2xl">
                <div className="">
                    <Logo />
                </div>
                <div className="">
                   <Navmenu />
                </div>
                <div className="">
                    <Profile />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav