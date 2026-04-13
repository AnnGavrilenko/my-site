"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const serviceMenus = {
  packages: {
    label: "Пакеты",
    href: "/services/packages",
    items: [
      { label: "Пакеты услуг", href: "/services/packages" },
      { label: "Архив тарифов", href: "/services/packages/archive" },
      { label: "Инструкция о тарифах", href: "/services/packages/instructions" },
      { label: "Порядок оказания услуг", href: "/services/packages/procedure" },
      { label: "Прочие пакеты", href: "/services/packages/other" },
      { label: "Карта покрытия LTE", href: "/services/packages/lte-map" },
      { label: "Вопросы и ответы", href: "/services/packages/faq" },
    ],
  },
  internet: {
    label: "Интернет",
    href: "/services/internet",
    items: [
      { label: "Высокоскоростной доступ", href: "/services/internet" },
      { label: "Выделенная линия", href: "/services/internet/leased-line" },
      { label: "Wi-Fi", href: "/services/internet/wifi" },
      { label: "2G/3G", href: "/services/internet/mobile" },
      { label: "Яндекс Плюс, Кинопоиск", href: "/services/internet/yandex-plus" },
      { label: "Архивные тарифы", href: "/services/internet/archive" },
      { label: "Помощь в настройке", href: "/services/internet/help" },
      { label: "Порядок оказания услуг", href: "/services/internet/procedure" },
      { label: "Дополнительные услуги", href: "/services/internet/additional" },
    ],
  },
  tv: {
    label: "Телевидение",
    href: "/services/tv",
    items: [
      { label: "Интерактивное", href: "/services/tv" },
      { label: "Эфирное", href: "/services/tv/broadcast" },
      { label: "SMART", href: "/services/tv/smart" },
      { label: "Порядок оказания услуги", href: "/services/tv/procedure" },
      { label: "Зоны покрытия цифрового ТВ", href: "/services/tv/coverage" },
      { label: "Зоны покрытия радиовещания", href: "/services/tv/radio-coverage" },
      { label: "Техническая консультация", href: "/services/tv/consultation" },
    ],
  },
  videocontrol: {
    label: "Видеоконтроль",
    href: "/services/videocontrol",
    items: [],
  },
  intercom: {
    label: "Видеодомофон",
    href: "/services/intercom",
    items: [],
  },
  phone: {
    label: "Телефон",
    href: "/services/phone",
    items: [
      { label: "Установка и пользование телефоном", href: "/services/phone" },
      { label: "Международная связь", href: "/services/phone/international" },
      { label: "Ремонт оборудования", href: "/services/phone/repair" },
      { label: "Справочно-информационные услуги", href: "/services/phone/info" },
      { label: "Дополнительные услуги", href: "/services/phone/additional" },
      { label: "Правила набора номеров", href: "/services/phone/dialing" },
      { label: "Экстренные службы", href: "/services/phone/emergency" },
      { label: "Телефонные коды", href: "/services/phone/codes" },
    ],
  },
  hosting: {
    label: "Хостинг",
    href: "/services/hosting",
    items: [
      { label: "Предоставление дискового пространства", href: "/services/hosting" },
      { label: "Физический сервер (Dedicated)", href: "/services/hosting/dedicated" },
      { label: "Виртуальный сервер (VPS)", href: "/services/hosting/vps" },
      { label: "Защита от DDoS атак", href: "/services/hosting/ddos" },
      { label: "Корпоративная почта", href: "/services/hosting/mail" },
      { label: "Размещение оборудования (Colocation)", href: "/services/hosting/colocation" },
      { label: "Облачный диск", href: "/services/hosting/cloud" },
      { label: "Порядок оказания услуг", href: "/services/hosting/procedure" },
    ],
  },
  mycity: {
    label: "Мой город",
    href: "/services/my-city",
    items: [],
  },
  other: {
    label: "Прочие услуги",
    href: "/services/other",
    items: [
      { label: "Телеграф", href: "/services/other/telegraph" },
      { label: "ОАИС", href: "/services/other/oais" },
      { label: "Электронная почта", href: "/services/other/email" },
      { label: "Дома отдыха", href: "/services/other/recreation" },
      { label: "Модернизация сети", href: "/services/other/modernization" },
      { label: "Evika!", href: "/services/other/evika" },
      { label: "Ремонт техники", href: "/services/other/repair" },
    ],
  },
  promo: {
    label: "Акции",
    href: "/services/promo",
    items: [
      { label: "Республиканские скидки", href: "/services/promo" },
      { label: "Специальные предложения", href: "/services/promo/special" },
    ],
  },
};

export function ServiceNavDropdown() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="service-nav relative">
      <div className="container mx-auto px-4">
        <nav className="flex items-center py-3 space-x-1">
          {Object.entries(serviceMenus).map(([key, menu]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setOpenMenu(key)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={menu.href}
                className="flex items-center text-white whitespace-nowrap text-sm font-medium px-3 py-2 hover:bg-white/10 rounded transition-colors"
              >
                {menu.label}
                {menu.items.length > 0 && (
                  <ChevronDown className="w-3 h-3 ml-1" />
                )}
              </Link>

              {menu.items.length > 0 && openMenu === key && (
                <div className="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-xl py-2 min-w-[280px] z-50">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#593c7d]/10 hover:text-[#593c7d] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
