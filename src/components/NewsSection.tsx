"use client";

import Link from "next/link";

const newsItems = [
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
];

export function NewsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#593c7d]">Новости</h2>
          <Link
            href="/news"
            className="text-[#593c7d] hover:text-[#6b4a94] transition-colors text-sm"
          >
            Все новости →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((news) => (
            <Link
              key={news.id}
              href={news.href}
              className="news-card block bg-white p-4 rounded-lg border border-gray-100"
            >
              <span className="text-sm text-gray-500 block mb-2">{news.date}</span>
              <h3 className="text-[#593c7d] font-medium hover:text-[#6b4a94] transition-colors line-clamp-3">
                {news.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
