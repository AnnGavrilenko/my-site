"use client";

import { useState, useEffect } from "react";
import { Calculator as CalcIcon, X, Wifi, Tv, Phone, Camera, ChevronRight } from "lucide-react";

interface CalculatorData {
  internetSpeed: number;
  tvChannels: number;
  hasPhone: boolean;
  hasVideoControl: boolean;
  cameras: number;
}

const internetTariffs = [
  { name: "Домосед старт", speed: 3, price: 17.80 },
  { name: "Домосед XXL", speed: 4, price: 19.75 },
  { name: "СуперДомосед", speed: 6, price: 22.75 },
  { name: "Домосед Ультра", speed: 8, price: 25.00 },
  { name: "Социальный анлим 25", speed: 25, price: 16.25 },
  { name: "Социальный анлим 50", speed: 50, price: 18.50 },
  { name: "Социальный анлим 100", speed: 100, price: 24.50 },
  { name: "Рекорд 50 new", speed: 50, price: 27.00 },
  { name: "Рекорд 200", speed: 200, price: 45.45 },
  { name: "Рекорд 500", speed: 500, price: 60.00 },
];

const packageTariffs = [
  { name: "ЯСНА Лайт", speed: 5, tv: true, phone: true, price: 23.50 },
  { name: "ЯСНА 100", speed: 100, tv: true, phone: true, price: 43.50 },
  { name: "ЯСНА 100 + Кино", speed: 100, tv: true, phone: true, price: 46.00 },
  { name: "ЯСНА 200 new", speed: 200, tv: true, phone: true, price: 49.00 },
  { name: "ЯСНА 200 + Кино", speed: 200, tv: true, phone: true, price: 52.00 },
  { name: "ЯСНА 500", speed: 500, tv: true, phone: true, price: 67.50 },
];

const videoControlTariffs = [
  { cameras: 1, storage: 7, price: 9.90 },
  { cameras: 2, storage: 14, price: 14.90 },
  { cameras: 4, storage: 30, price: 24.90 },
  { cameras: 8, storage: 30, price: 44.90 },
];

export function CalculatorPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<CalculatorData>({
    internetSpeed: 100,
    tvChannels: 0,
    hasPhone: false,
    hasVideoControl: false,
    cameras: 0,
  });
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("calculator-data");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage and calculate on change
  useEffect(() => {
    localStorage.setItem("calculator-data", JSON.stringify(data));

    // Calculate recommendation
    let price = 0;
    let rec = "";

    if (data.tvChannels > 0 && data.hasPhone) {
      const pkg = packageTariffs.find(p => p.speed >= data.internetSpeed) || packageTariffs[packageTariffs.length - 1];
      price += pkg.price;
      rec = `Пакет "${pkg.name}" (${pkg.speed} Мбит/с + ТВ + Телефон)`;
    } else {
      const internet = internetTariffs.find(t => t.speed >= data.internetSpeed) || internetTariffs[internetTariffs.length - 1];
      price += internet.price;
      rec = `Интернет "${internet.name}" (${internet.speed} Мбит/с)`;
    }

    if (data.hasVideoControl && data.cameras > 0) {
      const vc = videoControlTariffs.find(t => t.cameras >= data.cameras) || videoControlTariffs[videoControlTariffs.length - 1];
      price += vc.price;
      rec += ` + Видеоконтроль ${vc.cameras} камер(ы)`;
    }

    setTotalPrice(price);
    setRecommendation(rec);
  }, [data]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-[#35cbe0] rounded-full flex items-center justify-center shadow-lg hover:bg-[#2ab5c9] transition-colors group"
        title="Калькулятор услуг"
      >
        <CalcIcon className="w-6 h-6 text-white" />
        <span className="absolute right-16 bg-[#593c7d] text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Калькулятор
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 w-96 bg-white rounded-xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-[#593c7d] to-[#7b5a9e] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalcIcon className="w-5 h-5" />
          <span className="font-semibold">Калькулятор услуг</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded p-1">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
        {/* Internet Speed */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Wifi className="w-4 h-4 text-[#35cbe0]" />
            Скорость интернета
          </label>
          <input
            type="range"
            min="5"
            max="500"
            step="5"
            value={data.internetSpeed}
            onChange={(e) => setData({ ...data, internetSpeed: Number(e.target.value) })}
            className="w-full accent-[#593c7d]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5 Мбит/с</span>
            <span className="font-bold text-[#593c7d]">{data.internetSpeed} Мбит/с</span>
            <span>500 Мбит/с</span>
          </div>
        </div>

        {/* TV */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Tv className="w-4 h-4 text-[#593c7d]" />
            Телевидение
          </label>
          <select
            value={data.tvChannels}
            onChange={(e) => setData({ ...data, tvChannels: Number(e.target.value) })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#593c7d]"
          >
            <option value={0}>Не нужно</option>
            <option value={80}>80+ каналов (Базовый)</option>
            <option value={120}>120+ каналов (Стандарт)</option>
            <option value={180}>180+ каналов (Премиум)</option>
          </select>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Phone className="w-4 h-4 text-[#593c7d]" />
            Телефон
          </label>
          <button
            onClick={() => setData({ ...data, hasPhone: !data.hasPhone })}
            className={`w-12 h-6 rounded-full transition-colors ${data.hasPhone ? "bg-[#593c7d]" : "bg-gray-300"}`}
          >
            <span className={`block w-5 h-5 bg-white rounded-full shadow transition-transform ${data.hasPhone ? "translate-x-6" : "translate-x-0.5"}`} />
          </button>
        </div>

        {/* Video Control */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Camera className="w-4 h-4 text-[#35cbe0]" />
              Видеоконтроль
            </label>
            <button
              onClick={() => setData({ ...data, hasVideoControl: !data.hasVideoControl, cameras: data.hasVideoControl ? 0 : 1 })}
              className={`w-12 h-6 rounded-full transition-colors ${data.hasVideoControl ? "bg-[#593c7d]" : "bg-gray-300"}`}
            >
              <span className={`block w-5 h-5 bg-white rounded-full shadow transition-transform ${data.hasVideoControl ? "translate-x-6" : "translate-x-0.5"}`} />
            </button>
          </div>
          {data.hasVideoControl && (
            <select
              value={data.cameras}
              onChange={(e) => setData({ ...data, cameras: Number(e.target.value) })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#593c7d]"
            >
              <option value={1}>1 камера</option>
              <option value={2}>2 камеры</option>
              <option value={4}>4 камеры</option>
              <option value={8}>8 камер</option>
            </select>
          )}
        </div>
      </div>

      {/* Result */}
      <div className="bg-gray-50 p-4 border-t">
        <div className="text-sm text-gray-600 mb-2">Рекомендуемый тариф:</div>
        <div className="text-[#593c7d] font-medium mb-3">{recommendation}</div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-[#593c7d]">{totalPrice.toFixed(2)}</span>
            <span className="text-gray-500 text-sm"> руб/мес</span>
          </div>
          <button className="flex items-center gap-1 bg-[#593c7d] text-white px-4 py-2 rounded-lg hover:bg-[#6b4a94] transition-colors text-sm">
            Подключить
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
