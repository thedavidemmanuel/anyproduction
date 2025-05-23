"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 lg:px-16 bg-gray-900 text-center">
      <div className="container mx-auto max-w-4xl animate-fadeInUp">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8">
          LET&apos;S CREATE TOGETHER
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-12">
          Ready to tell your story? We&apos;re here to bring your vision to life.
        </p>
        
        <a
          href="mailto:hello@anyproduction.tv"
          className="inline-block px-12 py-5 bg-white text-black text-lg font-bold tracking-wider hover:transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
}