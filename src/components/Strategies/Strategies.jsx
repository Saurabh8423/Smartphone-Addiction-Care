import React, { useEffect } from "react";
import {
  BellMinus,
  Timer,
  Moon,
  EyeOff,
  FolderMinus,
  Move,
  Lock,
  SunDim,
  Monitor,
  DoorOpen,
} from "lucide-react";

export default function Strategies() {
  // Smooth scroll (allowed, JS not CSS)
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName === "A" && e.target.hash) {
        e.preventDefault();
        document.querySelector(e.target.hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto py-4 px-6 text-[#F1F2FF] animate-fade">

      {/* Heading */}
      <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-yellow-300 text-transparent bg-clip-text">
        Smart Strategies to Reduce Screen Time
      </h2>

      <p className="mt-4 text-[#AFB2BF] leading-7">
        These simple research-based strategies are proven to decrease smartphone use.
      </p>

      {/* List */}
      <div className="mt-8 mb-40 space-y-6">

        {/* ITEM COMPONENT */}
        {[
          {
            id: "reduce",
            icon: <BellMinus size={24} />,
            title: "Reduce Notifications",
            desc: "Turning off non-important alerts instantly reduces screen time.",
            extra: "iPhone → Settings → Notifications | Android → Apps → Notifications",
          },
          {
            id: "screen",
            icon: <Timer size={24} />,
            title: "Enable Screen Time",
            desc: "Track usage, set limits, and monitor your habits.",
            extra: "iPhone → Screen Time | Android → Digital Wellbeing",
          },
          {
            id: "grey",
            icon: <EyeOff size={24} />,
            title: "Use Greyscale Mode",
            desc: "Removes dopamine-triggering colors.",
            extra: "iPhone → Accessibility → Colour Filters",
          },
          {
            id: "sleep",
            icon: <Moon size={24} />,
            title: "Keep Phone Away at Night",
            desc: "Improves sleep and reduces late-night scrolling.",
          },
          {
            id: "hide",
            icon: <FolderMinus size={24} />,
            title: "Hide Social Apps",
            desc: "Move them into folders to reduce temptation.",
          },
          {
            id: "less",
            icon: <Move size={24} />,
            title: "Make Phone Less Accessible",
            desc: "Keep it in your bag or drawer.",
          },
          {
            id: "harder",
            icon: <Lock size={24} />,
            title: "Harder Unlock Method",
            desc: "Use password instead of FaceID/TouchID.",
          },
          {
            id: "brightness",
            icon: <SunDim size={24} />,
            title: "Lower Brightness",
            desc: "Reduces strain and usage time.",
          },
          {
            id: "move",
            icon: <Monitor size={24} />,
            title: "Shift Tasks to Computer",
            desc: "Email + browsing on laptop reduces scrolling.",
          },
          {
            id: "leave",
            icon: <DoorOpen size={24} />,
            title: "Leave Phone Sometimes",
            desc: "Short outings without phone boost focus.",
          },
        ].map((item, i) => (
          <section
            key={i}
            id={item.id}
            className="
              bg-white/5 border border-white/10 
              rounded-2xl p-5 
              transition-all duration-300 
              hover:scale-[1.02] 
              hover:shadow-[0_0_18px_rgba(0,150,255,0.5)]
              active:scale-[0.97]
              animate-fade-up
            "
          >
            <h3
              className="
                text-xl font-semibold 
                flex items-center gap-3 
                bg-gradient-to-r from-pink-400 to-yellow-300 
                text-transparent bg-clip-text
              "
            >
              {item.icon} {item.title}
            </h3>

            <p className="mt-2 text-[#AFB2BF]">{item.desc}</p>

            {item.extra && (
              <details className="mt-4 bg-white/5 border border-white/10 p-3 rounded-xl">
                <summary className="cursor-pointer text-pink-400 font-medium">
                  See how
                </summary>
                <p className="mt-2 text-[#AFB2BF]">{item.extra}</p>
              </details>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
