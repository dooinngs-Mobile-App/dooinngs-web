"use client";

import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

interface ImageGalleryProps {
  images?: string[];
  shareTitle?: string;
  shareLink?: string;
}

const ImagePlaceholder = ({ size = "large" }: { size?: "large" | "small" }) => (
  <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={size === "large" ? "w-16 h-16" : "w-8 h-8"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </div>
);

const ImageGallery = ({ images = [], shareTitle, shareLink }: ImageGalleryProps) => {
  const displayImages = images.length > 0 ? images : [];
  const hasImages = displayImages.length > 0;
  const total = hasImages ? displayImages.length : 5;

  const [currentIndex, setCurrentIndex] = useState(1);

  const handleShare = useCallback(async () => {
    const url = shareLink ?? window.location.href;
    const title = shareTitle ?? document.title;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url).catch(() => {});
    }
  }, [shareTitle, shareLink]);

  return (
    <>
      {/* ── Mobile Slider ─────────────────────────────────────────────────── */}
      <div className="block sm:hidden mb-0 relative">
        <Swiper
          modules={[Pagination]}
          pagination={false}
          className="aspect-[4/3] w-full"
          onSlideChange={(swiper: SwiperType) =>
            setCurrentIndex(swiper.activeIndex + 1)
          }
        >
          {hasImages
            ? displayImages.map((imageUrl, index) => (
                <SwiperSlide key={index} className="relative bg-gray-200">
                  <img
                    src={imageUrl}
                    alt={`Gallery image ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))
            : [1, 2, 3, 4, 5].map((_, index) => (
                <SwiperSlide key={index} className="relative bg-gray-200">
                  <ImagePlaceholder size="large" />
                </SwiperSlide>
              ))}
        </Swiper>

        {/* Share button — top right */}
        <button
          onClick={handleShare}
          aria-label="Share this business"
          className="absolute top-3 right-3 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-gray-800 transition-all active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </button>

        {/* Image counter — bottom right */}
        <div className="absolute bottom-10 right-3 z-20 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-semibold pointer-events-none">
          {currentIndex}/{total}
        </div>
      </div>

      {/* ── Desktop Grid ──────────────────────────────────────────────────── */}
      <div className="hidden sm:grid grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden">
        {/* Main large image */}
        <div className="col-span-2 row-span-2 bg-gray-200 aspect-square relative">
          {hasImages && displayImages[0] ? (
            <img
              src={displayImages[0]}
              alt="Main gallery image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <ImagePlaceholder size="large" />
          )}
        </div>
        {/* Smaller images */}
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="bg-gray-200 aspect-square relative">
            {hasImages && displayImages[index] ? (
              <img
                src={displayImages[index]}
                alt={`Gallery image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <ImagePlaceholder size="small" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
