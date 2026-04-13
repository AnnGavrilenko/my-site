"use client";

import Link from "next/link";
import { Server, Cpu, HardDrive, Zap } from "lucide-react";

const vpsPlans = [
  { name: "VPS-1", cpu: "1 vCPU", ram: "1 ГБ", ssd: "20 ГБ", price: "9.90" },
  { name: "VPS-2", cpu: "2 vCPU", ram: "2 ГБ", ssd: "40 ГБ", price: "19.90" },
  { name: "VPS-4", cpu: "4 vCPU", ram: "4 ГБ", ssd: "80 ГБ", price: "39.90" },
  { name: "VPS-8", cpu: "8 vCPU", ram: "8 ГБ", ssd: "160 ГБ", price: "79.90" },
];

export default function VpsPage() {
  return (
    <div>
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center py-3 space-x-6">
            <Link href="/services/hosting" className="text-white/70 text-sm">Хостинг</Link>
            <Link href="/services/hosting/vps" className="text-white text-sm font-medium">VPS сервер</Link>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#593c7d] mb-4 text-center">Виртуальный сервер VPS</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Полный контроль над сервером с гарантированными ресурсами.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vpsPlans.map((plan) => (
              <div key={plan.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#593c7d] mb-4 text-center">{plan.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2"><Cpu className="w-4 h-4" /> CPU</span>
                    <span className="font-semibold text-gray-900">{plan.cpu}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> RAM</span>
                    <span className="font-semibold text-gray-900">{plan.ram}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2"><HardDrive className="w-4 h-4" /> SSD</span>
                    <span className="font-semibold text-gray-900">{plan.ssd}</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-[#593c7d]">{plan.price}</span>
                  <span className="text-gray-500 text-sm"> руб/мес</span>
                </div>
                <Link href="/connect" className="block w-full text-center py-2 bg-[#593c7d] text-white rounded-lg hover:bg-[#6b4a94] transition-colors">
                  Заказать
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
