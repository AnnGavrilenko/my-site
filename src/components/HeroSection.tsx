"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "ЯРКАЯ ВЕСНА",
    subtitle: "УДОБНАЯ РАССРОЧКА",
    description: "Рассрочка до 24 месяцев",
    image: "https://ext.same-assets.com/3552094150/2599052238.jpeg",
    ctaText: "Подробнее",
    ctaLink: "/promo/spring",
    accent: "orange",
  },
  {
    id: 2,
    title: "НОВАЯ УСЛУГА",
    subtitle: "Облачный офис",
    description: "Комплексное решение для организации рабочих процессов вашей компании",
    image: "https://ext.same-assets.com/3552094150/386106292.jpeg",
    ctaText: "Узнать больше",
    ctaLink: "/business/cloud-office",
    accent: "purple",
  },
  {
    id: 3,
    title: "ВЫСОКОСКОРОСТНОЙ",
    subtitle: "Интернет byfly",
    description: "Скорость до 500 Мбит/с для вашего комфорта",
    image: "https://ext.same-assets.com/3552094150/1796555068.jpeg",
    ctaText: "Подключить",
    ctaLink: "/internet",
    accent: "teal",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="relative min-h-[400px] md:min-h-[450px] flex items-center">
          {/* Content */}
          <div className="relative z-10 w-full md:w-1/2 py-12">
            <div className="animate-fade-in-up">
              {slide.accent === "orange" && (
                <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded mb-4">
                  НОВАЯ АКЦИЯ
                </span>
              )}
              {slide.accent === "purple" && (
                <span className="inline-block bg-[#593c7d] text-white text-xs px-3 py-1 rounded mb-4">
                  ДЛЯ БИЗНЕСА
                </span>
              )}
              {slide.accent === "teal" && (
                <span className="inline-block bg-[#35cbe0] text-white text-xs px-3 py-1 rounded mb-4">
                  ИНТЕРНЕТ
                </span>
              )}
              <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${
                slide.accent === "orange" ? "text-orange-500" : "text-[#593c7d]"
              }`}>
                {slide.title}
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-[#593c7d] mb-4">
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
          </div>

          {/* Image */}
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

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 rounded-full shadow flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[#593c7d]" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 rounded-full shadow flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[#593c7d]" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 pb-6">
          {slides.map((_, index) => (
            <button
              type="button"
              key={`slide-dot-${slides[index].id}`}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#593c7d]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
