"use client";

import Link from "next/link";
import { Cloud, Shield, Share2, Smartphone } from "lucide-react";

const cloudPlans = [
  { name: "Мини", space: "10 ГБ", price: "2.90" },
  { name: "Стандарт", space: "50 ГБ", price: "5.90" },
  { name: "Оптимальный", space: "100 ГБ", price: "9.90" },
  { name: "Максимальный", space: "500 ГБ", price: "19.90" },
];

export default function CloudPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/hosting" className="text-white/70 text-sm">Хостинг</Link>
            <Link href="/services/hosting/cloud" className="text-white text-sm font-medium">Облачный диск</Link>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Облачный диск</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Храните файлы в облаке и получайте доступ к ним с любого устройства.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            {[
              { icon: Cloud, title: "Облачное хранение" },
              { icon: Shield, title: "Защита данных" },
              { icon: Share2, title: "Общий доступ" },
              { icon: Smartphone, title: "Мобильное приложение" },
            ].map((item) => (
              <div key={item.title} className="text-center p-4">
                <item.icon className="w-8 h-8 text-[#593c7d] mx-auto mb-2" />
                <span className="text-sm text-gray-700">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {cloudPlans.map((plan) => (
              <div key={plan.name} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <Cloud className="w-12 h-12 text-[#35cbe0] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#593c7d] mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">{plan.space}</p>
                <div className="mb-4">
                  <span className="text-xl font-bold text-[#593c7d]">{plan.price}</span>
                  <span className="text-gray-500 text-sm"> руб/мес</span>
                </div>
                <Link href="/connect" className="block w-full py-2 border border-[#593c7d] text-[#593c7d] rounded-lg hover:bg-[#593c7d] hover:text-white transition-colors">
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
