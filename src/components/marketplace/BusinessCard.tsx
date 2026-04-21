"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Business {
  id: number;
  name: string;
  address: string;
  price: string;
  bookings: number;
  rating: number;
  images: string[];
  category: string;
}

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.08)] cursor-pointer">
      {/* Image Carousel */}
      <div className="relative w-full aspect-[4/3] bg-gray-100" style={{"--swiper-pagination-color": "#ffffff", "--swiper-pagination-bullet-inactive-color": "#ffffff", "--swiper-pagination-bullet-inactive-opacity": "0.5"} as React.CSSProperties}>
        <Swiper
          modules={[Pagination]}
          pagination={{ dynamicBullets: true }}
          loop
          className="w-full h-full"
        >
          {business.images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`${business.name} image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Image counter */}
        <div className="absolute top-2 right-2 z-10 bg-black/50 text-white text-xs font-medium px-2 py-0.5 rounded-full pointer-events-none">
          {business.images.length} photos
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-base leading-tight">
          {business.name}
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">{business.address}</p>

        {/* Stats row */}
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <span>💰</span>
            <span className="font-medium">{business.price}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <span>🛍️</span>
            <span>{business.bookings}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="font-medium">{business.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
