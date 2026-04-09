"use client";

import React, { useState, useEffect } from "react";
import GradientBlob from "@/components/GradientBlob";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setLastScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const academics = [
    {
      year: "2010 - 2016",
      title: "Elementary Valedictorian",
      uni: "Neville Learning School",
      desc: "The first seeds of academic excellence.",
      pic: "/images/about1.png"
    },
    {
      year: "2016 - 2022",
      title: "High School - High Honors",
      uni: "Bulihan Integrated National High School",
      desc: "Completed JHS with honors and SHS with High Honors.",
      pic: "/images/about2.png"
    },
    {
      year: "2022 - Present",
      title: "BS Computer Science",
      uni: "PUP Manila",
      desc: "Maintaining a 6-time President's Lister status with a focus on technical growth.",
      pic: "/images/about3.png"
    }
  ];

  const experiences = [
    {
      year: "Feb 2022 - June 2025",
      title: "Deal Writer",
      work: "Fabulessly Frugal LLC",
      desc: "Blending e-commerce strategy with creative technical writing for a US-based firm.",
      pic: "/images/about4.png"
    },
    {
      year: " July 2025 - Sept 2025",
      title: "Data Science Intern",
      work: "Lamina Studios, LLC", 
      desc: "Creating full-stack solutions while collaborating with cross-functional teams in an agile environment",
      pic: "/images/about5.png"
    },
    {
      year: "Jan 2026 - Present",
      title: "Software Engineer Intern",
      work: "Stratpoint Technologies",
      desc: "Developing scalable web applications and enhancing user experiences through innovative solutions.",
      pic: "/images/about6.png"
    }
  ];

  return (
    <section className="relative w-full min-h-screen overflow-visible font-playfair bg-transparent pb-32">
      <GradientBlob color="#FA9DA6" className="w-[400px] h-[400px] sm:w-[300px] sm:h-[400px] lg:w-[400px] lg:h-[400px] -top-20 -left-20" />
      <GradientBlob color="#FBDFA2" className="w-[1000px] h-[1000px] sm:w-[600px] sm:h-[600px] lg:w-[1000px] lg:h-[1000px] top-0 left-1/2 -translate-x-1/2" />
      <GradientBlob color="#FA9DA6" className="w-[220px] h-[220px] top-1/2 right-4 -translate-y-1/2" />
      <div className="relative z-10 flex flex-col items-center px-4 pt-40 transition-all duration-700 opacity-100 translate-y-0">
        <section className="text-center mb-8">
          <Badge variant="outline" className="mb-4 border-[#8EB694] text-[#8EB694] px-4 py-1 rounded-full uppercase font-bold tracking-widest">
            My Journey
          </Badge>
          <div className="max-w-[400px] mx-auto">
            <img src="/images/aboutTitle.png" alt="Nurturing Innovation" className="w-full" />
          </div>
        </section>

        {/* EDUCATION */}
        <div className="w-full max-w-6xl mb-32">
          <h2 className="text-5xl font-bold text-[#FA9DA6] mb-12 mt-10 text-center ">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academics.map((item, index) => (
              <Card key={index} className="bg-white/40 backdrop-blur-md border-2 border-[#FA9DA6] shadow-lg hover:scale-105 transition-transform duration-300">
                <CardHeader className="pt-8 text-center">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.year}</span>
                  <CardTitle className="text-[#FA9DA6] text-xl">{item.stage || item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <div className="text-3xl my-2 text-[#FA9DA6]">
                    <img src={item.pic} alt="icon" className="w-20 h-20 mx-auto" />
                  </div>
                  <Separator className="my-4 bg-[#FA9DA6]/20" />
                  <p className="text-sm text-[#FA9DA6] font-bold leading-relaxed font-arial">{item.uni}</p>
                  <p className="text-sm text-[#FA9DA6] font-regular leading-relaxed font-arial">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="w-full max-w-6xl mb-32">
          <h2 className="text-5xl font-bold text-[#8EB694] mb-12 text-center">Professional Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((item, index) => (
              <Card key={index} className="bg-white/40 backdrop-blur-md border-2 border-[#8EB694] shadow-lg hover:scale-105 transition-transform duration-300">
                <CardHeader className="pt-8 text-center">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.year}</span>
                  <CardTitle className="text-[#8EB694] text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <div className="text-3xl my-2 text-[#8EB694]">
                    <img src={item.pic} alt="icon" className="w-20 h-20 mx-auto" />
                  </div>
                  <Separator className="my-4 bg-[#8EB694]/20" />
                  <p className="text-sm text-[#8EB694] font-bold font-arial leading-relaxed">{item.work}</p>
                  <p className="text-sm text-[#8EB694] font-regular font-arial leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* SKILLS FOOTER */}
        <section className="relative max-w-4xl w-full flex flex-col items-center">   
          <div className="relative flex items-center justify-center p-12 min-h-[300px] w-full">
            <img 
              src="/images/aboutSkills.png" 
              alt="Skills Container" 
              className="absolute inset-0 w-full h-full object-contain opacity-80" 
            />
            <div className="relative z-10 flex flex-wrap justify-center gap-7 max-w-2xl mt-17">
              {["Work Ethic", "Teamwork", "Business Math", "Adaptability", "Fast Learner", "Creativity", "Problem-solving"].map((skill) => (
                <Badge 
                  key={skill} 
                  className="bg-[#8EB694] hover:bg-[#7a9e80] text-white px-6 py-2 rounded-full font-bold shadow-md transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}