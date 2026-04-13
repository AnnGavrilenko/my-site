"use client";

import Link from "next/link";
import { Server, Shield, Clock } from "lucide-react";

export default function LeasedLinePage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/internet" className="text-white/70 text-sm">Интернет</Link>
            <Link href="/services/internet/leased-line" className="text-white text-sm font-medium">Выделенная линия</Link>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Выделенная линия</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Гарантированная полоса пропускания для бизнеса. Надежное соединение без ограничений.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: Server, title: "Гарантированная скорость", desc: "Фиксированная полоса пропускания" },
              { icon: Shield, title: "Высокая надежность", desc: "SLA до 99.9%" },
              { icon: Clock, title: "Поддержка 24/7", desc: "Приоритетное обслуживание" },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-12 h-12 text-[#593c7d] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contacts" className="inline-block px-8 py-3 bg-[#593c7d] text-white rounded-lg hover:bg-[#6b4a94]">
              Запросить расчет
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
