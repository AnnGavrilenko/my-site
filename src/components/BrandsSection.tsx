"use client";

import Link from "next/link";

const brands = [
  { name: "ЯСНА", href: "https://yasna.by", color: "#f7941d" },
  { name: "byfly", href: "/internet", color: "#00a0e3" },
  { name: "ZALA", href: "/tv", color: "#593c7d" },
  { name: "Видеоконтроль", href: "/videocontrol", color: "#35cbe0" },
  { name: "ЯСНАе TV", href: "/tv/yasna", color: "#f7941d" },
  { name: "BELTELECOM SHOP", href: "https://shop.beltelecom.by", color: "#593c7d" },
  { name: "Evika!", href: "https://evika.by", color: "#f7941d" },
  { name: "СФЕРА", href: "/videoconference", color: "#593c7d" },
  { name: "OGOKINO", href: "/ogokino", color: "#888888" },
];

export function BrandsSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 items-center">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow h-20"
            >
              <span
                className="font-bold text-sm md:text-base text-center leading-tight"
                style={{ color: brand.color }}
              >
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
