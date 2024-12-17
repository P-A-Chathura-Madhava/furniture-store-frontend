import Logo from "../components/atoms/Logo"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-700 pt-6 pb-28 text-white">
        <div className="container mx-auto flex px-10 mt-8 justify-between">
        <div>
            <Logo />
            <ul className="flex gap-3 text-2xl">
                <li><FaTwitter /></li>    
                <li><FaFacebookF /></li>    
                <li><FaInstagramSquare /></li>   
                <li><FaYoutube /></li>    
            </ul>        
        </div>
        <div className="flex flex-col">
            <p>LIVING</p>
            <ul className="pt-10 flex flex-col gap-2 text-sm">
                <li>Sofas</li>
                <li>Accent Chairs</li>
                <li>Coffee Tables</li>
                <li>TV Console</li>
            </ul>
        </div>
        <div className="flex flex-col">
            <p>BEDROOM</p>
            <ul className="pt-10 flex flex-col gap-2 text-sm">
                <li>Beds</li>
                <li>Wardrobe</li>
                <li>Mirrors</li>
                <li>Writing Tables</li>
            </ul>
        </div>
        <div className="flex flex-col">
            <p>DINNING</p>
            <ul className="pt-10 flex flex-col gap-2 text-sm">
                <li>Tables</li>
                <li>Dinning Chairs</li>
                <li>Credenzas</li>
            </ul>
        </div>
        <div className="flex flex-col">
            <p>DECOR</p>
            <ul className="pt-10 flex flex-col gap-2 text-sm">
                <li>Plant Pot Holders</li>
                <li>Decorative Items</li>
                <li>Lamps</li>
                <li>Wall Frames</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer