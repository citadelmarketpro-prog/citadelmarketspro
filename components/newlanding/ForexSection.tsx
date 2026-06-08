"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FadeUp, ZoomIn, FadeRight } from "./motion";

const stockFeatures = [
  {
    img: "/sample-landing/pair.svg",
    head: "500+ Global Stocks",
    body: "Trade stocks from NYSE, NASDAQ, LSE and other top global exchanges — all from one account.",
  },
  {
    img: "/sample-landing/leverage.svg",
    head: "Up to 1:20 Leverage",
    body: "Amplify your stock positions with leverage up to 1:20 to maximise exposure with less capital.",
  },
  {
    img: "/sample-landing/spread.svg",
    head: "Fractional Shares",
    body: "Invest in high-value stocks with as little as $1, making premium equities accessible to every trader.",
  },
  {
    img: "/sample-landing/speed.svg",
    head: "High Execution Speed",
    body: "Order execution from 0.1 seconds for a smoother and fast trading experience.",
  },
];

function TradingViewWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || containerRef.current.querySelector("script")) return;
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "NASDAQ:AAPL",
      width: "100%",
      height: "100%",
      locale: "en",
      dateRange: "12M",
      colorTheme: "dark",
      trendLineColor: "rgba(41, 98, 255, 1)",
      underLineColor: "rgba(41, 98, 255, 0.3)",
      underLineBottomColor: "rgba(41, 98, 255, 0)",
      isTransparent: false,
      autosize: true,
      largeChartUrl: "",
    });
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} className="tradingview-widget-container w-full h-full">
      <div className="tradingview-widget-container__widget w-full h-full" />
    </div>
  );
}

export default function ForexSection() {
  return (
    <section className="py-14 sm:py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Why trade Stocks with us?</h2>
          <p className="text-gray-600 mb-8 text-sm">
            All you need to become a trading guru gathered in one place: education, analytics, video
            lessons, trading tips, market news, and so much more!
          </p>
        </FadeUp>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-[3]">
            {stockFeatures.map((f, i) => (
              <ZoomIn key={f.head} delay={0.08 * i}>
                <div>
                  <Image src={f.img} alt={f.head} width={40} height={40} className="mb-3" />
                  <h3 className="text-gray-900 font-semibold text-base mt-0 mb-1">{f.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
          <FadeRight delay={0.2} className="flex-[2] rounded-xl overflow-hidden h-80 lg:h-auto lg:min-h-[380px]">
            <TradingViewWidget />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
