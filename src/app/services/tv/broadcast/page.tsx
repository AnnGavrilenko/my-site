"use client";

import Link from "next/link";
import { Tv, Radio, MapPin } from "lucide-react";

export default function BroadcastTvPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/tv" className="text-white/70 text-sm">Телевидение</Link>
            <Link href="/services/tv/broadcast" className="text-white text-sm font-medium">Эфирное ТВ</Link>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Эфирное телевидение</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Цифровое эфирное телевидение обеспечивает качественный прием телеканалов даже в удаленных районах.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Tv className="w-12 h-12 text-[#593c7d] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Бесплатные каналы</h3>
              <p className="text-gray-600 text-sm">8 общенациональных телеканалов бесплатно</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Radio className="w-12 h-12 text-[#593c7d] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">DVB-T2 стандарт</h3>
              <p className="text-gray-600 text-sm">Современный стандарт цифрового вещания</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MapPin className="w-12 h-12 text-[#593c7d] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Широкое покрытие</h3>
              <p className="text-gray-600 text-sm">Доступно на всей территории страны</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
