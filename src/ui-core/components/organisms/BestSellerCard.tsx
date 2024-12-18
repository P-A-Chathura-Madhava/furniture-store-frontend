import Image from "next/image"
import img01 from "/public/funiture/img-01.png";
import { FaRegDotCircle } from "react-icons/fa";

function BestSellerCard({...props}) {
  const {image, title, inStock} = props;

  return (
    <div className="w-[200px] flex flex-col">
        <Image className="w-full bg-gray-200 h-52" src={image} alt="img" />
        <div className="flex flex-col">
        <span className="text-md font-bold py-2">{title}</span>
        <span className="text-sm font-bold"><span className="text-gray-500">From:</span> Rs. 100000.00</span>
        <div className="flex gap-2 items-center"><FaRegDotCircle /><span>{inStock ? "In stock" : "Out of stock"}</span></div>
        </div>
    </div>
  )
}

export default BestSellerCard