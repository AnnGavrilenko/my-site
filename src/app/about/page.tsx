"use client";

import Link from "next/link";
import { Building, Users, Globe, Network, Scale, Award } from "lucide-react";

const menuItems = [
  { label: "Руководство", href: "/about/management" },
  { label: "Компания", href: "/about", active: true },
  { label: "Сотрудничество", href: "/about/cooperation" },
  { label: "Сети связи", href: "/about/networks" },
  { label: "Правовая информация", href: "/about/legal" },
  { label: "Профсоюзная жизнь", href: "/about/union" },
];

const brands = [
  { name: "byfly", logo: "https://ext.same-assets.com/3552094150/2125569959.png", description: "Высокоскоростной интернет для дома и офиса" },
  { name: "ZALA", logo: "https://ext.same-assets.com/3552094150/75537442.png", description: "Интерактивное, эфирное и интернет-телевидение" },
  { name: "ЯСНА", logo: "https://ext.same-assets.com/3552094150/1050025613.png", description: "Пакеты услуг на основе GPON технологии" },
  { name: "ЯСНАе TV", logo: "https://ext.same-assets.com/3552094150/3496854841.png", description: "Телевизионный канал в формате Full HD" },
  { name: "Видеоконтроль", logo: "https://ext.same-assets.com/3552094150/1122658707.png", description: "Система удаленного мониторинга 24/7" },
  { name: "Evika!", logo: "https://ext.same-assets.com/3552094150/4252838571.png", description: "Сеть электрозарядных станций" },
];

const stats = [
  { value: "220+", label: "тыс. км оптоволокна" },
  { value: "9", label: "филиалов" },
  { value: "100+", label: "услуг" },
  { value: "30+", label: "лет на рынке" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Submenu */}
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center overflow-x-auto py-3 space-x-6 scrollbar-hide">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white whitespace-nowrap transition-colors text-sm font-medium ${
                  item.active ? "text-white" : "hover:text-white/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#593c7d] mb-8 text-center">
            О компании
          </h1>

          {/* Company description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Республиканское унитарное предприятие электросвязи «Белтелеком» – ведущий
              телекоммуникационный оператор Республики Беларусь, обеспечивающий устойчивое
              функционирование и развитие современной инфраструктуры электросвязи по всей
              территории страны.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Компания предоставляет полный спектр услуг связи для государственных органов,
              корпоративных клиентов и населения. Предприятие является лидером в оказании
              услуг доступа в интернет, телевидения, видеоконтроля и других.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#593c7d] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Logo explanation */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-xl font-bold text-[#593c7d] mb-4">Логотип</h2>
              <div className="flex items-center gap-8 mb-4">
                <img
                  src="https://ext.same-assets.com/3552094150/201572149.svg"
                  alt="Белтелеком"
                  className="h-12"
                />
                <img
                  src="https://ext.same-assets.com/3552094150/2396943575.svg"
                  alt="БТК"
                  className="h-12"
                />
              </div>
              <p className="text-gray-700 text-sm">
                Логотип «Белтелеком» состоит из двух элементов: знака и названия бренда.
                Знак логотипа представляет собой уникальный символ, отражающий связь между
                поколениями, индивидуальность и постоянное стремление к совершенству.
              </p>
            </div>

            {/* Mission */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#593c7d] mb-4">Миссия</h2>
              <p className="text-gray-700">
                Создавать новую технологическую реальность с заботой о каждом.
              </p>
            </div>

            {/* Values */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#593c7d] mb-4">Ценности</h2>
              <div className="flex flex-wrap gap-3">
                {["Компетентность", "Клиентоцентричность", "Ответственность", "Цифровизация"].map((value) => (
                  <span
                    key={value}
                    className="bg-[#593c7d]/10 text-[#593c7d] px-4 py-2 rounded-full text-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#593c7d] mb-8 text-center">
            Наши бренды
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 object-contain mb-4"
                />
                <h3 className="font-semibold text-[#593c7d] mb-2">{brand.name}</h3>
                <p className="text-gray-600 text-sm">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#593c7d] mb-8 text-center">
            Структура
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">
              Современная структура РУП «Белтелеком» включает девять филиалов, два центра
              и два производства в составе головного подразделения.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[#593c7d] mb-4">Филиалы «Белтелеком»:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#593c7d] rounded-full" />
                    Брестский
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#593c7d] rounded-full" />
                    Витебский
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#593c7d] rounded-full" />
                    Гомельский
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#593c7d] rounded-full" />
                    Гродненский
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#593c7d] rounded-full" />
                    Могилевский
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#593c7d] rounded-full" />
                    Минский
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#593c7d] rounded-full" />
                    Минская городская телефонная сеть
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[#593c7d] mb-4">Центры и производства:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#35cbe0] rounded-full" />
                    Международный центр коммутации
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#35cbe0] rounded-full" />
                    Центр кибербезопасности
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#35cbe0] rounded-full" />
                    Центр цифровых технологий
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#35cbe0] rounded-full" />
                    Минская телефонно-телеграфная станция
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Footer */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 items-center">
            {[
              { name: "ЯСНА", logo: "https://ext.same-assets.com/3552094150/3538545461.png" },
              { name: "byfly", logo: "https://ext.same-assets.com/3552094150/1380164376.png" },
              { name: "ZALA", logo: "https://ext.same-assets.com/3552094150/4069340158.png" },
              { name: "Видеоконтроль", logo: "https://ext.same-assets.com/3552094150/2591545712.png" },
              { name: "ЯСНАе TV", logo: "https://ext.same-assets.com/3552094150/1136858417.png" },
              { name: "BELTELECOM SHOP", logo: "https://ext.same-assets.com/3552094150/630209728.png" },
              { name: "Evika!", logo: "https://ext.same-assets.com/3552094150/47418317.png" },
              { name: "СФЕРА", logo: "https://ext.same-assets.com/3552094150/3275543761.png" },
              { name: "OGOKINO", logo: "https://ext.same-assets.com/3552094150/2112762197.png" },
            ].map((brand) => (
              <div key={brand.name} className="flex items-center justify-center p-4 bg-white rounded-lg">
                <img src={brand.logo} alt={brand.name} className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
