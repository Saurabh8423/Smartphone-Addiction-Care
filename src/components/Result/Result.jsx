import React from "react";
import { Link } from "react-router-dom";
import MeterScale from "../MeterScale/MeterScale";

export default function Result() {
  const predictedScore =
    new URLSearchParams(window.location.search).get("predictedScore") || "0";
  const score = parseInt(predictedScore, 10) || 0;

  // Risk label mapping
  const getRisk = (s) => {
    if (s <= 20)
      return {
        label: "Not Addicted",
        color: "text-green-400",
        bg: "bg-green-900/20",
      };
    if (s <= 30)
      return {
        label: "Less Addicted",
        color: "text-yellow-300",
        bg: "bg-yellow-900/20",
      };
    if (s <= 40)
      return {
        label: "Addicted",
        color: "text-orange-400",
        bg: "bg-orange-900/20",
      };
    return {
      label: "Extremely Addicted",
      color: "text-red-400",
      bg: "bg-red-900/20",
    };
  };

  const risk = getRisk(score);

  return (
    <div className="max-w-3xl mb-20px mx-auto px-4 py-2 animate-fadeIn">
      <div
        className="
          p-8 rounded-2xl text-center border border-[#1d2540] 
          bg-[#07122d] transition-all duration-700 
          shadow-[0_0_22px_rgba(255,255,255,0.06)]
          hover:shadow-[0_0_35px_rgba(0,150,255,0.45)]
        "
      >
        {/* Title */}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFD60A] to-pink-400 bg-clip-text text-transparent">
          Your Nomophobia Score
        </h2>

        {/* Score */}
        <p className="mt-4 text-5xl font-extrabold text-white">
          <span className="text-pink-400">{score}</span>{" "}
          <span className="text-sm text-[#AFB2BF]">/ 50</span>
        </p>

        {/* Risk Badge */}
        <div className={`mt-4 inline-block px-4 py-1 rounded-full ${risk.bg}`}>
          <span className={`font-semibold ${risk.color}`}>{risk.label}</span>
        </div>

        <p className="mt-3 text-[#AFB2BF]">
          Quick suggestions based on your score.
        </p>

        {/* Meter Scale */}
        <div className="mt-5">
          <MeterScale score={score} />
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-3">
          <Link
            to="/strategies"
            className="
              text-[#FFD60A] font-semibold underline 
              hover:text-pink-300 transition
            "
          >
            View Recommended Strategies
          </Link>

          <Link to="/addiction">
            <button
              className="
                mt-1 px-5 py-2 rounded-lg text-white text-sm cursor-pointer
                bg-gradient-to-br from-[#FFD60A] to-[#ff6bcb]
                shadow-[0_8px_25px_rgba(255,105,180,0.3)]
                hover:opacity-90 active:scale-95 transition duration-300
              "
            >
              Retake Assessment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
