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

// Pantry Item Images
import pimg01 from "/public/pantry/img-09.jpg";
import pimg02 from "/public/pantry/img-10.jpg";
import pimg03 from "/public/pantry/img-11.jpg";
import pimg04 from "/public/pantry/img-12.jpg";
import pimg05 from "/public/pantryItems/pantryImage-01.jpg";
import pimg06 from "/public/pantryItems/pantryImage-02.jpg";

// Pantry Items
const pantryItems = [
  {
    image: pimg01,
    title: "Panry Set nova",
    inStock: true
  },
  {
    image: pimg02,
    title: "Panry Set rulf",
    inStock: true
  },
  {
    image: pimg03,
    title: "Panry Set attract",
    inStock: true
  },
  {
    image: pimg04,
    title: "Panry Set lion",
    inStock: true
  },
  {
    image: pimg05,
    title: "Panry Set nash",
    inStock: true
  },
  {
    image: pimg06,
    title: "Panry Set seko",
    inStock: true
  }
]

function FurnitureSection({...props}) {
  const {sectionTitle1, sectionTitle2, description, items} = props;

  return (
    <div className="px-20">
      <div className="container mx-auto mt-10 flex bg-[#f2ebec] p-20">
        <div className="w-[30%]">
          <h2 className="text-4xl">
            <span className="font-bold">
              {sectionTitle1} <br />
            </span>
            {sectionTitle2}
          </h2>
          <p className="w-[80%] py-4">
            {description}
          </p>
          <Button className="bg-orange-700 h-[60px] w-[60%] text-md font-light hover:bg-orange-500 transition-all duration-300 cursor-pointer">
            Explore All Items
          </Button>
        </div>
        <div className="w-[70%]">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {
                items?.map((item: any, index: number) => {
                  return(
                    <CarouselItem key={index} className="basis-1/2">
                    <div className="p-1">
                          <PantryItemCard {...{image: item.image, title: item.title, inStock: item.inStock}} />
                    </div>
                  </CarouselItem>
                  )
                })
              }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default FurnitureSection;
