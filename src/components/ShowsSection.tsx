"use client";

import Image from "next/image";
import { useState } from "react";

interface Show {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
}

const shows: Show[] = [
  {
    id: 1,
    title: "FLOW WITH KORTY",
    type: "Interview Series",
    image: "/pexels-bestbe-models-975242-2045018.jpg",
    description: "Intimate conversations with culture shapers and creative minds across Africa.",
  },
  {
    id: 2,
    title: "LOVE OR LIES",
    type: "Reality Dating Show",
    image: "/pexels-bestbe-models-975242-2045018.jpg",
    description: "A unique love experiment exploring modern relationships and authentic connections.",
  },
  {
    id: 3,
    title: "LOVE OR LIES: REALITY",
    type: "Coming Soon",
    image: "/pexels-bestbe-models-975242-2045018.jpg",
    description: "The next chapter in our groundbreaking dating series.",
  },
  {
    id: 4,
    title: "THE TOUR",
    type: "A Victoria's Secret Documentary",
    image: "/pexels-bestbe-models-975242-2045018.jpg",
    description: "Behind the scenes of one of fashion's most iconic brands.",
  },
  {
    id: 5,
    title: "WHY DO YOU DO THAT?",
    type: "Short Film - Coming Soon",
    image: "/pexels-bestbe-models-975242-2045018.jpg",
    description: "An exploration of human behavior and the motivations behind our actions.",
  },
];

export default function ShowsSection() {
  const [hoveredShow, setHoveredShow] = useState<number | null>(null);
  
  return (
    <section id="shows" className="py-32 md:py-40 lg:py-48 bg-black">
      <div className="w-full px-6 lg:px-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-fadeInUp text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4">
              OUR SHOWS & FILMS
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light">
              Culturally relevant & entertaining stories
            </p>
          </div>
          
          {/* Grid Container */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {shows.map((show, index) => (              <div
                key={show.id}
                className={`relative group cursor-pointer overflow-hidden bg-gray-900 w-full aspect-[4/5] animate-fadeInUp animate-delay-${index * 100}`}
                onMouseEnter={() => setHoveredShow(show.id)}
                onMouseLeave={() => setHoveredShow(null)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl lg:text-3xl font-black tracking-tight mb-2">
                    {show.title}
                  </h3>
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                    {show.type}
                  </p>
                  <p 
                    className={`text-gray-300 transition-all duration-500 ${
                      hoveredShow === show.id 
                        ? "opacity-100 transform translate-y-0" 
                        : "opacity-0 transform translate-y-4"
                    }`}
                  >
                    {show.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}