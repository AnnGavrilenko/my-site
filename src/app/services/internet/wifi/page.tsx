"use client";

import Link from "next/link";
import { Wifi, Home, Building, MapPin } from "lucide-react";

const wifiTariffs = [
  { name: "Wi-Fi Дома", price: "5.00", desc: "Аренда роутера для дома", icon: Home },
  { name: "Wi-Fi Бизнес", price: "15.00", desc: "Решение для офиса", icon: Building },
  { name: "Wi-Fi Хотспот", price: "от 25.00", desc: "Публичный Wi-Fi", icon: MapPin },
];

export default function WifiPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/internet" className="text-white/70 text-sm">Интернет</Link>
            <Link href="/services/internet/wifi" className="text-white text-sm font-medium">Wi-Fi</Link>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-8 text-center">Wi-Fi решения</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {wifiTariffs.map((tariff) => (
              <div key={tariff.name} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <tariff.icon className="w-12 h-12 text-[#593c7d] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#593c7d] mb-2">{tariff.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tariff.desc}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#593c7d]">{tariff.price}</span>
                  <span className="text-gray-500 text-sm"> руб/мес</span>
                </div>
                <Link href="/connect" className="inline-block px-6 py-2 bg-[#593c7d] text-white rounded-lg hover:bg-[#6b4a94]">
                  Подробнее
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
