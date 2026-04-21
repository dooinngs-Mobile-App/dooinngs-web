import React from "react";

const ArtisansSection2 = () => {
  return (
    <div className="w-full bg-[#1A1A1A]">
      <section className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 sm:gap-1 md:gap-1 lg:gap-1 xl:gap-1 mt-12 md:mt-35 w-full">
          <img
            src="assets/images/image1.png"
            alt=""
            className="col-span-1 md:col-span-1 lg:col-span-2 h-32 sm:h-40 lg:h-[284px] object-cover w-full"
          />
          <img
            src="assets/images/image2.png"
            alt=""
            className="col-span-1 md:col-span-1 lg:col-span-1 h-32 sm:h-40 lg:h-[284px] object-cover w-full"
          />
          <img
            src="assets/images/image3.png"
            alt=""
            className="col-span-1 md:col-span-1 lg:col-span-1 h-32 sm:h-40 lg:h-[284px] object-cover w-full"
          />
          <img
            src="assets/images/image4.png"
            alt=""
            className="col-span-1 md:col-span-1 lg:col-span-2 h-32 sm:h-40 lg:h-[284px] object-cover w-full"
          />
        </div>
      </section>

      <section className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-1 md:gap-1 lg:gap-1 xl:gap-1  w-full">
          <img
            src="assets/images/image5.png"
            alt=""
            className="col-span-1 md:col-span-1 lg:col-span-2 h-32 sm:h-40 lg:h-[284px] object-cover w-full"
          />
          <img
            src="assets/images/image6.png"
            alt=""
            className="col-span-1 md:col-span-1 lg:col-span-2 h-32 sm:h-40 lg:h-[284px] object-cover w-full"
          />
          <img
            src="assets/images/image7.png"
            alt=""
            className="col-span-1 md:col-span-1 lg:col-span-2 h-32 sm:h-40 lg:h-[284px] object-cover w-full hidden lg:block"
          />
        </div>
      </section>
      <section className="mx-auto">
        <div className="text-center py-[40px]">
          <h1 className="text-[35px] sm:text-[35px] md:text-[35px] lg:text-[80px] font-bold text-white">
            <span className="text-[#4D4D4D]">Empowering</span> <br />
            professional artisans <br />{" "}
            <span className="text-[#4D4D4D]">wherever, whenever</span>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default ArtisansSection2;
