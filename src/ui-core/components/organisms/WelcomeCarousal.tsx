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
import img01 from "/public/banner-01.jpg";
import img02 from "/public/banner-02.jpg";

const imagesArray: any = [
    {image: img01},
    {image: img02},
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
      className="w-full max-w-[95%]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imagesArray.map((item: any, index: number) => {
            return(
                <CarouselItem key={index}>
                <div className="p-1">
                <Image className="w-full h-[400px]" src={item.image} alt={`img-${index+1}`} />
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
