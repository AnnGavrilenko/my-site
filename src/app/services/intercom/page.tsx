"use client";

import Link from "next/link";
import { Video, Smartphone, Lock, Bell } from "lucide-react";

const features = [
  { icon: Video, title: "Видеосвязь", desc: "Видите, кто звонит в дверь" },
  { icon: Smartphone, title: "Мобильное приложение", desc: "Отвечайте на звонки из любой точки мира" },
  { icon: Lock, title: "Удаленное открытие", desc: "Открывайте дверь со смартфона" },
  { icon: Bell, title: "Уведомления", desc: "Push-уведомления о звонках" },
];

const tariffs = [
  { name: "Базовый", price: "7.90", features: ["Видеозвонок", "Мобильное приложение"] },
  { name: "Стандарт", price: "12.90", features: ["Видеозвонок", "Мобильное приложение", "Запись видео 7 дней"] },
  { name: "Премиум", price: "19.90", features: ["Видеозвонок", "Мобильное приложение", "Запись видео 30 дней", "Мультиабонент"] },
];

export default function IntercomPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/intercom" className="text-white text-sm font-medium">Видеодомофон</Link>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Видеодомофон</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Умный видеодомофон с возможностью удаленного ответа на звонки через мобильное приложение.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {features.map((item) => (
              <div key={item.title} className="text-center p-4">
                <item.icon className="w-10 h-10 text-[#593c7d] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tariffs.map((tariff) => (
              <div key={tariff.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#593c7d] mb-4 text-center">{tariff.name}</h3>
                <ul className="space-y-2 mb-4">
                  {tariff.features.map((f) => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#35cbe0] rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-[#593c7d]">{tariff.price}</span>
                  <span className="text-gray-500 text-sm"> руб/мес</span>
                </div>
                <Link href="/connect" className="block w-full text-center py-2 border border-[#593c7d] text-[#593c7d] rounded-lg hover:bg-[#593c7d] hover:text-white transition-colors">
                  Подключить
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
