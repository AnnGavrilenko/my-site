"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const banners = [
  {
    id: 1,
    title: "Об оформлении первичных учетных документов",
    href: "/documents",
    bg: "bg-gray-100",
  },
  {
    id: 2,
    title: "2026 — год белорусской женщины",
    image: "https://ext.same-assets.com/3552094150/870558541.jpeg",
    href: "/year-of-woman",
    bg: "bg-orange-50",
  },
  {
    id: 3,
    title: "Политика РУП «Белтелеком» в отношении обработки персональных данных",
    href: "/privacy",
    bg: "bg-purple-50",
  },
];

export function InfoBanners() {
  const [startIndex, setStartIndex] = useState(0);

  const nextBanner = () => {
    setStartIndex((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setStartIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex items-center">
            <button
              type="button"
              onClick={prevBanner}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors mr-4"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              {banners.map((banner, idx) => (
                <Link
                  key={banner.id}
                  href={banner.href}
                  className={`${banner.bg} rounded-lg p-6 min-h-[120px] flex items-center justify-center text-center hover:shadow-md transition-shadow`}
                >
                  {banner.image ? (
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="max-h-20 object-contain"
                    />
                  ) : (
                    <span className="text-sm text-gray-700 font-medium">
                      {banner.title}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={nextBanner}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors ml-4"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
