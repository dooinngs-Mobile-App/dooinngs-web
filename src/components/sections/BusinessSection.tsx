import Image from "next/image";

const businesses = [
  { src: "/assets/businesses/tbd.svg", alt: "TBD" },
  { src: "/assets/businesses/hns.svg", alt: "HNS" },
  { src: "/assets/businesses/lv.svg", alt: "LV" },
  { src: "/assets/businesses/reflect.svg", alt: "Reflect" },
  { src: "/assets/businesses/se.svg", alt: "SE" },
  { src: "/assets/businesses/clb.svg", alt: "CLB" },
];

const BusinessSection = () => {
  return (
    <section className="bg-white px-3 py-10 sm:px-6 sm:pt-[70px] lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[16px] font-normal leading-snug text-[#232323] font-figtree sm:text-[22px]">
          Join Businesses Already winning on{" "}
          <span className="font-bold">Dooinngs</span>
        </h2>

        <div className="mt-8 flex flex-nowrap items-center justify-between gap-1 sm:mt-10 sm:justify-center sm:gap-9 md:gap-6">
          {businesses.map((business) => (
            <Image
              key={business.src}
              src={business.src}
              alt={business.alt}
              width={120}
              height={120}
              className="h-[48px] w-[48px] flex-none object-contain sm:h-[120px] sm:w-[120px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
