"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = 2026;
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  const isOpen = (section: string) => openSections.includes(section);

  const accordionButtonClass =
    "flex w-full items-center justify-between gap-4 py-1 text-left text-lg font-bold text-[#b22234] lg:hidden";

  const linkClass =
    "text-[#134063] transition-colors hover:text-[#b22234]";

  const contactClass =
    "transition-colors hover:text-[#b22234]";

  return (
    <>
      <footer className="site-footer border-t border-gray-200 bg-[#f8f9fa] pt-16 pb-6 text-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* TOP SECTION: ORIGINAL DESKTOP GRID */}
          <div className="mb-4 grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-12">

            {/* Logo + About */}
            <div className="lg:col-span-5">
              <Link
                href="/"
                className="inline-flex items-center gap-1 sm:gap-2 md:gap-2.5 group py-1 max-w-full mb-4"
              >
                <Image
                  src="/images/shiva_emblem.webp"
                  alt="Lord Shiva Emblem"
                  width={200}
                  height={135}
                  style={{ width: "auto" }}
                  className="h-11 xs:h-13 sm:h-16 md:h-18 lg:h-21 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col items-center justify-center leading-none select-none shrink min-w-0 -ml-0.5 sm:-ml-1">
                  <Image
                    src="/images/shiva_roadlines_text.webp"
                    alt="SHIVA ROADLINES"
                    width={280}
                    height={104}
                    style={{ width: "auto" }}
                    className="h-7.5 xs:h-9 sm:h-11 md:h-12 lg:h-14 w-auto max-w-[145px] xs:max-w-[185px] sm:max-w-none object-contain"
                  />
                  <span
                    className="text-[#0A1B33] font-bold text-[9.5px] xs:text-[11px] sm:text-[12.5px] md:text-[14px] lg:text-[15px] mt-2 xs:mt-2.5 sm:mt-2.5 md:mt-3 tracking-tight xs:tracking-normal sm:tracking-wide whitespace-nowrap"
                    style={{ lineHeight: "1" }}
                  >
                    श्री शिवाय नमस्तुभ्यम्
                  </span>
                </div>
              </Link>

              <p className="text-justify pr-0 text-sm leading-relaxed text-gray-600 lg:pr-6">
                Shiva Roadlines has built its leadership on a simple but
                powerful foundation — putting customers first. By holding
                quality, safety, and efficiency as non-negotiable standards,
                the company has carved out a solid position in petroleum
                logistics and bunkering. Stay updated with the latest transport
                updates, service announcements, safety standards, and
                operational insights from Shiva Roadlines.
              </p>
            </div>

            {/* Quick Links */}
            <div className="border-t border-gray-200 lg:col-span-3 lg:border-0">

              {/* Mobile accordion heading */}
              <button
                type="button"
                onClick={() => toggleSection("quick-links")}
                aria-expanded={isOpen("quick-links")}
                className={accordionButtonClass}
              >
                Quick Links

                <svg
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen("quick-links") ? "rotate-180" : ""
                    }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>

              {/* Desktop heading: original styling */}
              <h3 className="mb-6 hidden text-lg font-bold text-[#b22234] lg:block">
                Quick Links
              </h3>

              {/* Links: collapsible on mobile, always visible on desktop */}
              <div
                className={`${isOpen("quick-links") ? "block" : "hidden"
                  } lg:block`}
              >
                <ul className="space-y-2.5 pb-5 text-sm lg:pb-0">
                  <li>
                    <Link href="/" className={linkClass}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className={linkClass}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className={linkClass}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/clients" className={linkClass}>
                      Our Clients
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className={linkClass}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Head Office */}
            <div className="border-t border-gray-200 lg:col-span-4 lg:border-0">

              {/* Mobile accordion heading */}
              <button
                type="button"
                onClick={() => toggleSection("head-office")}
                aria-expanded={isOpen("head-office")}
                className={accordionButtonClass}
              >
                Head Office – Navi Mumbai

                <svg
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen("head-office") ? "rotate-180" : ""
                    }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>

              {/* Desktop heading: original styling */}
              <h3 className="mb-4 hidden text-lg font-bold text-[#b22234] lg:block">
                Head Office – Navi Mumbai
              </h3>

              {/* Office details */}
              <div
                className={`${isOpen("head-office") ? "block" : "hidden"
                  } lg:block`}
              >
                <div className="space-y-3 pb-5 text-sm text-gray-600 lg:pb-0">

                  <div>
                    <p className="font-semibold text-gray-900">
                      Shiva Roadlines
                    </p>
                    <p>Unit No. 2, Plot No. 7, Sector 19C, Vashi – 400706</p>
                  </div>

                  <div>
                    <p>
                      <strong className="text-gray-900">Phone: </strong>
                      <a
                        href="tel:02265131498"
                        className={contactClass}
                      >
                        022-65131498
                      </a>
                    </p>

                    <p>
                      <strong className="text-gray-900">Mobile: </strong>
                      <a
                        href="tel:9930709979"
                        className={contactClass}
                      >
                        +91 9930709979
                      </a>
                      {" / "}
                      <a
                        href="tel:9029999979"
                        className={contactClass}
                      >
                        +91 9029999979
                      </a>
                    </p>
                  </div>

                  <div>
                    <strong className="text-gray-900">Emails:</strong>

                    <ul className="mt-1 space-y-1">
                      <li>
                        <a
                          href="mailto:shivaroadlines2@gmail.com"
                          className={`${contactClass} break-all`}
                        >
                          shivaroadlines2@gmail.com
                        </a>
                      </li>

                      <li>
                        <a
                          href="mailto:shiva_roadlines@rocketmail.com"
                          className={`${contactClass} break-all`}
                        >
                          shiva_roadlines@rocketmail.com
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* OPERATIONAL OFFICES: ORIGINAL SEPARATE SECTION */}
          <div className="mt-4 border-t border-gray-200 pt-2">

            {/* Mobile accordion heading */}
            <button
              type="button"
              onClick={() => toggleSection("operational-offices")}
              aria-expanded={isOpen("operational-offices")}
              className={`${accordionButtonClass} py-0 pb-4`}
            >
              Operational Offices

              <svg
                className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen("operational-offices") ? "rotate-180" : ""
                  }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>

            {/* Desktop heading: original styling */}
            <h3 className="mb-6 hidden text-lg font-bold text-[#b22234] lg:block">
              Operational Offices
            </h3>

            {/* Original five-column desktop layout */}
            <div
              className={`${isOpen("operational-offices") ? "block" : "hidden"
                } lg:block`}
            >
              <div className="grid grid-cols-1 gap-6 pb-5 text-sm text-gray-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:pb-0">

                {/* Navi Mumbai */}
                <div>
                  <h4 className="mb-1 font-bold text-gray-900">
                    Navi Mumbai
                  </h4>
                  <p>
                    Sector 19C, Vashi – 400706
                    <br />
                    Mob:{" "}
                    <a
                      href="tel:9029999979"
                      className={contactClass}
                    >
                      +91 9029999979
                    </a>
                  </p>
                </div>

                {/* Mumbai (Thane) */}
                <div>
                  <h4 className="mb-1 font-bold text-gray-900">
                    Mumbai (Thane)
                  </h4>
                  <p>
                    Kalwa West, Thane – 400605
                    <br />
                    Phone:{" "}
                    <a
                      href="tel:02225436527"
                      className={contactClass}
                    >
                      022-25436527
                    </a>
                  </p>
                </div>

                {/* Kolkata (Haldia) */}
                <div>
                  <h4 className="mb-1 font-bold text-gray-900">
                    Kolkata (Haldia)
                  </h4>
                  <p>
                    Durga Chowk, Purba Medinipur – 721602
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:kolkata@shivaroadlines.co.in"
                      className={`${contactClass} break-all text-xs`}
                    >
                      kolkata@shivaroadlines.co.in
                    </a>
                  </p>
                </div>

                {/* Vishakhapatnam */}
                <div>
                  <h4 className="mb-1 font-bold text-gray-900">
                    Vishakhapatnam
                  </h4>
                  <p>
                    Malkapuram, Vizag – 530011
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:vishakhapatnam@shivaroadlines.co.in"
                      className={`${contactClass} break-all text-xs`}
                    >
                      vishakhapatnam@shivaroadlines.co.in
                    </a>
                  </p>
                </div>

                {/* Mathura */}
                <div>
                  <h4 className="mb-1 font-bold text-gray-900">
                    Mathura
                  </h4>
                  <p>
                    UPSIDC Market, Refinery Gate – 281005
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:mathura@shivaroadlines.co.in"
                      className={`${contactClass} break-all text-xs`}
                    >
                      mathura@shivaroadlines.co.in
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="gradientbg w-full py-4 pb-20 lg:pb-4 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm sm:px-6 lg:px-8">

          <p className="font-bold tracking-wide">
            Copyright &copy; {currentYear} All Rights Reserved.{" "}
            <a
              href="https://www.shivaroadlines.co.in"
              className="text-white underline transition-colors hover:text-[#F4B742]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shiva Road Lines.
            </a>{" "}
            श्री शिवाय नमस्तुभ्यं.
          </p>

          <p className="mt-1 text-xs opacity-90">
            Proprietor: A. Rai | <strong>GSTIN:</strong> 27AMAPR6367F2ZS
          </p>

        </div>
      </div>
    </>
  );
}
