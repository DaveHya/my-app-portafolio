"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { cardsDa } from "../pages/proyectos";

export default function CarouselDemo() {
  return (
    <div className="none-dk self-center w-90 px-4 py-8 flex justify-center">
      <Carousel
        className="w-full max-w-sm sm:max-w-md md:max-w-3xl"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {cardsDa.map((card) => (
            <CarouselItem
              key={card.id}
              className="basis-full sm:basis-1/2 md:basis-1/3" // ✅ 1 tarjeta en mobile, 2 en tablet, 3 en desktop
            >
              <div className="p-2">
                <Card className="border border-gray-300 rounded-md shadow-sm hover:shadow-md transition">
                  <CardContent className="flex flex-col items-center text-center p-4">
                    <Image
                      src={card.image}
                      alt={card.title}
                       width={200}
              height={50}
              className="block w-80 h-50  object-cover mx-auto mb-4"
                    />
                    <h2 className="text-base font-bold uppercase">
                      {card.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {card.description}
                    </p>
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                    >
                      Abrir proyecto
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* ✅ Botones mejor posicionados para mobile */}
        <div className="flex justify-between mt-2 px-6">
          <CarouselPrevious className="bg-gray-800 text-white hover:bg-black" />
          <CarouselNext className="bg-gray-800 text-white hover:bg-black" />
        </div>
      </Carousel>
    </div>
  );
}
