"use client";

import Link from "next/link";
import { Twitter, Facebook, Youtube, Instagram, Send } from "lucide-react";

const footerSections = [
  {
    title: "Для дома",
    links: [
      { label: "Пакеты", href: "/packages" },
      { label: "Интернет", href: "/internet" },
      { label: "Телевидение", href: "/tv" },
      { label: "Видеоконтроль", href: "/videocontrol" },
      { label: "Видеодомофон", href: "/intercom" },
      { label: "Телефон", href: "/phone" },
      { label: "Хостинг", href: "/hosting" },
      { label: "Мой город", href: "/my-city" },
      { label: "Прочие услуги", href: "/other" },
      { label: "Акции", href: "/promo" },
    ],
  },
  {
    title: "Для бизнеса",
    links: [
      { label: "Пакеты", href: "/business/packages" },
      { label: "Интернет", href: "/business/internet" },
      { label: "Телевидение", href: "/business/tv" },
      { label: "Видеоконтроль", href: "/business/videocontrol" },
      { label: "Телефон", href: "/business/phone" },
      { label: "Хостинг", href: "/business/hosting" },
      { label: "Мой город", href: "/business/my-city" },
      { label: "Мой университет", href: "/business/university" },
      { label: "Госзакупки", href: "/business/procurement" },
      { label: "Прочие услуги", href: "/business/other" },
    ],
  },
  {
    title: "Новости",
    links: [
      { label: "Центральные новости", href: "/news" },
      { label: "Новости филиалов", href: "/news/branches" },
      { label: "Технические работы", href: "/news/maintenance" },
      { label: "Закупки", href: "/news/procurement" },
    ],
  },
  {
    title: "О компании",
    links: [
      { label: "Руководство", href: "/about/management" },
      { label: "Компания", href: "/about" },
      { label: "Сотрудничество", href: "/about/cooperation" },
      { label: "Сети связи", href: "/about/networks" },
      { label: "Правовая информация", href: "/about/legal" },
      { label: "Профсоюзная жизнь", href: "/about/union" },
      { label: "Вышестоящий государственный орган", href: "/about/authority" },
    ],
  },
];

const contactLinks = [
  { label: "Контакты", href: "/contacts" },
  { label: "Пресс-центр", href: "/press" },
  { label: "Офисы продаж", href: "/offices" },
  { label: "Обращения граждан и юридических лиц", href: "/appeals" },
  { label: "Вопрос специалисту", href: "/ask" },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/BeltelecomBy", label: "Twitter" },
  { icon: () => <span className="text-lg font-bold">VK</span>, href: "https://vk.com/bybeltelecom", label: "VK" },
  { icon: Instagram, href: "https://instagram.com/beltelecomby", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/beltelecomby", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/beltelecom", label: "YouTube" },
  { icon: Send, href: "https://t.me/bybeltelecom", label: "Telegram" },
];

export function Footer() {
  return (
    <footer className="bg-[#593c7d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4 pb-2 border-b-2 border-orange-400 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4 pb-2 border-b-2 border-orange-400 inline-block">
              Обратная связь
            </h3>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/70 text-sm">
              РУП «Белтелеком». УНП 101007741
            </p>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Search */}
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Поиск..."
                className="bg-white/10 border border-white/20 rounded-l px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/40 w-48"
              />
              <button
                type="button"
                className="bg-white/20 px-4 py-2 rounded-r hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Privacy policy link */}
        <div className="mt-6 text-center">
          <Link href="/privacy" className="text-white/60 text-sm hover:text-white/80 transition-colors">
            Политика РУП «Белтелеком» в отношении обработки персональных данных
          </Link>
        </div>
      </div>
    </footer>
  );
}
