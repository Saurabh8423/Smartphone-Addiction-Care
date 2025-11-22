import React from "react";
import { Mail, Users } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 mb-20 py-2">
      {/* Contact Card */}
      <div
        className="
          bg-[#07122d] p-8 rounded-2xl shadow-xl border border-white/10 text-center
          transition-all duration-300
          hover:shadow-[0_0_18px_rgba(0,150,255,0.5)]
          active:shadow-[0_0_18px_rgba(0,150,255,0.5)]
        "
      >
        <div className="flex justify-center mb-4">
          <Mail className="text-pink-400 w-10 h-10" />
        </div>

        <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
        <p className="mt-3 text-[#AFB2BF] text-lg leading-relaxed">
          Have questions or need assistance?
          <br />
          Feel free to reach out anytime.
        </p>

        <div
          className="mt-6 bg-white/5 py-3 px-5 rounded-xl border border-white/10 transition-all duration-300
          hover:shadow-[0_0_18px_rgba(0,150,255,0.5)]
          active:shadow-[0_0_18px_rgba(0,150,255,0.5)]"
        >
          <p className="text-white font-medium text-lg">Saurabh Kumar</p>
          <p className="text-pink-300 text-sm">saurabhch9369@gmail.com</p>
        </div>
      </div>

      {/* Research Team */}
      <div
        className="
          bg-[#07122d] p-8 rounded-2xl shadow-xl border border-white/10 mt-10
          transition-all duration-300
          hover:shadow-[0_0_18px_rgba(0,150,255,0.5)]
          active:shadow-[0_0_18px_rgba(0,150,255,0.5)]
        "
      >
        <div className="flex justify-center mb-4">
          <Users className="text-[#FFD60A] w-10 h-10" />
        </div>

        <h3 className="text-2xl font-semibold text-white text-center">
          Research Team
        </h3>

        <div className="mt-6 space-y-4 text-center">
          <div>
            <p className="text-white font-medium text-lg">
              Dr. Anil Kumar Bisht, PhD
            </p>
            <p className="text-[#AFB2BF] text-sm">MJPRU Bareilly</p>
          </div>

          <div>
            <p className="text-white font-medium text-lg">Mr. Saurabh Kumar</p>
            <p className="text-[#AFB2BF] text-sm">B.Tech — MJPRU Bareilly</p>
          </div>

          <div>
            <p className="text-white font-medium text-lg">Ms. Shalini Gupta</p>
            <p className="text-[#AFB2BF] text-sm">B.Tech — MJPRU Bareilly</p>
          </div>

          <div>
            <p className="text-white font-medium text-lg">Ms. Sakshi Agarwal</p>
            <p className="text-[#AFB2BF] text-sm">B.Tech — MJPRU Bareilly</p>
          </div>
        </div>
      </div>
    </div>
  );
}
