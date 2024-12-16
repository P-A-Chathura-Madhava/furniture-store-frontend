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

// Carousel
import img01 from "/public/funiture/img-01.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function BestSellersTabs() {
  return (
    <div>
      <Tabs defaultValue="newarrivals" className="w-full">
        <TabsList className="flex w-full">
          <TabsTrigger value="newarrivals">NEW ARRIVALS</TabsTrigger>
          <TabsTrigger value="pantry">PANTRY</TabsTrigger>
          <TabsTrigger value="dinning">DINNING</TabsTrigger>
          <TabsTrigger value="living">LIVING</TabsTrigger>
          <TabsTrigger value="pillows">PILLOWS</TabsTrigger>
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
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <BestSellerCard />
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
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/5">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <BestSellerCard />
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
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/5">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <BestSellerCard />
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
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/5">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <BestSellerCard />
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
        </TabsContent>
        <TabsContent value="pillows">
          <div className="px-20">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/5">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <BestSellerCard />
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
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default BestSellersTabs;
