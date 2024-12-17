import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import contactUsImg from "/public/contactus-image.jpg";
import { Textarea } from "@/components/ui/textarea";

function ContactUsSection() {
  return (
    <div className="container mx-auto flex px-12 py-6 mt-4">
        <div className="w-[40%] p-10 flex flex-col justify-center items-center gap-4 bg-[#e3bb65]">
            <h2>Contact Us</h2>
            <Input className="bg-[#daa02e] border-transparent hover:border-[#997120] outline-none" type="text" placeholder="Name" />
            <Input className="bg-[#daa02e] border-transparent hover:border-[#997120] outline-none" type="email" placeholder="Email" />
            <Textarea className="bg-[#daa02e] border-transparent hover:border-[#997120] outline-none" placeholder="Type your message here." />
            <Button className="bg-[#3f444a] hover:bg-[#daa02e] transition-all duration-300 w-[80%] h-12">Submit</Button>
        </div>
        <div className="w-[60%]">
            <Image className="w-full" src={contactUsImg} alt="contactus-image" />
        </div>
    </div>
  )
}

export default ContactUsSection