"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border overflow-hidden mb-2">
          <div className="bg-[#593c7d] text-white p-4 flex items-center justify-between">
            <span className="font-medium">Онлайн-консультант</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
              <p className="text-sm text-gray-700">
                Здравствуйте! Чем могу помочь?
              </p>
            </div>
          </div>
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Введите сообщение..."
                className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#593c7d]"
              />
              <button
                type="button"
                className="bg-[#593c7d] text-white px-4 py-2 rounded hover:bg-[#6b4a94] transition-colors text-sm"
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
