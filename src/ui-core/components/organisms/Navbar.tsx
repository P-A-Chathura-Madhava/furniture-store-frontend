import { Button } from "@/components/ui/button"
import Logo from "../atoms/Logo"
import SearchBar from "../molecules/SearchBar"
import NavbarItems from "../molecules/NavbarItems"

function Navbar() {
  return (
    <div className="flex justify-between px-10 h-[60px] bg-[#fff8e6]">
        <Logo />
        <SearchBar />
        <NavbarItems />
    </div>
  )
}

export default Navbar