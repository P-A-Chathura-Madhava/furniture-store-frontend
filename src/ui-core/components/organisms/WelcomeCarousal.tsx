"use client";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";
import img01 from "/public/funiture/img-01.png";
import img02 from "/public/funiture/img-02.png";
import img03 from "/public/funiture/img-03.png";
import img04 from "/public/funiture/img-04.png";
import img05 from "/public/funiture/img-05.png";
import img06 from "/public/funiture/img-06.png";
import img07 from "/public/funiture/img-07.png";
import img08 from "/public/funiture/img-08.png";

const imagesArray: any = [
    {image: img01},
    {image: img02},
    {image: img03},
    {image: img04},
    {image: img05},
    {image: img06},
    {image: img07},
    {image: img08}
];

function WelcomeCarousal() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="container mx-auto flex justify-center items-center">
            <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
      className="w-full max-w-[500px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imagesArray.map((item: any, index: number) => {
            return(
                <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                      <Image className="w-[400px] h-[400px]" src={item.image} alt={`img-${index+1}`} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>  
            )
})}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
}

export default WelcomeCarousal;
