import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function LengthyTankerDetails() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-8">
            Lengthy Tanker <strong className="font-bold">Transportation</strong>
          </h1>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Overview
            </h2>
            <p className="textjustify leading-relaxed text-white/95 text-base sm:text-lg mb-4">
              For high-volume industrial consignments, mega manufacturing plants, and cross-country bulk freight movements, standard capacity tankers often require multiple trips that inflate logistics expenses. Shiva Roadlines operates an elite fleet of extended multi-axle lengthy tankers and high-capacity articulated trailers engineered specifically for heavy bulk transport. <br />
              <br />
              These high-capacity tankers feature reinforced chassis, multi-compartment volumetric optimization, and pneumatic suspension systems that enable transporting maximum payload legally allowed under Indian Motor Vehicle and NHAI axle load norms. <br />
              <br />
              Piloted by our senior-most long-haul drivers with specialized training in navigating sharp radius turns, highway stability, and electronic braking systems, our lengthy tankers maximize freight efficiency while reducing carbon footprint per metric ton transported.
            </p>
          </div>
        </Reveal>

        {/* Image + Key Features */}
        <Reveal yOffset={14} delay={0.05} duration={0.45}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
                Key Capabilities & Features
              </h2>
              <ul className="site-block-check text-white text-base sm:text-lg">
                <li>
                  High-capacity volumetric tankers designed for maximum allowable payload under NHAI axle regulations.
                </li>
                <li>
                  Advanced multi-axle air suspension and Electronic Braking Systems (EBS) for enhanced rollover stability.
                </li>
                <li>
                  Substantially lowers per-ton transportation costs for long-distance national logistics routes.
                </li>
                <li>
                  Multi-chamber internal baffles to control liquid surge and ensure safe driving dynamics.
                </li>
                <li>
                  Senior long-haul crew with intensive defensive driving training on major expressways and hilly terrain.
                </li>
                <li>
                  Dual GPS tracking, driver fatigue sensors, and continuous central fleet monitoring.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative h-80 sm:h-96 w-full rounded-lg shadow-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/lengthy-tanker.webp"
                  alt="Lengthy High Capacity Tanker"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Why Choose Us */}
        <Reveal yOffset={14} delay={0.05} duration={0.45}>
          <div className="pt-6 border-t border-white/20">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Why Choose Shiva Roadlines High-Capacity Tankers?
            </h2>
            <p className="leading-relaxed text-white/95 text-base sm:text-lg">
              When scale and bottom-line efficiency matter most, our lengthy high-capacity tankers provide the competitive edge. Achieve faster inventory turnaround, fewer transit cycles, and reduced overall shipping overhead with India&apos;s trusted bulk logistics partner.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
