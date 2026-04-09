"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
import { Badge } from "@/components/ui/badge";
import { projectData } from "../data/projects";
import ProjectCard from "@/components/ProjectCard";

const TECH_ICONS = [
  "/icons/icon-java.png", "/icons/icon-python.png", "/icons/icon-react.png", 
  "/icons/icon-php.png", "/icons/icon-pgsql.png", "/icons/icon-nextjs.png",
];

export default function ProjectsPage() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden font-playfair bg-transparent pb-32">
      <GradientBlob color="#FA9DA6" className="w-[400px] h-[400px] -top-20 -left-20" />
      <GradientBlob color="#FBDFA2" className="w-[1000px] h-[1000px] top-0 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 flex flex-col items-center px-4 pt-40">
        {/* Header Section */}
        <section className="text-center mb-16">
          <Badge variant="outline" className="mb-10 border-[#8EB694] text-[#8EB694] px-4 py-1 rounded-full uppercase font-bold tracking-widest">
            Innovations
          </Badge>
          <div className="relative flex items-center justify-center p-20 md:p-20 min-h-[150px] md:min-h-[250px] w-full max-w-2xl mx-auto">
            <Image src="/images/projectsStack.png" alt="Tech Stack" fill className="object-contain" priority />
            <div className="relative z-10 flex flex-nowrap justify-center items-center gap-2 md:gap-4 lg:gap-6 max-w-[70%] md:max-w-[70%] lg:max-w-none">
              {TECH_ICONS.map((icon, i) => (
                <div key={i} className="relative flex-shrink-0 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-transform hover:scale-110">
                  <Image src={icon} fill className="object-contain" alt="tech icon" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl group">
          {/* Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projectData.map((project) => (
                <div key={project.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4 py-4">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#FA9DA6] p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 border border-[#FA9DA6]/20"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#FA9DA6] p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 border border-[#FA9DA6]/20"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}