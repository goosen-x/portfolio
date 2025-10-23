"use client";

import { Block } from "@/components/ui/block";
import { Globus } from "@/components/global/Globus";

import { FaLocationDot } from "react-icons/fa6";

import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import WorldMap from "@/components/ui/world-map";

export const LocationBlock = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Block className="xl:aspect-4/3 hidden isolate  md:block col-span-12 md:col-span-4 relative p-0 overflow-hidden">
      <p className="flex gap-3 absolute bottom-4 left-4 text-2xl">
        <FaLocationDot className="text-foreground text-2xl" />
        Россия, Москва
      </p>
      {isDesktop && (
        <div className="absolute -z-1 bottom-0 h-full left-1/2 -translate-x-1/2">
          <WorldMap
            dots={[
              {
                start: { lat: 55.7558, lng: 37.6176 }, // Moscow
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 55.7558, lng: 37.6176 }, // Moscow
                end: { lat: 30.0444, lng: 31.2357 }, // Cairo, Egypt
              },
              {
                start: { lat: 55.7558, lng: 37.6176 }, // Moscow
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 55.7558, lng: 37.6176 }, // Moscow
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 55.7558, lng: 37.6176 }, // Moscow
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 55.7558, lng: 37.6176 }, // Moscow
                end: { lat: 51.5074, lng: -0.1278 }, // London (пример)
              },
            ]}
          />
        </div>
      )}
    </Block>
  );
};
