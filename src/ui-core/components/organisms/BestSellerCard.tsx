import Image from "next/image"
import img01 from "/public/funiture/img-01.png";
import { FaRegDotCircle } from "react-icons/fa";

function BestSellerCard() {
  return (
    <div className="w-[200px] flex flex-col">
        <Image className="w-full bg-gray-200" src={img01} alt="img" />
        <div className="flex flex-col">
        <span className="text-md font-bold py-2">Liam Dinning Table</span>
        <span className="text-sm font-bold"><span className="text-gray-500">From:</span> Rs. 100000.00</span>
        <div className="flex gap-2 items-center"><FaRegDotCircle /><span>In stock</span></div>
        </div>
    </div>
  )
}

export default BestSellerCard