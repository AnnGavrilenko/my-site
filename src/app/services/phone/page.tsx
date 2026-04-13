"use client";

import Link from "next/link";
import { Phone, Globe, Headphones, Settings } from "lucide-react";

const subMenu = [
  { label: "Установка телефона", href: "/services/phone", active: true },
  { label: "Международная связь", href: "/services/phone/international" },
  { label: "Ремонт оборудования", href: "/services/phone/repair" },
  { label: "Справочные услуги", href: "/services/phone/info" },
  { label: "Дополнительные услуги", href: "/services/phone/additional" },
  { label: "Правила набора", href: "/services/phone/dialing" },
];

const services = [
  { icon: Phone, title: "Домашний телефон", desc: "Установка и обслуживание стационарного телефона", price: "от 5.90 руб/мес" },
  { icon: Globe, title: "Международная связь", desc: "Звонки в любую страну мира по выгодным тарифам", price: "от 0.10 руб/мин" },
  { icon: Headphones, title: "Справочные услуги", desc: "Информационно-справочные услуги", price: "от 0.50 руб" },
  { icon: Settings, title: "Дополнительные услуги", desc: "АОН, переадресация, конференц-связь", price: "от 1.00 руб/мес" },
];

export default function PhonePage() {
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
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Телефония</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Услуги стационарной телефонной связи для дома и офиса. Надежная связь по всему миру.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {services.map((service) => (
              <div key={service.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#593c7d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-[#593c7d]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#593c7d] mb-1">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{service.desc}</p>
                    <p className="text-[#35cbe0] font-semibold">{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-xl max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#593c7d] mb-4">Экстренные службы</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-2xl font-bold text-red-500">101</p>
                <p className="text-sm text-gray-600">Пожарная</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-500">102</p>
                <p className="text-sm text-gray-600">Милиция</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-2xl font-bold text-green-500">103</p>
                <p className="text-sm text-gray-600">Скорая</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
