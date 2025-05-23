"use client";

import Image from "next/image";

export default function AboutSection() {
  const contentStyles = [
    "SHORT FILM",
    "REALITY SHOWS",
    "DOCUMENTARY",
    "INTERVIEWS",
    "TV SHOWS",
  ];

  return (
    <section id="about" className="py-20 md:py-32 lg:py-40 px-6 lg:px-16 bg-white text-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="animate-slideInLeft space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
              WHO WE ARE
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed font-medium">
                Any Production Ltd. is an independent production company focused on growing a thriving, 
                self-sustaining and universal creative ecosystem.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We specialise in telling culturally relevant & entertaining stories that resonate 
                with audiences across Africa and beyond.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-2xl md:text-3xl font-bold">Our Content Styles</h3>
              <div className="flex flex-wrap gap-4">
                {contentStyles.map((style, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 border-2 border-black font-semibold text-sm md:text-base hover:bg-black hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] lg:h-[650px] xl:h-[700px] overflow-hidden animate-slideInRight rounded-lg shadow-2xl">
            <Image
              src="/pexels-bestbe-models-975242-2045018.jpg"
              alt="Any Production Ltd. creative workspace"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}