"use client";
import React, { useState } from "react";
import { MapPin, Search } from "lucide-react";
import BusinessCard from "@/components/marketplace/BusinessCard";

const categories = [
  { id: "barber", label: "Barber", emoji: "💈" },
  { id: "hairstylist", label: "Hairstylist", emoji: "💇‍♀️" },
  { id: "lash-technician", label: "Lash Technician", emoji: "👁️" },
  { id: "makeup-artist", label: "Make-up Artist", emoji: "💄" },
  { id: "massage-therapist", label: "Massage Therapist", emoji: "🧖‍♀️" },
  { id: "nail-technician", label: "Nail Technician", emoji: "💅" },
];

const businesses = [
  {
    id: 1,
    name: "The Sharp Edge",
    address: "47 W 13th East Legon",
    price: "GHS 30",
    bookings: 153,
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138daaa7441b?w=600&h=400&fit=crop",
    ],
    category: "barber",
  },
  {
    id: 2,
    name: "Classic Cuts",
    address: "12 Osu Oxford Street",
    price: "GHS 45",
    bookings: 89,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=600&h=400&fit=crop",
    ],
    category: "barber",
  },
  {
    id: 3,
    name: "Fade Masters",
    address: "5 Ring Road, Accra",
    price: "GHS 25",
    bookings: 210,
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop",
    ],
    category: "barber",
  },
  {
    id: 4,
    name: "Glamour Studio",
    address: "8 Cantonments Rd",
    price: "GHS 80",
    bookings: 67,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1560066984-138daaa7441b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop",
    ],
    category: "hairstylist",
  },
  {
    id: 5,
    name: "Lash Lounge",
    address: "22 Airport Rd, Accra",
    price: "GHS 120",
    bookings: 145,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138daaa7441b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
    ],
    category: "lash-technician",
  },
  {
    id: 6,
    name: "Beauty Bar GH",
    address: "3 Labone Close",
    price: "GHS 60",
    bookings: 98,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138daaa7441b?w=600&h=400&fit=crop",
    ],
    category: "makeup-artist",
  },
  {
    id: 7,
    name: "Serenity Spa",
    address: "15 Dzorwulu Ave",
    price: "GHS 150",
    bookings: 55,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop",
    ],
    category: "massage-therapist",
  },
  {
    id: 8,
    name: "Polished Nails",
    address: "9 North Ridge Rd",
    price: "GHS 40",
    bookings: 178,
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
    ],
    category: "nail-technician",
  },
];

// Full marketplace UI — swap the default export below once the API is ready
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MarketplaceContent() {
  const [activeCategory, setActiveCategory] = useState("barber");
  const [search, setSearch] = useState("");

  const filtered = businesses.filter(
    (b) =>
      b.category === activeCategory &&
      b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">

      {/* Header: Location + Search */}
      <div className="bg-white pt-6 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">

          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-700">
            <MapPin size={18} className="text-[#E41C4C] shrink-0" />
            <span className="text-sm font-medium">Accra, Ghana</span>
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-lg">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search businesses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E41C4C]/20 focus:border-[#E41C4C] transition"
            />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[#FFE4EB] text-[#E41C4C] font-semibold"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Business Cards Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No businesses found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6 max-w-md text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#FFE4EB] flex items-center justify-center">
          <span className="text-3xl">🛍️</span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-gray-900">Marketplace Coming Soon</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We&apos;re working on bringing you the best beauty &amp; grooming professionals near you. Check back soon!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {["Barbers", "Hairstylists", "Lash Techs", "Nail Artists", "Makeup Artists", "Spas"].map((label) => (
            <span key={label} className="px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-600 font-medium">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
