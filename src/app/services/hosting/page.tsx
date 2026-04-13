"use client";

import Link from "next/link";
import { Server, Cloud, Shield, HardDrive, Mail, Database } from "lucide-react";

const subMenu = [
  { label: "Дисковое пространство", href: "/services/hosting", active: true },
  { label: "Dedicated сервер", href: "/services/hosting/dedicated" },
  { label: "VPS сервер", href: "/services/hosting/vps" },
  { label: "Защита от DDoS", href: "/services/hosting/ddos" },
  { label: "Корпоративная почта", href: "/services/hosting/mail" },
  { label: "Colocation", href: "/services/hosting/colocation" },
  { label: "Облачный диск", href: "/services/hosting/cloud" },
];

const plans = [
  { name: "Старт", space: "1 ГБ", domains: 1, price: "2.90" },
  { name: "Базовый", space: "5 ГБ", domains: 3, price: "5.90" },
  { name: "Стандарт", space: "10 ГБ", domains: 5, price: "9.90" },
  { name: "Бизнес", space: "25 ГБ", domains: 10, price: "19.90" },
];

export default function HostingPage() {
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
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Хостинг</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Надежный хостинг для вашего сайта. Быстрые серверы и круглосуточная поддержка.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#593c7d] mb-4">{plan.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <HardDrive className="w-4 h-4" />
                    <span>{plan.space}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Database className="w-4 h-4" />
                    <span>{plan.domains} домен(ов)</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#593c7d]">{plan.price}</span>
                  <span className="text-gray-500 text-sm"> руб/мес</span>
                </div>
                <Link href="/connect" className="block w-full text-center py-2 border border-[#593c7d] text-[#593c7d] rounded-lg hover:bg-[#593c7d] hover:text-white transition-colors">
                  Заказать
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Server, title: "Быстрые серверы", desc: "SSD накопители для максимальной скорости" },
              { icon: Shield, title: "Безопасность", desc: "SSL сертификаты и защита от атак" },
              { icon: Cloud, title: "Резервное копирование", desc: "Ежедневные бэкапы ваших данных" },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-6 rounded-lg text-center">
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
