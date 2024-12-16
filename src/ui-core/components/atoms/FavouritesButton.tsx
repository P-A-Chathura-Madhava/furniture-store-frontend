import { FaRegHeart } from "react-icons/fa";

function FavouritesButton() {
  return (
    <div className="flex flex-col items-center border-2 border-black h-full px-2 border-y-transparent border-l-transparent hover:bg-[#fcde94] cursor-pointer transition-all duration-300 w-[100px] justify-center">
        <FaRegHeart className="text-2xl" />
        <h4>Favourites</h4>
    </div>
  )
}

export default FavouritesButton