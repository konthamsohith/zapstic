import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-6 md:pt-56 md:pb-8 text-black overflow-hidden flex items-center justify-center">
      {/* 🔁 Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
        style={{ opacity: 0.15 }} // Decrease video opacity here
      >
        <source src="/videos/thunder-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay to tint the video */}
      <div className="absolute inset-0 z-[-1] pointer-events-none" style={{ backgroundColor: '#F5F5F5', opacity: 0.7 }} />

      {/* ⚡ Bolt PNG Overlay */}
      {/* <div
        className="absolute inset-0 bg-no-repeat bg-[length:340px] bg-[center_25%] z-[-1]"
        style={{
          backgroundImage: "url('/images/bolt.png')",
        }}
      /> *

      {/* 🌩️ Thunder Flash Effect */}
      {/* <div className="absolute inset-0 bg-white opacity-0 pointer-events-none z-0 animate-thunder" /> */}

      {/* 🎯 Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center">
        {/* Badge */}
        <div className="relative inline-block">
          <div
            className="absolute left-0 top-0 w-full h-full rounded-full shadow -top-0.5"
            style={{ backgroundColor: '#fff', zIndex: 0 }}
            aria-hidden="true"
          />
          <div className="inline-block px-2 py-1 rounded-full bg-gray-100 shadow text-xs font-medium relative z-10 align-middle">
            <img
              src="/images/thunder-home.png"
              alt="thunder"
              className="inline-block w-4 h-4 align-middle mr-1"
              style={{ verticalAlign: 'middle' }}
            />
            INSTANT AUTOMATION. INFINITE POSSIBILITIES.
          </div>
        </div>

        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-4">
          <div
            className="w-24 h-24 rounded-full shadow-lg flex items-center justify-center p-2"
            style={{
              background: "#F5F5F5"
            }}
          >
            <img
              src="https://ik.imagekit.io/ji2lkjg53/Zapstic.png?updatedAt=1751398106620"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1
            className="text-6xl md:text-8xl font-medium text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(120deg, #b3b3b3 0%, #111 60%, #000 100%)',
            }}
          >
            ZAPSTIC
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-black max-w-xl">
          Custom AI solutions, built for the innovators of tomorrow
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-900 transition"
          >
            Contact →
          </a>
          <a
            href="#ourservices"
            className="bg-white border border-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            See Our Services
          </a>
        </div>

        {/* Spacer */}
        <div className="mt-8 h-12" />
      </div>
    </section>
  );
};

export default Hero;
