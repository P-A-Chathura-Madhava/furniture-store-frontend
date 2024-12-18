import Image from "next/image"
import logoImg from "/public/logo.png";

function Logo() {
  return (
    <div className="flex gap-3 items-center">
        <Image src={logoImg} alt="logo-image" height={50} />
        <h2 className="text-3xl font-bold">CTECH Furniture</h2>
    </div>
  )
}

export default Logo