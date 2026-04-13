"use client";

import Link from "next/link";
import { Globe, Phone } from "lucide-react";

const rates = [
  { country: "Россия", code: "+7", price: "0.15" },
  { country: "Украина", code: "+380", price: "0.20" },
  { country: "Польша", code: "+48", price: "0.25" },
  { country: "Литва", code: "+370", price: "0.25" },
  { country: "Германия", code: "+49", price: "0.30" },
  { country: "США", code: "+1", price: "0.35" },
];

export default function InternationalPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/phone" className="text-white/70 text-sm">Телефон</Link>
            <Link href="/services/phone/international" className="text-white text-sm font-medium">Международная связь</Link>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Международная связь</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Звоните в любую страну мира по выгодным тарифам.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-[#593c7d] text-white p-4 grid grid-cols-3 font-semibold">
                <span>Страна</span>
                <span>Код</span>
                <span>Цена за мин.</span>
              </div>
              {rates.map((rate) => (
                <div key={rate.country} className="p-4 grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50">
                  <span className="text-gray-900">{rate.country}</span>
                  <span className="text-gray-600">{rate.code}</span>
                  <span className="text-[#593c7d] font-semibold">{rate.price} руб</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
