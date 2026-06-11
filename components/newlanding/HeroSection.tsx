import Image from "next/image";
import Link from "next/link";
import { FadeLeft, FadeRight } from "./motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: darkGradient }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        <FadeLeft className="flex-1 max-w-xl">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4"
            style={{
              background: "linear-gradient(180deg,#fff 0%,#a7f3d0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Purpose-Driven Copytrading, Built on Innovation and Transparency
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Trade smarter, not harder, by automatically mirroring the strategies of top-performing investors, giving
            you a smarter way to grow your portfolio with confidence, transparency, and control.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/register"
              className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-colors no-underline"
            >
              Login
            </Link>
          </div>
        </FadeLeft>

        <FadeRight delay={0.15} className="relative w-full h-[320px] sm:h-[380px] md:flex-1 md:max-w-[480px] md:h-[340px] lg:max-w-lg lg:h-[380px]">
          <Image
            src="/sample-landing/hero_image.png"
            alt="Trading platform"
            fill
            className="object-contain object-center"
            priority
          />
          <Image src="/sample-landing/hero-img1.svg" alt="" width={80} height={80} className="absolute left-[20%] top-0" />
          <Image src="/sample-landing/hero-img2.svg" alt="" width={80} height={80} className="absolute left-[20%] top-[60%]" />
        </FadeRight>
      </div>
    </section>
  );
}
