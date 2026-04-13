"use client";

import Link from "next/link";
import { Network, Globe, Server, Shield, Phone, Zap } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Присоединение к сети",
    description: "Услуги присоединения к сети электросвязи общего пользования",
    href: "/operators/connection",
  },
  {
    icon: Globe,
    title: "Международная связь",
    description: "Организация международных каналов связи",
    href: "/operators/international",
  },
  {
    icon: Server,
    title: "Аренда каналов",
    description: "Аренда выделенных каналов связи",
    href: "/operators/leased-lines",
  },
  {
    icon: Shield,
    title: "Защита от DDoS",
    description: "Услуги защиты от DDoS-атак",
    href: "/operators/ddos-protection",
  },
  {
    icon: Phone,
    title: "VoIP транзит",
    description: "Транзит голосового трафика",
    href: "/operators/voip-transit",
  },
  {
    icon: Zap,
    title: "Colocation",
    description: "Размещение оборудования в дата-центрах",
    href: "/operators/colocation",
  },
];

export default function OperatorsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#593c7d] to-[#7b5a9e] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Операторам связи
            </h1>
            <p className="text-lg text-white/90 mb-6">
              РУП «Белтелеком» предлагает операторам связи полный спектр услуг
              по присоединению к сети электросвязи, организации транзита трафика
              и размещению оборудования.
            </p>
            <Link
              href="/operators/connect"
              className="inline-block bg-white text-[#593c7d] px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              Подать заявку
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#593c7d] mb-8">Услуги для операторов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-[#593c7d]/20 transition-all"
              >
                <div className="w-14 h-14 bg-[#593c7d]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#593c7d] transition-colors">
                  <service.icon className="w-7 h-7 text-[#593c7d] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[#593c7d] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#593c7d] mb-6">
              Преимущества сотрудничества
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Развитая инфраструктура</h3>
                <p className="text-gray-600 text-sm">
                  Более 220 тыс. км волоконно-оптических линий связи, покрывающих
                  всю территорию Республики Беларусь.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Надежность</h3>
                <p className="text-gray-600 text-sm">
                  Гарантированный уровень качества услуг и круглосуточная
                  техническая поддержка.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Гибкие тарифы</h3>
                <p className="text-gray-600 text-sm">
                  Индивидуальный подход к формированию тарифных планов
                  для каждого партнера.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Международное присутствие</h3>
                <p className="text-gray-600 text-sm">
                  Прямые стыки с ведущими международными операторами связи
                  и точками обмена трафиком.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#593c7d] mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-gray-600 mb-6">
              Для получения подробной информации об услугах для операторов связи
              обращайтесь в коммерческий департамент.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+375172172121"
                className="bg-[#593c7d] text-white px-6 py-3 rounded hover:bg-[#6b4a94] transition-colors"
              >
                +375 17 217-21-21
              </a>
              <a
                href="mailto:operators@beltelecom.by"
                className="border border-[#593c7d] text-[#593c7d] px-6 py-3 rounded hover:bg-[#593c7d] hover:text-white transition-colors"
              >
                operators@beltelecom.by
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
