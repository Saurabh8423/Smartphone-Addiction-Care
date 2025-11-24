import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full mb-20 min-h-screen px-5 py-2 bg-[#000814] text-[#F1F2FF] flex flex-col items-center">

      {/* Hero Section */}
      <div className="text-center mt-10 animate-fadeIn">
        <h1 className="text-[42px] font-bold text-[#E2E8F0] drop-shadow-[0_0_15px_rgba(0,180,255,0.5)]">
          Nomophobia Test
        </h1>

        <p className="text-lg max-w-[600px] mx-auto text-[#A0AEC0] mt-2">
          Measure your smartphone dependency and get personalized strategies to regain control.
        </p>

        {/* CTA Button */}
        <Link to="/addiction">
          <button className="
            mt-7 px-7 py-3 text-lg font-medium rounded-lg text-white 
            bg-gradient-to-br from-cyan-500 to-blue-500 shadow-[0_8px_25px_rgba(0,150,255,0.3)]
            transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,150,255,0.5)]
          ">
            Start Assessment
          </button>
        </Link>
      </div>

      {/* Cards */}
      <div className="
        mt-5 grid gap-5 max-w-[900px]
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        animate-slideUp
      ">
        <div className="bg-[#0A1128] p-6 rounded-xl border border-white/10 shadow-[0_4px_20px_rgba(0,150,255,0.15)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,150,255,0.25)]">
          <h3 className="text-xl text-[#38bdf8] mb-2">✔ Quick Assessment</h3>
          <p className="text-[#A0AEC0]">Just answer a few questions to understand your addiction level.</p>
        </div>

        <div className="bg-[#0A1128] p-6 rounded-xl border border-white/10 shadow-[0_4px_20px_rgba(0,150,255,0.15)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,150,255,0.25)]">
          <h3 className="text-xl text-[#38bdf8] mb-2">✔ Smart Strategies</h3>
          <p className="text-[#A0AEC0]">Receive tailored recommendations based on your score.</p>
        </div>

        <div className="bg-[#0A1128] p-6 rounded-xl border border-white/10 shadow-[0_4px_20px_rgba(0,150,255,0.15)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,150,255,0.25)]">
          <h3 className="text-xl text-[#38bdf8] mb-2">✔ Easy To Use</h3>
          <p className="text-[#A0AEC0]">Simple UI, fast results, and no unnecessary complexity.</p>
        </div>
      </div>
    </div>
  );
}
