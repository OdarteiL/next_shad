import Sidenav from "./Sidenav";
import { House } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center h-full text-2xl font-semibold md:text-4xl">
      <div>
        <Sidenav />
      </div>
      <div>
        <House />
      </div>
    </div>
  );
};

export default Logo;
