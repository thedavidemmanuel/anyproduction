"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">        <div className="absolute inset-0 diagonal-pattern" />
      </div>

      <div className="relative z-10 text-center px-6 animate-fadeInUp">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter mb-6">
          TELLING<br />
          <span className="text-stroke">CULTURAL</span><br />
          STORIES
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-400 tracking-widest mb-10">
          INDEPENDENT PRODUCTION COMPANY
        </p>
        <Link
          href="#shows"
          className="inline-block bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition-colors"
        >
          VIEW OUR WORK        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="8" y="8" width="8" height="12" rx="4" strokeWidth="2" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <path d="M12 20v8m0 0l-3-3m3 3l3-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}