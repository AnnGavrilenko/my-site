"use client";

import Link from "next/link";
import { CalculatorPopup } from "@/components/Calculator";

const ponPackages = [
  { name: "ЯСНА 500", speed: "500/250 Мбит/с", phone: true, tv: "ZALA: все включено", price: "67,50" },
  { name: "ЯСНА 500 SMART", speed: "500/250 Мбит/с", phone: true, tv: "SMART Канапа ТВ", price: "67,50" },
  { name: "ЯСНА 200 new", speed: "200/100 Мбит/с", phone: true, tv: "ZALA: все включено", price: "49,00" },
  { name: "ЯСНА 200 SMART", speed: "200/100 Мбит/с", phone: true, tv: "SMART Канапа ТВ", price: "49,00" },
  { name: "ЯСНА 200 Промо", speed: "200/100 Мбит/с", phone: false, tv: "ZALA: все включено", price: "52,00" },
  { name: "ЯСНА 200+Кино", speed: "200/100 Мбит/с", phone: true, tv: "ZALA + онлайн-кинотеатры", price: "52,00" },
  { name: "ЯСНА 200 Видеоконтроль", speed: "200/100 Мбит/с", phone: true, tv: "ZALA: все включено", videocontrol: true, price: "52,00" },
  { name: "ЯСНА 100 Дом + Дача", speed: "100/50 Мбит/с", phone: true, tv: "ZALA + эфирное ТВ", price: "51,50" },
  { name: "ЯСНА 100 + Кино", speed: "100/50 Мбит/с", phone: true, tv: "ZALA + онлайн-кинотеатры", price: "46,00" },
  { name: "ЯСНА 100 Видеоконтроль", speed: "100/50 Мбит/с", phone: true, tv: "ZALA: все включено", videocontrol: true, price: "43,50" },
  { name: "ЯСНА 100 SMART Видеоконтроль", speed: "100/50 Мбит/с", phone: true, tv: "SMART Премиум", videocontrol: true, price: "44,00" },
  { name: "ЯСНА Лайт", speed: "до 5 Мбит/с", phone: true, tv: "ZALA: все включено", price: "23,50" },
];

const xdslPackages = [
  { name: "Семейный 4 Дом + Дача", speed: "4096/512 Кбит/с", phone: true, tv: "ZALA + эфирное ТВ", price: "41,00" },
  { name: "Семейный 5", speed: "5/1 Мбит/с", phone: true, tv: "ZALA: все включено", price: "34,00" },
  { name: "Семейный 10", speed: "10/1 Мбит/с", phone: true, tv: "ZALA: все включено", price: "35,50" },
  { name: "Семейный 10 + Кино", speed: "10/1 Мбит/с", phone: true, tv: "ZALA + онлайн-кинотеатры", price: "40,00" },
  { name: "Семейный 15", speed: "15/1 Мбит/с", phone: true, tv: "SMART Канапа ТВ", price: "38,50" },
  { name: "Семейный 25", speed: "25/1 Мбит/с", phone: true, tv: "ZALA: все включено", price: "39,50" },
  { name: "Семейный 30", speed: "30/1 Мбит/с", phone: true, tv: "SMART + пакеты", price: "40,50" },
];

const additionalServices = [
  { name: "Восстановление доступа к услугам", price: "15,60" },
  { name: "Блокировка за 15 дней", price: "3,10" },
  { name: "Блокировка за 30 дней", price: "4,20" },
  { name: "Блокировка за 45 дней", price: "5,20" },
  { name: "Блокировка за 90 дней", price: "9,45" },
  { name: "Блокировка за 180 дней", price: "52,50" },
  { name: "SMART ZALA приставка (аренда)", price: "1,00" },
  { name: "SMS-оповещение", price: "0,30" },
  { name: "Кредит доверия", price: "1,00" },
];

const subMenu = [
  { label: "Пакеты услуг", href: "/services/packages", active: true },
  { label: "Архив тарифов", href: "/services/packages/archive" },
  { label: "Инструкция о тарифах", href: "/services/packages/instructions" },
  { label: "Порядок оказания услуг", href: "/services/packages/procedure" },
  { label: "Прочие пакеты", href: "/services/packages/other" },
  { label: "Вопросы и ответы", href: "/services/packages/faq" },
];

export default function PackagesPage() {
  return (
    <div>
      {/* Submenu */}
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

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Пакеты услуг</h1>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Новая линейка пакетов от Белтелеком «ЯСНА» предлагает абонентам воспользоваться всеми преимуществами современных технологий по умеренной стоимости.
          </p>

          {/* PON Packages Table */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#593c7d] mb-4">Тарифы для подключения по технологии PON</h2>
            <p className="text-sm text-gray-500 mb-4">Вводятся с 06 апреля 2026 года. Тарифы с учетом налога на добавленную стоимость.</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#593c7d] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Пакет</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Интернет</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Телефон</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Телевидение</th>
                    <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold">Тариф, руб.</th>
                  </tr>
                </thead>
                <tbody>
                  {ponPackages.map((pkg, idx) => (
                    <tr key={pkg.name} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-[#593c7d]">{pkg.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm">{pkg.speed}</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm">{pkg.phone ? "безлимит" : "—"}</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm">
                        {pkg.tv}
                        {pkg.videocontrol && <span className="block text-[#35cbe0]">+ Видеоконтроль</span>}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center font-bold text-[#593c7d]">{pkg.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* xDSL Packages Table */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#593c7d] mb-4">Пакеты для подключения по технологии xDSL</h2>
            <p className="text-sm text-gray-500 mb-4">Для физических лиц. Тарифы с учетом налога на добавленную стоимость.</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#593c7d] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Пакет</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Интернет</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Телефон</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Телевидение</th>
                    <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold">Тариф, руб.</th>
                  </tr>
                </thead>
                <tbody>
                  {xdslPackages.map((pkg, idx) => (
                    <tr key={pkg.name} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-[#593c7d]">{pkg.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm">{pkg.speed}</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm">{pkg.phone ? "безлимит" : "—"}</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm">{pkg.tv}</td>
                      <td className="border border-gray-200 px-4 py-3 text-center font-bold text-[#593c7d]">{pkg.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#593c7d] mb-4">Дополнительные услуги</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse max-w-2xl">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Наименование услуг</th>
                    <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold">Тариф, руб.</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalServices.map((service, idx) => (
                    <tr key={service.name} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-200 px-4 py-3 text-sm">{service.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-center font-medium">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Link href="/connect" className="inline-block bg-[#593c7d] text-white px-8 py-3 rounded-lg hover:bg-[#6b4a94] transition-colors">
              Подключить пакет услуг
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Popup */}
      <CalculatorPopup />
    </div>
  );
}
