import Navbar from "@/components/newlanding/Navbar";
import HeroSection from "@/components/newlanding/HeroSection";
import PlatformSection from "@/components/newlanding/PlatformSection";
import AboutSection from "@/components/newlanding/AboutSection";
import StatsSection from "@/components/newlanding/StatsSection";
import TrustedSection from "@/components/newlanding/TrustedSection";
import FeaturesSection from "@/components/newlanding/FeaturesSection";
import StockDerivativesSection from "@/components/newlanding/StockDerivativesSection";
import MirrorTradingSection from "@/components/newlanding/MirrorTradingSection";
import ForexSection from "@/components/newlanding/ForexSection";
import WhyCopyTradingSection from "@/components/newlanding/WhyCopyTradingSection";
import StocksSection from "@/components/newlanding/StocksSection";
import FindYourselfSection from "@/components/newlanding/FindYourselfSection";
import PayLessSection from "@/components/newlanding/PayLessSection";
import TradingFingertipsSection from "@/components/newlanding/TradingFingertipsSection";
import BecomeProSection from "@/components/newlanding/BecomeProSection";
import OurValuesSection from "@/components/newlanding/OurValuesSection";
import TradeEverywhereSection from "@/components/newlanding/TradeEverywhereSection";
import AchievementsSection from "@/components/newlanding/AchievementsSection";
import CtaSection from "@/components/newlanding/CtaSection";
import FooterSection from "@/components/newlanding/FooterSection";

export default function SampleLandingPage() {
  return (
    <div
      className="font-sans bg-white"
      style={{
        backgroundImage: "url('/sample-landing/grid-right2.webp')",
        backgroundPositionX: "right",
        backgroundRepeat: "repeat-y",
      }}
    >
      <Navbar />
      <HeroSection />
      <PlatformSection />
      <AboutSection />
      <StatsSection />
      <TrustedSection />
      <FeaturesSection />
      <StockDerivativesSection />
      <MirrorTradingSection />
      <ForexSection />
      <WhyCopyTradingSection />
      <StocksSection />
      <FindYourselfSection />
      <PayLessSection />
      <TradingFingertipsSection />
      <BecomeProSection />
      <OurValuesSection />
      <TradeEverywhereSection />
      <AchievementsSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
