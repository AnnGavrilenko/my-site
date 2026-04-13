"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Monitor, Wifi, Phone, Server, Building, Shield } from "lucide-react";

const businessSlides = [
  {
    id: 1,
    title: "НОВАЯ УСЛУГА ДЛЯ БИЗНЕСА",
    subtitle: "Облачный офис",
    description: "Комплексное решение для организации рабочих процессов вашей компании",
    image: "https://ext.same-assets.com/3552094150/386106292.jpeg",
    ctaText: "Подробнее",
    ctaLink: "/business/cloud-office",
  },
  {
    id: 2,
    title: "ЗАЩИТА БИЗНЕСА",
    subtitle: "Антивирусная защита",
    description: "Надежная защита корпоративных данных от угроз",
    image: "https://ext.same-assets.com/3552094150/1796555068.jpeg",
    ctaText: "Узнать больше",
    ctaLink: "/business/antivirus",
  },
  {
    id: 3,
    title: "WI-FI ДЛЯ БИЗНЕСА",
    subtitle: "Корпоративный Wi-Fi",
    description: "Профессиональное решение для вашего офиса",
    image: "https://ext.same-assets.com/3552094150/777417195.jpeg",
    ctaText: "Подключить",
    ctaLink: "/business/wifi",
  },
];

const services = [
  {
    icon: Wifi,
    title: "Интернет",
    description: "Высокоскоростной доступ для бизнеса",
    href: "/business/internet",
  },
  {
    icon: Monitor,
    title: "Телевидение",
    description: "Корпоративное ТВ решение",
    href: "/business/tv",
  },
  {
    icon: Shield,
    title: "Видеоконтроль",
    description: "Системы видеонаблюдения",
    href: "/business/videocontrol",
  },
  {
    icon: Phone,
    title: "Телефония",
    description: "Корпоративная связь",
    href: "/business/phone",
  },
  {
    icon: Server,
    title: "Хостинг",
    description: "Серверные решения",
    href: "/business/hosting",
  },
  {
    icon: Building,
    title: "Мой город",
    description: "Платформа для организаций",
    href: "/business/my-city",
  },
];

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

export default function BusinessPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % businessSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = businessSlides[currentSlide];

  return (
    <div>
      {/* Service Navigation */}
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center overflow-x-auto py-3 space-x-6 scrollbar-hide">
            {["Интернет", "Телевидение", "Видеоконтроль", "Телефон", "Хостинг", "Мой город", "Мой университет", "Госзакупки", "Прочие услуги"].map((item) => (
              <Link
                key={item}
                href={`/business/${item.toLowerCase()}`}
                className="text-white whitespace-nowrap hover:text-white/80 transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="relative min-h-[400px] flex items-center">
            <div className="relative z-10 w-full md:w-1/2 py-12">
              <span className="inline-block bg-[#593c7d] text-white text-xs px-3 py-1 rounded mb-4">
                ДЛЯ БИЗНЕСА
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#593c7d] mb-2">
                {slide.title}
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-[#35cbe0] mb-4">
                {slide.subtitle}
              </h3>
              <p className="text-gray-600 mb-6 max-w-md">
                {slide.description}
              </p>
              <Link
                href={slide.ctaLink}
                className="inline-block bg-[#593c7d] text-white px-6 py-3 rounded hover:bg-[#6b4a94] transition-colors"
              >
                {slide.ctaText}
              </Link>
            </div>

            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2">
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + businessSlides.length) % businessSlides.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 rounded-full shadow flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#593c7d]" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % businessSlides.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 rounded-full shadow flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#593c7d]" />
            </button>
          </div>

          <div className="flex justify-center space-x-2 pb-6">
            {businessSlides.map((_, index) => (
              <button
                type="button"
                key={`slide-${businessSlides[index].id}`}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#593c7d]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#593c7d] mb-8">Услуги для бизнеса</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-[#593c7d]/20 transition-all"
              >
                <div className="w-12 h-12 bg-[#593c7d]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#593c7d] transition-colors">
                  <service.icon className="w-6 h-6 text-[#593c7d] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[#593c7d] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#593c7d]">Новости</h2>
            <Link href="/news" className="text-[#593c7d] hover:text-[#6b4a94] transition-colors text-sm">
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

      {/* Brands */}
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
