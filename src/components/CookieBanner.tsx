"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#593c7d]/95 text-white p-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              Для обеспечения удобства пользователей сайта используются cookies
            </p>
            <Link
              href="/privacy"
              className="text-xs text-white/70 hover:text-white underline"
            >
              Политика использования файлов cookies
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={acceptCookies}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded text-sm transition-colors"
            >
              Принять
            </button>
            <button
              type="button"
              onClick={declineCookies}
              className="border border-white/50 hover:bg-white/10 text-white px-4 py-2 rounded text-sm transition-colors"
            >
              Отклонить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
