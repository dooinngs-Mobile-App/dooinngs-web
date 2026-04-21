"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const artisanData = [
  { src: "/assets/images/ArtisanImages/Image1.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image2.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image3.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image4.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image5.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image6.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image7.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image8.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image9.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image10.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image11.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image12.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image13.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image14.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image15.png", label: "Painters" },
  { src: "/assets/images/ArtisanImages/Image16.png", label: "Painters" },

  // Add the rest of your 16 images and labels here
];

const ArtisansSections = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
      containScroll: false,
      watchDrag: false, // Disable drag interaction
    },
    [
      AutoScroll({
        speed: 3, // Continuous scroll speed
        startDelay: 0,
        stopOnInteraction: false, // Don't stop on user interaction
        stopOnMouseEnter: false, // Don't stop on mouse enter
        stopOnFocusIn: false, // Don't stop on focus
      }),
    ]
  );

  // Disable all user interactions
  useEffect(() => {
    if (emblaApi) {
      // Disable pointer events on slides to prevent any interaction
      const container = emblaApi.containerNode();
      if (container) {
        container.style.pointerEvents = "none";
      }
    }
  }, [emblaApi]);

  return (
    <section className="w-full py-20 md:py-45">
      <div className=" mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#232323] font-figtree">
          Make <span className="text-[#E41C4C]">money</span> as a skilled
          <br />
          artisan with <span className="text-[#E41C4C]">Dooinngs</span>
        </h2>
        <p className="text-center text-[#9D9D9D] text-sm md:text-xl mb-20 font-figtree">
          Get started with Dooinngs as a skilled professional
          <br />
          and make as much as you can at your call
        </p>
        <div className="overflow-hidden py-4 px-1" ref={emblaRef}>
          <div className="flex">
            {/* Duplicate the array multiple times to ensure seamless looping with consistent gaps */}
            {[...artisanData, ...artisanData, ...artisanData].map(
              (artisan, idx) => (
                <div
                  key={idx}
                  className="flex-none w-[280px] md:w-[380px] mr-6"
                  style={{ pointerEvents: "none" }} // Disable all interactions
                >
                  <div className="w-[280px] h-[400px] md:w-[380px] md:h-[560px] rounded-[8px] overflow-hidden flex flex-col items-center justify-end relative shadow-lg">
                    <img
                      src={artisan.src}
                      alt={artisan.label}
                      className="w-full h-[400px] md:h-[560px] object-cover"
                      style={{ display: "block" }}
                      draggable={false} // Disable image dragging
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisansSections;
