"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const mainNavItems = [
  { label: "Для дома", href: "/", active: true },
  { label: "Для бизнеса", href: "/business" },
  { label: "Операторам связи", href: "/operators" },
  { label: "Новости", href: "/news" },
  { label: "О компании", href: "/about" },
  { label: "Обратная связь", href: "/contacts" },
  { label: "Админ. процедуры", href: "/admin-procedures" },
];

const serviceNavItems = [
  { label: "Интернет", href: "/services/internet" },
  { label: "Телевидение", href: "/services/tv" },
  { label: "Видеоконтроль", href: "/services/videocontrol" },
  { label: "Видеодомофон", href: "/services/intercom" },
  { label: "Телефон", href: "/services/phone" },
  { label: "Хостинг", href: "/services/hosting" },
  { label: "Мой город", href: "/services/my-city" },
  { label: "Прочие услуги", href: "/services/other" },
];

const quickActions = [
  { label: "Подключить", href: "/connect" },
  { label: "Вопрос специалисту", href: "/ask" },
  { label: "Кабинет пользователя", href: "/cabinet" },
];

const quickActions2 = [
  { label: "Оплатить", href: "/pay" },
  { label: "Мобильные приложения", href: "/apps" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("RU");

  return (
    <header className="w-full">
      {/* Top navigation bar */}
      <div className="bg-[#593c7d] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Main navigation - desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link text-sm ${item.active ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Language selector and accessibility */}
            <div className="flex items-center space-x-2 ml-auto">
              <div className="flex items-center border border-white/30 rounded overflow-hidden">
                {["RU", "BE", "EN"].map((lang) => (
                  <button
                    type="button"
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`px-3 py-1 text-sm transition-colors ${
                      currentLang === lang
                        ? "bg-white/20 text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <button type="button" className="p-2 hover:bg-white/10 rounded" title="Accessibility">
                <Eye className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden ml-2">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-[#593c7d] text-white border-none">
                <div className="flex flex-col space-y-4 mt-8">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-white/90 hover:text-white py-2 border-b border-white/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/60 text-sm mb-3">Услуги</p>
                    {serviceNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-white/80 hover:text-white py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Logo and support section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <svg className="h-8 md:h-10" viewBox="0 0 200 40" fill="none">
                <path d="M10 8C10 8 12 6 18 6C24 6 26 10 26 14C26 18 24 22 18 22H14V32H10V8Z" fill="#593c7d"/>
                <path d="M30 6H50C54 6 56 8 56 12C56 15 54 17 51 17.5C54.5 18 57 20 57 24C57 28 54 32 49 32H30V6Z" fill="#593c7d"/>
                <text x="65" y="26" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="700" fill="#593c7d">БЕЛТЕЛЕКОМ</text>
              </svg>
            </Link>

            {/* Support info */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="text-right text-sm text-gray-600">
                <p>служба технической</p>
                <p>и консультационной поддержки</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#593c7d] flex items-center justify-center mr-2">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <span className="text-4xl font-bold text-[#593c7d]">123</span>
              </div>
            </div>
          </div>

          {/* Quick action buttons */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="bg-[#593c7d] text-white text-sm px-4 py-2 rounded hover:bg-[#6b4a94] transition-colors"
                >
                  {action.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {quickActions2.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="bg-[#593c7d] text-white text-sm px-4 py-2 rounded hover:bg-[#6b4a94] transition-colors"
                >
                  {action.label}
                </Link>
              ))}
              <Link
                href="https://shop.beltelecom.by"
                className="flex items-center bg-white border-2 border-[#593c7d] text-[#593c7d] text-sm px-4 py-1.5 rounded hover:bg-[#593c7d] hover:text-white transition-colors"
              >
                <span className="font-bold">BELTELECOM</span>
                <span className="text-xs ml-1">SHOP</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services navigation */}
      <div className="service-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center overflow-x-auto py-3 space-x-6 scrollbar-hide">
            {serviceNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white whitespace-nowrap hover:text-white/80 transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
