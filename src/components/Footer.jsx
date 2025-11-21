import React from "react";
import { Heart, Smartphone, Instagram, Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        fixed bottom-0 left-0 w-full 
        border-t border-white/10 
        bg-gradient-to-b from-[#0A1128]/40 to-[#050A1A]/80 
        backdrop-blur-md shadow-lg shadow-black/20
        z-50
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD60A] to-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/20">
            <Smartphone className="text-black" size={20} />
          </div>

          <p className="text-sm text-[#d4d7e5]">
            © {new Date().getFullYear()}  
            <span className="font-semibold text-white"> Smartphone Addiction Care</span>
          </p>
        </div>

        {/* Made With Love */}
        <div className="flex items-center gap-2 text-sm text-[#AFB2BF]">
          Built with 
          <Heart size={16} className="text-pink-400 animate-pulse" />
          by <span className="text-white font-medium">Saurabh Kumar</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/iam_saurabh_45/"
            target="_blank"
            className="footer-icon hover:text-pink-400 transition"
            rel="noreferrer"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://github.com/Saurabh8423"
            target="_blank"
            className="footer-icon hover:text-pink-400 transition"
            rel="noreferrer"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/saurabh-kumar-091741209/"
            target="_blank"
            className="footer-icon hover:text-pink-400 transition"
            rel="noreferrer"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://saurabhportfolio45.netlify.app/"
            target="_blank"
            className="footer-icon hover:text-pink-400 transition"
            rel="noreferrer"
          >
            <Globe size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
