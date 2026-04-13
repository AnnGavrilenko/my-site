"use client";

import Link from "next/link";
import { Smartphone, Tv, Tablet, Laptop } from "lucide-react";

export default function SmartTvPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/tv" className="text-white/70 text-sm">Телевидение</Link>
            <Link href="/services/tv/smart" className="text-white text-sm font-medium">SMART TV</Link>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">SMART ZALA</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Смотрите телевидение ZALA на любом устройстве с приложением SMART ZALA.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {[
              { icon: Tv, label: "Smart TV" },
              { icon: Smartphone, label: "Смартфон" },
              { icon: Tablet, label: "Планшет" },
              { icon: Laptop, label: "Компьютер" },
            ].map((item) => (
              <div key={item.label} className="text-center p-6 bg-gray-50 rounded-lg">
                <item.icon className="w-12 h-12 text-[#593c7d] mx-auto mb-3" />
                <span className="font-medium text-gray-900">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/connect" className="inline-block px-8 py-3 bg-[#593c7d] text-white rounded-lg hover:bg-[#6b4a94]">
              Подключить SMART ZALA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
