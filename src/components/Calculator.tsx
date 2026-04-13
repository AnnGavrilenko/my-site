/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { Calculator as CalcIcon, X, Wifi, Tv, Phone, Camera, ChevronRight, Clock, Shield, Film, Smartphone, WifiOff } from "lucide-react";

interface CalculatorData {
  internetSpeed: number;
  tvChannels: number;
  hasPhone: boolean;
  phoneType: "timed" | "unlimited";
  phoneCallsMinutes: number;
  intercityCallsMinutes: number;
  hasVideoControl: boolean;
  cameras: number;
  hasSmartTV: boolean;
  hasCinema: boolean;
  technology: "pon" | "xdsl";
  phoneRelocation: "none" | "sameRoom" | "sameBuilding" | "otherBuilding";
  phoneNumberChange: "none" | "sameATS" | "otherATS";
  phoneReissue: boolean;
  phoneTemporaryDisable: boolean;
  autoInformer: boolean;
  autoInformerDays?: number;
  packageBlocking?: "none" | "15" | "30" | "45" | "90" | "180";
}

// Тип для пакетных тарифов
interface PackageTariff {
  name: string;
  speed: number;
  speedUp: number;
  tv: boolean;
  phone: boolean;
  smartTV: boolean;
  cinema: boolean;
  videoControl: boolean;
  price: number;
  technology: string;
  hasEtherTV?: boolean;
}

// Новые пакетные тарифы PON (апрель 2026)
const packageTariffsPON: PackageTariff[] = [
  { name: "ЯСНА Лайт", speed: 5, speedUp: 5, tv: true, phone: true, smartTV: false, cinema: false, videoControl: false, price: 23.50, technology: "pon" },
  { name: "ЯСНА 100 + Кино", speed: 100, speedUp: 50, tv: true, phone: true, smartTV: false, cinema: true, videoControl: false, price: 46.00, technology: "pon" },
  { name: "ЯСНА 100 Видеоконтроль", speed: 100, speedUp: 50, tv: true, phone: true, smartTV: false, cinema: false, videoControl: true, price: 43.50, technology: "pon" },
  { name: "ЯСНА 100 SMART Видеоконтроль", speed: 100, speedUp: 50, tv: true, phone: true, smartTV: true, cinema: false, videoControl: true, price: 44.00, technology: "pon" },
  { name: "ЯСНА 100 Дом + Дача", speed: 100, speedUp: 50, tv: true, phone: true, smartTV: false, cinema: false, videoControl: false, price: 51.50, technology: "pon", hasEtherTV: true },
  { name: "ЯСНА 200 new", speed: 200, speedUp: 100, tv: true, phone: true, smartTV: false, cinema: false, videoControl: false, price: 49.00, technology: "pon" },
  { name: "ЯСНА 200 SMART", speed: 200, speedUp: 100, tv: true, phone: true, smartTV: true, cinema: false, videoControl: false, price: 49.00, technology: "pon" },
  { name: "ЯСНА 200 Промо", speed: 200, speedUp: 100, tv: true, phone: false, smartTV: false, cinema: false, videoControl: false, price: 52.00, technology: "pon" },
  { name: "ЯСНА 200+Кино", speed: 200, speedUp: 100, tv: true, phone: true, smartTV: false, cinema: true, videoControl: false, price: 52.00, technology: "pon" },
  { name: "ЯСНА 200 Видеоконтроль", speed: 200, speedUp: 100, tv: true, phone: true, smartTV: false, cinema: false, videoControl: true, price: 52.00, technology: "pon" },
  { name: "ЯСНА 200 SMART Видеоконтроль", speed: 200, speedUp: 100, tv: true, phone: true, smartTV: true, cinema: false, videoControl: true, price: 52.00, technology: "pon" },
  { name: "ЯСНА 500", speed: 500, speedUp: 250, tv: true, phone: true, smartTV: false, cinema: false, videoControl: false, price: 67.50, technology: "pon" },
  { name: "ЯСНА 500 SMART", speed: 500, speedUp: 250, tv: true, phone: true, smartTV: true, cinema: false, videoControl: false, price: 67.50, technology: "pon" },
];

// Пакетные тарифы xDSL (апрель 2026)
const packageTariffsXDSL: PackageTariff[] = [
  { name: "Семейный 5", speed: 5, speedUp: 1, tv: true, phone: true, smartTV: false, cinema: false, videoControl: false, price: 34.00, technology: "xdsl" },
  { name: "Семейный 10", speed: 10, speedUp: 1, tv: true, phone: true, smartTV: false, cinema: false, videoControl: false, price: 35.50, technology: "xdsl" },
  { name: "Семейный 10 + Кино", speed: 10, speedUp: 1, tv: true, phone: true, smartTV: false, cinema: true, videoControl: false, price: 40.00, technology: "xdsl" },
  { name: "Семейный 15", speed: 15, speedUp: 1, tv: true, phone: true, smartTV: true, cinema: false, videoControl: false, price: 38.50, technology: "xdsl" },
  { name: "Семейный 25", speed: 25, speedUp: 1, tv: true, phone: true, smartTV: false, cinema: false, videoControl: false, price: 39.50, technology: "xdsl" },
  { name: "Семейный 30", speed: 30, speedUp: 1, tv: true, phone: true, smartTV: true, cinema: false, videoControl: false, price: 40.50, technology: "xdsl" },
  { name: "Семейный 4 Дом + Дача", speed: 4, speedUp: 0.5, tv: true, phone: true, smartTV: false, cinema: false, videoControl: false, price: 41.00, technology: "xdsl", hasEtherTV: true },
];

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

const videoControlTariffs = [
  { cameras: 1, storage: 7, price: 9.90 },
  { cameras: 2, storage: 14, price: 14.90 },
  { cameras: 4, storage: 30, price: 24.90 },
  { cameras: 8, storage: 30, price: 44.90 },
];

const phoneTariffs = {
  timed: { monthlyFee: 4.05, perMinute: 0.0085 },
  unlimited: { monthlyFee: 5.28, perMinute: 0 },
  intercityPerMinute: 0.0220,
  oneTimeServices: {
    phoneRelocation: {
      sameRoom: 5.60,
      sameBuilding: 11.30,
      otherBuilding: 16.80,
    },
    phoneNumberChange: {
      sameATS: 17.00,
      otherATS: 29.00,
    },
    phoneReissue: 8.20,
    phoneTemporaryDisable: 2.80,
    autoInformer: {
      setup: 23.70,
      perDay: 0.75,
      perMonth: 20.00,
    },
  },
};

const packageBlockingTariffs = {
  "15": 3.10,
  "30": 4.20,
  "45": 5.20,
  "90": 9.45,
  "180": 52.50,
};

export function CalculatorPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<CalculatorData>({
    internetSpeed: 100,
    tvChannels: 0,
    hasPhone: false,
    phoneType: "unlimited",
    phoneCallsMinutes: 100,
    intercityCallsMinutes: 0,
    hasVideoControl: false,
    cameras: 0,
    hasSmartTV: false,
    hasCinema: false,
    technology: "pon",
    phoneRelocation: "none",
    phoneNumberChange: "none",
    phoneReissue: false,
    phoneTemporaryDisable: false,
    autoInformer: false,
    autoInformerDays: 0,
    packageBlocking: "none",
  });
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("calculator-data-v2");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData(parsed);
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calculator-data-v2", JSON.stringify(data));

    let price = 0;
    let rec = "";
    let selectedPackage: PackageTariff | null = null;

    // Выбор пакета на основе технологии, скорости и доп. опций
    const packages = data.technology === "pon" ? packageTariffsPON : packageTariffsXDSL;
    
    // Поиск подходящего пакета
    if (data.tvChannels > 0 && data.hasPhone) {
      // Сначала ищем пакет с точным соответствием всех опций
      selectedPackage = packages.find(p => 
        p.speed >= data.internetSpeed && 
        p.smartTV === data.hasSmartTV &&
        p.cinema === data.hasCinema &&
        p.videoControl === data.hasVideoControl
      ) || null;
      
      // Если не нашли, ищем без учета videoControl
      if (!selectedPackage) {
        selectedPackage = packages.find(p => 
          p.speed >= data.internetSpeed && 
          p.smartTV === data.hasSmartTV &&
          p.cinema === data.hasCinema
        ) || null;
      }
      
      // Если всё еще не нашли, ищем только по скорости
      if (!selectedPackage) {
        selectedPackage = packages.find(p => p.speed >= data.internetSpeed) || null;
      }
      
      // Если ничего не нашли, берем последний (максимальный)
      if (!selectedPackage && packages.length > 0) {
        selectedPackage = packages[packages.length - 1];
      }
      
      if (selectedPackage) {
        price += selectedPackage.price;
        
        const packageFeatures = [];
        if (selectedPackage.smartTV) packageFeatures.push("SMART ТВ");
        if (selectedPackage.cinema) packageFeatures.push("Кинотеатры");
        if (selectedPackage.videoControl) packageFeatures.push("Видеоконтроль");
        if (selectedPackage.hasEtherTV) packageFeatures.push("Эфирное ТВ");
        
        rec = `Пакет "${selectedPackage.name}" (${selectedPackage.speed}/${selectedPackage.speedUp} Мбит/с${packageFeatures.length > 0 ? ` + ${packageFeatures.join(", ")}` : ""})`;
      }
    } else if (data.tvChannels > 0 && !data.hasPhone) {
      const internet = internetTariffs.find(t => t.speed >= data.internetSpeed) || internetTariffs[internetTariffs.length - 1];
      price += internet.price;
      rec = `Интернет "${internet.name}" (${internet.speed} Мбит/с) + ТВ (${data.tvChannels}+ каналов)`;
      
      if (data.hasSmartTV) {
        price += 5.00;
        rec += " + SMART ТВ";
      }
      if (data.hasCinema) {
        price += 8.00;
        rec += " + Кинотеатры";
      }
    } else {
      const internet = internetTariffs.find(t => t.speed >= data.internetSpeed) || internetTariffs[internetTariffs.length - 1];
      price += internet.price;
      rec = `Интернет "${internet.name}" (${internet.speed} Мбит/с)`;
    }

    // Расчет телефонии (если не в пакете или отдельно)
    if (data.hasPhone && (!selectedPackage || !selectedPackage.phone)) {
      const phoneTariff = data.phoneType === "timed" ? phoneTariffs.timed : phoneTariffs.unlimited;
      price += phoneTariff.monthlyFee;
      
      if (data.phoneType === "timed") {
        const callCost = data.phoneCallsMinutes * phoneTariff.perMinute;
        price += callCost;
      }
      
      const intercityCost = data.intercityCallsMinutes * phoneTariffs.intercityPerMinute;
      price += intercityCost;
      
      rec += ` + Телефон (${data.phoneType === "timed" ? "повременная" : "безлимитная"})`;
      
      if (data.phoneRelocation !== "none") {
        const relocationCost = phoneTariffs.oneTimeServices.phoneRelocation[data.phoneRelocation];
        price += relocationCost / 12;
        rec += `, перестановка`;
      }
      
      if (data.phoneNumberChange !== "none") {
        const numberChangeCost = phoneTariffs.oneTimeServices.phoneNumberChange[data.phoneNumberChange];
        price += numberChangeCost / 12;
        rec += `, смена номера`;
      }
      
      if (data.phoneReissue) {
        price += phoneTariffs.oneTimeServices.phoneReissue / 12;
        rec += `, переоформление`;
      }
      
      if (data.phoneTemporaryDisable) {
        price += phoneTariffs.oneTimeServices.phoneTemporaryDisable / 12;
        rec += `, врем. отключение`;
      }
      
      if (data.autoInformer) {
        if (data.autoInformerDays && data.autoInformerDays > 0 && data.autoInformerDays <= 30) {
          price += data.autoInformerDays * phoneTariffs.oneTimeServices.autoInformer.perDay;
          rec += `, автоинформатор (${data.autoInformerDays} дн)`;
        } else if (data.autoInformerDays && data.autoInformerDays > 30) {
          price += phoneTariffs.oneTimeServices.autoInformer.perMonth;
          rec += `, автоинформатор`;
        }
      }
    }

    // Видеоконтроль (если не в пакете)
    if (data.hasVideoControl && data.cameras > 0 && (!selectedPackage || !selectedPackage.videoControl)) {
      const vc = videoControlTariffs.find(t => t.cameras >= data.cameras) || videoControlTariffs[videoControlTariffs.length - 1];
      price += vc.price;
      rec += ` + Видеоконтроль ${vc.cameras} кам`;
    }

    // Блокировка пакета
    if (data.packageBlocking && data.packageBlocking !== "none") {
      const blockingPrice = packageBlockingTariffs[data.packageBlocking as keyof typeof packageBlockingTariffs];
      if (blockingPrice) {
        price += blockingPrice;
        rec += `, блокировка (${data.packageBlocking} дн)`;
      }
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
        {/* Технология подключения */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Wifi className="w-4 h-4 text-[#35cbe0]" />
            Технология подключения
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setData({ ...data, technology: "pon", internetSpeed: data.internetSpeed === 4 ? 100 : data.internetSpeed })}
              className={`flex-1 px-3 py-2 text-sm rounded-lg transition-colors flex items-center justify-center gap-1 ${
                data.technology === "pon" ? "bg-[#593c7d] text-white" : "bg-white border border-gray-300 text-gray-700"
              }`}
            >
              <Wifi className="w-4 h-4" />
              PON (оптика)
            </button>
            <button
              onClick={() => setData({ ...data, technology: "xdsl", internetSpeed: Math.min(data.internetSpeed, 30) })}
              className={`flex-1 px-3 py-2 text-sm rounded-lg transition-colors flex items-center justify-center gap-1 ${
                data.technology === "xdsl" ? "bg-[#593c7d] text-white" : "bg-white border border-gray-300 text-gray-700"
              }`}
            >
              <WifiOff className="w-4 h-4" />
              xDSL (телефонная линия)
            </button>
          </div>
        </div>

        {/* Скорость */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Wifi className="w-4 h-4 text-[#35cbe0]" />
            Скорость интернета (Мбит/с)
          </label>
          <input
            type="range"
            min={data.technology === "pon" ? 5 : 4}
            max={data.technology === "pon" ? 500 : 30}
            step="5"
            value={data.internetSpeed}
            onChange={(e) => setData({ ...data, internetSpeed: Number(e.target.value) })}
            className="w-full accent-[#593c7d]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{data.technology === "pon" ? "5" : "4"} Мбит/с</span>
            <span className="font-bold text-[#593c7d]">{data.internetSpeed} Мбит/с</span>
            <span>{data.technology === "pon" ? "500" : "30"} Мбит/с</span>
          </div>
        </div>

        {/* ТВ */}
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
            <option value={80}>80+ каналов (ZALA Базовый)</option>
            <option value={120}>120+ каналов (ZALA Стандарт)</option>
            <option value={180}>180+ каналов (ZALA Премиум)</option>
          </select>
        </div>

        {/* SMART ТВ и Кинотеатры */}
        {data.tvChannels > 0 && (
          <div className="space-y-2 pl-2 border-l-2 border-[#35cbe0]">
            <label className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#35cbe0]" />
                SMART ТВ (приставка)
              </span>
              <button
                onClick={() => setData({ ...data, hasSmartTV: !data.hasSmartTV })}
                className={`w-10 h-5 rounded-full transition-colors ${data.hasSmartTV ? "bg-[#593c7d]" : "bg-gray-300"}`}
              >
                <span className={`block w-4 h-4 bg-white rounded-full shadow transition-transform ${data.hasSmartTV ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
            </label>
            
            <label className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#35cbe0]" />
                Кинотеатры (Иви, Amediateka, Wink)
              </span>
              <button
                onClick={() => setData({ ...data, hasCinema: !data.hasCinema })}
                className={`w-10 h-5 rounded-full transition-colors ${data.hasCinema ? "bg-[#593c7d]" : "bg-gray-300"}`}
              >
                <span className={`block w-4 h-4 bg-white rounded-full shadow transition-transform ${data.hasCinema ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
            </label>
          </div>
        )}

        {/* Телефон */}
        <div className="border rounded-lg p-3 bg-gray-50">
          <div className="flex items-center justify-between mb-3">
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

          {data.hasPhone && (
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-600 mb-1 block">Система оплаты</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setData({ ...data, phoneType: "timed" })}
                    className={`flex-1 px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      data.phoneType === "timed" ? "bg-[#593c7d] text-white" : "bg-white border border-gray-300"
                    }`}
                  >
                    Повременная
                  </button>
                  <button
                    onClick={() => setData({ ...data, phoneType: "unlimited" })}
                    className={`flex-1 px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      data.phoneType === "unlimited" ? "bg-[#593c7d] text-white" : "bg-white border border-gray-300"
                    }`}
                  >
                    Безлимит
                  </button>
                </div>
              </div>

              {data.phoneType === "timed" && (
                <div>
                  <label className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                    <Clock className="w-3 h-3" />
                    Местные звонки (мин/мес)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={data.phoneCallsMinutes}
                    onChange={(e) => setData({ ...data, phoneCallsMinutes: Number(e.target.value) })}
                    className="w-full accent-[#593c7d]"
                  />
                  <div className="text-right text-xs text-[#593c7d]">
                    ≈ {(data.phoneCallsMinutes * 0.0085).toFixed(2)} руб
                  </div>
                </div>
              )}

              <div>
                <label className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                  <Phone className="w-3 h-3" />
                  Междугородние звонки (мин/мес)
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="5"
                  value={data.intercityCallsMinutes}
                  onChange={(e) => setData({ ...data, intercityCallsMinutes: Number(e.target.value) })}
                  className="w-full accent-[#593c7d]"
                />
                <div className="text-right text-xs text-[#593c7d]">
                  ≈ {(data.intercityCallsMinutes * 0.022).toFixed(2)} руб
                </div>
              </div>

              {/* Доп. услуги телефонии */}
              <div className="border-t pt-2">
                <select
                  value={data.phoneRelocation}
                  onChange={(e) => setData({ ...data, phoneRelocation: e.target.value as any })}
                  className="w-full text-xs border border-gray-300 rounded-lg px-2 py-1 mb-2"
                >
                  <option value="none">Перестановка телефона: не требуется</option>
                  <option value="sameRoom">В одной комнате (+0.47 руб/мес)</option>
                  <option value="sameBuilding">В одном здании (+0.94 руб/мес)</option>
                  <option value="otherBuilding">В другое здание (+1.40 руб/мес)</option>
                </select>

                <select
                  value={data.phoneNumberChange}
                  onChange={(e) => setData({ ...data, phoneNumberChange: e.target.value as any })}
                  className="w-full text-xs border border-gray-300 rounded-lg px-2 py-1 mb-2"
                >
                  <option value="none">Смена номера: не требуется</option>
                  <option value="sameATS">В пределах АТС (+1.42 руб/мес)</option>
                  <option value="otherATS">На другую АТС (+2.42 руб/мес)</option>
                </select>

                <label className="flex items-center justify-between text-xs py-1">
                  <span>Переоформление номера (+0.68 руб/мес)</span>
                  <input type="checkbox" checked={data.phoneReissue} onChange={(e) => setData({ ...data, phoneReissue: e.target.checked })} className="rounded" />
                </label>

                <label className="flex items-center justify-between text-xs py-1">
                  <span>Временное отключение (+0.23 руб/мес)</span>
                  <input type="checkbox" checked={data.phoneTemporaryDisable} onChange={(e) => setData({ ...data, phoneTemporaryDisable: e.target.checked })} className="rounded" />
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Видеоконтроль */}
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
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value={1}>1 камера (7 дней хранения) - 9.90 руб</option>
              <option value={2}>2 камеры (14 дней) - 14.90 руб</option>
              <option value={4}>4 камеры (30 дней) - 24.90 руб</option>
              <option value={8}>8 камер (30 дней) - 44.90 руб</option>
            </select>
          )}
        </div>

        {/* Блокировка пакета */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Shield className="w-4 h-4 text-[#593c7d]" />
            Блокировка пакета (приостановка)
          </label>
          <select
            value={data.packageBlocking}
            onChange={(e) => setData({ ...data, packageBlocking: e.target.value as any })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="none">Не требуется</option>
            <option value="15">На 15 дней (+3.10 руб)</option>
            <option value="30">На 30 дней (+4.20 руб)</option>
            <option value="45">На 45 дней (+5.20 руб)</option>
            <option value="90">На 90 дней (+9.45 руб)</option>
            <option value="180">На 180 дней (+52.50 руб)</option>
          </select>
        </div>
      </div>

      {/* Результат */}
      <div className="bg-gray-50 p-4 border-t">
        <div className="text-sm text-gray-600 mb-2">Рекомендуемый тариф:</div>
        <div className="text-[#593c7d] font-medium mb-3 text-sm leading-relaxed">{recommendation}</div>
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
        <div className="text-xs text-gray-400 mt-2 text-center">
          *цены указаны с НДС, действуют с 06.04.2026
        </div>
      </div>
    </div>
  );
}
