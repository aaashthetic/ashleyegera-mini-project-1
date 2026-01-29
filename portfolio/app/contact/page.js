"use client";

import React from "react";
import GradientBlob from "@/components/GradientBlob";
import { Badge } from "@/components/ui/badge";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section
      className="relative min-h-screen w-full overflow-visible font-playfair"
      style={{ backgroundColor: "#F3E2C6" }}
    >
      {/* BACKGROUND BLOBS */}
      <GradientBlob color="#FA9DA6" className="w-[400px] h-[400px] -top-20 -left-20" />
      <GradientBlob color="#FBDFA2" className="w-[1000px] h-[1000px] top-0 left-1/2 -translate-x-1/2" />
      <GradientBlob color="#FA9DA6" className="w-[300px] h-[300px] bottom-0 right-0" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-40 pb-28 transition-all duration-700">
        
        {/* HERO SECTION */}
        <section className="text-center mb-2">
          <Badge variant="outline" className="mb-4 border-[#8EB694] text-[#8EB694] px-4 py-1 rounded-full uppercase font-bold tracking-widest">
            Return 0;
          </Badge>
          <div className="max-w-[400px] mx-auto">
            <img src="/images/contactTitle.png" alt="Get In Touch" className="w-full" />
          </div>
        </section>

        {/* SOCIAL LINKS */}
        <div className="flex gap-8 text-4xl text-[#FA9DA6] mb-10">
          <a href="https://www.facebook.com/ashley.ida.egera/" target="_blank" className="hover:scale-110 transition-transform"><FaFacebook /></a>
          <a href="https://www.instagram.com/aaashthetic/" target="_blank" className="hover:scale-110 transition-transform"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/ashley-egera/" target="_blank" className="hover:scale-110 transition-transform"><FaLinkedin /></a>
        </div>

        {/* CONTACT FORM */}
        <form
          action="mailto:ashleyegera18@gmail.com"
          method="POST"
          encType="text/plain"
          className="bg-white/40 backdrop-blur-md p-10 rounded-3xl w-full max-w-md space-y-4 shadow-[0_0_15px_1px_rgba(251,223,162,0.5)]"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#FA9DA6] bg-white/60 text-[#FA9DA6] font-arial font-bold placeholder-[#FA9DA6]/60"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#FA9DA6] bg-white/60 text-[#FA9DA6] font-arial font-bold placeholder-[#FA9DA6]/60"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#FA9DA6] bg-white/60 text-[#FA9DA6] font-arial font-bold placeholder-[#FA9DA6]/60"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#8EB694] hover:bg-[#7a9e80] transition-colors text-white py-3 rounded-full font-bold uppercase tracking-widest shadow-md"
          >
            Send Message
          </button>
          
          <p className="text-xs text-gray-500 font-bold mt-4">
            Mobile: <span className="text-[#FA9DA6]">0976-078-0333</span>
          </p>
        </form>
      </div>
    </section>
  );
}