"use client";

import Link from "next/link";
import { Mail, Radio, Wrench, Zap, FileText, Home } from "lucide-react";

const services = [
  { icon: Radio, title: "Телеграф", desc: "Услуги телеграфной связи", href: "/services/other/telegraph" },
  { icon: Mail, title: "Электронная почта", desc: "Корпоративная электронная почта", href: "/services/other/email" },
  { icon: Home, title: "Дома отдыха", desc: "Услуги связи для домов отдыха", href: "/services/other/recreation" },
  { icon: Wrench, title: "Ремонт техники", desc: "Ремонт компьютеров и оргтехники", href: "/services/other/repair" },
  { icon: Zap, title: "Evika!", desc: "Сеть электрозарядных станций", href: "/services/other/evika" },
  { icon: FileText, title: "Модернизация сети", desc: "Модернизация абонентского доступа", href: "/services/other/modernization" },
];

export default function OtherServicesPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/other" className="text-white text-sm font-medium">Прочие услуги</Link>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Прочие услуги</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Дополнительные услуги от «Белтелеком» для дома и бизнеса.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#593c7d]/30 transition-all"
              >
                <div className="w-12 h-12 bg-[#593c7d]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#593c7d] transition-colors">
                  <service.icon className="w-6 h-6 text-[#593c7d] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[#593c7d] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
