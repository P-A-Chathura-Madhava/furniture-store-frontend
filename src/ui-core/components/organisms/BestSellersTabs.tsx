import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BestSellerCard from "./BestSellerCard";

// New Arrivals Images
import img01 from "/public/funiture/img-01.png";
import img02 from "/public/funiture/img-02.png";
import img03 from "/public/funiture/img-03.png";
import img04 from "/public/funiture/img-04.png";
import img05 from "/public/funiture/img-05.png";
import img06 from "/public/funiture/img-06.png";

// Pantry Item Images
import pimg01 from "/public/pantry/img-09.jpg";
import pimg02 from "/public/pantry/img-10.jpg";
import pimg03 from "/public/pantry/img-11.jpg";
import pimg04 from "/public/pantry/img-12.jpg";
import pimg05 from "/public/pantryItems/pantryImage-01.jpg";
import pimg06 from "/public/pantryItems/pantryImage-02.jpg";

// Dinning Items Images
import dimg01 from "/public/dinningItems/dinningImage-01.jpg";
import dimg02 from "/public/dinningItems/dinningImage-02.jpg";
import dimg03 from "/public/dinningItems/dinningImage-03.jpeg";
import dimg04 from "/public/dinningItems/dinningImage-04.jpg";
import dimg05 from "/public/dinningItems/dinningImage-05.jpg";
import dimg06 from "/public/dinningItems/dinningImage-06.jpg";

// Living Room Items Images
import limg01 from "/public/livingRoomItems/livingImage-01.png";
import limg02 from "/public/livingRoomItems/livingImage-02.jpg";
import limg03 from "/public/livingRoomItems/livingImage-03.jpg";
import limg04 from "/public/livingRoomItems/livingImage-04.jpg";
import limg05 from "/public/livingRoomItems/livingImage-05.jpg";
import limg06 from "/public/livingRoomItems/livingImage-06.jpg";

// Decor Images
import deimg01 from "/public/decorItems/decorImage-01.jpg";
import deimg02 from "/public/decorItems/decorImage-02.jpg";
import deimg03 from "/public/decorItems/decorImage-03.jpg";
import deimg04 from "/public/decorItems/decorImage-04.jpg";
import deimg05 from "/public/decorItems/decorImage-05.jpg";
import deimg06 from "/public/decorItems/decorImage-06.jpg";

// Carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Items
// New Arrivals
const newArrivals = [
  {
    image: img01,
    title: "Dinning Table",
    inStock: true
  },
  {
    image: img02,
    title: "Teapoy",
    inStock: true
  },
  {
    image: img03,
    title: "Bedroom furniture set",
    inStock: true
  },
  {
    image: img04,
    title: "Darkove Dinning Table",
    inStock: true
  },
  {
    image: img05,
    title: "Door Set",
    inStock: true
  },
  {
    image: img06,
    title: "Simplow Dinning Table",
    inStock: true
  }
]

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

// Dinning Items
const dinningItems = [
  {
    image: dimg01,
    title: "Light TV Stand",
    inStock: true
  },
  {
    image: dimg02,
    title: "Rudov TV Stand",
    inStock: true
  },
  {
    image: dimg03,
    title: "Royal Dinning Table",
    inStock: true
  },
  {
    image: dimg04,
    title: "Darkove Wooden Sofa",
    inStock: true
  },
  {
    image: dimg05,
    title: "Royal Wooden Sofa",
    inStock: true
  },
  {
    image: dimg06,
    title: "Simplow Wooden Sofa",
    inStock: true
  }
]

// Living Room Items
const livingRoomItems = [
  {
    image: limg01,
    title: "Royal Teapoy",
    inStock: true
  },
  {
    image: limg02,
    title: "Newov Teapoy",
    inStock: true
  },
  {
    image: limg03,
    title: "Neon Teapoy",
    inStock: true
  },
  {
    image: limg04,
    title: "Benchov Living Table",
    inStock: true
  },
  {
    image: limg05,
    title: "Neon Living Set",
    inStock: true
  },
  {
    image: limg06,
    title: "Royal Living Set",
    inStock: true
  }
]

// Decor Items
const decorItems = [
  {
    image: deimg01,
    title: "Simplov Lamp Hanger",
    inStock: true
  },
  {
    image: deimg02,
    title: "Royal Statue Stand",
    inStock: true
  },
  {
    image: deimg03,
    title: "Simplov Statue Stand",
    inStock: true
  },
  {
    image: deimg04,
    title: "Neon Plant Pot",
    inStock: true
  },
  {
    image: deimg05,
    title: "Royal Plant Pot",
    inStock: true
  },
  {
    image: deimg06,
    title: "Royal Lamp Hanger",
    inStock: true
  }
]

function BestSellersTabs() {
  return (
    <div>
      <Tabs defaultValue="newarrivals" className="w-full">
        <TabsList className="flex w-full">
          <TabsTrigger value="newarrivals">NEW ARRIVALS</TabsTrigger>
          <TabsTrigger value="pantry">PANTRY</TabsTrigger>
          <TabsTrigger value="dinning">DINNING</TabsTrigger>
          <TabsTrigger value="living">LIVING</TabsTrigger>
          <TabsTrigger value="decor">DECOR</TabsTrigger>
        </TabsList>
        <TabsContent value="newarrivals">
          <div className="px-20">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {
                newArrivals?.map((item: any, index: number) => {
                  return(
                    <CarouselItem key={index} className="basis-1/4">
                    <div className="p-1">
                          <BestSellerCard {...{image:item.image, title:item.title, inStock: item.inStock}} />
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
        </TabsContent>
        <TabsContent value="pantry">
          <div className="px-20">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
            {
                pantryItems?.map((item: any, index: number) => {
                  return(
                    <CarouselItem key={index} className="basis-1/4">
                    <div className="p-1">
                          <BestSellerCard {...{image:item.image, title:item.title, inStock: item.inStock}} />
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
        </TabsContent>
        <TabsContent value="dinning">
          <div className="px-20">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
            {
                dinningItems?.map((item: any, index: number) => {
                  return(
                    <CarouselItem key={index} className="basis-1/4">
                    <div className="p-1">
                          <BestSellerCard {...{image:item.image, title:item.title, inStock: item.inStock}} />
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
        </TabsContent>
        <TabsContent value="living">
          <div className="px-20">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
            {
                livingRoomItems?.map((item: any, index: number) => {
                  return(
                    <CarouselItem key={index} className="basis-1/4">
                    <div className="p-1">
                          <BestSellerCard {...{image:item.image, title:item.title, inStock: item.inStock}} />
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
        </TabsContent>
        <TabsContent value="decor">
          <div className="px-20">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
            {
                decorItems?.map((item: any, index: number) => {
                  return(
                    <CarouselItem key={index} className="basis-1/4">
                    <div className="p-1">
                          <BestSellerCard {...{image:item.image, title:item.title, inStock: item.inStock}} />
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
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default BestSellersTabs;
