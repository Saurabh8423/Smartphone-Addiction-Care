import React from "react";
import { Heart, Smartphone, Instagram, Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 border-t border-white/10 bg-gradient-to-b from-[#0A142F]/85 to-[#050A1A]/95 backdrop-blur-xl shadow-[0_-6px_22px_rgba(0,0,0,0.45)]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFD60A] to-pink-500 flex items-center justify-center shadow-lg">
            <Smartphone className="text-black" size={20} />
          </div>
          <p className="text-sm text-[#d4d7e5]">© {new Date().getFullYear()} <span className="font-semibold text-white">Smartphone Addiction Care</span></p>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#AFB2BF]">
          Built with <Heart size={14} className="text-pink-400 animate-pulse" /> by <span className="text-white font-medium">Saurabh Kumar</span>
        </div>

        <div className="flex items-center gap-4">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/iam_saurabh_45/" className="hover:text-pink-400 transition"><Instagram size={18} /></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/Saurabh8423" className="hover:text-pink-400 transition"><Github size={18} /></a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/saurabh-kumar-091741209/" className="hover:text-pink-400 transition"><Linkedin size={18} /></a>
          <a target="_blank" rel="noreferrer" href="https://saurabhportfolio45.netlify.app/" className="hover:text-pink-400 transition"><Globe size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
