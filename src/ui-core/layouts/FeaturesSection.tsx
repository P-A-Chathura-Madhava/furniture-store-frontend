import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import FeaturesCard from "../components/atoms/FeaturesCard";

function FeaturesSection() {
  return (
    <div className="container mx-auto flex justify-between text-gray-500 px-20 py-6">
      <FeaturesCard {...{icon: <TbTruckDelivery />, title: "Islandwide Delivery"}} />
      <FeaturesCard {...{icon: <MdOutlineDesignServices />, title: "Customized Designes"}} />
      <FeaturesCard {...{icon: <IoChatbubbleEllipsesOutline />, title: "Top Notch Support"}} />
      <FeaturesCard {...{icon: <RiSecurePaymentLine />, title: "Secure Payments"}} />
    </div>
  );
}

export default FeaturesSection;
