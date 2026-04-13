"use client";

import Link from "next/link";
import { Tag, Gift, Percent, Clock } from "lucide-react";

const promos = [
  {
    title: "Весенняя рассрочка",
    desc: "Подключите пакет услуг ЯСНА с рассрочкой до 24 месяцев",
    validUntil: "30.06.2026",
    tag: "Рассрочка",
  },
  {
    title: "Интернет + ТВ со скидкой",
    desc: "При подключении интернета и телевидения - скидка 20% на первые 3 месяца",
    validUntil: "31.05.2026",
    tag: "Скидка",
  },
  {
    title: "Приведи друга",
    desc: "Получите месяц бесплатного интернета за каждого приведенного друга",
    validUntil: "31.12.2026",
    tag: "Бонус",
  },
  {
    title: "Видеоконтроль бесплатно",
    desc: "При подключении пакета Семейный L и выше - видеоконтроль 1 камера бесплатно на 6 месяцев",
    validUntil: "30.04.2026",
    tag: "Подарок",
  },
];

export default function PromoPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/promo" className="text-white text-sm font-medium">Акции</Link>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Акции и спецпредложения</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Выгодные предложения для новых и действующих абонентов.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {promos.map((promo) => (
              <div key={promo.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full font-medium">
                    {promo.tag}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    до {promo.validUntil}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#593c7d] mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.desc}</p>
                <Link href="/connect" className="inline-block px-6 py-2 bg-[#593c7d] text-white rounded-lg hover:bg-[#6b4a94] transition-colors">
                  Подробнее
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Gift className="w-16 h-16 text-[#593c7d] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#593c7d] mb-4">Подпишитесь на новости об акциях</h2>
          <p className="text-gray-600 mb-6">Получайте информацию о новых акциях первыми</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#593c7d]"
            />
            <button type="button" className="px-6 py-3 bg-[#593c7d] text-white rounded-lg hover:bg-[#6b4a94] transition-colors">
              Подписаться
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
