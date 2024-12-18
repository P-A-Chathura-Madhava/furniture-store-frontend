import Image from "next/image"
import img01 from "/public/pantry/img-09.jpg";
import { FaRegDotCircle } from "react-icons/fa";

function PantryItemCard({...props}) {
  const {image, title, inStock} = props;

  return (
    <div className="w-full">
        <Image className="w-full h-[340px]" src={image} alt="img" />
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex gap-2 items-center font-bold text-gray-500"><FaRegDotCircle /><span>{inStock ? "In stock" : "Out of stock"}</span></div>
    </div>
  )
}

export default PantryItemCard