import React from "react";
import Image from "next/image";

const CtaSection = () => {
  return (
    <div id="download" className="bg-[#E41C4C] pt-3 sm:pt-4 lg:pt-6 px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-8 mx-4 sm:mx-6 lg:mx-8 xl:mx-16 2xl:mx-24 rounded-2xl my-[58px] scroll-mt-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        {/* Left side: Text and Buttons */}
        <div className="flex-2 max-w-2xl ">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6 text-center md:text-left mt-8 md:mt-0">
            Get things done by getting started with Dooinngs
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 leading-relaxed text-center md:text-left">
            Download the Dooinngs App today and <br />
            connect with skilled professionals
          </p>
          <div className="flex flex-row gap-2 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto justify-center md:justify-start">
            <button className="group flex items-center gap-2 sm:gap-4 px-2 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-900 to-black text-white cursor-pointer w-full sm:w-auto min-w-[120px] sm:min-w-[200px] justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <img
                src="/assets/icons/apple.svg"
                alt="Apple logo"
                className="w-5 h-5 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="flex flex-col items-start text-left">
                <span className="text-[8px] sm:text-xs text-gray-300 font-medium tracking-wide uppercase">
                  Coming soon to
                </span>
                <span className="text-xs sm:text-lg font-bold leading-tight tracking-tight">
                  App Store
                </span>
              </span>
            </button>
            <button className="group flex items-center gap-2 sm:gap-4 px-2 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-900 to-black text-white cursor-pointer w-full sm:w-auto min-w-[120px] sm:min-w-[200px] justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <img
                src="/assets/icons/playstore.svg"
                alt="Play Store logo"
                className="w-5 h-5 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="flex flex-col items-start text-left">
                <span className="text-[8px] sm:text-xs text-gray-300 font-medium tracking-wide uppercase">
                  Coming soon to
                </span>
                <span className="text-xs sm:text-lg font-bold leading-tight tracking-tight">
                  Google Play
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Right side: Phone Image */}
        <div className="flex-1 relative overflow-hidden max-w-[400px]">
          <Image
            src="/assets/images/iPhone8.png"
            alt="Dooinngs App on iPhone"
            width={400}
            height={800}
            className="w-full h-full object-cover ml-12 md:ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
