import React from "react";
import Image from "next/image";

const BookService = () => {
  return (
    <>
      <section className="bg-[#1C41E412] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 mx-4 sm:mx-6 lg:mx-8 xl:mx-16 2xl:mx-24 h-[500px] md:h-[706px] rounded-2xl relative">
        {/* Mobile Layout */}
        <div className="md:hidden relative">
          {/* Clock icon - left side on mobile */}
          <div className="absolute top-8 left-3 z-10">
            <Image
              src="/assets/icons/image 67.svg"
              alt="Clock icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Content centered */}
          <div className="text-center px-4">
            {/* Swift booking requests badge */}
            <div className="inline-flex bg-[#E8EDFF] rounded-full px-3 py-2 border border-[#1C41E41A]">
              <span className="text-xs font-medium text-gray-700">
                ⚡ Swift booking requests
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-xl font-semibold text-[#2D2D2D] mb-2 leading-tight mt-4">
              Book the services of <br /> artisans within seconds
            </h2>

            {/* Description */}
            <p className="text-sm text-[#7A7A7A] leading-relaxed mb-4">
              Dooinngs connects you with trusted professionals, ensuring
              convenience, quality, and reliability whenever and wherever you
              need them.
            </p>

            {/* Shopping bag icon - right side under description */}
            <div className="flex justify-end">
              <Image
                src="/assets/icons/image 68.svg"
                alt="Shopping bag icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-center mb-6.5">
          {/* Clock icon - responsive positioning */}
          <div className="">
            <Image
              src="/assets/icons/image 67.svg"
              alt="Clock icon"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          <div className="text-center px-4">
            {/* Swift booking requests badge */}
            <div className="inline-flex bg-[#E8EDFF] rounded-full px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 border border-[#1C41E41A]">
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                ⚡ Swift booking requests
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#2D2D2D] mb-2 sm:mb-2 lg:mb-3 leading-tight">
              Book the services of <br /> artisans within seconds
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg xl:text-[18px] text-[#7A7A7A] leading-relaxed max-w-3xl lg:max-w-2xl">
              Dooinngs connects you with trusted professionals, ensuring
              convenience, quality, and reliability whenever and wherever you
              need them.
            </p>
          </div>

          <div className="">
            <Image
              src="/assets/icons/image 68.svg"
              alt="Shopping bag icon"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        {/* iPhone images positioned at the bottom of the section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-10 md:w-[358px]">
          <Image
            src="/assets/images/iPhone1.png"
            alt="Shopping bag icon"
            width={358}
            height={753}
            className="object-contain hidden xl:block"
          />
          <Image
            src="/assets/images/iPhone2.png"
            alt="Shopping bag icon"
            width={358}
            height={753}
            className="object-contain "
          />
          <Image
            src="/assets/images/iPhone3.png"
            alt="Shopping bag icon"
            width={358}
            height={753}
            className="object-contain hidden xl:block"
          />
        </div>
      </section>

      {/* Second Section - Payment and Gift Cards */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center">
            {/* Payment Card - Left Side */}
            <div
              className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] xl:min-h-[744px] w-full max-w-[650px] lg:flex-1"
              style={{
                background:
                  "linear-gradient(180deg, rgba(211, 131, 80, 0.3) 0%, rgba(199, 30, 59, 0.3) 53%, rgba(24, 15, 138, 0.3) 100%)",
              }}
            >
              {/* Mobile Layout (768px and below) */}
              <div className="md:hidden relative z-10 h-full flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">
                  Book as a gift for <br />
                  your loved ones
                </h3>
                <p className="text-[#7A7A7A] text-sm mb-6">
                  Surprise your friends, family and loved ones by booking the{" "}
                  service of a professional as a gift
                </p>
              </div>

              {/* Desktop Layout (769px and above) */}
              <div className="hidden md:block relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-2 sm:mb-3 lg:mb-4">
                  <h3 className="text-xl sm:text-xl lg:text-3xl xl:text-[38px] font-semibold text-[#2D2D2D]">
                    Book as a gift for <br />
                    your loved ones
                  </h3>
                  <Image
                    src="/assets/icons/image 61.svg"
                    alt="Emoji"
                    width={100}
                    height={100}
                    className="object-contain w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-[100px] xl:h-[100px] flex-shrink-0"
                  />
                </div>
                <p className="text-[#7A7A7A] text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8">
                  Surprise your friends, family and loved ones by booking the{" "}
                  service of a professional as a gift
                </p>
              </div>

              {/* Congratulations Icon - Top Left on Mobile, Normal position on Desktop */}
              <div className="absolute top-4 left-4 md:relative md:top-auto md:left-auto md:mt-4 sm:md:mt-6 lg:md:mt-8">
                <Image
                  src="/assets/icons/image 60.svg"
                  alt="Congratulations"
                  width={100}
                  height={100}
                  className="object-contain w-12 h-12 md:w-20 md:h-20 sm:md:w-24 sm:md:h-24 lg:md:w-32 lg:md:h-32 xl:md:w-[100px] xl:md:h-[100px]"
                />
              </div>

              {/* Emoji Icon - Bottom Right on Mobile, Hidden on Desktop */}
              <div className="absolute bottom-4 right-4 md:hidden">
                <Image
                  src="/assets/icons/image 61.svg"
                  alt="Emoji"
                  width={60}
                  height={60}
                  className="object-contain w-12 h-12"
                />
              </div>

              {/* Big Gift Image - Centered and Smaller on Mobile */}
              <div className="absolute bottom-[-3%] right-[-3%] md:block hidden">
                <Image
                  src="/assets/icons/image 59.svg"
                  alt="Gift box"
                  width={550}
                  height={550}
                  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-[550px] xl:h-[550px]"
                />
              </div>

              {/* Mobile Gift Image - Centered */}
              <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden">
                <Image
                  src="/assets/icons/image 80.svg"
                  alt="Gift box"
                  width={400}
                  height={400}
                  className="w-[400px] h-[400px]"
                />
              </div>
            </div>

            {/* Gift Card - Right Side */}
            <div className="bg-[#E8F4F8] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] xl:min-h-[744px] w-full max-w-[850px] lg:flex-1">
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-[38px] font-semibold text-[#2D2D2D] mb-2 sm:mb-3 lg:mb-4">
                  Fast and secure payment of
                  <br />
                  services to artisans
                </h3>
                <p className="text-[#7A7A7A] text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 max-w-sm mx-auto md:mx-0">
                  Pay artisans into their preferred payment{" "}
                  <br className="hidden sm:block" />
                  channels at the tap of a button
                </p>
              </div>

              {/* Credit Card Icon */}
              <div className="mt-4 sm:mt-6 lg:mt-8">
                <Image
                  src="/assets/icons/image 63.svg"
                  alt="Credit card"
                  width={100}
                  height={100}
                  className="object-contain w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-[100px] xl:h-[100px]"
                />
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/assets/images/iPhone4.png"
                  alt="Iphone"
                  width={395}
                  height={844}
                  className="object-contain"
                />
              </div>

              {/* Wallet Icon */}
              <div className="absolute bottom-20 right-4 sm:bottom-40 sm:right-6 lg:bottom-50 lg:right-8">
                <Image
                  src="/assets/icons/image 64.svg"
                  alt="Wallet"
                  width={100}
                  height={100}
                  className="object-contain w-10 h-10 sm:w-10 sm:h-10 lg:w-20 lg:h-20 xl:w-[100px] xl:h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#AD3CFF12] mx-4 sm:mx-6 lg:mx-8 xl:mx-16 2xl:mx-24 h-[500px] md:h-[706px] rounded-2xl relative"
        // style={{ height: "706px" }}
      >
        {/* Content positioned in top-middle */}
        <div className="flex justify-center">
          {/* Clock icon - responsive positioning */}
          <div className="absolute top-[100px] left-50 lg:top-[110px] lg:left-30 xl:top-[100px] xl:left-50 w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] lg:w-[100px] lg:h-[100px] hidden md:block">
            <Image
              src="/assets/icons/image 70.svg"
              alt="Message icon"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Mobile Clock icon - left corner after text */}
          <div className="absolute top-[220px] left-4 w-[60px] h-[60px] md:hidden">
            <Image
              src="/assets/icons/image 70.svg"
              alt="Message icon"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          <div className="text-center max-w-4xl px-4 mt-7">
            {/* Swift booking requests badge */}
            <div className="inline-flex bg-[#F1E3FB] rounded-full px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 border border-[#1C41E41A]">
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                💬 ️Real-time communication
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-[38px] font-semibold text-[#2D2D2D] mb-4 leading-tight">
              Real-time communication
              <br />
              with skilled professionals
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#7A7A7A] leading-relaxed max-w-2xl mx-auto">
              Engage with skilled professionals to ensure they understand
              <br className="hidden sm:block" />
              your issue and take appropriate action to resolve it.
            </p>
          </div>
        </div>

        {/* Desktop Layout - Two phones */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 justify-center gap-10 hidden md:flex">
          <Image
            src="/assets/images/iPhone5.png"
            alt="Phone"
            width={395}
            height={844}
            className="object-contain mt-21"
          />
          <Image
            src="/assets/images/iPhone6.png"
            alt="Phone"
            width={395}
            height={844}
            className="object-contain"
          />
        </div>

        {/* Mobile Layout - Single phone */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:hidden">
          <Image
            src="/assets/images/iPhone7.png"
            alt="Phone"
            width={300}
            height={600}
            className="object-contain"
          />
        </div>

        {/* Right side - Shopping bag illustration */}
        {/* Desktop - Shopping bag illustration */}
        <div className="absolute top-[500px] right-[50px] lg:top-[500px] lg:right-[80px] xl:top-[500px] xl:right-[100px] w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px] hidden md:block">
          <Image
            src="/assets/icons/image71.svg"
            alt="Phone icon"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Mobile - Phone icon bottom right */}
        <div className="absolute bottom-4 right-4 w-[50px] h-[50px] md:hidden">
          <Image
            src="/assets/icons/image71.svg"
            alt="Phone icon"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default BookService;
