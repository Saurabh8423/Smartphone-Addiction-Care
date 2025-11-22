import React, { useEffect } from "react";
import { BellMinus, Timer, Moon, EyeOff, FolderMinus, Move, Lock, SunDim, Monitor, DoorOpen } from "lucide-react";
import "./Strategies.css"; // optional for fade animations

export default function Strategies() {
  // Smooth scroll on anchor links
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName === "A" && e.target.hash) {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto py-4 px-6 text-[#F1F2FF] fade-in">

      {/* PAGE HEADING */}
      <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-yellow-300 text-transparent bg-clip-text">
        Smart Strategies to Reduce Screen Time
      </h2>

      <p className="mt-4 text-[#AFB2BF] leading-7">
        These simple research-based strategies are proven to decrease 
        smartphone use and improve focus, sleep, and well-being.
      </p>

      {/* CONTENT */}
      <div className="mt-8 mb-20 space-y-5">

        {/* ITEM 1 */}
        <section id="reduce" className="strategy-card fade-up">
          <h3 className="strategy-title"><BellMinus size={24}/> Reduce Notifications</h3>
          <p className="text-[#AFB2BF]">
            Turning off non-important alerts is one of the easiest ways to instantly reduce screen time.
          </p>
          <details className="details-box">
            <summary className="summary-btn">See how</summary>
            <div>
              iPhone → Settings → Notifications  
              Android → Settings → Apps → Notifications
            </div>
          </details>
        </section>

        {/* ITEM 2 */}
        <section id="screen" className="strategy-card fade-up">
          <h3 className="strategy-title"><Timer size={24}/> Enable Screen Time</h3>
          <p className="text-[#AFB2BF]">
            Track your usage, set daily limits, and keep an eye on your digital habits.
          </p>
          <details className="details-box">
            <summary className="summary-btn">See how</summary>
            <div>
              iPhone → Screen Time  
              Android → Digital Wellbeing → Dashboard
            </div>
          </details>
        </section>

        {/* ITEM 3 */}
        <section id="grey" className="strategy-card fade-up">
          <h3 className="strategy-title"><EyeOff size={24}/> Use Greyscale Mode</h3>
          <p className="text-[#AFB2BF]">
            Removes the dopamine-triggering colors that make apps addictive.
          </p>
          <details className="details-box">
            <summary className="summary-btn">See how</summary>
            <div>
              iPhone → Accessibility → Colour Filters  
              Android → Digital Wellbeing → Bedtime Mode
            </div>
          </details>
        </section>

        {/* ITEM 4 */}
        <section id="sleep" className="strategy-card fade-up">
          <h3 className="strategy-title"><Moon size={24}/> Keep Phone Away at Night</h3>
          <p className="text-[#AFB2BF]">
            A phone-free bedroom improves sleep quality and reduces late-night scrolling.
          </p>
        </section>

        {/* ITEM 5 */}
        <section id="hide" className="strategy-card fade-up">
          <h3 className="strategy-title"><FolderMinus size={24}/> Hide Social Apps</h3>
          <p className="text-[#AFB2BF]">Move distracting apps into folders or remove shortcuts.</p>
        </section>

        {/* ITEM 6 */}
        <section id="less" className="strategy-card fade-up">
          <h3 className="strategy-title"><Move size={24}/> Make Phone Less Accessible</h3>
          <p className="text-[#AFB2BF]">Keep it in bag/drawer to reduce compulsive checking.</p>
        </section>

        {/* ITEM 7 */}
        <section id="harder" className="strategy-card fade-up">
          <h3 className="strategy-title"><Lock size={24}/> Harder Unlock Method</h3>
          <p className="text-[#AFB2BF]">Disable FaceID/TouchID → use password to add friction.</p>
        </section>

        {/* ITEM 8 */}
        <section id="brightness" className="strategy-card fade-up">
          <h3 className="strategy-title"><SunDim size={24}/> Lower Brightness</h3>
          <p className="text-[#AFB2BF]">Dim light reduces strain and lowers usage time.</p>
        </section>

        {/* ITEM 9 */}
        <section id="move" className="strategy-card fade-up">
          <h3 className="strategy-title"><Monitor size={24}/> Shift Tasks to Computer</h3>
          <p className="text-[#AFB2BF]">Email + browsing on laptop reduces addictive scrolling.</p>
        </section>

        {/* ITEM 10 */}
        <section id="leave" className="strategy-card fade-up">
          <h3 className="strategy-title"><DoorOpen size={24}/> Leave Phone at Times</h3>
          <p className="text-[#AFB2BF]">Short outings without phone build confidence + focus.</p>
        </section>

      </div>
    </div>
  );
}
