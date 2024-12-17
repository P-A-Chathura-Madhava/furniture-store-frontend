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

function LivingFurnitureSection() {
  return (
    <div className="px-20">
      <div className="container mx-auto mt-10 flex bg-[#f2ebec] p-20">
        <div className="w-[30%]">
          <h2 className="text-4xl">
            <span className="font-bold">
              Living <br />
            </span>
            Room Furniture
          </h2>
          <p className="w-[80%] py-4">
            Styling your living room allows you the chance to create an inviting
            space reflecting your signature style. We have a range of living
            room furniture to suit your style, whether its classic, contemporary
            or eclectic.
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
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <PantryItemCard />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default LivingFurnitureSection;
