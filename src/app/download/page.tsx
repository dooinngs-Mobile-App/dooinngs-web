"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function DownloadPage() {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    // Detect device and redirect
    if (/iphone|ipad|ipod/.test(userAgent)) {
      // iOS - redirect to App Store
      // Replace with your actual App Store link when available
      window.location.href = "https://apps.apple.com";
    } else if (/android/.test(userAgent)) {
      // Android - redirect to Play Store
      // Replace with your actual Play Store link when available
      window.location.href = "https://play.google.com";
    }
    // Desktop users will see the page below
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <Image
            src="/assets/dooinngs_d_logo.png"
            alt="Dooinngs"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Get the Dooinngs App
        </h1>
        <p className="text-gray-600 mb-8">
          Download our app to book services easily
        </p>

        <div className="space-y-3">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors"
          >
            <Image
              src="/assets/icons/apple.svg"
              alt="Apple"
              width={24}
              height={24}
            />
            <span className="flex flex-col items-start text-left">
              <span className="text-xs text-gray-300">Download on the</span>
              <span className="font-semibold">App Store</span>
            </span>
          </a>

          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors"
          >
            <Image
              src="/assets/icons/playstore.svg"
              alt="Play Store"
              width={24}
              height={24}
            />
            <span className="flex flex-col items-start text-left">
              <span className="text-xs text-gray-300">Get it on</span>
              <span className="font-semibold">Google Play</span>
            </span>
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-8">
          Coming soon to App Store and Google Play
        </p>
      </div>
    </div>
  );
}
