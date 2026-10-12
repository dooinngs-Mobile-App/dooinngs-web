"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2, MapPin, Search, X } from "lucide-react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import BusinessCard from "@/components/marketplace/BusinessCard";
import { BUSINESS_SEARCH_PAGE_SIZE, searchBusinesses, type Coords } from "@/api/client";
import { toast } from "sonner";

// `id` is sent to the API as ?profession= (case-insensitive)
const categories = [
  { id: "", label: "All", emoji: "✨" },
  { id: "Barber", label: "Barber", emoji: "💈" },
  { id: "Hairstylist", label: "Hairstylist", emoji: "💇‍♀️" },
  { id: "Lash Technician", label: "Lash Technician", emoji: "👁️" },
  { id: "Makeup Artist", label: "Make-up Artist", emoji: "💄" },
  { id: "Massage Therapist", label: "Massage Therapist", emoji: "🧖‍♀️" },
  { id: "Nail Technician", label: "Nail Technician", emoji: "💅" },
  { id: "Cleaner", label: "Cleaner", emoji: "🧹" },
  { id: "Laundry Worker", label: "Laundry", emoji: "🧺" },
  { id: "Electrician", label: "Electrician", emoji: "💡" },
  { id: "Gardener", label: "Gardener", emoji: "🌱" },
];

// e.g. current 6 of 12 → [1, "…", 5, 6, 7, "…", 12]
function pageNumbers(current: number, total: number): (number | "…")[] {
  const pages: (number | "…")[] = [];
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || Math.abs(p - current) <= 1) pages.push(p);
    else if (pages[pages.length - 1] !== "…") pages.push("…");
  }
  return pages;
}

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [coords, setCoords] = useState<Coords | null>(null);
  const [locating, setLocating] = useState(false);
  const [page, setPage] = useState(1);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Categories stick right below the navbar, whose height changes per breakpoint
  useEffect(() => {
    const navbar = document.querySelector<HTMLElement>("[data-navbar]");
    if (!navbar) return;
    const observer = new ResizeObserver(() => setNavbarHeight(navbar.offsetHeight));
    observer.observe(navbar);
    return () => observer.disconnect();
  }, []);

  const locateMe = () => {
    if (!navigator.geolocation) {
      toast.error("Location isn't supported by your browser");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords: c }) => {
        setCoords({ latitude: c.latitude, longitude: c.longitude });
        setPage(1);
        setLocating(false);
      },
      () => {
        toast.error("Couldn't get your location", {
          description: "Allow location access in your browser to see businesses near you.",
        });
        setLocating(false);
      },
    );
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setPage(1);
    }, 400);
    return () => clearTimeout(t);
  }, [search]);

  const { data, isLoading, isError, isPlaceholderData } = useQuery({
    queryKey: searchBusinesses.key(debouncedSearch, activeCategory, coords, page),
    queryFn: () => searchBusinesses.fn(debouncedSearch, activeCategory, coords, page),
    placeholderData: keepPreviousData, // keep current cards on screen while the next page loads
  });

  const businesses = data?.results ?? [];
  const totalPages = Math.ceil((data?.count ?? 0) / BUSINESS_SEARCH_PAGE_SIZE);

  const goToPage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Header: Location + Search */}
      <div className="bg-white pt-6 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">

          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-700">
            <button
              onClick={locateMe}
              disabled={locating}
              className="flex items-center gap-1.5 text-sm font-medium hover:text-[#E41C4C] disabled:opacity-60 transition"
            >
              {locating ? (
                <Loader2 size={18} className="text-[#E41C4C] shrink-0 animate-spin" />
              ) : (
                <MapPin size={18} className="text-[#E41C4C] shrink-0" />
              )}
              <span>{coords ? "Near you" : "All locations · Use my location"}</span>
            </button>
            {coords && (
              <button
                onClick={() => {
                  setCoords(null);
                  setPage(1);
                }}
                aria-label="Clear location"
                className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-lg">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="search"
              placeholder="Search businesses, services or areas..."
              aria-label="Search businesses"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E41C4C]/20 focus:border-[#E41C4C] transition"
            />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div
        className="bg-white border-b border-gray-100 sticky z-40"
        style={{ top: navbarHeight }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setPage(1);
                }}
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
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.08)] animate-pulse">
                <div className="aspect-[4/3] bg-gray-100" />
                <div className="p-4 flex flex-col gap-2">
                  <div className="h-4 w-2/3 bg-gray-100 rounded" />
                  <div className="h-3 w-1/2 bg-gray-100 rounded" />
                  <div className="h-3 w-1/3 bg-gray-100 rounded mt-2" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">Couldn&apos;t load businesses. Please try again.</p>
          </div>
        ) : businesses.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No businesses found.</p>
          </div>
        ) : (
          <>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity ${
                isPlaceholderData ? "opacity-50" : ""
              }`}
            >
              {businesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>

            {totalPages > 1 && (
              <nav aria-label="Pagination" className="flex items-center justify-center gap-1.5 mt-10">
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  aria-label="Previous page"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none transition"
                >
                  <ChevronLeft size={16} />
                </button>

                {pageNumbers(page, totalPages).map((p, i) =>
                  p === "…" ? (
                    <span key={`gap-${i}`} className="w-9 text-center text-sm text-gray-400">
                      …
                    </span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => goToPage(p)}
                      aria-current={p === page ? "page" : undefined}
                      className={`w-9 h-9 rounded-full text-sm font-medium transition ${
                        p === page
                          ? "bg-[#E41C4C] text-white"
                          : "text-gray-600 hover:bg-gray-50 border border-gray-200"
                      }`}
                    >
                      {p}
                    </button>
                  ),
                )}

                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  aria-label="Next page"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none transition"
                >
                  <ChevronRight size={16} />
                </button>
              </nav>
            )}
          </>
        )}
      </div>

    </div>
  );
}
