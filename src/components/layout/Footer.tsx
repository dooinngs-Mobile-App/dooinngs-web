"use client";
import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full pt-20 bg-[#181818]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 ">
        <div className="flex flex-col gap-4">
          <img src="/assets/logos/logo.svg" alt="logo" className="w-56" />
          <div className="flex items-center text-white mt-2">
            <img
              src="/assets/icons/Mail.svg"
              alt="email"
              className="w-6 h-6 mr-4 flex-shrink-0"
            />
            <span>youmatter@dooinngs.com</span>
          </div>
          <div className="flex items-start text-white mt-2">
            <img
              src="/assets/icons/house.svg"
              alt="location"
              className="w-6 h-6 mr-4  flex-shrink-0"
            />
            <div className="flex flex-col">
              <span>Adentan Municipality</span>
              <span>GD-003-3569</span>
              <span>Ghana</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-bold text-2xl ">Company</h1>
          <Link
            href="/terms-of-service"
            className="flex items-center text-white mt-2 hover:text-gray-300 transition-colors cursor-pointer"
          >
            <span>Terms of Service</span>
          </Link>
          <Link
            href="/privacy-policy"
            className="flex items-center text-white mt-2 hover:text-gray-300 transition-colors cursor-pointer"
          >
            <span>Privacy Policy</span>
          </Link>
          <div className="flex items-center text-white mt-2">
            <span>FAQs</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="text-white font-bold text-2xl">Socials</h1>
          <a
            href="https://www.linkedin.com/company/dooinngs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white mt-2 hover:text-gray-300 transition-colors cursor-pointer"
          >
            <img
              src="/assets/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6 mr-4 flex-shrink-0"
            />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/dooinngs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white mt-2 hover:text-gray-300 transition-colors cursor-pointer"
          >
            <Instagram className="w-6 h-6 mr-4 flex-shrink-0" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61567257834764#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white mt-2 hover:text-gray-300 transition-colors cursor-pointer"
          >
            <img
              src="/assets/icons/facebook.svg"
              alt="Facebook"
              className="w-6 h-6 mr-4 flex-shrink-0"
            />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.tiktok.com/@dooinngs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white mt-2 hover:text-gray-300 transition-colors cursor-pointer"
          >
            <img
              src="/assets/icons/tiktok.svg"
              alt="TikTok"
              className="w-6 h-6 mr-4 flex-shrink-0"
            />
            <span>Tiktok</span>
          </a>
          <a
            href="https://x.com/dooinngs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white mt-2 hover:text-gray-300 transition-colors cursor-pointer"
          >
            <img
              src="/assets/icons/X.svg"
              alt="X (Twitter)"
              className="w-6 h-6 mr-4 flex-shrink-0"
            />
            <span>X</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-12 pt-8 ">
        <div className="flex items-center  text-[#838383] text-sm md:text-base lg:text-[18px] mb-3 md:mb-0">
          <span className="mr-2">Copyright ©</span>
          <span suppressHydrationWarning>
            Dooinngs Inc {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/assets/images/dooinngsLarge.svg"
            alt=""
            className="w-3/4 h-auto sm:w-2/3 md:w-3/4 lg:w-full lg:h-full"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(51%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(51%) contrast(86%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
