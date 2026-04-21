"use client";

import Map from "./Map";

interface LocationSectionProps {
  address: string;
  latitude?: number;
  longitude?: number;
  businessName?: string;
}

const LocationSection = ({
  address,
  latitude,
  longitude,
  businessName,
}: LocationSectionProps) => {
  const hasCoordinates = latitude !== undefined && longitude !== undefined;

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">📍</span>
        <h2 className="text-lg font-semibold text-gray-900">Location</h2>
      </div>
      <div className="w-full h-48 bg-gray-200 rounded-xl relative overflow-hidden">
        {hasCoordinates ? (
          <Map
            latitude={latitude}
            longitude={longitude}
            address={address}
            businessName={businessName}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-gray-400 mx-auto mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <p className="text-gray-500 text-sm">{address}</p>
            </div>
          </div>
        )}
      </div>
      <p className="text-gray-600 text-sm mt-2">{address}</p>
    </div>
  );
};

export default LocationSection;
