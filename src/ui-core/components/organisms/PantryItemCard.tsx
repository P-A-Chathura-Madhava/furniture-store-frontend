import Image from "next/image"
import img01 from "/public/pantry/img-09.jpg";
import { FaRegDotCircle } from "react-icons/fa";

function PantryItemCard() {
  return (
    <div className="w-[240px]">
        <Image className="w-full" src={img01} alt="img" />
        <h3 className="text-2xl font-bold">Pantrivo Pantry</h3>
        <div className="flex gap-2 items-center font-bold text-gray-500"><FaRegDotCircle /><span>In stock</span></div>
    </div>
  )
}

export default PantryItemCard