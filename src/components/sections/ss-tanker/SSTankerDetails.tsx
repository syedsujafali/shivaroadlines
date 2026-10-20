import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function SSTankerDetails() {
  return (
    <section className="py-16 sm:py-20 gradientbg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Reveal yOffset={12} duration={0.45}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-8">
            SS Tanker <strong className="font-bold">Transportation</strong>
          </h1>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4 text-[#F4B742]">
              Overview
            </h2>
            <p className="textjustify leading-relaxed text-white/95 text-base sm:text-lg mb-4">
              Stainless Steel (SS) tankers represent the pinnacle of contamination-free liquid transit for corrosive chemicals, specialty grade solvents, food-grade commodities, and high-purity industrial liquids. Shiva Roadlines operates an advanced fleet of premium SS 304 and SS 316 grade tankers engineered to preserve product integrity and prevent oxidation or reactive deterioration. <br />
              <br />
              Manufactured with mirror-finish internal seams, sanitary valves, and high-pressure steam-cleaned wash cycles between loads, our SS tankers ensure zero cross-contamination. Whether moving high-value pharmaceutical solvents, specialty acids, agrochemical intermediates, or food oils, our fleet guarantees compliance with international purity benchmarks. <br />
              <br />
              Equipped with multi-compartment configurations and thermal insulation jackets, our stainless steel fleet allows multi-grade cargo transport in a single trip, optimizing freight economics for our clients across India.
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
                  Heavy-gauge SS 304 & SS 316 / SS 316L mirror-finish tankers for high-purity and corrosive liquid transit.
                </li>
                <li>
                  Multi-compartment tanker layouts for segregated multi-product delivery in a single trip.
                </li>
                <li>
                  Insulated thermal cladding with steam-heating coils for viscosity-sensitive liquids.
                </li>
                <li>
                  Sanitary butterfly valves, vapor-recovery connections, and tamper-evident high-security seals.
                </li>
                <li>
                  Dedicated CIP (Clean-in-Place) wash protocols with certified cleanliness certificates before every load.
                </li>
                <li>
                  Real-time GPS tracking and live temperature sensing across all long-haul corridors.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative h-80 sm:h-96 w-full rounded-lg shadow-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/ss-tanker.webp"
                  alt="Stainless Steel SS Tanker"
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
              Why Choose Shiva Roadlines SS Tankers?
            </h2>
            <p className="leading-relaxed text-white/95 text-base sm:text-lg">
              When dealing with high-value chemicals or purity-critical liquid materials, even microscopic contamination can compromise entire production batches. With Shiva Roadlines&apos; dedicated SS tanker fleet, you benefit from certified metallurgy, disciplined cleaning protocols, and unyielding safety standards.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
