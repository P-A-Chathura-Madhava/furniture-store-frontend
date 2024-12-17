import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PantryItemCard from "../components/organisms/PantryItemCard";
import Image from "next/image";
import livingRoomImg from "/public/living-room-interior.jpg";

function RedifineSection() {
  return (
    <div className="px-20">
      <div className="container mx-auto mt-10 flex bg-[#f2ebec] p-20">
        <div className="w-[30%]">
          <h2 className="text-4xl">
            <span className="font-bold">
              Redefine <br />
            </span>
            your space
          </h2>
          <p className="w-[80%] py-4">
            Whether you are aiming for a particular aesthetic, working with a
            fixed budget or simply want an expert’s guidance to create the home
            of your dreams, Finez is ready to make the journey with you, and
            redefine your space.
          </p>
          <Button className="bg-orange-700 h-[60px] w-[60%] text-md font-light hover:bg-orange-500 transition-all duration-300 cursor-pointer">
            Explore All Items
          </Button>
        </div>
        <div className="w-[70%]">
            <Image className="w-full" src={livingRoomImg} alt="living-room-interior" />
        </div>
      </div>
    </div>
  );
}

export default RedifineSection;
