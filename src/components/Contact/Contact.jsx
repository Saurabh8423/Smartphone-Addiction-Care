import React from "react";
import { Mail } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 mb-40 py-2">
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
      
      {/* Contact Form */}
      <div className="contact">
        <form action="https://formspree.io/f/xblzalan" method="POST">
          <input name="Username" type="text" placeholder="Name" />
          <input name="Email" type="email" placeholder="Email" />
          <textarea name="message" id="textarea" placeholder="Message me" />
          <input type="submit" id="btn" value="Submit" />
        </form>
      </div>

    </div>
  );
}
