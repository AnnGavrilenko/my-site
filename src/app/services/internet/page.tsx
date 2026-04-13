"use client";

import Link from "next/link";
import { CalculatorPopup } from "@/components/Calculator";

const unlimitedTariffs = [
  { id: "1.1", name: "Домосед старт", desc: "скорость до 3072/512 Кбит/с", price: "17,80" },
  { id: "1.2", name: "Домосед XXL", desc: "скорость 4096/512 Кбит/с", price: "19,75" },
  { id: "1.3", name: "СуперДомосед", desc: "скорость 6144/512 Кбит/с", price: "22,75" },
  { id: "1.4", name: "Домосед Ультра", desc: "скорость 8192/512 Кбит/с", price: "25,00" },
  { id: "1.5", name: "Социальный анлим 3", desc: "скорость до 3072/512 Кбит/с", price: "9,20" },
  { id: "1.6", name: "Социальный анлим 8", desc: "скорость до 8192/512 Кбит/с", price: "11,70" },
];

const highSpeedTariffs = [
  { id: "4.1", name: "Социальный анлим 25", desc: "скорость 25/12,5 Мбит/с", price: "16,25" },
  { id: "4.2", name: "Социальный анлим 50", desc: "скорость 50/25 Мбит/с", price: "18,50" },
  { id: "4.3", name: "Социальный анлим 100", desc: "скорость 100/50 Мбит/с", price: "24,50" },
  { id: "4.4", name: "Рекорд 50 new", desc: "скорость 50/25 Мбит/с", price: "27,00" },
  { id: "4.5", name: "Рекорд 200", desc: "скорость 200/100 Мбит/с", price: "45,45" },
  { id: "4.6", name: "Рекорд 500", desc: "скорость 500/250 Мбит/с", price: "60,00" },
];

const trafficTariffs = [
  { id: "2.1", name: "Комфорт экспресс", desc: "суммарный объем трафика 10 Гбайт", price: "10,90" },
  { id: "3.1", name: "Комфорт - мини", desc: "абонентская плата в месяц", price: "2,75" },
];

const blockingTariffs = [
  { name: "за 15 дней", price: "3,10" },
  { name: "за 30 дней", price: "4,20" },
  { name: "за 45 дней", price: "5,20" },
  { name: "за 90 дней", price: "9,45" },
];

const additionalServices = [
  { name: "Стандартный (фильтрация по полному списку)", price: "0,145" },
  { name: "Легкий (фильтрация по сокращенному списку)", price: "0,110" },
  { name: "Статический IP-адрес (единовременно)", price: "35,00" },
  { name: "Статический IP-адрес (в месяц)", price: "6,00" },
  { name: "Восстановление доступа", price: "15,60" },
  { name: "Кредит доверия", price: "1,00" },
  { name: "SMS-оповещение", price: "0,30" },
];

const subMenu = [
  { label: "Высокоскоростной доступ", href: "/services/internet", active: true },
  { label: "Выделенная линия", href: "/services/internet/leased-line" },
  { label: "Wi-Fi", href: "/services/internet/wifi" },
  { label: "2G/3G", href: "/services/internet/mobile" },
  { label: "Яндекс Плюс", href: "/services/internet/yandex-plus" },
  { label: "Архивные тарифы", href: "/services/internet/archive" },
  { label: "Помощь", href: "/services/internet/help" },
  { label: "Порядок оказания услуг", href: "/services/internet/procedure" },
];

export default function InternetPage() {
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

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Постоянный доступ в сеть Интернет</h1>
          <h2 className="text-xl text-gray-700 mb-2 text-center">Тарифы для физических лиц</h2>
          <p className="text-center mb-8">
            <Link href="/services/internet/procedure" className="text-[#35cbe0] hover:underline">
              Порядок оказания услуги
            </Link>
          </p>

          <p className="text-sm text-gray-500 mb-8 text-center">
            В соответствии с действующим законодательством тарифы установлены с налогом на добавленную стоимость.
            <br />Вводятся с 06 апреля 2026 года
          </p>

          {/* Unlimited Tariffs */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#35cbe0] mb-4">
              1. Тарифные планы круглосуточного доступа в сеть Интернет (без учета трафика), в месяц:
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm w-16">№</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm">Тарифный план</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-sm w-32">Тариф, руб.</th>
                  </tr>
                </thead>
                <tbody>
                  {unlimitedTariffs.map((t, idx) => (
                    <tr key={t.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-200 px-4 py-2 text-sm">{t.id}</td>
                      <td className="border border-gray-200 px-4 py-2 text-sm">
                        <span className="font-medium">"{t.name}"</span> ({t.desc})
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center font-medium">{t.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* High Speed Tariffs */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#35cbe0] mb-4">
              4. Тарифные планы высокоскоростного нелимитируемого доступа в сеть Интернет, в месяц:
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm w-16">№</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm">Тарифный план</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-sm w-32">Тариф, руб.</th>
                  </tr>
                </thead>
                <tbody>
                  {highSpeedTariffs.map((t, idx) => (
                    <tr key={t.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-200 px-4 py-2 text-sm">{t.id}</td>
                      <td className="border border-gray-200 px-4 py-2 text-sm">
                        <span className="font-medium">"{t.name}"</span> ({t.desc})
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center font-medium">{t.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Traffic Tariffs */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#35cbe0] mb-4">
              2-3. Тарифные планы с учетом трафика:
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse max-w-2xl">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm w-16">№</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm">Тарифный план</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-sm w-32">Тариф, руб.</th>
                  </tr>
                </thead>
                <tbody>
                  {trafficTariffs.map((t, idx) => (
                    <tr key={t.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-200 px-4 py-2 text-sm">{t.id}</td>
                      <td className="border border-gray-200 px-4 py-2 text-sm">
                        <span className="font-medium">"{t.name}"</span> ({t.desc})
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center font-medium">{t.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Blocking Tariffs */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#35cbe0] mb-4">
              7. Блокировка доступа в сеть Интернет, за услугу:
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse max-w-md">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm">Срок блокировки</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-sm w-32">Тариф, руб.</th>
                  </tr>
                </thead>
                <tbody>
                  {blockingTariffs.map((t, idx) => (
                    <tr key={t.name} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-200 px-4 py-2 text-sm">{t.name}</td>
                      <td className="border border-gray-200 px-4 py-2 text-center font-medium">{t.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#35cbe0] mb-4">
              Дополнительные услуги:
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse max-w-2xl">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm">Наименование услуг</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-sm w-32">Тариф, руб.</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalServices.map((s, idx) => (
                    <tr key={s.name} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-200 px-4 py-2 text-sm">{s.name}</td>
                      <td className="border border-gray-200 px-4 py-2 text-center font-medium">{s.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Link href="/connect" className="inline-block bg-[#593c7d] text-white px-8 py-3 rounded-lg hover:bg-[#6b4a94] transition-colors">
              Подключить интернет
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Popup */}
      <CalculatorPopup />
    </div>
  );
}
