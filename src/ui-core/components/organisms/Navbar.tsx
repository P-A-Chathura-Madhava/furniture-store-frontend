import Logo from "../atoms/Logo"
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="flex justify-between px-10 h-[60px] bg-[#fff8e6]">
        <Logo />
        <div className="flex gap-4">
          <p className="flex gap-2 justify-center items-center font-bold"><FaPhone className="text-2xl" /> 0776464073</p>
          <p className="flex gap-2 justify-center items-center font-bold"><FaWhatsapp className="text-3xl" /> 0776464073</p>
        </div>
    </div>
  )
}

export default Navbar