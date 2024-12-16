import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";

function FeaturesSection() {
  return (
    <div className="container mx-auto flex justify-between text-gray-600 px-20 py-6">
      <div className="flex justify-center items-center gap-3">
      <TbTruckDelivery className="text-[80px]" />
        <span className="text-xl font-bold">Islandwide <br/>Delivery</span>
      </div>
      <div className="flex justify-center items-center gap-3">
      <MdOutlineDesignServices className="text-[80px]" />
        <span className="text-xl font-bold">Customized <br/>Designes</span>
      </div>
      <div className="flex justify-center items-center gap-3">
      <IoChatbubbleEllipsesOutline className="text-[80px]" />
        <span className="text-xl font-bold">Top Notch <br/>Support</span>
      </div>
      <div className="flex justify-center items-center gap-3">
      <RiSecurePaymentLine className="text-[80px]" />
        <span className="text-xl font-bold">Secure <br/>Payments</span>
      </div>
    </div>
  );
}

export default FeaturesSection;
