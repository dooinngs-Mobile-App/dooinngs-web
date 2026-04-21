"use client";

import { useState } from "react";
import { BusinessHour } from "@/types/bookings";

interface BusinessHoursProps {
  hours: BusinessHour[];
}

const DAY_ORDER = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
] as const;

function formatTime(time: string): string {
  const [hourStr, minuteStr] = time.split(":");
  let hour = parseInt(hourStr, 10);
  const period = hour >= 12 ? "pm" : "am";
  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;
  return `${hour}:${minuteStr} ${period}`;
}

const BusinessHours = ({ hours }: BusinessHoursProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const hourMap = Object.fromEntries(hours.map((h) => [h.day, h]));

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-base">🕐</span>
        <h2 className="text-base font-semibold text-gray-900">Business Hours</h2>
      </div>

      <div className="flex flex-col gap-1.5">
        {DAY_ORDER.map((day) => {
          const entry = hourMap[day];
          const isOpen = entry?.is_available_for_booking ?? false;
          const isSelected = day === selected;

          return (
            <div
              key={day}
              onClick={() => setSelected(isSelected ? null : day)}
              className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-colors ${
                isSelected ? "bg-rose-100" : "bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">{isOpen ? "✅" : "❌"}</span>
                <span className="text-sm font-semibold text-gray-900 capitalize">
                  {day.charAt(0) + day.slice(1).toLowerCase()}
                </span>
              </div>
              <span className="text-xs text-gray-700 font-medium">
                {isOpen
                  ? `${formatTime(entry.open_time)} - ${formatTime(entry.close_time)}`
                  : "Closed"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BusinessHours;
