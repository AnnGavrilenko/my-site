"use client";

import Link from "next/link";
import { Tv, Play, Pause, Clock, Monitor } from "lucide-react";

const tvPackages = [
  { name: "ZALA Базовый", channels: "80+", price: "12.90", features: ["80+ каналов", "HD качество"] },
  { name: "ZALA Стандарт", channels: "120+", price: "17.90", features: ["120+ каналов", "HD качество", "Архив 7 дней"] },
  { name: "ZALA Премиум", channels: "180+", price: "24.90", features: ["180+ каналов", "HD/4K качество", "Архив 14 дней", "Кинозалы"] },
  { name: "ZALA Максимум", channels: "200+", price: "34.90", features: ["200+ каналов", "HD/4K качество", "Архив 30 дней", "Все кинозалы", "Мультирум"] },
];

const subMenu = [
  { label: "Интерактивное ТВ", href: "/services/tv", active: true },
  { label: "Эфирное ТВ", href: "/services/tv/broadcast" },
  { label: "SMART TV", href: "/services/tv/smart" },
  { label: "Порядок оказания услуг", href: "/services/tv/procedure" },
  { label: "Зоны покрытия", href: "/services/tv/coverage" },
];

export default function TvPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center overflow-x-auto py-3 space-x-6">
            {subMenu.map((item) => (
              <Link key={item.href} href={item.href}
                className={`text-white whitespace-nowrap text-sm font-medium ${item.active ? "text-white" : "text-white/70 hover:text-white"}`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Телевидение ZALA</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Интерактивное телевидение с возможностью управления просмотром. Пауза, перемотка, архив передач.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tvPackages.map((pkg) => (
              <div key={pkg.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#593c7d]/30 transition-all">
                <h3 className="text-xl font-bold text-[#593c7d] mb-2">{pkg.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Tv className="w-5 h-5 text-[#35cbe0]" />
                  <span className="text-lg font-semibold text-gray-900">{pkg.channels} каналов</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#593c7d] rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#593c7d]">{pkg.price}</span>
                  <span className="text-gray-500 text-sm"> руб/мес</span>
                </div>
                <Link href="/connect" className="block w-full text-center py-2 border border-[#593c7d] text-[#593c7d] rounded-lg hover:bg-[#593c7d] hover:text-white transition-colors">
                  Подключить
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-50 p-8 rounded-xl">
            {[
              { icon: Play, title: "Управление просмотром", desc: "Пауза, перемотка в прямом эфире" },
              { icon: Clock, title: "Архив передач", desc: "Смотрите передачи за последние 30 дней" },
              { icon: Monitor, title: "Мультиэкран", desc: "Смотрите на ТВ, планшете, смартфоне" },
              { icon: Tv, title: "HD/4K качество", desc: "Кристально чистая картинка" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <item.icon className="w-10 h-10 text-[#593c7d] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
