"use client";

import Link from "next/link";
import { Camera, Shield, Cloud, Smartphone, Play, Clock } from "lucide-react";

const tariffs = [
  { name: "1 камера", price: "9.90", storage: "7 дней", cameras: 1 },
  { name: "2 камеры", price: "14.90", storage: "14 дней", cameras: 2 },
  { name: "4 камеры", price: "24.90", storage: "30 дней", cameras: 4 },
  { name: "8 камер", price: "44.90", storage: "30 дней", cameras: 8 },
];

export default function VideoControlPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/videocontrol" className="text-white text-sm font-medium">Видеоконтроль</Link>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Видеоконтроль</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Система удаленного видеонаблюдения 24/7. Просматривайте видео с камер в реальном времени или из архива.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tariffs.map((tariff) => (
              <div key={tariff.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-[#35cbe0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-[#35cbe0]" />
                </div>
                <h3 className="text-xl font-bold text-[#593c7d] text-center mb-2">{tariff.name}</h3>
                <p className="text-gray-600 text-center text-sm mb-4">Архив {tariff.storage}</p>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-[#593c7d]">{tariff.price}</span>
                  <span className="text-gray-500 text-sm"> руб/мес</span>
                </div>
                <Link href="/connect" className="block w-full text-center py-2 bg-[#593c7d] text-white rounded-lg hover:bg-[#6b4a94] transition-colors">
                  Подключить
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-8 rounded-xl">
            {[
              { icon: Cloud, title: "Облачное хранение", desc: "Записи хранятся в облаке до 30 дней" },
              { icon: Smartphone, title: "Мобильное приложение", desc: "Смотрите видео на смартфоне" },
              { icon: Shield, title: "Безопасность", desc: "Защищенное соединение" },
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
