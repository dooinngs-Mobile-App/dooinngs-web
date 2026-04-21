"use client";

import { useState } from "react";
import { Category } from "@/types/bookings";

interface ServicesSectionProps {
  categories: Category[];
}

const ServicesSection = ({ categories }: ServicesSectionProps) => {
  const [activeCategories, setActiveCategories] = useState<Set<number>>(
    new Set([0])
  );
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());

  const toggleCategory = (index: number) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        // Don't allow deselecting the last one
        if (next.size === 1) return prev;
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const activeList = categories.filter((_, i) => activeCategories.has(i));
  const showGroupHeaders = activeCategories.size > 1;

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">🛠️</span>
        <h2 className="text-lg font-semibold text-gray-900">Services</h2>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => toggleCategory(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategories.has(index)
                ? "bg-[#E41C4C] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {activeList.map((category) => {
          const catIndex = categories.indexOf(category);
          return (
            <div key={category.name}>
              {showGroupHeaders && (
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 px-1">
                  {category.name}
                </p>
              )}
              <div className="space-y-2">
                {category.services.map((service, sIndex) => {
                  const key = `${catIndex}-${sIndex}`;
                  const isSelected = selectedServices.has(key);
                  return (
                    <button
                      key={service.name}
                      onClick={() =>
                        setSelectedServices((prev) => {
                          const next = new Set(prev);
                          if (next.has(key)) { next.delete(key); } else { next.add(key); }
                          return next;
                        })
                      }
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        isSelected ? "bg-gray-100" : "hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-gray-900">
                        {service.name} ({service.duration})
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-gray-900">
                          GHS {service.price}
                        </span>
                        {isSelected && (
                          <span className="w-5 h-5 bg-[#E41C4C] rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
