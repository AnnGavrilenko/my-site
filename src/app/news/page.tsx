"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "Центральные новости", href: "/news", active: true },
  { label: "Новости филиалов", href: "/news/branches" },
  { label: "Технические работы", href: "/news/maintenance" },
  { label: "Закупки", href: "/news/procurement" },
];

const allNews = [
  {
    id: 1,
    date: "10.04.2026",
    title: "Wi-Fi для клиентов и сотрудников: «Белтелеком» предлагает линейку тарифов для бизнеса",
    href: "/news/wifi-business",
  },
  {
    id: 2,
    date: "09.04.2026",
    title: "Вниманию абонентов! Работы на сети эфирного телевидения и радиовещания 9 апреля",
    href: "/news/maintenance-april-9",
  },
  {
    id: 3,
    date: "08.04.2026",
    title: "ZALA запускает новый тестовый телеканал",
    href: "/news/zala-new-channel",
  },
  {
    id: 4,
    date: "07.04.2026",
    title: "Вниманию абонентов! Работы на сети эфирного телевидения и радиовещания 8-10, 14-17, 22, 23 апреля",
    href: "/news/maintenance-april",
  },
  {
    id: 5,
    date: "06.04.2026",
    title: "Вниманию абонентов! Работы на сети эфирного телевидения и радиовещания 6 апреля",
    href: "/news/maintenance-april-6",
  },
  {
    id: 6,
    date: "06.04.2026",
    title: "«Белтелеком» напоминает: соблюдайте правила охраны линий связи при проведении работ",
    href: "/news/safety-reminder",
  },
  {
    id: 7,
    date: "03.04.2026",
    title: "«Белтелеком» запускает продажи нового антивирусного решения для малого бизнеса",
    href: "/news/antivirus-business",
  },
  {
    id: 8,
    date: "03.04.2026",
    title: "График прямых телефонных линий в апреле",
    href: "/news/hotline-april",
  },
  {
    id: 9,
    date: "01.04.2026",
    title: "Встречайте телеканал «Союзный» в сети ZALA",
    href: "/news/soyuzny-channel",
  },
  {
    id: 10,
    date: "01.04.2026",
    title: "Республиканский список экстремистских материалов",
    href: "/news/extremist-list",
  },
];

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(allNews.length / itemsPerPage);

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

      {/* Page Content */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#593c7d] mb-8 text-center">
            Центральные новости
          </h1>

          {/* News List */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {allNews.map((news) => (
                <Link
                  key={news.id}
                  href={news.href}
                  className="block border-b border-gray-100 pb-6 hover:bg-gray-50 -mx-4 px-4 py-2 rounded transition-colors"
                >
                  <span className="text-sm text-gray-500 block mb-2">{news.date}</span>
                  <h2 className="text-[#593c7d] font-medium text-lg hover:text-[#6b4a94] transition-colors">
                    {news.title}
                  </h2>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 space-x-2">
              {Array.from({ length: Math.min(9, totalPages) }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                    page === currentPage
                      ? "bg-[#593c7d] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              ))}
              {totalPages > 9 && (
                <>
                  <span className="text-gray-400">...</span>
                  <button
                    type="button"
                    className="text-sm text-[#593c7d] hover:underline"
                  >
                    Последняя »
                  </button>
                </>
              )}
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
