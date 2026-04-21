"use client";

import Image from "next/image";

const TopBanner = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/dooinngs_d_logo.png"
            alt="Dooinngs"
            width={60}
            height={60}
            className="w-14 h-14"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div>
            <p className="font-semibold text-gray-900">Get the dooinngs app</p>
            <p className="text-sm text-gray-500">Download the app to book</p>
          </div>
        </div>
        <div className="hidden sm:flex flex-row gap-2">
          <button className="group flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-gray-900 to-black text-white cursor-pointer min-w-[120px] md:min-w-[140px] justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105">
            <Image
              src="/assets/icons/apple.svg"
              alt="Apple logo"
              width={22}
              height={22}
              className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] group-hover:scale-110 transition-transform duration-300"
            />
            <span className="flex flex-col items-start text-left">
              <span className="text-[7px] md:text-[8px] text-gray-300 font-medium tracking-wide uppercase leading-none mb-0.5">
                Download on the
              </span>
              <span className="text-[11px] md:text-[12px] font-bold leading-none tracking-tight">
                App Store
              </span>
            </span>
          </button>
          <button className="group flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-gray-900 to-black text-white cursor-pointer min-w-[120px] md:min-w-[140px] justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105">
            <Image
              src="/assets/icons/playstore.svg"
              alt="Play Store logo"
              width={22}
              height={22}
              className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] group-hover:scale-110 transition-transform duration-300"
            />
            <span className="flex flex-col items-start text-left">
              <span className="text-[7px] md:text-[8px] text-gray-300 font-medium tracking-wide uppercase leading-none mb-0.5">
                Get it on
              </span>
              <span className="text-[11px] md:text-[12px] font-bold leading-none tracking-tight">
                Google Play
              </span>
            </span>
          </button>
        </div>
        <button
          onClick={() => {
            const userAgent = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(userAgent)) {
              window.open("https://apps.apple.com", "_blank");
            } else if (/android/.test(userAgent)) {
              window.open("https://play.google.com", "_blank");
            } else {
              window.open("https://apps.apple.com", "_blank");
            }
          }}
          className="sm:hidden px-4 py-2 bg-[#E41C4C] text-white rounded-full text-xs font-bold hover:bg-[#E41C4C]/80 transition-colors"
        >
          Use App
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
