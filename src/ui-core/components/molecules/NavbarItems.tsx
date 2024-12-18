import AccountButton from "../atoms/AccountButton"
import CartButton from "../atoms/CartButton"
import FavouritesButton from "../atoms/FavouritesButton"
import NavbarItem from "../atoms/NavbarItem"

// Icons
import { FaRegHeart } from "react-icons/fa";

function NavbarItems() {
  return (
    <div className="flex items-center ">
        <NavbarItem {...{icon: <FaRegHeart />, title: "Favourites"}} />
        <NavbarItem {...{icon: <FaRegHeart />, title: "Favourites"}} />
        <NavbarItem {...{icon: <FaRegHeart />, title: "Favourites"}} />
        <FavouritesButton />
        <AccountButton />
        <CartButton />
    </div>
  )
}

export default NavbarItems