"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const menuItems = [
  { label: "Контакты", href: "/contacts", active: true },
  { label: "Пресс-центр", href: "/press" },
  { label: "Офисы продаж", href: "/offices" },
  { label: "Обращения граждан и юридических лиц", href: "/appeals" },
  { label: "Вопрос специалисту", href: "/ask" },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Служба технической поддержки",
    info: "123",
    description: "Бесплатно по Беларуси",
  },
  {
    icon: Phone,
    title: "Для звонков из-за рубежа",
    info: "+375 17 217-21-21",
    description: "Международный номер",
  },
  {
    icon: Mail,
    title: "Электронная почта",
    info: "info@beltelecom.by",
    description: "Для официальных обращений",
  },
  {
    icon: MapPin,
    title: "Головной офис",
    info: "г. Минск, пр-т Независимости, 10",
    description: "Республика Беларусь, 220030",
  },
];

const branches = [
  { name: "Минская городская телефонная сеть", phone: "+375 17 217-21-21" },
  { name: "Брестский филиал", phone: "+375 162 21-22-22" },
  { name: "Витебский филиал", phone: "+375 212 36-33-33" },
  { name: "Гомельский филиал", phone: "+375 232 35-35-35" },
  { name: "Гродненский филиал", phone: "+375 152 79-79-79" },
  { name: "Минский филиал", phone: "+375 17 217-21-21" },
  { name: "Могилевский филиал", phone: "+375 222 29-29-29" },
];

export default function ContactsPage() {
  return (
    <div>
      {/* Submenu */}
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center overflow-x-auto py-3 space-x-6 scrollbar-hide">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white whitespace-nowrap transition-colors text-sm font-medium ${
                  item.active ? "text-white" : "hover:text-white/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#593c7d] mb-8 text-center">
            Контакты
          </h1>

          {/* Main contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact) => (
              <div
                key={contact.title}
                className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#593c7d]/10 rounded-full flex items-center justify-center mb-4">
                  <contact.icon className="w-6 h-6 text-[#593c7d]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-[#593c7d] font-bold text-lg mb-1">{contact.info}</p>
                <p className="text-gray-500 text-sm">{contact.description}</p>
              </div>
            ))}
          </div>

          {/* Working hours */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#593c7d] rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#593c7d]">Режим работы</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Служба поддержки 123</h3>
                <p className="text-gray-600">Круглосуточно, без выходных</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Офисы продаж</h3>
                <p className="text-gray-600">Пн-Пт: 08:00 - 20:00</p>
                <p className="text-gray-600">Сб: 09:00 - 17:00</p>
                <p className="text-gray-600">Вс: выходной</p>
              </div>
            </div>
          </div>

          {/* Branches */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#593c7d] mb-6">Филиалы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg hover:border-[#593c7d]/20 transition-colors"
                >
                  <span className="text-gray-900 font-medium">{branch.name}</span>
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="text-[#593c7d] hover:underline"
                  >
                    {branch.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback form */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#593c7d] mb-6 text-center">
              Задать вопрос
            </h2>
            <form className="bg-white rounded-lg p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#593c7d]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#593c7d]"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#593c7d]"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тема обращения *
                </label>
                <select
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#593c7d]"
                >
                  <option value="">Выберите тему</option>
                  <option value="internet">Интернет</option>
                  <option value="tv">Телевидение</option>
                  <option value="phone">Телефония</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#593c7d] resize-none"
                />
              </div>
              <div className="mb-6">
                <label className="flex items-center gap-2">
                  <input type="checkbox" required className="rounded" />
                  <span className="text-sm text-gray-600">
                    Я согласен на обработку персональных данных
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#593c7d] text-white py-3 rounded hover:bg-[#6b4a94] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Brands Footer */}
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
