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
    <section id="about" className="py-20 md:py-32 px-6 lg:px-16 bg-white text-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-slideInLeft">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8">
              WHO WE ARE
            </h2>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              Any Production Ltd. is an independent production company focused on growing a thriving, 
              self-sustaining and universal creative ecosystem.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              We specialise in telling culturally relevant & entertaining stories that resonate 
              with audiences across Africa and beyond.
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Content Styles</h3>
              <div className="flex flex-wrap gap-3">
                {contentStyles.map((style, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 border-2 border-black font-semibold hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[600px] bg-black animate-slideInRight">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-black tracking-wider">
                BEHIND THE SCENES
              </span>
            </div>
            {/* You can replace this with an actual image */}
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/placeholder-image-about.jpg"
                alt="Behind the scenes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}