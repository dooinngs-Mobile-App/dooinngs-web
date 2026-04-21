"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#E41C4C] sticky top-0 z-50">
      {/* Navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5 lg:py-6">
          {/* Left side: Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/assets/logos/logo.svg"
                alt="Logo"
                width={150}
                height={32}
                className="sm:w-[180px] sm:h-[39px] lg:w-[200px] lg:h-[43px] xl:w-[235px] xl:h-[51px]"
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link
              href="/marketplace"
              className="text-white text-sm lg:text-lg font-medium hover:underline transition-colors"
            >
              Marketplace
            </Link>
            <a
              href="#"
              className="text-white text-sm lg:text-lg font-medium hover:underline transition-colors"
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-white text-sm lg:text-lg font-medium hover:underline transition-colors"
            >
              Support
            </a>
          </nav>

          {/* Right side: Download button (desktop) and Mobile menu button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Auth Buttons */}
            {/* <div className="hidden md:flex items-center gap-2 sm:gap-4">
              <button className="px-2 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-[10px] rounded-full bg-white text-[#E41C4C] text-xs sm:text-sm lg:text-base font-semibold hover:bg-gray-100 transition cursor-pointer">
                Create an account
              </button>
              <button className="px-2 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-[10px] rounded-full border border-white text-white text-xs sm:text-sm lg:text-base font-semibold hover:bg-white hover:text-[#E41C4C] transition cursor-pointer">
                Sign in
              </button>
            </div> */}

            {/* Download Button (Desktop) */}
            <a
              href="#download"
              className="hidden md:flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-gradient-to-r from-gray-900 to-black text-white text-sm lg:text-base font-semibold cursor-pointer hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 lg:w-5 lg:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Image
                  src="/assets/icons/menu.svg"
                  alt="Menu"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute right-4 w-70 bg-white shadow-2xl border border-gray-200 rounded-lg z-50 transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="px-4 py-6">
            {/* Navigation Links */}
            <nav className="flex flex-col gap-4 mb-6">
              <Link
                href="/marketplace"
                className="text-gray-800 text-lg font-medium hover:text-[#E41C4C] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              <a
                href="#"
                className="text-gray-800 text-lg font-medium hover:text-[#E41C4C] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </a>
              <a
                href="#"
                className="text-gray-800 text-lg font-medium hover:text-[#E41C4C] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </a>
            </nav>

            {/* Mobile Download Button */}
            <a
              href="#download"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-gray-900 to-black text-white text-base font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Now
            </a>

            {/* Mobile Auth Buttons */}
            {/* <div className="flex flex-col gap-3">
              <button
                className="w-full px-4 py-3 rounded-full bg-[#E41C4C] text-white text-base font-semibold hover:bg-[#d1184a] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Create an account
              </button>
              <button
                className="w-full px-4 py-3 rounded-full border-2 border-[#E41C4C] text-[#E41C4C] text-base font-semibold hover:bg-[#E41C4C] hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </button>
            </div> */}
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
