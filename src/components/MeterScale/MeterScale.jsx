import React, { useEffect, useState } from 'react';
import './MeterScale.css';

export default function MeterScale({ score }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const end = Math.max(0, Math.min(50, parseInt(score || 0, 10)));
    let current = 0;
    const duration = 900;
    const steps = Math.max(1, end);
    const stepTime = Math.max(6, Math.floor(duration / (steps || 1)));

    const timer = setInterval(() => {
      current += 1;
      setValue((v) => {
        const next = Math.min(end, v + 1);
        return next;
      });
      if (current >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [score]);

  // color gradient for slider track
  const getTrack = (v) => {
    if (v <= 20) return 'linear-gradient(90deg,#22c55e 0%, #86efac 100%)';
    if (v <= 30) return 'linear-gradient(90deg,#facc15 0%, #fde68a 100%)';
    if (v <= 40) return 'linear-gradient(90deg,#fb923c 0%, #fdba74 100%)';
    return 'linear-gradient(90deg,#fb7185 0%, #fda4af 100%)';
  };

  return (
    <div className="meter-container max-w-md mx-auto">
      <div className="meter p-4 bg-[#07122d] rounded-lg card-glow">
        <div className="text-center text-white font-semibold text-lg">
          Score Meter: <span className="font-bold text-pink-400">{value}</span>/50
        </div>

        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="50"
            value={value}
            readOnly
            className="w-full mt-4 slider"
            style={{ background: getTrack(value) }}
          />
        </div>
      </div>
    </div>
  );
}
