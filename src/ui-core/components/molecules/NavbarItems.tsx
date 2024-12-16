import AccountButton from "../atoms/AccountButton"
import CartButton from "../atoms/CartButton"
import FavouritesButton from "../atoms/FavouritesButton"

function NavbarItems() {
  return (
    <div className="flex items-center ">
        <FavouritesButton />
        <AccountButton />
        <CartButton />
    </div>
  )
}

export default NavbarItems