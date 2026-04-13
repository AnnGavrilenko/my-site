"use client";

import Link from "next/link";
import { MapPin, FileText, Calendar, CreditCard, Building, Users } from "lucide-react";

const features = [
  { icon: FileText, title: "Электронные услуги", desc: "Получайте справки и документы онлайн" },
  { icon: Calendar, title: "Запись на прием", desc: "Записывайтесь в учреждения без очередей" },
  { icon: CreditCard, title: "Оплата услуг", desc: "Оплачивайте коммунальные и другие услуги" },
  { icon: Building, title: "Организации города", desc: "Информация о госорганах и учреждениях" },
  { icon: Users, title: "Обращения граждан", desc: "Подавайте обращения в электронном виде" },
  { icon: MapPin, title: "Карта города", desc: "Интерактивная карта с объектами" },
];

export default function MyCityPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/my-city" className="text-white text-sm font-medium">Мой город</Link>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#593c7d] to-[#7b5a9e] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Платформа «Мой город»</h1>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Мобильное приложение для жителей города. Все государственные и муниципальные услуги в одном месте.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="inline-block bg-white text-[#593c7d] px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
              App Store
            </a>
            <a href="#" className="inline-block bg-white text-[#593c7d] px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
              Google Play
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#593c7d] mb-8 text-center">Возможности платформы</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#593c7d]/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#593c7d]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
