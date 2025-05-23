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
    image: "/placeholder-image-1.jpg",
    description: "Intimate conversations with culture shapers and creative minds across Africa.",
  },
  {
    id: 2,
    title: "LOVE OR LIES",
    type: "Reality Dating Show",
    image: "/placeholder-image-2.jpg",
    description: "A unique love experiment exploring modern relationships and authentic connections.",
  },
  {
    id: 3,
    title: "LOVE OR LIES: REALITY",
    type: "Coming Soon",
    image: "/placeholder-image-3.jpg",
    description: "The next chapter in our groundbreaking dating series.",
  },
  {
    id: 4,
    title: "THE TOUR",
    type: "A Victoria's Secret Documentary",
    image: "/placeholder-image-4.jpg",
    description: "Behind the scenes of one of fashion's most iconic brands.",
  },
  {
    id: 5,
    title: "WHY DO YOU DO THAT?",
    type: "Short Film - Coming Soon",
    image: "/placeholder-image-5.jpg",
    description: "An exploration of human behavior and the motivations behind our actions.",
  },
];

export default function ShowsSection() {
  const [hoveredShow, setHoveredShow] = useState<number | null>(null);

  return (
    <section id="shows" className="py-20 md:py-32 px-6 lg:px-16 bg-black">
      <div className="container mx-auto">
        <div className="mb-16 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4">
            OUR SHOWS & FILMS
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Culturally relevant & entertaining stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shows.map((show, index) => (
            <div
              key={show.id}
              className="relative group cursor-pointer overflow-hidden bg-gray-900 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredShow(show.id)}
              onMouseLeave={() => setHoveredShow(null)}
            >
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src={show.image}
                  alt={show.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 ${
                  hoveredShow === show.id ? "translate-y-0" : "translate-y-20"
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-black tracking-tight mb-2">
                  {show.title}
                </h3>
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                  {show.type}
                </p>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {show.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}