"use client";

import GradientBlob from "@/components/GradientBlob";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";


export default function HomePage() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
    
      if (currentScroll > lastScroll && currentScroll > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
      <section className="relative w-full overflow-hidden min-h-screen pt-20 pb-20">
        {/* LEFT GLOW */}
        <GradientBlob color="#FA9DA6" className="w-[400px] h-[400px] sm:w-[300px] sm:h-[400px] lg:w-[400px] lg:h-[400px] -top-20 -left-20" />
        {/* CENTER GLOW */}
        <GradientBlob color="#FBDFA2" className="w-[1000px] h-[1000px] sm:w-[600px] sm:h-[600px] lg:w-[1000px] lg:h-[1000px] top-0 left-1/2 -translate-x-1/2" />
        {/* RIGHT GLOW */}
        <GradientBlob color="#FA9DA6" className="w-[220px] h-[220px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] top-1/2 right-4 sm:right-10 -translate-y-1/2 translate-x-1/3" />
        

        {/* CONTENT */}
        <div className={`relative z-10 flex flex-col items-center px-4 transition-all duration-700 ${hidden ? "opacity-80 -translate-y-10" : "opacity-100 translate-y-0"}`}>
          <Badge variant="outline" className="mt-20 mb-10 border-[#8EB694] text-[#8EB694] px-6 py-1 rounded-full uppercase tracking-widest font-bold">
            Hello World!
          </Badge>

          <div className="relative w-full max-w-[1000px] flex flex-col items-center">
            <div className="relative w-full z-20 left-[15px]">
              <img
                src="/images/homeMainImage.png"
                alt="Home Image"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            <div className="absolute right-[20px] top-[27%] md:top-[32%] left-1/2 -translate-x-1/2 w-[70%] md:w-[70%] max-w-[700px] z-30 pointer-events-none">
              <img
                src="/images/role.png"
                alt="Software Engineering Intern"
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>

            <div className="relative -mt-[10%] md:-mt-[8%] w-full max-w-[950px] z-10 right-[22px]">
              <div className="relative w-full flex justify-center items-center">
                <img
                  src="/images/homeCard.png"
                  alt="Summary Container"
                  className="w-full h-auto object-contain"
                />

                {/* TEXT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="relative flex flex-col items-center w-full max-w-[75%] md:max-w-[80%] md:left-[35px] left-5">
                    <p className="text-[#8EB694] font-bold font-arial text-[9px] sm:text-[14px] md:text-lg lg:text-xl leading-snug md:leading-loose md:leading-relaxed">
                      Welcome to my digital garden! I’m a Computer Science student from PUP Manila and an aspiring Software Engineer who loves cultivating full-stack solutions. Throughout my journey, I’ve cross-pollinated technical skills from my Data Science internship with business insights from my years in e-commerce to grow projects that are both functional and impactful. As a five-time President’s Lister, I pride myself on nurturing every seed of code with dedication and academic excellence. I believe that the best software flourishes when technical roots meet user-focused blossoms, creating a landscape where quality services can truly thrive. I’m so glad you’ve stopped by to see what’s currently in bloom—feel free to wander through my work!
                    </p>
                  </div>

                  <div className="mt-6 md:mt-8 z-50 relative left-5 md:left-8">
                    <Link href="/about">
                      <Button className="cursor-pointer bg-[#FA9DA6] hover:bg-[#ff8484] text-white font-bold px-8 py-1 md:px-8 md:py-1 rounded-full text-[9px] md:text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-95">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-24 md:mt-40 w-full max-w-[1150px] flex justify-center">
            <GradientBlob color="#FA9DA6" className="absolute -right-20 sm:-right-40 top-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] -z-10 opacity-70" />
            <GradientBlob color="#FA9DA6" className="absolute -left-20 sm:-left-40 top-1/2 -translate-y-1/2 w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] -z-10 opacity-100" />
          </div>
        </div>  
      </section>
  );
}