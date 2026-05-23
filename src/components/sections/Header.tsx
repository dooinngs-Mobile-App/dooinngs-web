import React from "react";

const Header = () => {
  return (
    <div className="bg-[#E41C4C] relative md:min-h-screen md:flex md:flex-col">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:flex-1 md:flex md:flex-col">
        <section className="flex flex-col lg:flex-row items-center justify-between md:flex-1 py-6 sm:py-8 lg:py-12">
          {/* Left: Texts and Buttons */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-3 sm:gap-4 lg:gap-6 max-w-3xl">
            <h1 className="text-[45px] sm:text-2xl md:text-5xl lg:text-5xl xl:text-[70px] font-[700] leading-tight text-center md:text-left">
              <span className="text-[#FF7E9D]">Connecting</span>
              <br />
              <span className="text-white">
                artisans <span className="text-[#FF7E9D]">to the</span>
              </span>
              <br />
              <span className="text-white">
                rest <span className="text-[#FF7E9D]">of the</span> world
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white max-w-lg lg:max-w-none text-center md:text-left">
              Need something done? Dooinngs connects you to skilled
              professionals to get a job done swiftly and effectively
            </p>
            <div className="flex justify-center md:justify-start mt-4 sm:mt-6">
              {/* App Store button - coming soon, uncomment when URL is available
              <a
                href="https://apps.apple.com/YOUR_APP_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 lg:gap-2 px-6 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-900 to-black text-white cursor-pointer w-auto justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <img
                  src="/assets/icons/apple.svg"
                  alt="Apple logo"
                  className="w-6 h-6 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="flex flex-col items-start text-left">
                  <span className="text-[8px] sm:text-xs lg:text-[10px] text-gray-300 font-medium tracking-wide uppercase">
                    Download on the
                  </span>
                  <span className="text-sm sm:text-lg font-bold leading-tight tracking-tight">
                    App Store
                  </span>
                </span>
              </a>
              */}
              <a
                href="https://play.google.com/store/apps/details?id=com.dooinngs.dooinngs"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 lg:gap-2 px-6 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-900 to-black text-white cursor-pointer w-auto justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <img
                  src="/assets/icons/playstore.svg"
                  alt="Play Store logo"
                  className="w-6 h-6 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="flex flex-col items-start text-left">
                  <span className="text-[8px] sm:text-xs lg:text-[10px] text-gray-300 font-medium tracking-wide uppercase">
                    Get it on
                  </span>
                  <span className="text-sm sm:text-lg font-bold leading-tight tracking-tight">
                    Google Play
                  </span>
                </span>
              </a>
            </div>
          </div>
          {/* Right: Image Collage */}
          <div className="flex-1 flex justify-center mt-6 sm:mt-8 lg:mt-10 xl:mt-0 relative">
            <div className="w-[374px] h-[393px] md:w-[590px] md:h-[618px] flex items-center justify-center mx-auto">
              <img
                src="/assets/images/Frame.png"
                alt="Skilled professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;